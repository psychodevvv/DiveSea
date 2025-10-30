const nfts = [
    {
        title: 'Sun-Glass',
        image: './assets/nft1.png',
        date: '07h 09m 12s',
        price: '1.75'
    },
    {
        title: 'Sun-Glass',
        image: './assets/nft2.png',
        date: '07h 09m 12s',
        price: '1.75'
    },
    {
        title: 'Sun-Glass',
        image: './assets/nft3.png',
        date: '07h 09m 12s',
        price: '1.75'
    },
    {
        title: 'NuEvey',
        image: './assets/nft4.png',
        date: '19h 09m 12s',
        price: '1.25'
    },
    {
        title: 'Sun-Glass',
        image: './assets/nft1.png',
        date: '07h 09m 12s',
        price: '1.75'
    }
];

document.addEventListener('DOMContentLoaded', () => {
  const nftCards = document.querySelector('.weekly-cards');

  if (!nftCards) {
    console.error('Элемент .weekly-cards не найден в DOM.');
    return;
  }

  nfts.forEach((item) => {
    nftCards.insertAdjacentHTML('beforeend', `
      <div class="card">
                <h1 class="date">${item.date}</h1>
                <img src="${item.image}" alt="nft image">
                <h2 class="nft-title">${item.title}</h2>
                <div class="card-bottom">
                    <div class="price-bid">
                        <h1>Current bid</h1>
                        <div class="price">
                            <img src="./assets/eth.svg" alt="eth">
                            <p>${item.price}</p>
                        </div>
                    </div>
                    <div class="card-button">
                        <a href="#">PLACE BID</a>
                    </div>
                </div>
            </div>
    `);
  });
});

const collections = [
    {
        title: 'Alex Ca.',
        titleP: 'By Alex',
        image: './assets/nft1.png',
        volume: '8,456',
        percent: '+ 27.78%',
        floorPrice: '3,5',
        owners: '2.2K',
        items: '500'
    },
    {
        title: 'Alex Ca.',
        titleP: 'By Alex',
        image: './assets/nft2.png',
        volume: '4,780',
        percent: '+ 27.78%',
        floorPrice: '7,9',
        owners: '3.4K',
        items: '900'
    },
    {
        title: 'Alex Ca.',
        titleP: 'By Alex',
        image: './assets/nft1.png',
        volume: '8,456',
        percent: '+ 27.78%',
        floorPrice: '3,5',
        owners: '2.2K',
        items: '500'
    },
    {
        title: 'Alex Ca.',
        titleP: 'By Alex',
        image: './assets/nft2.png',
        volume: '4,780',
        percent: '+ 27.78%',
        floorPrice: '7,9',
        owners: '3.4K',
        items: '900'
    }
];

document.addEventListener('DOMContentLoaded', () => {
  const collectionCards = document.querySelector('.collections-list');

  if (!collectionCards) {
    console.error('Элемент .collections-list не найден в DOM.');
    return;
  }

  collections.forEach((item) => {
    collectionCards.insertAdjacentHTML('beforeend', `
                <div class="collection-item">
                    <div class="collection-item-left">
                        <img src="${item.image}" alt="">
                        <div class="collection-item-left-name">
                            <h2>${item.title}</h2>
                            <p>${item.titleP}</p>
                        </div>
                    </div>
                    <div class="collection-item-right">
                        <div class="collection-item-right-volume">
                            <img src="./assets/eth.svg" alt="">
                            <p>${item.volume}</p>
                        </div>
                        <p class="collection-item-right-24">${item.percent}</p>
                        <div class="collection-item-right-floorprice">
                            <img src="./assets/eth.svg" alt="">
                            <p>${item.floorPrice}</p>
                        </div>
                        <p class="collection-item-right-owners">${item.owners}</p>
                        <p class="collection-item-right-items">${item.items}</p>
                    </div>
                </div>
    `);
  });
});

const marketNfts = [
    {
        title: 'Sun-Glass',
        image: './assets/nft1.png',
        date: '07h 09m 12s',
        price: '1.75'
    },
    {
        title: 'Sun-Glass',
        image: './assets/nft2.png',
        date: '07h 09m 12s',
        price: '1.75'
    },
    {
        title: 'Sun-Glass',
        image: './assets/nft3.png',
        date: '07h 09m 12s',
        price: '1.75'
    },
    {
        title: 'NuEvey',
        image: './assets/nft4.png',
        date: '19h 09m 12s',
        price: '1.25'
    },
    {
        title: 'Sun-Glass',
        image: './assets/nft3.png',
        date: '07h 09m 12s',
        price: '1.75'
    },
    {
        title: 'NuEvey',
        image: './assets/nft4.png',
        date: '19h 09m 12s',
        price: '1.25'
    },
    {
        title: 'Sun-Glass',
        image: './assets/nft2.png',
        date: '07h 09m 12s',
        price: '1.75'
    },
    {
        title: 'Sun-Glass',
        image: './assets/nft1.png',
        date: '07h 09m 12s',
        price: '1.75'
    },
    {
        title: 'Sun-Glass',
        image: './assets/nft3.png',
        date: '07h 09m 12s',
        price: '1.75'
    },
    {
        title: 'NuEvey',
        image: './assets/nft4.png',
        date: '19h 09m 12s',
        price: '1.25'
    }
]

document.addEventListener('DOMContentLoaded', () => {
  const marketNftCards = document.querySelector('.explore-marketplace-cards');

  if (!marketNftCards) {
    console.error('Элемент .explore-marketplace-cards не найден в DOM.');
    return;
  }

  marketNfts.forEach((item) => {
    marketNftCards.insertAdjacentHTML('beforeend', `
                <div class="card">
                <h1 class="date">${item.date}</h1>
                <img src="${item.image}" alt="nft image">
                <h2 class="nft-title">${item.title}</h2>
                <div class="card-bottom">
                    <div class="price-bid">
                        <h1>Current bid</h1>
                        <div class="price">
                            <img src="./assets/eth.svg" alt="eth">
                            <p>${item.price}</p>
                        </div>
                    </div>
                    <div class="card-button">
                        <a href="#">PLACE BID</a>
                    </div>
                </div>
            </div>
    `);
  });
});

(function(){
document.addEventListener('DOMContentLoaded',()=>{
  const KEY='theme-preference';
  let link=document.getElementById('theme-link');
  if(!link){link=document.createElement('link');link.id='theme-link';link.rel='stylesheet';document.head.appendChild(link);}
  const input=document.getElementById('theme-toggle')||document.querySelector('input[type="checkbox"]');
  if(!input) return;
  function setHref(h){ link.onerror=()=>{}; link.href=h; }
  function apply(t){ if(t==='dark'){ setHref('dark.css'); input.checked=true; document.documentElement.setAttribute('data-theme','dark'); } else { setHref('light.css'); input.checked=false; document.documentElement.setAttribute('data-theme','light'); } }
  const saved=localStorage.getItem(KEY);
  const mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  const prefers = mq ? mq.matches : false;
  if(saved==='dark' || saved==='light') apply(saved); else apply(prefers ? 'dark' : 'light');
  const handler=()=>{ const t = input.checked ? 'dark' : 'light'; localStorage.setItem(KEY,t); apply(t); };
  input.removeEventListener('change', handler);
  input.addEventListener('change', handler);
  if(mq){
    const sysListener=(e)=>{
      if(localStorage.getItem(KEY)) return;
      apply(e.matches ? 'dark' : 'light');
    };
    if(typeof mq.addEventListener==='function') mq.addEventListener('change', sysListener);
    else if(typeof mq.addListener==='function') mq.addListener(sysListener);
  }
});
})();
