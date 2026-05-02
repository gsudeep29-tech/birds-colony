/* ========================================
   BIRDS COLONY – EXPLORE BOOK JS
   explore.js
   ======================================== */

console.log('[Explore] Script started');

// ── Bird Data ──────────────────────────────
const birds = [
    {
        emoji: '🦜', color: '#C4A35A',
        image: 'assets/birds/cockatiel.png',
        name:      { en: 'Cockatiel', bn: '\u0995\u0995\u09be\u099f\u09bf\u09af\u09bc\u09c7\u09b2', hi: '\u0915\u094c\u0915\u091f\u0947\u0932' },
        scientific:{ en: 'Nymphicus hollandicus' },
        tagline:   { en: 'The Gentle Crested Companion', bn: '\u0995\u09cb\u09ae\u09b2 \u099d\u09c1\u0981\u099f\u09bf\u0993\u09af\u09bc\u09be\u09b2\u09be \u09b8\u0999\u09cd\u0997\u09c0', hi: '\u0915\u094b\u092e\u0932 \u0936\u093f\u0916\u0930\u0927\u093e\u0930\u0940 \u0938\u093e\u0925\u0940' },
        origin:    { en: 'Australia', bn: '\u0985\u09b8\u09cd\u099f\u09cd\u09b0\u09c7\u09b2\u09bf\u09af\u09bc\u09be', hi: '\u091a\u0949\u0938\u094d\u091f\u094d\u0930\u0947\u0932\u093f\u092f\u093e' },
        lifespan:  { en: '15–20 years', bn: '\u09bdec\u2013\u09e8\u09e6 \u09ac\u099b\u09b0', hi: '15\u201320 \u0938\u093e\u0932' },
        diet:      { en: 'Seeds, pellets, vegetables', bn: '\u09ac\u09c0\u099c, \u09b8\u09ac\u099c\u09bf', hi: '\u092c\u0940\u091c, \u0938\u092c\u094d\u091c\u093f\u092f\u093e\u0901' },
        size:      { en: '30–33 cm', bn: '\u09e9\u09e6\u2013\u09e9\u09e9 \u09b8\u09c7\u09ae\u09bf', hi: '30\u201333 \u0938\u0947\u092e\u0940' },
        sections: [
            { title:'Expert Care Guide', body:'Cockatiels are highly social and intelligent parrots. They require a balanced diet of pellets and fresh vegetables. Their crest is a unique feature that indicates their emotional state — an upright crest means the bird is alert or excited.' },
            { title:'Behavior & Taming', body:'Cockatiels are known for being affectionate and gentle. They can be trained to whistle tunes and perform simple tricks. Consistency and positive reinforcement are key to a well-adjusted bird.' }
        ]
    },
    {
        emoji: '🐦', color: '#6DB3F2',
        image: 'assets/birds/budgerigar.png',
        name:      { en: 'Budgerigar', bn: '\u09ac\u09be\u099c\u09b0\u09bf\u0997\u09be\u09b0', hi: '\u092c\u091c\u0930\u0940\u0917\u0930' },
        scientific:{ en: 'Melopsittacus undulatus' },
        tagline:   { en: 'The Cheerful Pocket Parrot', bn: '\u09aa\u09cd\u09b0\u09ab\u09c1\u09b2\u09cd\u09b2 \u09aa\u0995\u09c7\u099f \u09a4\u09cb\u09a4\u09be', hi: '\u0939\u0901\u0938\u092e\u0941\u0916 \u092a\u0949\u0915\u0947\u091f \u0924\u094b\u0924\u093e' },
        origin:    { en: 'Australia', bn: '\u0985\u09b8\u09cd\u099f\u09cd\u09b0\u09c7\u09b2\u09bf\u09af\u09bc\u09be', hi: '\u091a\u0949\u0938\u094d\u091f\u094d\u0930\u0947\u0932\u093f\u092f\u093e' },
        lifespan:  { en: '5–10 years', bn: '\u09eb\u2013\u09e7\u09e6 \u09ac\u099b\u09b0', hi: '5\u201310 \u0938\u093e\u0932' },
        diet:      { en: 'Millet, seeds, greens', bn: '\u09ae\u09bf\u09b2\u09c7\u099f, \u09b8\u09ac\u09c1\u099c \u09b6\u09be\u0995', hi: '\u092c\u093e\u091c\u0930\u093e, \u092c\u0940\u091c' },
        size:      { en: '18–20 cm', bn: '\u09e7\u09ee\u2013\u09e8\u09e6 \u09b8\u09c7\u09ae\u09bf', hi: '18\u201320 \u0938\u0947\u092e\u0940' },
        sections: [
            { title:'Flock Behavior', body:'Budgies thrive in social environments. In the wild, they live in large flocks. They are known for their playful nature and ability to learn a variety of whistles and even words.' },
            { title:'Dietary Needs', body:'A balanced diet for a budgie should include high-quality seeds, pellets, and a variety of fresh vegetables and fruits. Avoid avocado and chocolate as they are toxic.' }
        ]
    },
    {
        emoji: '💚', color: '#5DBB63',
        image: 'assets/birds/lovebird.png',
        name:      { en: 'Lovebird', bn: '\u09b2\u09be\u09ad\u09ac\u09be\u09b0\u09cd\u09a1', hi: '\u0932\u0932\u093c\u092c\u0930\u094d\u0921' },
        scientific:{ en: 'Agapornis sp.' },
        tagline:   { en: 'The Devoted Little Companion', bn: '\u09a8\u09bf\u09ac\u09c7\u09a6\u09bf\u09a4 \u0995\u09cd\u09b7\u09c1\u09a6\u09c7 \u09b8\u0999\u09cd\u0997\u09c0', hi: '\u0935\u092b\u093c\u093e\u0926\u093e\u0930 \u091b\u094b\u091f\u093e \u0938\u093e\u0925\u0940' },
        origin:    { en: 'Africa', bn: '\u0986\u09ab\u09cd\u09b0\u09bf\u0995\u09be', hi: '\u0905\u092b\u094d\u0930\u0940\u0915\u093e' },
        lifespan:  { en: '10–15 years', bn: '\u09e7\u09e6\u2013\u09e7\u09eb \u09ac\u099b\u09b0', hi: '10\u201315 \u0938\u093e\u0932' },
        diet:      { en: 'Seeds, fruits, veggies', bn: '\u09ac\u09c0\u099c, \u09ab\u09b2', hi: '\u092c\u0940\u091c, \u092b\u0932' },
        size:      { en: '13–17 cm', bn: '\u09e7\u09e9\u2013\u09e7\u09ed \u09b8\u09c7\u09ae\u09bf', hi: '13\u201317 \u0938\u0947\u092e\u0940' },
        sections: [
            { title: 'Social Pair Bonds', body: 'Lovebirds are famous for their strong pair bonds. They are extremely affectionate with their mates, often spending hours preening each other. If kept as a single bird, they require a lot of human interaction to prevent loneliness.' },
            { title: 'Chewing Habits', body: 'They love to chew! Provide plenty of bird-safe wood and paper toys. This helps keep their beak trimmed and provides vital mental stimulation.' }
        ]
    },
    {
        emoji: '🦅', color: '#888888',
        image: 'assets/birds/african_grey.png',
        name:      { en: 'African Grey', bn: '\u0986\u09ab\u09cd\u09b0\u09bf\u0995\u09be\u09a8 \u0997\u09cd\u09b0\u09c7', hi: '\u0905\u092b\u094d\u0930\u0940\u0915\u0928 \u0917\u094d\u0930\u0947' },
        scientific:{ en: 'Psittacus erithacus' },
        tagline:   { en: 'The Genius of the Bird World', bn: '\u09aa\u09be\u0996\u09bf\u09b0 \u099c\u0997\u09a4\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf\u09ad\u09be', hi: '\u092a\u0915\u094d\u0937\u0940 \u091c\u0917\u0924 \u0915\u093e \u091c\u0940\u0928\u093f\u092f\u0938' },
        origin:    { en: 'Central Africa', bn: '\u09ae\u09a7\u09cd\u09af \u0986\u09ab\u09cd\u09b0\u09bf\u0995\u09be', hi: '\u092e\u0927\u094d\u092f \u0905\u092b\u094d\u0930\u0940\u0915\u093e' },
        lifespan:  { en: '40–60 years', bn: '\u09ea\u09e6\u2013\u09ec\u09e6 \u09ac\u099b\u09b0', hi: '40\u201360 \u0938\u093e\u0932' },
        diet:      { en: 'Nuts, seeds, fruits', bn: '\u09ac\u09be\u09a6\u09be\u09ae, \u09ac\u09c0\u099c', hi: '\u092e\u0947\u0935\u0947, \u092c\u0940\u091c' },
        size:      { en: '33 cm', bn: '\u09e9\u09e9 \u09b8\u09c7\u09ae\u09bf', hi: '33 \u0938\u0947\u092e\u0940' },
        sections: [
            { title: 'Cognitive Ability', body: 'African Greys are the intellectuals of the parrot world. They can understand abstract concepts and have the emotional intelligence of a human toddler. They need constant mental challenges.' },
            { title: 'Emotional Sensitivity', body: 'They are very sensitive to their environment. Sudden changes or lack of attention can lead to stress-related behaviors. A steady routine and lots of social time are essential.' }
        ]
    },
    {
        emoji: '🦜', color: '#E63946',
        image: 'assets/birds/macaw.png',
        name:      { en: 'Macaw', bn: '\u09ae\u09cd\u09af\u09be\u0995\u09be\u0993', hi: '\u092e\u0915\u093e\u090a' },
        scientific:{ en: 'Ara sp.' },
        tagline:   { en: 'The Majestic King of Parrots', bn: '\u09a4\u09cb\u09a4\u09be\u09b0 \u09b0\u09be\u099c\u09b8\u09bf\u0995 \u09b0\u09be\u099c\u09be', hi: '\u0924\u094b\u0924\u094b\u0902 \u0915\u093e \u0930\u093e\u091c\u0938\u0940 \u0930\u093e\u091c\u093e' },
        origin:    { en: 'South America', bn: '\u09a6\u0995\u09cd\u09b7\u09bf\u09a3 \u0986\u09ae\u09c7\u09b0\u09bf\u0995\u09be', hi: '\u0926\u0915\u094d\u0937\u093f\u0923 \u0905\u092e\u0947\u0930\u093f\u0915\u093e' },
        lifespan:  { en: '50–80 years', bn: '\u09eb\u09e6\u2013\u09ee\u09e6 \u09ac\u099b\u09b0', hi: '50\u201380 \u0938\u093e\u0932' },
        diet:      { en: 'Fruits, nuts, seeds', bn: '\u09ab\u09b2, \u09ac\u09be\u09a6\u09be\u09ae', hi: '\u092b\u0932, \u092e\u0947\u0935\u0947' },
        size:      { en: '30–100 cm', bn: '\u09e9\u09e6\u2013\u09e7\u09e6\u09e6 \u09b8\u09c7\u09ae\u09bf', hi: '30\u2013100 \u0938\u0947\u092e\u0940' },
        sections: [
            { title: 'Majestic Appearance', body: 'Macaws are known for their vibrant plumage and large size. They have extremely powerful beaks that can easily crack hard nuts. Their long tails add to their majestic silhouette in flight.' },
            { title: 'Social Complexity', body: 'They are highly social birds that live in flocks in the wild. In captivity, they require significant space and time. They are known for their ability to bond deeply with their keepers.' }
        ]
    },
    {
        emoji: '🤍', color: '#F0EAD6',
        image: 'assets/birds/cockatoo.png',
        name:      { en: 'Cockatoo', bn: '\u0995\u0995\u09be\u099f\u09c1', hi: '\u0915\u0915\u093e\u091f\u0942' },
        scientific:{ en: 'Cacatua sp.' },
        tagline:   { en: 'The Affectionate Cloud Bird', bn: '\u0986\u09a6\u09b0\u09c7\u09b0 \u09ae\u09c7\u0998 \u09aa\u09be\u0996\u09bf', hi: '\u0938\u094d\u0928\u0947\u0939\u0940 \u092c\u093e\u0926\u0932 \u092a\u0915\u094d\u0937\u0940' },
        origin:    { en: 'Australia', bn: '\u0985\u09b8\u09cd\u099f\u09cd\u09b0\u09c7\u09b2\u09bf\u09af\u09bc\u09be', hi: '\u091a\u0949\u0938\u094d\u091f\u094d\u0930\u0947\u0932\u093f\u092f\u093e' },
        lifespan:  { en: '40–70 years', bn: '\u09ea\u09e6\u2013\u09ed\u09e6 \u09ac\u099b\u09b0', hi: '40\u201370 \u0938\u093e\u0932' },
        diet:      { en: 'Seeds, nuts, roots', bn: '\u09ac\u09c0\u099c, \u09ac\u09be\u09a6\u09be\u09ae', hi: '\u092c\u0940\u091c, \u091c\u0921\u093c\u0947\u0902' },
        size:      { en: '30–65 cm', bn: '\u09e9\u09e6\u2013\u09ec\u09eb \u09b8\u09c7\u09ae\u09bf', hi: '30\u201365 \u0938\u0947\u092e\u0940' },
        sections: [
            { title: 'Clinging Behavior', body: 'Cockatoos are famous for their "velcro" personality. They crave physical contact and can become distressed if ignored. They are best suited for owners who can spend hours with them daily.' }
        ]
    },
    {
        emoji: '🟢', color: '#70C14A',
        image: 'assets/birds/indian_ringneck.png',
        name:      { en: 'Indian Ringneck', bn: '\u0987\u09a8\u09cd\u09a1\u09bf\u09af\u09bc\u09be\u09a8 \u09b0\u09bf\u0982\u09a8\u09c7\u0995', hi: '\u0907\u0902\u0921\u093f\u092f\u0928 \u0930\u093f\u0902\u0917\u0928\u0947\u0915' },
        scientific:{ en: 'Psittacula krameri' },
        tagline:   { en: 'The Elegant Talking Parrot', bn: '\u0995\u09a5\u09be \u09ac\u09b2\u09be \u09ae\u09be\u09b0\u09cd\u099c\u09bf\u09a4 \u09a4\u09cb\u09a4\u09be', hi: '\u0938\u0941\u0928\u094d\u0926\u0930 \u092c\u094b\u0932\u0928\u0947 \u0935\u093e\u0932\u093e \u0924\u094b\u0924\u093e' },
        origin:    { en: 'India / Africa', bn: '\u09ad\u09be\u09b0\u09a4 / \u0986\u09ab\u09cd\u09b0\u09bf\u0995\u09be', hi: '\u092d\u093e\u0930\u0924 / \u0905\u092b\u094d\u0930\u0940\u0915\u093e' },
        lifespan:  { en: '20–30 years', bn: '\u09e8\u09e6\u2013\u09e9\u09e6 \u09ac\u099b\u09b0', hi: '20\u201330 \u0938\u093e\u0932' },
        diet:      { en: 'Seeds, fruits, flowers', bn: '\u09ac\u09c0\u099c, \u09ab\u09b2', hi: '\u092c\u0940\u091c, \u092b\u0932' },
        size:      { en: '40 cm', bn: '\u09ea\u09e6 \u09b8\u09c7\u09ae\u09bf', hi: '40 \u0938\u0947\u092e\u0940' },
        sections: [
            { title: 'Vocal Ability', body: 'Indian Ringnecks are exceptional talkers. They possess a clear, high-pitched voice and can learn a vast vocabulary. They are also known for their independent and clever nature.' }
        ]
    },
    {
        emoji: '🕊️', color: '#E8D5B7',
        image: 'assets/birds/finch.png',
        name:      { en: 'Finch', bn: '\u09ab\u09bf\u099e\u09cd\u099a', hi: '\u092b\u093f\u0902\u091a' },
        scientific:{ en: 'Fringillidae' },
        tagline:   { en: 'The Musical Song Artist', bn: '\u09b8\u0999\u09cd\u0997\u09c0\u09a4\u09ae\u09af\u09bc \u0997\u09be\u09a8 \u09b6\u09bf\u09b2\u09cd\u09aa\u09c0', hi: '\u0938\u0902\u0917\u0940\u0924\u092e\u092f \u0917\u093e\u092f\u0915' },
        origin:    { en: 'Worldwide', bn: '\u09b8\u09be\u09b0\u09be \u09ac\u09bf\u09b6\u09cd\u09ac\u09c7', hi: '\u0935\u093f\u0936\u094d\u0935\u0935\u094d\u092f\u093e\u092a\u0940' },
        lifespan:  { en: '5–10 years', bn: '\u09eb\u2013\u09e7\u09e6 \u09ac\u099b\u09b0', hi: '5\u201310 \u0938\u093e\u0932' },
        diet:      { en: 'Small seeds, insects', bn: '\u099b\u09cb\u099f \u09ac\u09c0\u099c, \u09aa\u09cb\u0995\u09be', hi: '\u091b\u094b\u091f \u092c\u0940\u091c' },
        size:      { en: '10–18 cm', bn: '\u09e7\u09e6\u2013\u09e7\u09ee \u09b8\u09c7\u09ae\u09bf', hi: '10\u201318 \u0938\u0947\u092e\u0940' },
        sections: [
            { title: 'Song & Socializing', body: 'Finches are known for their cheerful songs and active social lives. They are typically kept in groups or pairs and prefer the company of their own kind over human handling.' }
        ]
    },
    {
        emoji: '💛', color: '#FFD700',
        image: 'assets/birds/canary.png',
        name:      { en: 'Canary', bn: '\u0995\u09cd\u09af\u09be\u09a8\u09be\u09b0\u09bf', hi: '\u0915\u0948\u0928\u0930\u0940' },
        scientific:{ en: 'Serinus canaria' },
        tagline:   { en: 'The Golden Voice of Joy', bn: '\u0986\u09a8\u09a8\u09cd\u09a6\u09c7\u09b0 \u09b8\u09cb\u09a8\u09be\u09b2\u09bf \u0995\u09a3\u09cd\u09a0', hi: '\u0916\u093c\u0941\u0936\u0940 \u0915\u0940 \u0938\u0941\u0928\u0939\u0930\u0940 \u0906\u0935\u093e\u091c\u093c' },
        origin:    { en: 'Canary Islands', bn: '\u0995\u09cd\u09af\u09be\u09a8\u09be\u09b0\u09bf \u09a6\u09cd\u09ac\u09c0\u09aa\u09aa\u09c1\u099e\u09cd\u099c', hi: '\u0915\u0948\u0928\u0930\u0940 \u0926\u094d\u093वी\u092a \u0938\u092e\u0942\u0939' },
        lifespan:  { en: '10–15 years', bn: '\u09e7\u09e6\u2013\u09e7\u09eb \u09ac\u099b\u09b0', hi: '10\u201315 \u0938\u093e\u0932' },
        diet:      { en: 'Canary seed, greens', bn: '\u0995\u09cd\u09af\u09be\u09a8\u09be\u09b0\u09bf \u09ac\u09c0\u099c', hi: '\u0915\u0948\u0928\u0930\u0940 \u092c\u0940\u091c' },
        size:      { en: '12–13 cm', bn: '\u09e7\u09e8\u2013\u09e7\u09e9 \u09b8\u09c7\u09ae\u09bf', hi: '12\u201313 \u0938\u0947\u092e\u0940' },
        sections: [
            { title: 'The Singer', body: 'Male canaries are prized for their complex and beautiful singing abilities. They are solitary birds by nature and are content living alone in a spacious cage where they can sing freely.' }
        ]
    },
    {
        emoji: '🌞', color: '#FF8C00',
        image: 'assets/birds/sun_conure.png',
        name:      { en: 'Sun Conure', bn: '\u09b8\u09be\u09a8 \u0995\u09a8\u09c1\u09b0', hi: '\u0938\u0928 \u0915\u0928\u092f\u094b\u0930' },
        scientific:{ en: 'Aratinga solstitialis' },
        tagline:   { en: 'The Vibrant Sunshine Bird', bn: '\u09aa\u09cd\u09b0\u09be\u09a3\u09ac\u09a8\u09cd\u09a4 \u09b8\u09c2\u09b0\u09cd\u09af\u09be\u09b2\u09cb\u0995\u09c7\u09b0 \u09aa\u09be\u0996\u09bf', hi: '\u091c\u0940\u0935\u0902\u0924 \u0927\u0942\u092a \u0915\u093e \u092a\u0915\u094d\u0937\u0940' },
        origin:    { en: 'South America', bn: '\u09a6\u0995\u09cd\u09b7\u09bf\u09a3 \u0986\u09ae\u09c7\u09b0\u09bf\u0995\u09be', hi: '\u0926\u0915\u094d\u0937\u093f\u0923 \u0905\u092e\u0947\u0930\u093f\u0915\u093e' },
        lifespan:  { en: '20–30 years', bn: '\u09e8\u09e6\u2013\u09e9\u09e6 \u09ac\u099b\u09b0', hi: '20\u201330 \u0938\u093e\u0932' },
        diet:      { en: 'Seeds, fruits, veggies', bn: '\u09ac\u09c0\u099c, \u09ab\u09b2', hi: '\u092c\u0940\u091c, \u092b\u0932' },
        size:      { en: '30 cm', bn: '\u09e9\u09e9 \u09b8\u09c7\u09ae\u09bf', hi: '30 \u0938\u0947\u092e\u0940' },
        sections: [
            { title: 'Vibrant Personality', body: 'Sun Conures are as loud as they are beautiful. They have a bold, curious, and playful personality. They love interaction and are often found snuggling with their favorite humans.' }
        ]
    }
];

// ── State ──────────────────────────────────
let currentPage  = -1;
let lang         = 'en';
let isAnimating  = false;
const totalPages = birds.length;

// ── DOM Refs ───────────────────────────────
const coverLeaf    = document.getElementById('coverLeaf');
const flipLeaf     = document.getElementById('flipLeaf');
const leafFront    = document.getElementById('leafFront');
const leafBack     = document.getElementById('leafBack');
const leftContent  = document.getElementById('leftContent');
const rightContent = document.getElementById('rightContent');
const prevArrow    = document.getElementById('prevArrow');
const nextArrow    = document.getElementById('nextArrow');
const counterText  = document.getElementById('counterText');
const flipShadow   = document.getElementById('flipShadowOverlay');

// ── Shadow Utility ─────────────────────────
function updateShadow(opacity) {
    if (flipShadow) flipShadow.style.opacity = Math.min(1, Math.max(0, opacity));
}

// ── HTML Builders ──────────────────────────
function t(obj) { return obj[lang] || obj['en'] || ''; }
function isMobile() { return window.innerWidth <= 768; }

function getLeftPageContent(idx) {
    if (idx < 0) return `<div style="text-align:center;opacity:0.3;margin-top:40%;font-family:'Playfair Display',serif;letter-spacing:0.1em;color:#2c1e0f;">BIRDS COLONY</div>`;
    const b = birds[idx];
    if (b.sections && b.sections.length > 0) {
        const sectionsHtml = b.sections.map(s => `
            <div class="detail-section">
                <div class="detail-section-title">${s.title}</div>
                <div class="detail-section-body">${s.body}</div>
            </div>
        `).join('');
        return `
            <div style="margin-bottom:1rem;">
                <div class="detail-section-title" style="font-size:0.65rem;">${t(b.name)} \u2014 Expert Guide</div>
                <div style="font-family:'Playfair Display',serif;font-size:1rem;color:#2c1e0f;">${b.emoji} ${t(b.tagline)}</div>
            </div>
            ${sectionsHtml}
        `;
    }
    return `<div class="detail-section"><div class="detail-section-body">Detailed guide coming soon for ${t(b.name)}.</div></div>`;
}

function buildRightPage(idx) {
    if (idx < 0 || idx >= totalPages) return '<div class="bird-page"></div>';
    const b = birds[idx];
    const imgHtml = b.image
        ? `<img class="bird-main-img" src="${b.image}" alt="${b.name.en}" loading="lazy">`
        : `<div class="bird-emoji-placeholder">${b.emoji}</div>`;

    const mobileInfoHtml = isMobile() ? `<div class="mobile-only-info" style="margin-top:1.5rem;border-top:1px solid rgba(139,109,56,0.1);padding-top:1rem;">${getLeftPageContent(idx)}</div>` : '';

    return `<div class="bird-page">
        <div class="bird-page-scroll">
            <div class="page-number">${idx + 1} / ${totalPages}</div>
            <div class="bird-name-scientific">${b.scientific.en}</div>
            <div class="bird-name-common">${t(b.name)}</div>
            <div class="bird-tagline">${t(b.tagline)}</div>
            <div class="bird-divider"></div>
            <div class="bird-image-frame">${imgHtml}</div>
            <div class="bird-facts">
                <div class="bird-fact"><span class="fact-label">Origin</span><span class="fact-value">${t(b.origin)}</span></div>
                <div class="bird-fact"><span class="fact-label">Lifespan</span><span class="fact-value">${t(b.lifespan)}</span></div>
                <div class="bird-fact"><span class="fact-label">Diet</span><span class="fact-value">${t(b.diet)}</span></div>
                <div class="bird-fact"><span class="fact-label">Size</span><span class="fact-value">${t(b.size)}</span></div>
            </div>
            ${mobileInfoHtml}
        </div>
    </div>`;
}

function buildLeftPage(idx) {
    if (idx < 0) return `<div class="bird-page-left" style="display:flex;align-items:center;justify-content:center;">${getLeftPageContent(idx)}</div>`;
    return `<div class="bird-page-left"><div class="bird-page-left-scroll">${getLeftPageContent(idx)}</div></div>`;
}

function updateCounter() {
    if (currentPage === -1) counterText.textContent = 'Cover';
    else counterText.textContent = `${t(birds[currentPage].name)} \u00b7 ${currentPage + 1} of ${totalPages}`;
}

function updateButtons() {
    prevArrow.disabled = (currentPage <= 0);
    nextArrow.disabled = (currentPage >= totalPages - 1);
}

// ── Page Flip ──────────────────────────────
function flipForward() {
    if (isAnimating || currentPage >= totalPages - 1) return;
    isAnimating = true;
    const nextPage = currentPage + 1;
    console.log(`[Explore] Flipping Forward to ${nextPage}`);

    leafFront.querySelector('.leaf-inner').innerHTML = buildRightPage(currentPage);
    leafBack.querySelector('.leaf-inner').innerHTML  = buildLeftPage(nextPage);
    rightContent.innerHTML = buildRightPage(nextPage);

    flipLeaf.style.display = 'block';
    flipLeaf.style.left = 'calc(var(--page-w) + var(--spine-width))';
    flipLeaf.style.transform = 'rotateY(0deg)';
    flipLeaf.classList.remove('flipping-backward', 'go');

    requestAnimationFrame(() => {
        flipLeaf.classList.add('flipping-forward');
    });

    const finish = () => {
        flipLeaf.classList.remove('flipping-forward');
        flipLeaf.style.display = 'none';
        currentPage = nextPage;
        leftContent.innerHTML  = buildLeftPage(currentPage);
        rightContent.innerHTML = buildRightPage(currentPage);
        updateCounter();
        updateButtons();
        isAnimating = false;
    };

    flipLeaf.addEventListener('transitionend', finish, { once: true });
    setTimeout(finish, 1100);
}

function flipBackward() {
    if (isAnimating || currentPage <= 0) return;
    isAnimating = true;
    const prevPage = currentPage - 1;
    console.log(`[Explore] Flipping Backward to ${prevPage}`);

    leafFront.querySelector('.leaf-inner').innerHTML = buildRightPage(prevPage);
    leafBack.querySelector('.leaf-inner').innerHTML  = buildLeftPage(currentPage);
    leftContent.innerHTML = buildLeftPage(prevPage);

    flipLeaf.style.display = 'block';
    flipLeaf.style.left = '0';
    flipLeaf.style.transform = 'rotateY(180deg)';
    flipLeaf.classList.remove('flipping-forward');
    flipLeaf.classList.add('flipping-backward');

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            flipLeaf.classList.add('go');
        });
    });

    const finish = () => {
        flipLeaf.classList.remove('flipping-backward', 'go');
        flipLeaf.style.display = 'none';
        currentPage = prevPage;
        leftContent.innerHTML  = buildLeftPage(currentPage);
        rightContent.innerHTML = buildRightPage(currentPage);
        updateCounter();
        updateButtons();
        isAnimating = false;
    };

    flipLeaf.addEventListener('transitionend', finish, { once: true });
    setTimeout(finish, 1100);
}

// ── Auto Open Cover ────────────────────────
function openBook() {
    console.log('[Explore] openBook() called');
    leftContent.innerHTML  = buildLeftPage(0);
    rightContent.innerHTML = buildRightPage(0);

    setTimeout(() => {
        console.log('[Explore] Triggering cover animation');
        coverLeaf.classList.add('opening');
        
        const finish = () => {
            console.log('[Explore] Cover animation finished');
            coverLeaf.classList.add('open');
            currentPage = 0;
            updateCounter();
            updateButtons();
        };

        coverLeaf.addEventListener('transitionend', finish, { once: true });
        setTimeout(finish, 2000);
    }, 800);
}

// ── Events ─────────────────────────────────
nextArrow.addEventListener('click', flipForward);
prevArrow.addEventListener('click', flipBackward);
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') flipForward();
    if (e.key === 'ArrowLeft')  flipBackward();
});

// Translate
const translateBtn      = document.getElementById('translateBtn');
const translateDropdown = document.getElementById('translateDropdown');
const translateLabel    = document.getElementById('translateLabel');

translateBtn.addEventListener('click', (e) => {
    e.stopPropagation();
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
        if (currentPage >= 0) {
            leftContent.innerHTML  = buildLeftPage(currentPage);
            rightContent.innerHTML = buildRightPage(currentPage);
            updateCounter();
        }
    });
});

document.addEventListener('click', () => {
    translateDropdown.classList.remove('open');
    translateBtn.setAttribute('aria-expanded', false);
});

// Init
openBook();
