const allCards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function initializeBoard(cards) {
  cards.forEach(function (card) {
    const randomPos = Math.floor(Math.random() * CARDS_COUNT);
    card.style.order = `${randomPos}`;
    card.addEventListener('click', cardClickHandler, { once: true });
  });
}


const CARDS_COUNT = 12;
const FLIP_CARD_DELAY = 1000;




function resetBoard() {
  hasFlippedCard = false;
  firstCard = secondCard = null;
};

function unflipCards() {
  setTimeout(function () {
    const flipCards = document.querySelectorAll('.flip');
    flipCards.forEach(function (card) {
      card.classList.remove('flip');
    });
    resetBoard();
  }, FLIP_CARD_DELAY);
}

function actionIfMatch(firstCardFramework, secondCardframework) {
  let firstCardFramework = firstCard.dataset.framework;
  let secondCardframework = secondCard.dataset.framework;
  if (firstCardFramework === secondCardframework) {
    disableCards();
  } else {
    resetBoard();
  }
}

function cardClickHandler(evt) {
  evt.target.closest('.memory-card').classList.add('flip');
  // 	if ((firstCard !== null && secondCard !== null) || firstCard === secondCard) {
  //     return;
  // 	} else {

  //   }
}




function disableCards() {
  firstCard.removeEventListener('click', cardClickHandler);
  secondCard.removeEventListener('click', cardClickHandler);
  resetBoard();
}

initializeBoard(allCards);
