'use strict';

const translations = {
  en: {
    title: 'Mahmadali Halimov — Frontend Developer',
    nav: {
      about: 'About',
      resume: 'Resume',
      portfolio: 'Portfolio',
      project: 'Project',
      contact: 'Contact'
    },
    sidebar: {
      title: 'IT-specialist',
      show_contacts: 'Show Contacts'
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      phone: 'Phone',
      birthday: 'Birthday',
      cta_label: 'Have a project in mind?',
      cta_title: "Let's make it useful and beautiful.",
      cta_text: 'The fastest way to reach me is Telegram or email.'
    },
    about: {
      title: 'About me',
      eyebrow: 'Frontend developer · designer · AI automation',
      hero_title: 'I turn digital ideas into clear, useful experiences.',
      hero_lead: 'I build responsive React interfaces, create visual systems, and automate routine work with AI.',
      cta_contact: 'Write on Telegram',
      cta_work: 'View work',
      fact_experience: 'in digital work',
      fact_videos: 'video projects',
      fact_stack: 'and TypeScript',
      p1: 'I build digital products at the intersection of frontend development, visual design, and AI tools — from the first idea to a polished, responsive result.',
      p2: 'My approach is simple: clear structure, reliable implementation, and visual details that help people understand the product faster.'
    },
    service: {
      title: "What I'm doing",
      web_design: { title: 'Web design', text: 'Designing clean interfaces that support business goals and feel easy to use.' },
      web_development: { title: 'Web development', text: 'Building responsive websites and interfaces with React and TypeScript.' },
      mobile_apps: { title: 'Mobile apps', text: 'Designing focused mobile experiences for iOS and Android.' },
      photography: { title: 'Photography', text: 'Producing clean visual content for digital communication.' },
      tilda: { title: 'No-code platforms', text: 'Building clear, effective websites on Tilda, Webflow, and Framer for ideas that need to go live quickly.'},
      video_production: { title: 'Video Production', text: 'Editing promotional, advertising, and social video that communicates the idea clearly.' },
      graphic_design: { title: 'Graphic Design', text: 'Creating visual materials for social media, presentations, and digital campaigns.' }
    },
    testimonials: { title: 'Testimonials' },
    clients: { title: 'Clients' },
    resume: { 
      title: 'Resume',
      education: {
        title: 'Education',
        rosbiotech: 'Rosbiotech University',
        rosbiotech_period: '2024 — Present',
        rosbiotech_text: "Bachelor's degree"
      },
      experience: {
        title: 'Experience',
        bonoor: 'Lead Frontend Developer — Bonoor Group',
        bonoor_period: 'May 2026 — Present',
        bonoor_text: 'Built and maintained websites and landing pages with React and TypeScript.<br>Created marketing visuals, presentations, and promotional content for AI products, including Agentum.<br>Managed Git/GitHub workflows: branches, pull requests, and code review.',
        dilsuzi: 'IT Specialist — NGO “Dilsuzi”',
        dilsuzi_period: '2020 — Present',
        dilsuzi_text: "Maintained the organization's website, dilsuzi.tj.<br>Designed posters and typography for social media materials.<br>Edited and produced 30+ video projects, including advertising and promotional videos."
      },
      skills_title: 'My skills',
      skills: {
        ai_automation: 'AI Agents & Automation',
        touch_typing: 'Touch typing',
        graphic_design: 'Graphic design (Figma, Canva)',
        editing: 'Editing (Premiere Pro, Final Cut)'
      },
    },
    portfolio: { 
      title: 'Portfolio',
      intro: 'Selected web projects that show my approach to interface design, development, and clear communication.',
      product: {
        nft_marketplace: 'NFT Marketplace',
        nft_marketplace_category: 'Web design',
        nft_marketplace_summary: 'A marketplace concept focused on a clear product journey.',
        dilsuzi: 'Dilsuzi',
        dilsuzi_category: 'Web development',
        dilsuzi_summary: 'Website support, content updates, and visual materials for the organization.',
        portfolio_website: 'Site "About Me"',
        portfolio_website_category: 'Web development',
        portfolio_website_summary: 'A personal website that presents work, skills, and contacts clearly.'
      }
    },
    project: { 
      intro_1: '<strong>uppulse</strong> is my channel about practical technology, design, and creative work.',
      intro_2: 'Here I share useful tools, project insights, and the process behind digital products.',
      whats_inside: {
        title: "What's inside?",
        item1: {
          title: 'Web Development',
          text: 'React, frontend architecture, useful tools, and practical project lessons.'
        },
        item2: {
          title: 'Video Production',
          text: 'Editing, filming, and simple techniques for stronger promotional video.'
        },
        item3: {
          title: 'Design & Aesthetics',
          text: 'Interface analysis, typography, and visual references for better digital products.'
        },
        item4: {
          title: 'Productivity & Lifestyle',
          text: 'Tools and routines that help balance work, learning, and personal projects.'
        }
      },
      cta: {
        title: 'Join uppulse',
        text: 'Follow for practical ideas, useful tools, and new project notes.',
        btn: 'Open Telegram'
      }
    },
    // ...existing code...
    filter: {
      all: 'All',
      web_design: 'Web design',
      applications: 'Applications',
      web_development: 'Web development',
      video_production: 'Video production',
      select_category: 'Select category'
    }
  },

  ru: {
    title: 'Махмадали Халимов — фронтенд-разработчик',
    nav: {
      about: 'Обо мне',
      resume: 'Резюме',
      portfolio: 'Портфолио',
      project: 'Проект',
      contact: 'Контакты'
    },
    sidebar: {
      title: 'IT-специалист',
      show_contacts: 'Показать контакты'
    },
    contact: {
      title: 'Контакты',
      email: 'Эл. почта',
      phone: 'Телефон',
      birthday: 'Дата',
      cta_label: 'Есть задача или идея?',
      cta_title: 'Сделаем её полезной и красивой.',
      cta_text: 'Быстрее всего связаться со мной в Telegram или по почте.'
    },
    about: {
      title: 'Обо мне',
      eyebrow: 'Фронтенд-разработчик · дизайнер · AI-автоматизация',
      hero_title: 'Превращаю цифровые идеи в понятные и полезные продукты.',
      hero_lead: 'Создаю адаптивные интерфейсы на React, визуальные системы и автоматизирую рутинные задачи с помощью AI.',
      cta_contact: 'Написать в Telegram',
      cta_work: 'Смотреть работы',
      fact_experience: 'в digital-сфере',
      fact_videos: 'видеопроектов',
      fact_stack: 'и TypeScript',
      p1: 'Создаю цифровые продукты на стыке фронтенд-разработки, визуального дизайна и AI-инструментов — от первой идеи до готового адаптивного результата.',
      p2: 'Мой подход простой: понятная структура, надёжная реализация и визуальные детали, которые помогают быстрее разобраться в продукте.'
    },
    service: {
      title: 'Чем я занимаюсь',
      web_design: { title: 'Веб-дизайн', text: 'Проектирую чистые интерфейсы, которые помогают решать задачи бизнеса и удобны для пользователей.' },
      web_development: { title: 'Веб-разработка', text: 'Разрабатываю адаптивные сайты и интерфейсы на React и TypeScript.' },
      mobile_apps: { title: 'Мобильные приложения', text: 'Проектирую понятные мобильные решения для iOS и Android.' },
      photography: { title: 'Фотография', text: 'Создаю чистый визуальный контент для digital-коммуникации.' },
      tilda: { title: 'No-code платформы', text: 'Создаю понятные и эффективные сайты на Tilda, Webflow и Framer для идей, которым важно быстро выйти в онлайн.' },
      video_production: { title: 'Видеопродакшн', text: 'Монтирую промо, рекламу и контент для соцсетей, который ясно передаёт идею.' },
      graphic_design: { title: 'Графический дизайн', text: 'Создаю визуалы для соцсетей, презентаций и digital-кампаний.' }
    },
    testimonials: { title: 'Отзывы' },
    clients: { title: 'Клиенты' },
    resume: { 
      title: 'Резюме', 
      education: {
        title: 'Образование',
        rosbiotech: 'Университет «Росбиотех»',
        rosbiotech_period: '2024 — настоящее время',
        rosbiotech_text: 'Бакалавриат'
      },
      experience: {
        title: 'Опыт работы',
        bonoor: 'Ведущий фронтенд-разработчик — Bonoor Group',
        bonoor_period: 'май 2026 — настоящее время',
        bonoor_text: 'Разрабатываю и поддерживаю сайты и лендинги на React и TypeScript.<br>Создаю маркетинговые визуалы, презентации и рекламные материалы для AI-продуктов, включая Agentum.<br>Веду Git/GitHub-процессы: ветки, pull request’ы и код-ревью.',
        dilsuzi: 'IT-специалист — ОО «Дилсузи»',
        dilsuzi_period: '2020 — настоящее время',
        dilsuzi_text: 'Веду и поддерживаю сайт организации dilsuzi.tj.<br>Разрабатываю постеры и типографику для материалов в социальных сетях.<br>Монтирую и произвожу 30+ видеопроектов, включая рекламные и промо-ролики.'
      },
      skills_title: 'Мои навыки',
      skills: {
        ai_automation: 'ИИ-агенты и автоматизация',
        touch_typing: 'Слепая печать',
        graphic_design: 'Графический дизайн (Figma, Canva)',
        editing: 'Монтаж (Premiere Pro, Final Cut)'
      },
    },
    portfolio: { 
      title: 'Портфолио',
      intro: 'Избранные веб-проекты, которые показывают мой подход к дизайну интерфейсов, разработке и ясной коммуникации.',
      product: {
        nft_marketplace: 'NFT Маркетплейс',
        nft_marketplace_category: 'Веб-дизайн',
        nft_marketplace_summary: 'Концепт маркетплейса с фокусом на понятный путь пользователя.',
        dilsuzi: 'Сайт Dilsuzi',
        dilsuzi_category: 'Веб-разработка',
        dilsuzi_summary: 'Поддержка сайта, обновление контента и визуальные материалы для организации.',
        portfolio_website: 'Cайт "About Me"',
        portfolio_website_category: 'Веб-разработка',
        portfolio_website_summary: 'Персональный сайт, который понятно представляет работы, навыки и контакты.'
      }
    },
    project: { 
      intro_1: '<strong>uppulse</strong> — мой канал о практичных технологиях, дизайне и творческой работе.',
      intro_2: 'Здесь я делюсь полезными инструментами, выводами из проектов и процессом создания цифровых продуктов.',
      whats_inside: {
        title: "Что внутри?",
        item1: {
          title: 'Веб-разработка',
          text: 'React, архитектура фронтенда, полезные инструменты и выводы из реальных проектов.'
        },
        item2: {
          title: 'Видеопродакшн',
          text: 'Монтаж, съёмка и простые приёмы, которые делают промо-видео сильнее.'
        },
        item3: {
          title: 'Дизайн и эстетика',
          text: 'Разбор интерфейсов, типографика и визуальные ориентиры для лучших digital-продуктов.'
        },
        item4: {
          title: 'Продуктивность и лайфстайл',
          text: 'Инструменты и привычки, которые помогают совмещать работу, обучение и личные проекты.'
        }
      },
      cta: {
        title: 'Присоединяйтесь к uppulse',
        text: 'Подписывайтесь на практичные идеи, полезные инструменты и заметки о новых проектах.',
        btn: 'Открыть Telegram'
      }

    },
    // ...existing code...
    filter: {
      all: 'Все',
      web_design: 'Веб-дизайн',
      applications: 'Приложения',
      web_development: 'Веб-разработка',
      video_production: 'Видеопродакшн',
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
    
    if (text !== undefined) {
      // Используем innerHTML вместо innerText, чтобы HTML-теги работали
      el.innerHTML = text;
    }
  });

  // update document title
  if (translations[lang].title) document.title = translations[lang].title;

  // update select value to currently active filter's translation
  const activeFilter = document.querySelector('[data-filter-btn].active');
  let selected = activeFilter ? activeFilter.dataset.value : 'all';
  const selKey = valueToKey(selected);
  const selText = getByKey(translations[lang], `filter.${selKey}`) || getByKey(translations[lang], 'filter.all');
  const selectValueEl = document.querySelector('[data-selecct-value]');
  if (selectValueEl) selectValueEl.innerText = selText; // Здесь оставляем innerText

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
