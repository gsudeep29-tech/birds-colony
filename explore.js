/* ========================================
   BIRDS COLONY – EXPLORE BOOK JS
   explore.js
   ======================================== */

// ── Bird Data ──────────────────────────────
const birds = [
    {
        emoji: '🦜', color: '#C4A35A',
        name:      { en: 'Cockatiel',       bn: 'ককাটিয়েল',    hi: 'कॉकटेल' },
        scientific:{ en: 'Nymphicus hollandicus' },
        tagline:   { en: 'The Gentle Crested Companion', bn: 'কোমল ঝুঁটিওয়ালা সঙ্গী', hi: 'कोमल शिखरधारी साथी' },
        origin:    { en: 'Australia', bn: 'অস্ট্রেলিয়া', hi: 'ऑस्ट्रेलिया' },
        lifespan:  { en: '15–20 years', bn: '১৫–২০ বছর', hi: '15–20 साल' },
        diet:      { en: 'Seeds, pellets, vegetables', bn: 'বীজ, সবজি', hi: 'बीज, सब्जियाँ' },
        size:      { en: '30–33 cm', bn: '৩০–৩৩ সেমি', hi: '30–33 सेमी' },
        care:      { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
        behavior:  { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
    },
    {
        emoji: '🐦', color: '#6DB3F2',
        name:      { en: 'Budgerigar',      bn: 'বাজরিগার',     hi: 'बजरीगर' },
        scientific:{ en: 'Melopsittacus undulatus' },
        tagline:   { en: 'The Cheerful Pocket Parrot', bn: 'প্রফুল্ল পকেট তোতা', hi: 'हँसमुख पॉकेट तोता' },
        origin:    { en: 'Australia', bn: 'অস্ট্রেলিয়া', hi: 'ऑस्ट्रेलिया' },
        lifespan:  { en: '5–10 years',  bn: '৫–১০ বছর',   hi: '5–10 साल' },
        diet:      { en: 'Millet, seeds, greens', bn: 'মিলেট, সবুজ শাক', hi: 'बाजरा, बीज' },
        size:      { en: '18–20 cm', bn: '১৮–২০ সেমি', hi: '18–20 सेमी' },
        care:      { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
        behavior:  { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
    },
    {
        emoji: '💚', color: '#5DBB63',
        name:      { en: 'Lovebird',        bn: 'লাভবার্ড',      hi: 'लवबर्ड' },
        scientific:{ en: 'Agapornis sp.' },
        tagline:   { en: 'The Devoted Little Companion', bn: 'নিবেদিত ক্ষুদে সঙ্গী', hi: 'वफ़ादार छोटा साथी' },
        origin:    { en: 'Africa', bn: 'আফ্রিকা', hi: 'अफ्रीका' },
        lifespan:  { en: '10–15 years', bn: '১০–১৫ বছর', hi: '10–15 साल' },
        diet:      { en: 'Seeds, fruits, veggies', bn: 'বীজ, ফল', hi: 'बीज, फल' },
        size:      { en: '13–17 cm', bn: '১৩–১৭ সেমি', hi: '13–17 सेमी' },
        care:      { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
        behavior:  { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
    },
    {
        emoji: '🦅', color: '#888888',
        name:      { en: 'African Grey',    bn: 'আফ্রিকান গ্রে',  hi: 'अफ्रीकन ग्रे' },
        scientific:{ en: 'Psittacus erithacus' },
        tagline:   { en: 'The Genius of the Bird World', bn: 'পাখির জগতের প্রতিভা', hi: 'पक्षी जगत का जीनियस' },
        origin:    { en: 'Central Africa', bn: 'মধ্য আফ্রিকা', hi: 'मध्य अफ्रीका' },
        lifespan:  { en: '40–60 years', bn: '৪০–৬০ বছর', hi: '40–60 साल' },
        diet:      { en: 'Nuts, seeds, fruits', bn: 'বাদাম, বীজ', hi: 'मेवे, बीज' },
        size:      { en: '33 cm', bn: '৩৩ সেমি', hi: '33 सेमी' },
        care:      { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
        behavior:  { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
    },
    {
        emoji: '🦜', color: '#E63946',
        name:      { en: 'Macaw',           bn: 'ম্যাকাও',        hi: 'मकाऊ' },
        scientific:{ en: 'Ara sp.' },
        tagline:   { en: 'The Majestic King of Parrots', bn: 'তোতার রাজসিক রাজা', hi: 'तोतों का राजसी राजा' },
        origin:    { en: 'South America', bn: 'দক্ষিণ আমেরিকা', hi: 'दक्षिण अमेरिका' },
        lifespan:  { en: '50–80 years', bn: '৫০–৮০ বছর', hi: '50–80 साल' },
        diet:      { en: 'Fruits, nuts, seeds', bn: 'ফল, বাদাম', hi: 'फल, मेवे' },
        size:      { en: '30–100 cm', bn: '৩০–১০০ সেমি', hi: '30–100 सेमी' },
        care:      { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
        behavior:  { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
    },
    {
        emoji: '🤍', color: '#F0EAD6',
        name:      { en: 'Cockatoo',        bn: 'ককাটু',          hi: 'कॉकटू' },
        scientific:{ en: 'Cacatua sp.' },
        tagline:   { en: 'The Affectionate Cloud Bird', bn: 'আদরের মেঘ পাখি', hi: 'स्नेही बादल पक्षी' },
        origin:    { en: 'Australia / SE Asia', bn: 'অস্ট্রেলিয়া', hi: 'ऑस्ट्रेलिया' },
        lifespan:  { en: '40–70 years', bn: '৪০–৭০ বছর', hi: '40–70 साल' },
        diet:      { en: 'Seeds, nuts, roots', bn: 'বীজ, বাদাম', hi: 'बीज, जड़ें' },
        size:      { en: '30–65 cm', bn: '৩০–৬৫ সেমি', hi: '30–65 सेमी' },
        care:      { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
        behavior:  { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
    },
    {
        emoji: '🟢', color: '#70C14A',
        name:      { en: 'Indian Ringneck', bn: 'ইন্ডিয়ান রিংনেক', hi: 'इंडियन रिंगनेक' },
        scientific:{ en: 'Psittacula krameri' },
        tagline:   { en: 'The Elegant Talking Parrot', bn: 'কথা বলা মার্জিত তোতা', hi: 'सुंदर बोलने वाला तोता' },
        origin:    { en: 'India / Africa', bn: 'ভারত / আফ্রিকা', hi: 'भारत / अफ्रीका' },
        lifespan:  { en: '20–30 years', bn: '২০–৩০ বছর', hi: '20–30 साल' },
        diet:      { en: 'Seeds, fruits, flowers', bn: 'বীজ, ফল', hi: 'बीज, फल' },
        size:      { en: '40 cm', bn: '৪০ সেমি', hi: '40 सेमी' },
        care:      { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
        behavior:  { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
    },
    {
        emoji: '🕊️', color: '#E8D5B7',
        name:      { en: 'Finch',           bn: 'ফিঞ্চ',           hi: 'फिंच' },
        scientific:{ en: 'Fringillidae' },
        tagline:   { en: 'The Musical Song Artist', bn: 'সংগীতময় গান শিল্পী', hi: 'संगीतमय गायक' },
        origin:    { en: 'Worldwide', bn: 'সারা বিশ্বে', hi: 'विश्वव्यापी' },
        lifespan:  { en: '5–10 years', bn: '৫–১০ বছর', hi: '5–10 साल' },
        diet:      { en: 'Small seeds, insects', bn: 'ছোট বীজ, পোকা', hi: 'छोटे बीज' },
        size:      { en: '10–18 cm', bn: '১০–১৮ সেমি', hi: '10–18 सेमी' },
        care:      { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
        behavior:  { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
    },
    {
        emoji: '💛', color: '#FFD700',
        name:      { en: 'Canary',          bn: 'ক্যানারি',        hi: 'कैनरी' },
        scientific:{ en: 'Serinus canaria' },
        tagline:   { en: 'The Golden Voice of Joy', bn: 'আনন্দের সোনালি কণ্ঠ', hi: 'खुशी की सुनहरी आवाज़' },
        origin:    { en: 'Canary Islands', bn: 'ক্যানারি দ্বীপপুঞ্জ', hi: 'कैनरी द्वीप' },
        lifespan:  { en: '10–15 years', bn: '১০–১৫ বছর', hi: '10–15 साल' },
        diet:      { en: 'Canary seed, greens', bn: 'ক্যানারি বীজ', hi: 'कैनरी बीज' },
        size:      { en: '12–13 cm', bn: '১২–১৩ সেমি', hi: '12–13 सेमी' },
        care:      { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
        behavior:  { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
    },
    {
        emoji: '🌞', color: '#FF8C00',
        name:      { en: 'Sun Conure',      bn: 'সান কনুর',        hi: 'सन कॉन्योर' },
        scientific:{ en: 'Aratinga solstitialis' },
        tagline:   { en: 'The Vibrant Sunshine Bird', bn: 'প্রাণবন্ত সূর্যালোকের পাখি', hi: 'जीवंत धूप का पक्षी' },
        origin:    { en: 'South America', bn: 'দক্ষিণ আমেরিকা', hi: 'दक्षिण अमेरिका' },
        lifespan:  { en: '20–30 years', bn: '২০–৩০ বছর', hi: '20–30 साल' },
        diet:      { en: 'Fruits, nuts, seeds', bn: 'ফল, বাদাম', hi: 'फल, मेवे' },
        size:      { en: '30 cm', bn: '৩০ সেমি', hi: '30 सेमी' },
        care:      { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
        behavior:  { en: 'Content coming soon.', bn: 'শীঘ্রই আসছে।', hi: 'जल्द आएगा।' },
    },
];

// ── State ──────────────────────────────────
let currentPage  = -1;   // -1 = cover shown
let lang         = 'en';
let isAnimating  = false;
const totalPages = birds.length;

// ── DOM Refs ───────────────────────────────
const coverLeaf   = document.getElementById('coverLeaf');
const flipLeaf    = document.getElementById('flipLeaf');
const leafFront   = document.getElementById('leafFront');
const leafBack    = document.getElementById('leafBack');
const leftContent = document.getElementById('leftContent');
const rightContent= document.getElementById('rightContent');
const prevArrow   = document.getElementById('prevArrow');
const nextArrow   = document.getElementById('nextArrow');
const counterText = document.getElementById('counterText');

// ── HTML Builders ──────────────────────────
function t(obj) { return obj[lang] || obj['en'] || ''; }

function buildRightPage(idx) {
    if (idx < 0 || idx >= totalPages) return '<div class="bird-page"></div>';
    const b = birds[idx];
    return `<div class="bird-page">
        <div class="page-number">${idx + 1} / ${totalPages}</div>
        <div class="bird-name-scientific">${b.scientific.en}</div>
        <div class="bird-name-common">${t(b.name)}</div>
        <div class="bird-tagline">${t(b.tagline)}</div>
        <div class="bird-divider"></div>
        <div class="bird-image-frame">
            <div class="bird-emoji-placeholder">${b.emoji}</div>
        </div>
        <div class="bird-facts">
            <div class="bird-fact"><span class="fact-label">Origin</span><span class="fact-value">${t(b.origin)}</span></div>
            <div class="bird-fact"><span class="fact-label">Lifespan</span><span class="fact-value">${t(b.lifespan)}</span></div>
            <div class="bird-fact"><span class="fact-label">Diet</span><span class="fact-value">${t(b.diet)}</span></div>
            <div class="bird-fact"><span class="fact-label">Size</span><span class="fact-value">${t(b.size)}</span></div>
        </div>
    </div>`;
}

function buildLeftPage(idx) {
    if (idx < 0) {
        return `<div class="bird-page-left" style="display:flex;align-items:center;justify-content:center;">
            <div style="text-align:center;opacity:0.3;font-family:'Playfair Display',serif;color:#2c1e0f;font-size:0.8rem;letter-spacing:0.15em;">BIRDS COLONY</div>
        </div>`;
    }
    if (idx >= totalPages) return '<div class="bird-page-left"></div>';
    const b = birds[idx];
    return `<div class="bird-page-left">
        <div style="margin-bottom:0.6rem;">
            <div class="info-section-title" style="font-size:0.6rem;letter-spacing:0.2em;text-transform:uppercase;color:#8B5E3C;border-bottom:1px solid rgba(139,109,56,0.15);padding-bottom:0.25rem;margin-bottom:0.35rem;">${t(b.name)}</div>
            <div style="font-family:'Playfair Display',serif;font-size:1.1rem;color:#2c1e0f;margin-bottom:0.25rem;">${b.emoji} ${t(b.tagline)}</div>
        </div>
        <div class="info-section">
            <div class="info-section-title">Care Guide</div>
            <div class="info-section-body info-coming-soon">${t(b.care)}</div>
        </div>
        <div class="info-section">
            <div class="info-section-title">Behavior</div>
            <div class="info-section-body info-coming-soon">${t(b.behavior)}</div>
        </div>
        <div class="info-section">
            <div class="info-section-title">Feeding & Nutrition</div>
            <div class="info-section-body info-coming-soon">${t({en:'Content coming soon.',bn:'শীঘ্রই আসছে।',hi:'जल्द आएगा।'})}</div>
        </div>
    </div>`;
}

function updateCounter() {
    if (currentPage === -1) {
        counterText.textContent = 'Cover';
    } else {
        counterText.textContent = `${t(birds[currentPage].name)} · ${currentPage + 1} of ${totalPages}`;
    }
}

function updateButtons() {
    prevArrow.disabled = (currentPage <= 0);
    nextArrow.disabled = (currentPage >= totalPages - 1);
}

// ── Page Flip Forward ──────────────────────
function flipForward() {
    if (isAnimating) return;
    if (currentPage >= totalPages - 1) return;

    isAnimating = true;
    const nextPage = currentPage + 1;

    // Prepare leaf: front = current right page, back = next left page
    leafFront.querySelector('.leaf-inner').innerHTML = buildRightPage(currentPage);
    leafBack.querySelector('.leaf-inner').innerHTML  = buildLeftPage(nextPage);

    // Pre-load next right page into right panel (hidden under leaf during flip)
    rightContent.innerHTML = buildRightPage(nextPage);

    // Show the leaf over current right page
    flipLeaf.style.display = 'block';
    flipLeaf.style.left = 'calc(var(--page-w) + var(--spine-width))';
    flipLeaf.style.width = 'var(--page-w)';
    flipLeaf.style.transformOrigin = 'left center';
    flipLeaf.style.transform = 'rotateY(0deg)';
    flipLeaf.classList.remove('flipping-backward', 'go');

    // Trigger flip
    requestAnimationFrame(() => {
        flipLeaf.classList.add('flipping-forward');
    });

    flipLeaf.addEventListener('transitionend', function onEnd() {
        flipLeaf.removeEventListener('transitionend', onEnd);
        flipLeaf.classList.remove('flipping-forward');
        flipLeaf.style.display = 'none';

        currentPage = nextPage;
        leftContent.innerHTML  = buildLeftPage(currentPage);
        rightContent.innerHTML = buildRightPage(currentPage);
        updateCounter();
        updateButtons();
        isAnimating = false;
    }, { once: true });
}

// ── Page Flip Backward ─────────────────────
function flipBackward() {
    if (isAnimating) return;
    if (currentPage <= 0) return;

    isAnimating = true;
    const prevPage = currentPage - 1;

    // Prepare leaf: starts showing the previous page content, flips right to reveal current
    leafFront.querySelector('.leaf-inner').innerHTML = buildRightPage(prevPage);
    leafBack.querySelector('.leaf-inner').innerHTML  = buildLeftPage(currentPage);

    // Show leaf on the LEFT side, already flipped, then animate back
    flipLeaf.style.display = 'block';
    flipLeaf.style.left = '0';
    flipLeaf.style.width = 'var(--page-w)';
    flipLeaf.style.transformOrigin = 'right center';
    flipLeaf.style.transform = 'rotateY(180deg)';
    flipLeaf.classList.remove('flipping-forward');
    flipLeaf.classList.add('flipping-backward');

    // Pre-load prev page into panels
    leftContent.innerHTML  = buildLeftPage(prevPage);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            flipLeaf.classList.add('go');
        });
    });

    flipLeaf.addEventListener('transitionend', function onEnd() {
        flipLeaf.removeEventListener('transitionend', onEnd);
        flipLeaf.classList.remove('flipping-backward', 'go');
        flipLeaf.style.display = 'none';

        currentPage = prevPage;
        leftContent.innerHTML  = buildLeftPage(currentPage);
        rightContent.innerHTML = buildRightPage(currentPage);
        updateCounter();
        updateButtons();
        isAnimating = false;
    }, { once: true });
}

// ── Auto Open Cover ────────────────────────
function openBook() {
    // Set initial panel content (will be revealed after cover opens)
    leftContent.innerHTML  = buildLeftPage(-1);
    rightContent.innerHTML = buildRightPage(0);

    setTimeout(() => {
        coverLeaf.classList.add('opening');
        coverLeaf.addEventListener('transitionend', () => {
            coverLeaf.classList.add('open');
            currentPage = 0;
            updateCounter();
            updateButtons();
        }, { once: true });
    }, 800);
}

// ── Touch / Swipe ──────────────────────────
let touchStartX = 0, touchStartY = 0;
document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 50 && dy < 80) {
        if (dx > 0) flipForward();
        else        flipBackward();
    }
}, { passive: true });

// ── Keyboard ───────────────────────────────
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') flipForward();
    if (e.key === 'ArrowLeft')  flipBackward();
});

// ── Arrow Buttons ──────────────────────────
nextArrow.addEventListener('click', flipForward);
prevArrow.addEventListener('click', flipBackward);
prevArrow.disabled = true;

// ── Translate ──────────────────────────────
const translateBtn      = document.getElementById('translateBtn');
const translateDropdown = document.getElementById('translateDropdown');
const translateLabel    = document.getElementById('translateLabel');

translateBtn.addEventListener('click', () => {
    const isOpen = translateDropdown.classList.toggle('open');
    translateBtn.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.addEventListener('click', () => {
        lang = btn.dataset.lang;
        translateLabel.textContent = btn.dataset.short;
        document.querySelectorAll('.lang-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        translateDropdown.classList.remove('open');
        translateBtn.setAttribute('aria-expanded', false);
        // Re-render current visible pages
        if (currentPage >= 0) {
            leftContent.innerHTML  = buildLeftPage(currentPage);
            rightContent.innerHTML = buildRightPage(currentPage);
            updateCounter();
        }
    });
});

// Close dropdown on outside click
document.addEventListener('click', e => {
    if (!document.getElementById('translateWidget').contains(e.target)) {
        translateDropdown.classList.remove('open');
        translateBtn.setAttribute('aria-expanded', false);
    }
});

// ── Browser Back Button ────────────────────
// Push a state so that browser back returns to homepage naturally
history.pushState({ page: 'explore' }, '', '');
window.addEventListener('popstate', () => {
    window.location.href = 'index.html';
});

// ── Init ───────────────────────────────────
openBook();
