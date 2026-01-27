// Centralized content management for easy editing
// All quotes, footers, and bio text can be edited here in one place

const content = {
    // Bio text by language (main paragraph content)
    bioText: {
        en: {
            paragraph1: 'hey! my name\'s luca and i am a self-proclaimed tech nerd and professional feline enjoyer. i\'m into computers, smartphones, electronics in general, repairing stuff and networking. i also enjoy electronic music (check my lastfm) and <span title="fun fact: i once got blacklisted from anydesk one time for having too many clients lol">helping people with their tech-related stuff</span>. i speak english, french and romanian and i advocate for multimedia piracy, internet privacy and OSS. also i have a burning passion for mandarins',
            paragraph2: 'paradoxically, i absolutely hate coding. like even this crappy website that took me way too long to make is purely ai slop, so don\'t expect much from it. check out my links!'
        },
        fr: {
            paragraph1: 'coucou ! je m\'appelle luca et j\'aime la tech : PC, smartphones, électronique en général, réparer des trucs et le networking. j\'aime aussi la musique électronique (y\'a mon lastfm stv), aider les gens avec leurs appareils, et les chats ! je parle anglais, français et roumain et je soutiens le piratage multimédia éthique, la confdentialité des données et les projets FOSS.',
            paragraph2: 'paradoxalement, je déteste absolument coder. même ce site merdique que j\'ai mis des plombes à "faire" est presque entièrement écrit avec chatgpt et copilot, alors t\'attend pas à grand chose (stpstp si tu sais le faire, repare mon css, le spacing est affreux ca me fait mal aux yeux). va voir mes liens !'
        },
        ro: {
            paragraph1: 'salut! mă numesc luca, sunt amator de pisici profesional, și îmi place tehnologia: calculatoare, smartphone-uri, electronice în general, reparat chestii și networking. îmi place și muzica electronică (vezi pe lastfm) si să ajut oamenii cu probleme tech. vorbesc engleză, franceză și română, si susțin piratarea multimedia, confidentialitatea si proiectele FOSS.',
            paragraph2: 'paradoxal, urăsc programarea. chiar și acest site prost făcut care a durat mult prea mult sa-l fac e aproape complet făcut cu chatgpt și copilot, deci nu te astepta la mare chestie. vezi linkurile mele!'
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
            text: 'copyleft 2026 txrmsconditions. do whatever you want with this, i couldn\'t care less, it\'s not made by me either way lol',
            linkText: 'source code',
            linkUrl: 'https://github.com/txrmsconditions/txrmsconditions.github.io'
        },
        fr: {
            text: '2025 txrmsconditions. y\'a pas de license, tfaçon c pas moi qui l\'a fait mdr.',
            linkText: 'code source',
            linkUrl: 'https://github.com/txrmsconditions/txrmsconditions.github.io'
        },
        ro: {
            text: '2025 txrmsconditions. niciun license ca oricum nu eu l-am facut.',
            linkText: 'cod sursă',
            linkUrl: 'https://github.com/txrmsconditions/txrmsconditions.github.io'
        },
        links: {
            text: '2025 txrmsconditions. do whatever you want with this, i couldn\'t care less, it\'s not made by me either way lol',
            linkText: 'source code',
            linkUrl: 'https://github.com/txrmsconditions/txrmsconditions.github.io'
        }
    }
};

// Function to inject bio text into the page
function injectBioText(lang) {
    const bioData = content.bioText[lang] || content.bioText.en;
    const textContent = document.querySelector('.text-content[data-bio]');
    if (textContent) {
        textContent.innerHTML = `
            <p>${bioData.paragraph1}</p>
            <p>${bioData.paragraph2}</p>
        `;
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

// Initialize content on page load
document.addEventListener('DOMContentLoaded', function() {
    const htmlLang = document.documentElement.lang || 'en';
    const pageLang = htmlLang === 'fr' ? 'fr' : (htmlLang === 'ro' ? 'ro' : 'en');
    
    // Check if this is the links page
    const isLinksPage = window.location.pathname.includes('links.html');
    
    if (isLinksPage) {
        injectLinksText();
        injectFooter('links');
    } else {
        injectBioText(pageLang);
        injectQuote(pageLang);
        injectFooter(pageLang);
    }
});
