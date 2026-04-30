document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-canvas');
    const context = canvas.getContext('2d');
    const heroContainer = document.getElementById('hero-container');
    const text2 = document.getElementById('text-2');
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('progress-bar');
    const loadingText = document.getElementById('loading-text');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    const frameCount = 216;
    const currentFrame = index => (
        `./assets/sequence/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
    );

    const images = [];
    let imagesLoaded = 0;
    
    let scrollFraction = 0;
    
    // Animation properties
    const currentFrameIndex = {
        target: 0,
        current: 0,
        ease: 0.1 // Adjust for smoothness vs responsiveness
    };

    // Hamburger Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        sidebar.classList.toggle('open');
    });

    // Close sidebar when a link is clicked
    document.querySelectorAll('.sidebar-link, .sidebar-cta').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            sidebar.classList.remove('open');
        });
    });

    // Proportional image drawing to cover canvas like object-fit: cover
    function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
        if (arguments.length === 2) {
            x = y = 0;
            w = ctx.canvas.width;
            h = ctx.canvas.height;
        }

        // default offset is center
        offsetX = typeof offsetX === "number" ? offsetX : 0.5;
        offsetY = typeof offsetY === "number" ? offsetY : 0.5;

        // keep bounds [0.0, 1.0]
        if (offsetX < 0) offsetX = 0;
        if (offsetY < 0) offsetY = 0;
        if (offsetX > 1) offsetX = 1;
        if (offsetY > 1) offsetY = 1;

        let iw = img.width,
            ih = img.height,
            r = Math.min(w / iw, h / ih),
            nw = iw * r,   // new prop. width
            nh = ih * r,   // new prop. height
            cx, cy, cw, ch, ar = 1;

        // decide which gap to fill    
        if (nw < w) ar = w / nw;                             
        if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
        nw *= ar;
        nh *= ar;

        // calc source rectangle
        cw = iw / (nw / w);
        ch = ih / (nh / h);

        cx = (iw - cw) * offsetX;
        cy = (ih - ch) * offsetY;

        // make sure source rectangle is valid
        if (cx < 0) cx = 0;
        if (cy < 0) cy = 0;
        if (cw > iw) cw = iw;
        if (ch > ih) ch = ih;

        // fill image in dest. rectangle
        ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
    }

    // Set canvas dimensions
    const updateCanvasSize = () => {
        const isMobile = window.innerWidth <= 768;
        canvas.width = window.innerWidth;
        canvas.height = isMobile ? window.innerHeight * 0.65 : window.innerHeight;
        // Optionally redraw the current frame here to avoid blank canvas on resize
        if (images[Math.floor(currentFrameIndex.current)] && images[Math.floor(currentFrameIndex.current)].complete) {
            drawImageProp(context, images[Math.floor(currentFrameIndex.current)], 0, 0, canvas.width, canvas.height);
        }
    };
    
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();

    // Preload images
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
            imagesLoaded++;
            const progress = (imagesLoaded / frameCount) * 100;
            progressBar.style.width = `${progress}%`;
            loadingText.innerText = `Loading ${Math.round(progress)}%`;

            if (imagesLoaded === frameCount) {
                initAnimation();
            }
        };
        img.onerror = () => {
            console.error(`Failed to load frame ${i}`);
            imagesLoaded++;
            if (imagesLoaded === frameCount) {
                initAnimation();
            }
        };
        images.push(img);
    }

    function updateScrollFraction() {
        // Calculate how far down the user has scrolled relative to the hero container
        const scrollTop = document.documentElement.scrollTop;
        const maxScrollTop = heroContainer.scrollHeight - window.innerHeight;
        
        if (scrollTop > maxScrollTop) {
            scrollFraction = 1;
        } else if (scrollTop < 0) {
            scrollFraction = 0;
        } else {
            scrollFraction = scrollTop / maxScrollTop;
        }
        
        currentFrameIndex.target = scrollFraction * (frameCount - 1);
        
        // Handle opacity of CTA button
        if (scrollFraction >= 0.8) {
            if (text2) text2.style.opacity = 1;
        } else {
            if (text2) text2.style.opacity = 0;
        }
    }

    function render() {
        // Linear Interpolation for smooth scrubbing
        currentFrameIndex.current += (currentFrameIndex.target - currentFrameIndex.current) * currentFrameIndex.ease;
        
        const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.floor(currentFrameIndex.current)));
        
        if (images[frameIndex] && images[frameIndex].complete) {
            drawImageProp(context, images[frameIndex], 0, 0, canvas.width, canvas.height);
        }
        
        requestAnimationFrame(render);
    }

    function initAnimation() {
        // Hide loader
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.visibility = 'hidden';
            canvas.classList.add('visible');
            hamburger.classList.add('visible');
            updateScrollFraction();
            render();
        }, 1000);
    }

    window.addEventListener('scroll', () => {
        updateScrollFraction();
    });

    // Intersection Observer for reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // =====================================================
    // Mobile Category Swipe Slider — Dot Sync & Navigation
    // =====================================================
    const categoryGrid = document.getElementById('categoryGrid');
    const sliderDots   = document.querySelectorAll('.slider-dot');
    const categoryCards = document.querySelectorAll('.category-card');

    const updateActiveDot = (index) => {
        sliderDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    if (categoryGrid && sliderDots.length > 0) {
        // Sync dots when user scrolls the slider
        categoryGrid.addEventListener('scroll', () => {
            if (window.innerWidth > 768) return;
            const cardWidth  = categoryGrid.firstElementChild.offsetWidth + 12; // card + gap
            const scrollLeft = categoryGrid.scrollLeft;
            const activeIndex = Math.round(scrollLeft / cardWidth);
            updateActiveDot(activeIndex);
        }, { passive: true });

        // Dots click → scroll to card
        sliderDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                if (window.innerWidth > 768) return;
                const cardWidth = categoryGrid.firstElementChild.offsetWidth + 12;
                categoryGrid.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                updateActiveDot(i);
            });
        });

        // Card click handler (future-ready — fires a custom event per card)
        categoryCards.forEach((card) => {
            card.addEventListener('click', () => {
                const index = card.getAttribute('data-index');
                card.dispatchEvent(new CustomEvent('card-selected', {
                    bubbles: true,
                    detail: { index: Number(index), label: card.getAttribute('aria-label') }
                }));
            });
            // Keyboard accessibility
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });
    }
});
