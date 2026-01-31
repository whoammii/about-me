'use strict';

const translations = {
  en: {
    title: 'vCard - Personal Portfolio',
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
      location: 'Location',
      city: 'Dushanbe, Tajikistan'
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
      photography: { title: 'Photography', text: 'I make high-quality photos of any category at a professional level.' },
      tilda: { title: 'Tilda / No-Code', text: 'Rapid launch of landing pages and e-commerce sites on Tilda. Perfect for startups and businesses that need a professional web presence fast.'},
      video_production: { title: 'Video Production', text: 'Professional shooting and editing (Reels, promo videos, ads). I create dynamic visual content that captures attention and tells a story.' },
      graphic_design: { title: 'Graphic Design', text: 'Social media visuals (SMM), and creative advertising materials. I ensure your brand looks consistent and attractive.' }
    },
    testimonials: { title: 'Testimonials' },
    clients: { title: 'Clients' },
    resume: { 
      title: 'Resume',
      education: {
        title: 'Education',
        ilmhona: 'Ilmhona Skills Accelerator School',
        ilmhona_text: '1. Front-end Developer Starter Program <br> 2. Front-end Developer PRO program<br> - During the program, many modern and promising Front-end development technologies and tools were studied, practical skills were developed, and real projects were worked on.',
        it_run: 'IT-RUN Academy',
        it_run_text: 'Front-end development course with a focus on React.js and modern web technologies.',
        skillbox: 'The Skillbox educational platform',
        skillbox_text: 'Profession: Internet marketer<br> - During the program, the main areas of internet marketing were studied: target advertising, contextual advertising, SEO promotion, email marketing, SMM, analytics, and more.'
      },
      experience: {
        title: 'Experience',
        web_programmer: 'Web programmer',
        web_programmer_text: '- Website maintenance dilsuzi.tj',
        graphic_designer: 'Graphic designer',
        graphic_designer_text: '- Create designs for posters on social networks.<br>- Logo design.<br>- Typography.',
        videographer: 'Videographer',
        videographer_text: '- Participation in more than 30+ video projects.<br>- Installation of commercials and promotional videos.<br>- Professional installation using specialized software.'
      },
      skills_title: 'My skills',
      skills: {
        web_programming: 'Web programming',
        graphic_design: 'Graphic design',
        videographer: 'Videographer',
        touch_typing: 'Touch typing'
      },
    },
    portfolio: { 
      title: 'Portfolio',
      product: {
        nft_marketplace: 'NFT Marketplace',
        nft_marketplace_category: 'Web design',
        dilsuzi: 'Dilsuzi',
        dilsuzi_category: 'Web development',
        portfolio_website: 'Site "About Me"',
        portfolio_website_category: 'Web development'
      }
    },
    project: { 
      intro_1: 'Welcome to <strong>uppulse</strong> — my digital space where technology meets creativity. It is not just a channel, but a community where I share my expertise in IT, design, and video production.',
      intro_2: 'Here I publish what stays "behind the scenes": insights, useful resources, and the authentic lifestyle of an IT specialist based in Dushanbe.',
      whats_inside: {
        title: "What's inside?",
        item1: {
          title: 'Web Development',
          text: 'Tips on React, frontend architecture, and modern web technologies. Real-world cases and code reviews.'
        },
        item2: {
          title: 'Video Production',
          text: 'Editing, lighting, and filming techniques. I share project backstages and tips for creating dynamic video content.'
        },
        item3: {
          title: 'Design & Aesthetics',
          text: 'UI/UX analysis, typography, and visual inspiration for creating clean and user-friendly digital products.'
        },
        item4: {
          title: 'Productivity & Lifestyle',
          text: 'Tools and methods I use to stay productive as an IT specialist. Balancing work, learning, and personal growth.'
        }
      },
      cta: {
        title: 'Join uppulse',
        text: 'Stay updated with the latest news and get a daily dose of motivation.',
        btn: 'Open Telegram'
      }
    },
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
      location: 'Город',
      city: 'Душанбе, Таджикистан'
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
      photography: { title: 'Фотография', text: 'Делаю качественные фотографии любой категории на профессиональном уровне.' },
      tilda: { title: 'Tilda / No-Code', text: 'Быстрый запуск лендингов и интернет-магазинов на Tilda. Идеально подходит для стартапов и бизнеса, которым нужен профессиональный веб-сайт в кратчайшие сроки.' },
      video_production: { title: 'Видеопродакшн', text: 'Профессиональная съемка и монтаж (Reels, промо-видео, реклама). Создаю динамичный визуальный контент, который привлекает внимание и рассказывает историю.' },
      graphic_design: { title: 'Графический дизайн', text: 'Визуальные материалы для социальных сетей (SMM) и креативные рекламные материалы. Обеспечиваю единый и привлекательный вид вашего бренда.' }
    },
    testimonials: { title: 'Отзывы' },
    clients: { title: 'Клиенты' },
    resume: { 
      title: 'Резюме', 
      education: {
        title: 'Образование',
        ilmhona: 'Школа акселератор навыков Ilmhona',
        ilmhona_text: '1. Программа для начинающих Front-end разработчиков <br> 2. Профессиональная программа для Front-end разработчиков<br> - В ходе программы были изучены многие современные и перспективные технологии и инструменты Front-end разработки, развиты практические навыки и выполнена работа над реальными проектами.',
        it_run: 'Академия IT-RUN',
        it_run_text: 'Курс по фронтенд-разработке с упором на React.js и современные веб-технологии.',
        skillbox: 'Образовательная платформа Skillbox',
        skillbox_text: 'Профессия: Интернет-маркетолог<br> - В ходе программы были изучены основные направления интернет-маркетинга: таргетированная реклама, контекстная реклама, SEO-продвижение, email-маркетинг, SMM, аналитика и многое другое.'
      },
      experience: {
        title: 'Опыт работы',
        web_programmer: 'Веб-программист',
        web_programmer_text: '- Обслуживание сайта dilsuzi.tj',
        graphic_designer: 'Графический дизайнер',
        graphic_designer_text: '- Создание дизайнов для постеров в социальных сетях.<br>- Дизайн логотипов.<br>- Типография.',
        videographer: 'Видеограф',
        videographer_text: '- Участие более чем в 30+ видео проектах.<br>- Монтаж рекламных и промо видео.<br>- Профессиональный монтаж с использованием специализированного ПО.'
      },
      skills_title: 'Мои навыки',
      skills: {
        web_programming: 'Веб-программирование',
        graphic_design: 'Графический дизайн',
        videographer: 'Видеограф',
        touch_typing: 'Слепая печать'
      },
    },
    portfolio: { 
      title: 'Портфолио',
      product: {
        nft_marketplace: 'NFT Маркетплейс',
        nft_marketplace_category: 'Веб-дизайн',
        dilsuzi: 'Сайт Dilsuzi',
        dilsuzi_category: 'Веб-разработка',
        portfolio_website: 'Cайт "About Me"',
        portfolio_website_category: 'Веб-разработка'
      }
    },
    project: { 
      intro_1: 'Добро пожаловать в <strong>uppulse</strong> — мое цифровое пространство, где технологии встречаются с креативностью. Это не просто канал, а сообщество, где я делюсь своим опытом в области IT, дизайна и видеопродакшна.',
      intro_2: 'Здесь я публикую то, что остается "за кадром": инсайты, полезные ресурсы и аутентичный образ жизни IT-специалиста из Душанбе.',
      whats_inside: {
        title: "Что внутри?",
        item1: {
          title: 'Веб-разработка',
          text: 'Советы по React, архитектуре фронтенда и современным веб-технологиям. Реальные кейсы и обзоры кода.'
        },
        item2: {
          title: 'Видеопродакшн',
          text: 'Техники монтажа, освещения и съёмки. Я делюсь бэкстейджами проектов и советами по созданию динамичного видеоконтента.'
        },
        item3: {
          title: 'Дизайн и эстетика',
          text: 'Анализ UI/UX, типография и визуальное вдохновение для создания чистых и удобных цифровых продуктов.'
        },
        item4: {
          title: 'Продуктивность и лайфстайл',
          text: 'Инструменты и методы, которые я использую для повышения продуктивности как IT-специалист. Баланс между работой, обучением и личностным ростом.'
        }
      },
      cta: {
        title: 'Присоединяйтесь к uppulse',
        text: 'Будьте в курсе последних новостей и получайте ежедневную дозу мотивации.',
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
