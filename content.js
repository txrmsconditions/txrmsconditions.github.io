// ─────────────────────────────────────────────────────────────────────────────
//  content.js: all the site text (en / fr / ro) + a few small interactions.
//  To change text, edit STRINGS. Keys match the data-i18n attributes in
//  index.html. English is used for anything missing in another language.
// ─────────────────────────────────────────────────────────────────────────────

const STRINGS = {
  en: {
    'skip': 'skip to content',
    'nav.about': 'about',
    'nav.stuff': 'stuff',
    'nav.projects': 'projects',
    'nav.links': 'links',

    'hero.eyebrow': 'tech nerd · cat person · mandarin enjoyer',
    'hero.title': "hey, i'm luca",
    'hero.lead': "i like computers, phones and pretty much anything with a circuit board in it. in my free time i fix stuff, mess around with networks and help friends when their tech acts up.",
    'hero.cta': 'say hi',
    'hero.cta2': 'what i made',

    'about.heading': 'about me',
    'about.p1': "i've been the family's tech support for as long as i can remember. these days that means repairing laptops, flashing custom roms on old phones and setting up home networks that actually work.",
    'about.p2': "i care a lot about privacy and open-source software, so i usually end up recommending the free alternative. outside of tech it's electronic music, cats and an honestly unreasonable amount of mandarins.",
    'about.p3': "funny thing is, i don't really code. this site was put together with a lot of help from ai.",
    'now.listenLabel': 'listening to',
    'now.listen': 'electronic music, mostly',
    'now.speakLabel': 'speaking',

    'stuff.heading': "stuff i'm into",
    'stuff.computers': 'computers',
    'stuff.phones': 'smartphones',
    'stuff.repair': 'repairing stuff',
    'stuff.networking': 'networking',
    'stuff.android': 'android & custom roms',
    'stuff.privacy': 'privacy',
    'stuff.oss': 'open source',
    'stuff.ai': 'ai',
    'stuff.vibecoding': 'vibecoding',
    'stuff.sales': 'sales',
    'stuff.music': 'electronic music',
    'stuff.cats': 'cats',
    'stuff.mandarins': 'mandarins',

    'projects.heading': 'things i made',
    'projects.p1.tag': 'my first project',
    'projects.p1.body': "a multiplayer word-guessing game in french. you throw words at it, it tells you how close you are, and you and your friends try to find the secret word together.",
    'projects.p1.link': 'play it',
    'projects.p2.tag': 'website',
    'projects.p2.title': 'this website',
    'projects.p2.body': "the page you're looking at right now. three languages, no frameworks, open source on github.",
    'projects.p2.link': 'see the code',

    'links.heading': 'find me',
    'links.lead': "easiest way to reach me is telegram or discord. i'm also around on these:",
    'links.telegram': 'message me',
    'links.discord': 'add me',
    'links.github': 'my repos',
    'links.youtube': 'videos',
    'links.lastfm': 'what i listen to',
    'links.xda': 'phone stuff',
    'links.mowned': 'profile',

    'footer.quote': '"why do when you can don\'t"',
    'footer.source': 'source code',
  },

  fr: {
    'skip': 'aller au contenu',
    'nav.about': 'moi',
    'nav.stuff': 'trucs',
    'nav.projects': 'projets',
    'nav.links': 'liens',

    'hero.eyebrow': 'geek · fan de chats · accro aux mandarines',
    'hero.title': "salut, moi c'est luca",
    'hero.lead': "j'aime les ordis, les téléphones et à peu près tout ce qui a une carte électronique dedans. sur mon temps libre je répare des trucs, je bidouille des réseaux et j'aide les potes quand leur matos fait des siennes.",
    'hero.cta': 'me contacter',
    'hero.cta2': 'mes projets',

    'about.heading': 'à propos',
    'about.p1': "je suis le support technique de la famille depuis toujours. en ce moment ça veut dire réparer des pc portables, flasher des roms custom sur des vieux téléphones et monter des réseaux à la maison qui marchent vraiment.",
    'about.p2': "je tiens beaucoup à la vie privée et aux logiciels libres, donc je finis presque toujours par conseiller l'alternative open source. à côté de ça : musique électronique, chats, et une quantité franchement déraisonnable de mandarines.",
    'about.p3': "le plus drôle, c'est que je code pas vraiment. ce site a été fait avec pas mal d'aide de l'ia.",
    'now.listenLabel': "j'écoute",
    'now.listen': "surtout de l'électro",
    'now.speakLabel': 'je parle',

    'stuff.heading': 'ce qui me plaît',
    'stuff.computers': 'ordis',
    'stuff.phones': 'smartphones',
    'stuff.repair': 'réparer des trucs',
    'stuff.networking': 'réseaux',
    'stuff.android': 'android & roms custom',
    'stuff.privacy': 'vie privée',
    'stuff.oss': 'open source',
    'stuff.ai': 'ia',
    'stuff.vibecoding': 'vibecoding',
    'stuff.sales': 'vente',
    'stuff.music': 'musique électronique',
    'stuff.cats': 'chats',
    'stuff.mandarins': 'mandarines',

    'projects.heading': "ce que j'ai fait",
    'projects.p1.tag': 'mon premier projet',
    'projects.p1.body': "un jeu multijoueur où il faut deviner un mot. tu proposes des mots, le jeu te dit si tu chauffes, et tu cherches le mot secret avec tes potes.",
    'projects.p1.link': 'jouer',
    'projects.p2.tag': 'site web',
    'projects.p2.title': 'ce site',
    'projects.p2.body': "la page que t'es en train de regarder. trois langues, pas de framework, open source sur github.",
    'projects.p2.link': 'voir le code',

    'links.heading': 'me trouver',
    'links.lead': "le plus simple pour me joindre c'est telegram ou discord. sinon je traîne aussi par là :",
    'links.telegram': 'écris-moi',
    'links.discord': 'ajoute-moi',
    'links.github': 'mes repos',
    'links.youtube': 'vidéos',
    'links.lastfm': "ce que j'écoute",
    'links.xda': 'trucs de téléphone',
    'links.mowned': 'profil',

    'footer.quote': "« why do when you can don't »",
    'footer.source': 'code source',
  },

  ro: {
    'skip': 'sari la conținut',
    'nav.about': 'despre',
    'nav.stuff': 'chestii',
    'nav.projects': 'proiecte',
    'nav.links': 'linkuri',

    'hero.eyebrow': 'pasionat de tech · iubitor de pisici · fan de mandarine',
    'hero.title': 'salut, eu sunt luca',
    'hero.lead': "îmi plac calculatoarele, telefoanele și cam orice are o placă electronică în el. în timpul liber repar chestii, mă joc cu rețele și îi ajut pe prieteni când le face figuri tehnologia.",
    'hero.cta': 'scrie-mi',
    'hero.cta2': 'ce am făcut',

    'about.heading': 'despre mine',
    'about.p1': "sunt suportul tehnic al familiei de când mă știu. acum asta înseamnă să repar laptopuri, să pun rom-uri custom pe telefoane vechi și să configurez rețele de acasă care chiar merg.",
    'about.p2': "țin mult la confidențialitate și la software-ul open-source, așa că de obicei ajung să recomand alternativa gratuită. în afară de tech: muzică electronică, pisici și o cantitate sincer exagerată de mandarine.",
    'about.p3': "partea amuzantă e că nu prea codez. site-ul ăsta a fost făcut cu mult ajutor de la ai.",
    'now.listenLabel': 'ascult',
    'now.listen': 'mai ales muzică electronică',
    'now.speakLabel': 'vorbesc',

    'stuff.heading': 'chestii care îmi plac',
    'stuff.computers': 'calculatoare',
    'stuff.phones': 'smartphone-uri',
    'stuff.repair': 'reparat chestii',
    'stuff.networking': 'rețelistică',
    'stuff.android': 'android & rom-uri custom',
    'stuff.privacy': 'confidențialitate',
    'stuff.oss': 'open source',
    'stuff.ai': 'ai',
    'stuff.vibecoding': 'vibecoding',
    'stuff.sales': 'vânzări',
    'stuff.music': 'muzică electronică',
    'stuff.cats': 'pisici',
    'stuff.mandarins': 'mandarine',

    'projects.heading': 'ce am făcut',
    'projects.p1.tag': 'primul meu proiect',
    'projects.p1.body': "un joc multiplayer de ghicit cuvinte, în franceză. dai cuvinte, jocul îți spune cât de aproape ești și încerci cu prietenii să găsești cuvântul secret.",
    'projects.p1.link': 'joacă',
    'projects.p2.tag': 'site web',
    'projects.p2.title': 'site-ul ăsta',
    'projects.p2.body': "pagina la care te uiți acum. trei limbi, fără framework-uri, open source pe github.",
    'projects.p2.link': 'vezi codul',

    'links.heading': 'unde mă găsești',
    'links.lead': 'cel mai ușor mă prinzi pe telegram sau discord. mai sunt și pe:',
    'links.telegram': 'scrie-mi',
    'links.discord': 'adaugă-mă',
    'links.github': 'repo-urile mele',
    'links.youtube': 'videoclipuri',
    'links.lastfm': 'ce ascult',
    'links.xda': 'chestii de telefon',
    'links.mowned': 'profil',

    'footer.quote': '„why do when you can don\'t"',
    'footer.source': 'cod sursă',
  },
};

const SUPPORTED = Object.keys(STRINGS);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── Language ────────────────────────────────────────────────────────────────

function applyLang(lang) {
  const dict = STRINGS[lang] || STRINGS.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = dict[key] ?? STRINGS.en[key] ?? el.textContent;
  });
  document.querySelectorAll('.lang [data-lang]').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
  try { localStorage.setItem('preferredLang', lang); } catch (_) {}
}

function switchLang(lang) {
  if (lang === document.documentElement.lang) return;
  const main = document.getElementById('main');
  if (reduceMotion || !main) return applyLang(lang);
  main.classList.add('is-switching');
  setTimeout(() => {
    applyLang(lang);
    main.classList.remove('is-switching');
  }, 180);
}

function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  let stored = null;
  try { stored = localStorage.getItem('preferredLang'); } catch (_) {}
  const fromBrowser = (navigator.language || 'en').slice(0, 2);
  return [fromUrl, stored, fromBrowser].find(l => SUPPORTED.includes(l)) || 'en';
}

// ─── Init ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  applyLang(initialLang());

  document.querySelectorAll('.lang [data-lang]').forEach(btn =>
    btn.addEventListener('click', () => switchLang(btn.dataset.lang))
  );

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // header gets a hairline once you scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // fade things in as they scroll into view
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  }

  // highlight the nav link for whatever section is on screen
  const links = [...document.querySelectorAll('.nav a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
  }

  // little easter egg: click the mandarin
  const orange = document.querySelector('.sticker');
  if (orange) {
    orange.addEventListener('click', () => {
      orange.classList.remove('spin');
      void orange.offsetWidth;
      orange.classList.add('spin');
    });
  }
});
