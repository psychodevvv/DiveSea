const nfts = [
  { title: 'Sun-Glass', image: './assets/nft1.png', date: '07h 09m 12s', price: '1.75' },
  { title: 'Sun-Glass', image: './assets/nft2.png', date: '07h 09m 12s', price: '1.75' },
  { title: 'Sun-Glass', image: './assets/nft3.png', date: '07h 09m 12s', price: '1.75' },
  { title: 'NuEvey',   image: './assets/nft4.png', date: '19h 09m 12s', price: '1.25' },
  { title: 'Sun-Glass', image: './assets/nft1.png', date: '07h 09m 12s', price: '1.75' }
];

const collections = [
  { title: 'Alex Ca.', titleP: 'By Alex', image: './assets/nft1.png', volume: '8,456', percent: '+ 27.78%', floorPrice: '3,5', owners: '2.2K', items: '500' },
  { title: 'Alex Ca.', titleP: 'By Alex', image: './assets/nft2.png', volume: '4,780', percent: '+ 27.78%', floorPrice: '7,9', owners: '3.4K', items: '900' },
  { title: 'Alex Ca.', titleP: 'By Alex', image: './assets/nft1.png', volume: '8,456', percent: '+ 27.78%', floorPrice: '3,5', owners: '2.2K', items: '500' },
  { title: 'Alex Ca.', titleP: 'By Alex', image: './assets/nft2.png', volume: '4,780', percent: '+ 27.78%', floorPrice: '7,9', owners: '3.4K', items: '900' }
];

const marketNfts = [
  { title: 'Sun-Glass', image: './assets/nft1.png', date: '07h 09m 12s', price: '1.75' },
  { title: 'Sun-Glass', image: './assets/nft2.png', date: '07h 09m 12s', price: '1.75' },
  { title: 'Sun-Glass', image: './assets/nft3.png', date: '07h 09m 12s', price: '1.75' },
  { title: 'NuEvey',   image: './assets/nft4.png', date: '19h 09m 12s', price: '1.25' },
  { title: 'Sun-Glass', image: './assets/nft3.png', date: '07h 09m 12s', price: '1.75' },
  { title: 'NuEvey',   image: './assets/nft4.png', date: '19h 09m 12s', price: '1.25' },
  { title: 'Sun-Glass', image: './assets/nft2.png', date: '07h 09m 12s', price: '1.75' },
  { title: 'Sun-Glass', image: './assets/nft1.png', date: '07h 09m 12s', price: '1.75' },
  { title: 'Sun-Glass', image: './assets/nft3.png', date: '07h 09m 12s', price: '1.75' },
  { title: 'NuEvey',   image: './assets/nft4.png', date: '19h 09m 12s', price: '1.25' }
];

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function insertHTMLWithAnim(containerSelector, htmlStrings, staggerDelay = 0.08) {
  try {
    const container = document.querySelector(containerSelector);
    if (!container) {
      console.warn(`insertHTMLWithAnim: контейнер ${containerSelector} не найден.`);
      return;
    }
    const frag = document.createDocumentFragment();
    htmlStrings.forEach(html => {
      const tmp = document.createElement('div');
      tmp.innerHTML = html.trim();
      while (tmp.firstChild) {
        const node = tmp.firstChild;
        if (node.nodeType === 1) node.classList.add('scroll-anim');
        frag.appendChild(node);
      }
    });
    container.appendChild(frag);
    if (container.classList.contains('stagger')) {
      const children = Array.from(container.children);
      children.forEach((child, idx) => {
        const type = container.dataset.anim || child.dataset.anim || 'fade-up';
        child.classList.add(`anim-${type}`);
        const duration = child.dataset.animDuration || container.dataset.animDuration || '0.7s';
        const delay = child.dataset.animDelay || `${idx * (parseFloat(container.dataset.animStagger || staggerDelay))}s`;
        child.style.animationDelay = delay;
        child.style.animationDuration = duration;
      });
      if (container.classList.contains('is-visible')) {
        const stepMs = parseFloat(container.dataset.animStagger || staggerDelay) * 1000;
        Array.from(container.children).forEach((child, idx) => {
          setTimeout(() => child.classList.add('is-visible'), idx * stepMs);
        });
      }
    } else {
      if (container.classList.contains('is-visible')) {
        Array.from(container.children).forEach(child => child.classList.add('is-visible'));
      }
    }
  } catch (err) {
    console.error('insertHTMLWithAnim error:', err);
  }
}

const timeMap = {
  morning: 'themes/time/morning.css',
  day: 'themes/time/day.css',
  evening: 'themes/time/evening.css',
  night: 'themes/time/night.css'
};

const moodMap = {
  calm: 'themes/mood/calm.css',
  energetic: 'themes/mood/energetic.css',
  mysterious: 'themes/mood/mysterious.css'
};

const STORAGE_KEYS = {
  TIME: 'site-time-theme',
  MOOD: 'site-mood-theme',
  TIME_MODE: 'site-time-mode'
};

function safeSetHref(linkEl, href) {
  if (!linkEl) return;
  try {
    linkEl.href = href;
    linkEl.onerror = () => console.warn('Не удалось загрузить тему:', href);
  } catch (e) {
    console.warn('safeSetHref error', e);
  }
}

function hourToTimeKey(hour) {
  if (hour >= 6 && hour <= 11) return 'morning';
  if (hour >= 12 && hour <= 17) return 'day';
  if (hour >= 18 && hour <= 20) return 'evening';
  return 'night';
}

function getAutoTimeKey() {
  const d = new Date();
  return hourToTimeKey(d.getHours());
}

function applyTimeTheme(key) {
  const timeLink = document.getElementById('time-link');
  const href = timeMap[key] || timeMap['day'];
  safeSetHref(timeLink, href);
  document.documentElement.setAttribute('data-time', key);
}

function applyMoodTheme(key) {
  const moodLink = document.getElementById('mood-link');
  const href = moodMap[key] || moodMap['calm'];
  safeSetHref(moodLink, href);
  document.documentElement.setAttribute('data-mood', key);
  Array.from(document.querySelectorAll('.mood-btn')).forEach(b => {
    const is = b.dataset.mood === key;
    b.setAttribute('aria-pressed', String(is));
    b.classList.toggle('mood-active', is);
  });
}

function initTimeControls() {
  const timeSelect = document.getElementById('time-select');
  const savedMode = localStorage.getItem(STORAGE_KEYS.TIME_MODE) || 'auto';
  const savedTimeKey = localStorage.getItem(STORAGE_KEYS.TIME);
  if (savedMode === 'auto') {
    applyTimeTheme(getAutoTimeKey());
    if (timeSelect) timeSelect.value = 'auto';
  } else if (savedTimeKey && timeMap[savedTimeKey]) {
    applyTimeTheme(savedTimeKey);
    if (timeSelect) timeSelect.value = savedTimeKey;
  } else {
    const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const prefDark = mq ? mq.matches : false;
    const key = prefDark ? 'night' : getAutoTimeKey();
    applyTimeTheme(key);
    if (timeSelect) timeSelect.value = savedMode === 'auto' ? 'auto' : key;
  }
  if (timeSelect) {
    timeSelect.addEventListener('change', (e) => {
      const v = e.target.value;
      if (v === 'auto') {
        localStorage.setItem(STORAGE_KEYS.TIME_MODE, 'auto');
        localStorage.removeItem(STORAGE_KEYS.TIME);
        applyTimeTheme(getAutoTimeKey());
      } else {
        localStorage.setItem(STORAGE_KEYS.TIME_MODE, 'manual');
        localStorage.setItem(STORAGE_KEYS.TIME, v);
        applyTimeTheme(v);
      }
    });
  }
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq && typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', () => {
        if (localStorage.getItem(STORAGE_KEYS.TIME_MODE) === 'auto') {
          applyTimeTheme(getAutoTimeKey());
        }
      });
    } else if (mq && typeof mq.addListener === 'function') {
      mq.addListener(() => {
        if (localStorage.getItem(STORAGE_KEYS.TIME_MODE) === 'auto') {
          applyTimeTheme(getAutoTimeKey());
        }
      });
    }
  }
}

function initMoodControls() {
  const moodButtons = Array.from(document.querySelectorAll('.mood-btn'));
  const savedMood = localStorage.getItem(STORAGE_KEYS.MOOD) || 'calm';
  applyMoodTheme(savedMood);
  moodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mood = btn.dataset.mood;
      if (!mood) return;
      localStorage.setItem(STORAGE_KEYS.MOOD, mood);
      applyMoodTheme(mood);
    });
  });
  moodButtons.forEach((btn, idx) => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const next = moodButtons[(idx + 1) % moodButtons.length];
        next.focus();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = moodButtons[(idx - 1 + moodButtons.length) % moodButtons.length];
        prev.focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
  const observer = new MutationObserver(() => {
    moodButtons.forEach(b => {
      const active = b.getAttribute('aria-pressed') === 'true';
      b.classList.toggle('mood-active', active);
    });
  });
  observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['aria-pressed'] });
}

function initClickSound() {
  const clickSound = document.getElementById('clickSound');
  if (!clickSound) return;
  document.querySelectorAll('.click-sound').forEach(el => {
    el.addEventListener('click', () => {
      try {
        clickSound.currentTime = 0;
        clickSound.play();
      } catch (e) {}
    });
  });
}

(function () {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('[data-anim], .scroll-anim').forEach(el => {
      if (el.classList.contains('stagger')) {
        Array.from(el.children).forEach(ch => ch.classList.add('is-visible'));
      } else {
        el.classList.add('is-visible');
      }
    });
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        const type = el.dataset.anim || 'fade-up';
        const delay = el.dataset.animDelay || '0s';
        const duration = el.dataset.animDuration || '0.7s';
        const once = String(el.dataset.animOnce) === 'true';
        if (el.classList.contains('stagger')) {
          const step = parseFloat(el.dataset.animStagger) || 0.08;
          Array.from(el.children).forEach((child, idx) => {
            child.style.animationDelay = `${idx * step}s`;
            child.style.animationDuration = duration;
            child.classList.add(`anim-${type}`);
            setTimeout(() => child.classList.add('is-visible'), 10);
          });
        } else {
          el.style.animationDelay = delay;
          el.style.animationDuration = duration;
          el.classList.add(`anim-${type}`);
          el.classList.add('is-visible');
        }
        if (once) {
          obs.unobserve(el);
        }
      } else {
        const once = String(el.dataset.animOnce) === 'true';
        if (!once) {
          if (el.classList.contains('stagger')) {
            Array.from(el.children).forEach(child => {
              child.classList.remove('is-visible');
            });
          } else {
            el.classList.remove('is-visible');
          }
        }
      }
    });
  }, { root: null, rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
  document.addEventListener('DOMContentLoaded', () => {
    const items = Array.from(document.querySelectorAll('[data-anim], .scroll-anim'));
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => {
        if (el.classList.contains('stagger')) {
          Array.from(el.children).forEach(child => child.classList.add('is-visible'));
        } else {
          el.classList.add('is-visible');
        }
      });
      return;
    }
    items.forEach(el => {
      if (el.classList.contains('stagger')) {
        Array.from(el.children).forEach(child => child.classList.add('scroll-anim'));
      } else {
        el.classList.add('scroll-anim');
      }
      io.observe(el);
    });
  });
})();

(function run() {
  try {
    const ready = () => {
      const nftHtml = nfts.map(item => `
        <div class="card" data-anim="fade-up">
          <h1 class="date">${escapeHtml(item.date)}</h1>
          <img src="${item.image}" alt="${escapeHtml(item.title)}">
          <h2 class="nft-title">${escapeHtml(item.title)}</h2>
          <div class="card-bottom">
            <div class="price-bid">
              <h1>Current bid</h1>
              <div class="price">
                <img src="./assets/eth.svg" alt="eth">
                <p>${escapeHtml(item.price)}</p>
              </div>
            </div>
            <div class="card-button">
              <a class="click-sound" href="#">PLACE BID</a>
            </div>
          </div>
        </div>
      `);
      insertHTMLWithAnim('.weekly-cards', nftHtml, 0.12);

      const collHtml = collections.map(item => `
        <div class="collection-item" data-anim="fade-up">
          <div class="collection-item-left">
            <img src="${item.image}" alt="${escapeHtml(item.title)}">
            <div class="collection-item-left-name">
              <h2>${escapeHtml(item.title)}</h2>
              <p>${escapeHtml(item.titleP)}</p>
            </div>
          </div>
          <div class="collection-item-right">
            <div class="collection-item-right-volume">
              <img src="./assets/eth.svg" alt="">
              <p>${escapeHtml(item.volume)}</p>
            </div>
            <p class="collection-item-right-24">${escapeHtml(item.percent)}</p>
            <div class="collection-item-right-floorprice">
              <img src="./assets/eth.svg" alt="">
              <p>${escapeHtml(item.floorPrice)}</p>
            </div>
            <p class="collection-item-right-owners">${escapeHtml(item.owners)}</p>
            <p class="collection-item-right-items">${escapeHtml(item.items)}</p>
          </div>
        </div>
      `);
      insertHTMLWithAnim('.collections-list', collHtml, 0.10);

      const marketHtml = marketNfts.map(item => `
        <div class="card" data-anim="fade-up">
          <h1 class="date">${escapeHtml(item.date)}</h1>
          <img src="${item.image}" alt="${escapeHtml(item.title)}">
          <h2 class="nft-title">${escapeHtml(item.title)}</h2>
          <div class="card-bottom">
            <div class="price-bid">
              <h1>Current bid</h1>
              <div class="price">
                <img src="./assets/eth.svg" alt="eth">
                <p>${escapeHtml(item.price)}</p>
              </div>
            </div>
            <div class="card-button">
              <a class="click-sound" href="#">PLACE BID</a>
            </div>
          </div>
        </div>
      `);
      insertHTMLWithAnim('.explore-marketplace-cards', marketHtml, 0.10);

      initTimeControls();
      initMoodControls();
      initClickSound();

      const checkInterval = 5 * 60 * 1000;
      setInterval(() => {
        if (localStorage.getItem(STORAGE_KEYS.TIME_MODE) === 'auto') {
          const desired = getAutoTimeKey();
          if (document.documentElement.getAttribute('data-time') !== desired) {
            applyTimeTheme(desired);
          }
        }
      }, checkInterval);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', ready);
    } else {
      ready();
    }
  } catch (err) {
    console.error('Fatal setup error:', err);
  }
})();

(function(){
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');
  function closeNav(){
    document.documentElement.classList.remove('nav-open');
    if(mobileNav) mobileNav.setAttribute('data-open','false');
    if(burger) burger.setAttribute('aria-expanded','false');
    if(mobileNav) mobileNav.setAttribute('aria-hidden','true');
  }
  function openNav(){
    document.documentElement.classList.add('nav-open');
    if(mobileNav) mobileNav.setAttribute('data-open','true');
    if(burger) burger.setAttribute('aria-expanded','true');
    if(mobileNav) mobileNav.setAttribute('aria-hidden','false');
  }
  if(burger && mobileNav){
    burger.addEventListener('click', (e)=>{
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      if(expanded) closeNav(); else openNav();
    });
    document.addEventListener('click', (e)=>{
      if(!mobileNav.contains(e.target) && !burger.contains(e.target)) closeNav();
    });
    window.addEventListener('resize', ()=>{
      if(window.innerWidth > 720) closeNav();
    });
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') closeNav();
    });
  }
})();
