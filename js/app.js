const cardsList = [
  `<li class="card"><i class="fa fa-diamond"></i></li>`,
  `<li class="card"><i class="fa fa-paper-plane-o"></i></li>`,
  `<li class="card"><i class="fa fa-anchor"></i></li>`,
  `<li class="card"><i class="fa fa-bolt"></i></li>`,
  `<li class="card"><i class="fa fa-cube"></i></li>`,
  `<li class="card"><i class="fa fa-anchor"></i></li>`,
  `<li class="card"><i class="fa fa-leaf"></i></li>`,
  `<li class="card"><i class="fa fa-bicycle"></i></li>`,
  `<li class="card"><i class="fa fa-diamond"></i></li>`,
  `<li class="card"><i class="fa fa-bomb"></i></li>`,
  `<li class="card"><i class="fa fa-leaf"></i></li>`,
  `<li class="card"><i class="fa fa-bomb"></i></li>`,
  `<li class="card"><i class="fa fa-bolt"></i></li>`,
  `<li class="card"><i class="fa fa-bicycle"></i></li>`,
  `<li class="card"><i class="fa fa-paper-plane-o"></i></li>`,
  `<li class="card"><i class="fa fa-cube"></i></li>`
];

let chosenCards = [];

createDeck();

document.querySelector(".restart").addEventListener("click", function() {
  createDeck();
});

function createDeck() {
  let deck = document.querySelector(".deck");

  if (document.querySelector(".card")) {
    for (let i = cardsList.length; i > 0; i--) {
      deck.removeChild(document.querySelector(".card"));
    }
  }

  let suffledArray = shuffle(cardsList);

  for (let i = cardsList.length; i >= 0; i--) {
    if (cardsList[i] != undefined) {
      deck.innerHTML += cardsList[i];
    }
  }

  var cards = document.getElementsByClassName('card');

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', pickACard);
  }  
}

function pickACard (e) {
    e.target.className += ' open show';

    if (chosenCards.length < 2) {
        chosenCards.push(e.target.childNodes[0].className);
        
        // if (chosenCards.length < 2 == 2 && chosenCards[0] == chosenCards[1]) {

        // }
    } else {
        chosenCards.length = 0;
    }

    e.stopPropagation();
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cardsList) {
  let currentIndex = cardsList.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cardsList[currentIndex];
    cardsList[currentIndex] = cardsList[randomIndex];
    cardsList[randomIndex] = temporaryValue;
  }

  return cardsList;
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
