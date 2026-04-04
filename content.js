// ─────────────────────────────────────────────────────────────────────────────
//  content.js — all site text lives here. Edit the CONTENT object to update.
// ─────────────────────────────────────────────────────────────────────────────

const CONTENT = {

  nav: {
    en: { bio: 'bio',  links: 'links'   },
    fr: { bio: 'bio',  links: 'liens'   },
    ro: { bio: 'bio',  links: 'linkuri' },
  },

  bio: {
    en: [
      "hey! my name's luca and i am a self-proclaimed tech nerd and professional feline enjoyer. i'm into computers, smartphones, electronics in general, repairing stuff and networking. i also enjoy electronic music (check my lastfm) and helping people with their tech-related stuff. i speak english, french and romanian and i advocate for internet privacy and OSS. i also have a burning passion for mandarins.",
      "paradoxically, i don't code. like even this crappy website that took way too long to make and tweak is entirely ai, so don't expect much from it. check out my links!"
    ],
    fr: [
      "coucou ! je m'appelle luca et j'adore la tech : PC, smartphones, électronique en général, réparer des trucs et le networking. j'aime aussi la musique électronique, aider les gens avec leurs appareils, et les chats ! je parle anglais, français et roumain et je soutiens la confidentialité sur internet et les projets FOSS.",
      "paradoxalement, je code pas, et ça me donne pas trop envie en vrai. même ce site merdique c'est que du code ia, donc t'attend pas à grand chose. va voir mes liens !"
    ],
    ro: [
      "salut! eu sunt luca, sunt amator de pisici profesional, și îmi place tehnologia: PC-uri, laptopuri smartphone-uri, electronice în general, reparat chestii, networking, și muzica electronică. vorbesc engleză, franceză și română, si susțin confidentialitatea pe internet si proiectele FOSS.",
      "paradoxal, nu codez. nici nu prea am chef sa invat. chiar și site-ul asta prost făcut e doar AI, deci nu te astepta la mare chestie. vezi linkurile mele!"
    ],
  },

  linksHeading: {
    en: 'socials and other stuff',
    fr: 'socials and other stuff',
    ro: 'socials and other stuff',
  },

  quote: {
    en: '"why do when you can don\'t"',
    fr: '« why do when you can don\'t »',
    ro: '„why do when you can don\'t"',
  },

  footer: {
    en: {
      text:     "copyleft 2026 txrmsconditions. do whatever you want with this, i couldn't care less, it's not made by me either way",
      linkText: 'source code',
      linkUrl:  'https://github.com/txrmsconditions/txrmsconditions.github.io',
    },
    fr: {
      text:     "copyleft 2026 txrmsconditions. y'a pas de license, tfaçon c pas moi qui l'a fait.",
      linkText: 'code source',
      linkUrl:  'https://github.com/txrmsconditions/txrmsconditions.github.io',
    },
    ro: {
      text:     "copyleft 2026 txrmsconditions. niciun license ca oricum nu eu l-am facut.",
      linkText: 'cod sursă',
      linkUrl:  'https://github.com/txrmsconditions/txrmsconditions.github.io',
    },
  },

};

// ─── Engine — no need to edit below ──────────────────────────────────────────

function updateContent(lang) {
  document.documentElement.lang = lang;

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );

  // Navigation
  const nav = CONTENT.nav[lang] || CONTENT.nav.en;
  document.querySelectorAll('[data-nav="bio"]').forEach(el => el.textContent = nav.bio);
  document.querySelectorAll('[data-nav="links"]').forEach(el => el.textContent = nav.links);

  const isLinks = window.location.pathname.includes('links');

  // Bio
  const bioEl = document.querySelector('[data-bio]');
  if (bioEl) {
    const paras = CONTENT.bio[lang] || CONTENT.bio.en;
    bioEl.innerHTML = paras.map(p => `<p>${p}</p>`).join('');
  }

  // Links heading
  const headEl = document.querySelector('[data-links-heading]');
  if (headEl) headEl.textContent = CONTENT.linksHeading[lang] || CONTENT.linksHeading.en;

  // Quote
  const quoteEl = document.querySelector('[data-quote]');
  if (quoteEl) quoteEl.textContent = CONTENT.quote[lang] || CONTENT.quote.en;

  // Footer
  const footerEl = document.querySelector('.footer');
  if (footerEl) {
    const f = CONTENT.footer[lang] || CONTENT.footer.en;
    footerEl.innerHTML = `<span>${f.text} <a href="${f.linkUrl}">${f.linkText}</a></span>`;
  }

  localStorage.setItem('preferredLang', lang);
}

function switchLang(lang) {
  updateContent(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const params  = new URLSearchParams(window.location.search);
  const lang    = params.get('lang') || localStorage.getItem('preferredLang') || 'en';
  updateContent(lang);
});
