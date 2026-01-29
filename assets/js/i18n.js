'use strict';

const translations = {
  en: {
    title: 'vCard - Personal Portfolio',
    nav: {
      about: 'About',
      resume: 'Resume',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact'
    },
    sidebar: {
      show_contacts: 'Show Contacts'
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      phone: 'Phone',
      birthday: 'Birthday',
      location: 'Location'
    },
    about: {
      title: 'About me',
      p1: 'I am an IT specialist from Dushanbe focused on web development and user interfaces for modern digital products. I enjoy turning complex requirements into clear, logical, and visually clean solutions.',
      p2: 'My job is to make your product stable, user-friendly, and aesthetically pleasing while keeping it easy to maintain and grow.'
    },
    service: {
      title: "What I'm doing",
      web_design: { title: 'Web design', text: 'The most modern and high-quality design made at a professional level.' },
      web_development: { title: 'Web development', text: 'High-quality development of sites at the professional level.' },
      mobile_apps: { title: 'Mobile apps', text: 'Professional development of applications for iOS and Android.' },
      photography: { title: 'Photography', text: 'I make high-quality photos of any category at a professional level.' }
    },
    testimonials: { title: 'Testimonials' },
    clients: { title: 'Clients' },
    resume: { title: 'Resume', skills_title: 'My skills' },
    portfolio: { title: 'Portfolio' },
    blog: { title: 'Blog' },
    // ...existing code...
    filter: {
      all: 'All',
      web_design: 'Web design',
      applications: 'Applications',
      web_development: 'Web development',
      select_category: 'Select category'
    }
  },
  
  ru: {
    title: 'vCard - Личное портфолио',
    nav: {
      about: 'Обо мне',
      resume: 'Резюме',
      portfolio: 'Портфолио',
      blog: 'Блог',
      contact: 'Контакты'
    },
    sidebar: {
      show_contacts: 'Показать контакты'
    },
    contact: {
      title: 'Контакты',
      email: 'Эл. почта',
      phone: 'Телефон',
      birthday: 'Дата',
      location: 'Город'
    },
    about: {
      title: 'Обо мне',
      p1: 'Я специалист по IT из Душанбе, специализируюсь на веб-разработке и пользовательских интерфейсах для современных цифровых продуктов. Мне нравится преобразовывать сложные требования в понятные, логичные и визуально чистые решения.',
      p2: 'Моя задача — сделать ваш продукт стабильным, удобным и эстетически привлекательным, при этом легким в сопровождении и развитии.'
    },
    service: {
      title: 'Чем я занимаюсь',
      web_design: { title: 'Веб-дизайн', text: 'Современный и качественный дизайн, выполненный на профессиональном уровне.' },
      web_development: { title: 'Веб-разработка', text: 'Качественная разработка сайтов на профессиональном уровне.' },
      mobile_apps: { title: 'Мобильные приложения', text: 'Профессиональная разработка приложений для iOS и Android.' },
      photography: { title: 'Фотография', text: 'Делаю качественные фотографии любой категории на профессиональном уровне.' }
    },
    testimonials: { title: 'Отзывы' },
    clients: { title: 'Клиенты' },
    resume: { title: 'Резюме', skills_title: 'Мои навыки' },
    portfolio: { title: 'Портфолио' },
    blog: { title: 'Блог' },
    // ...existing code...
    filter: {
      all: 'Все',
      web_design: 'Веб-дизайн',
      applications: 'Приложения',
      web_development: 'Веб-разработка',
      select_category: 'Выбрать категорию'
    }
  }
};

function getByKey(langObj, key) {
  if (!key) return undefined;
  const parts = key.split('.');
  let cur = langObj;
  for (let p of parts) {
    if (!cur) return undefined;
    cur = cur[p];
  }
  return cur;
}

function valueToKey(value) {
  return value.toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_');
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getByKey(translations[lang], key);
    if (text !== undefined) el.innerText = text;
  });

  // update document title
  if (translations[lang].title) document.title = translations[lang].title;

  // update select value to currently active filter's translation
  const activeFilter = document.querySelector('[data-filter-btn].active');
  let selected = activeFilter ? activeFilter.dataset.value : 'all';
  const selKey = valueToKey(selected);
  const selText = getByKey(translations[lang], `filter.${selKey}`) || getByKey(translations[lang], 'filter.all');
  const selectValueEl = document.querySelector('[data-selecct-value]');
  if (selectValueEl) selectValueEl.innerText = selText;

  // update language buttons active class
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Init on DOM ready
window.addEventListener('DOMContentLoaded', () => {
  // bind language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const lang = this.dataset.lang;
      setLanguage(lang);
    });
  });

  // set language from localStorage or browser
  let lang = localStorage.getItem('lang');
  if (!lang) {
    lang = navigator.language && navigator.language.startsWith('ru') ? 'ru' : 'en';
  }
  setLanguage(lang);
});
