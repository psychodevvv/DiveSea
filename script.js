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