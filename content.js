const content = {
    // Navigation text by language
    navigation: {
        en: {
            bio: 'bio',
            links: 'links'
        },
        fr: {
            bio: 'bio',
            links: 'liens'
        },
        ro: {
            bio: 'bio',
            links: 'linkuri'
        }
    },
    
    // Bio text by language (main paragraph content)
    bioText: {
        en: {
            paragraph1: 'hey! my name\'s luca and i am a self-proclaimed tech nerd and professional feline enjoyer. i\'m into computers, smartphones, electronics in general, repairing stuff and networking. i also enjoy electronic music (check my lastfm) and helping people with their tech-related stuff. i speak english, french and romanian and i advocate for internet privacy and OSS. i also have a burning passion for mandarins.',
            paragraph2: 'paradoxically, i don\'t code. like even this crappy website that took way too long to make and tweak is entirely ai, so don\'t expect much from it. check out my links!'
        },
        fr: {
            paragraph1: 'coucou ! je m\'appelle luca et j\'adore la tech : PC, smartphones, électronique en général, réparer des trucs et le networking. j\'aime aussi la musique électronique, aider les gens avec leurs appareils, et les chats ! je parle anglais, français et roumain et je soutiens la confidentialité sur internet et les projets FOSS.',
            paragraph2: 'paradoxalement, je code pas, et ça me donne pas trop envie en vrai. même ce site merdique c\'est que du code ia, donc t\'attend pas à grand chose. va voir mes liens !'
        },
        ro: {
            paragraph1: 'salut! eu sunt luca, sunt amator de pisici profesional, și îmi place tehnologia: PC-uri, laptopuri smartphone-uri, electronice în general, reparat chestii, networking, și muzica electronică. vorbesc engleză, franceză și română, si susțin confidentialitatea pe internet si proiectele FOSS.',
            paragraph2: 'paradoxal, nu codez. nici nu prea am chef sa invat. chiar și site-ul asta prost făcut e doar AI, deci nu te astepta la mare chestie. vezi linkurile mele!'
        }
    },
    
    // Links page text
    linksText: {
        heading: 'socials and other stuff'
    },
    
    // Quotes by language
    quotes: {
        en: '"why do when you can don\'t"',
        fr: '« why do when you can don\'t »',
        ro: '„why do when you can don\'t"'
    },
    
    // Footer text by language
    footers: {
        en: {
            text: 'copyleft 2026 txrmsconditions. do whatever you want with this, i couldn\'t care less, it\'s not made by me either way ',
            linkText: 'source code',
            linkUrl: 'https://github.com/txrmsconditions/txrmsconditions.github.io'
        },
        fr: {
            text: 'copyleft 2026 txrmsconditions. y\'a pas de license, tfaçon c pas moi qui l\'a fait .',
            linkText: 'code source',
            linkUrl: 'https://github.com/txrmsconditions/txrmsconditions.github.io'
        },
        ro: {
            text: 'copyleft 2026 txrmsconditions. niciun license ca oricum nu eu l-am facut.',
            linkText: 'cod sursă',
            linkUrl: 'https://github.com/txrmsconditions/txrmsconditions.github.io'
        },
        links: {
            text: 'copyleft 2026 txrmsconditions. do whatever you want with this, i couldn\'t care less, it\'s not made by me either way ',
            linkText: 'source code',
            linkUrl: 'https://github.com/txrmsconditions/txrmsconditions.github.io'
        }
    }
};

// Current language state
let currentLanguage = 'en';

// Function to inject navigation text
function injectNavigation(lang) {
    const navData = content.navigation[lang] || content.navigation.en;
    const bioLink = document.querySelector('.navigation a[href*="index.html"], .navigation a[data-nav="bio"]');
    const linksLink = document.querySelector('.navigation a[href*="links.html"], .navigation a[data-nav="links"]');
    
    if (bioLink) bioLink.textContent = navData.bio;
    if (linksLink) linksLink.textContent = navData.links;
}

// Function to inject bio text into the page
function injectBioText(lang) {
    const bioData = content.bioText[lang] || content.bioText.en;
    const textContent = document.querySelector('.text-content[data-bio]');
    if (textContent) {
        // Create paragraphs safely to avoid XSS
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        
        // For English, handle the span with title attribute
        if (lang === 'en') {
            // Split at the span and reconstruct safely
            const parts = bioData.paragraph1.split('<span title="fun fact: i once got blacklisted from anydesk one time for having too many clients lol">');
            const beforeSpan = parts[0];
            const afterSpanParts = parts[1] ? parts[1].split('</span>') : ['', ''];
            const spanText = afterSpanParts[0];
            const afterSpan = afterSpanParts[1];
            
            p1.appendChild(document.createTextNode(beforeSpan));
            const span = document.createElement('span');
            span.title = 'fun fact: i once got blacklisted from anydesk one time for having too many clients lol';
            span.textContent = spanText;
            p1.appendChild(span);
            p1.appendChild(document.createTextNode(afterSpan));
        } else {
            p1.textContent = bioData.paragraph1;
        }
        
        p2.textContent = bioData.paragraph2;
        
        textContent.innerHTML = ''; // Clear existing content
        textContent.appendChild(p1);
        textContent.appendChild(p2);
    }
}

// Function to inject links page text
function injectLinksText() {
    const linksHeading = document.querySelector('.text-content p[data-links-heading]');
    if (linksHeading) {
        linksHeading.textContent = content.linksText.heading;
    }
}

// Function to inject quote into the page
function injectQuote(lang) {
    const quoteText = content.quotes[lang] || content.quotes.en;
    const blockquote = document.querySelector('blockquote[data-quote]');
    if (blockquote) {
        blockquote.textContent = quoteText;
    }
}

// Function to inject footer into the page
function injectFooter(lang) {
    const footerData = content.footers[lang] || content.footers.en;
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.innerHTML = `
            <p>${footerData.text}</p>
            <a href="${footerData.linkUrl}">${footerData.linkText}</a>
        `;
    }
}

// Function to update all content for the selected language
function updateContent(lang) {
    currentLanguage = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Check if this is the links page
    const isLinksPage = window.location.pathname.includes('links.html');
    
    if (isLinksPage) {
        injectLinksText();
        injectFooter('links');
    } else {
        injectBioText(lang);
        injectQuote(lang);
        injectFooter(lang);
    }
    
    // Always update navigation
    injectNavigation(lang);
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize content on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for stored language preference or URL hash
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const storedLang = localStorage.getItem('preferredLanguage');
    const initialLang = urlLang || storedLang || 'en';
    
    // Set the select value to match
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = initialLang;
    }
    
    // Load content for the initial language
    updateContent(initialLang);
});
