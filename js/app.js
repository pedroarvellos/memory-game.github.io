let chosenCards = [];
let matches = 0;
let moves = 0;
let isWaiting = false;

class MemoryGameClass {
  constructor() {
    chosenCards = [];
    matches = 0;
    moves = 0;
  }
}

MemoryGameClass.prototype.createDeck = function(cardsList) {
  let deck = document.querySelector(".deck");

  //Removing cards from deck.
  if (document.querySelector(".card")) {
    for (let i = cardsList.length; i > 0; i--) {
      deck.removeChild(document.querySelector(".card"));
    }
  }

  //Shuffling array with cards.
  shuffle.call(cardsList);

  //Including cards on the deck.
  for (let i = cardsList.length; i >= 0; i--) {
    if (cardsList[i] != undefined) {
      deck.innerHTML += cardsList[i];
    }
  }

  var cards = document.getElementsByClassName("card");

  //Including listeners in each card.
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", pickACard);
  }
};

pickACard = function(e) {
  if (
    e.target.className != "card open show" &&
    e.target.className != "card open show match" &&
    isWaiting == false &&
    e.target == this
  ) {
    e.target.className = "card open show";

    if (chosenCards.length < 2) {
      chosenCards.push(e.target);

      if (
        chosenCards[0] != undefined &&
        chosenCards[1] != undefined &&
        chosenCards.length == 2
      ) {
        if (
          chosenCards[0].childNodes[0].className ==
          chosenCards[1].childNodes[0].className
        ) {
          chosenCards[0].className += " match";
          chosenCards[1].className += " match";
          chosenCards.length = 0;

          if (matches < 7) {
            matches++;
          } else {
            document.querySelector("div[class='container']").style.display = "none";
            document.querySelector("div[class='victory-container']").style.display = "flex";
          }

          document.querySelector(".moves").innerHTML = ++moves;
        } else {
          let delay = 1000; //1000 microseconds = 1 second
          isWaiting = true;
          setTimeout(function() {
            chosenCards[0].className = "card close";
            chosenCards[1].className = "card close";
            chosenCards.length = 0;
          }, delay);
          setTimeout(function() {
            isWaiting = false;
          }, delay);

          document.querySelector(".moves").innerHTML = ++moves;
        }
      }
    } else {
      chosenCards.length = 0;
    }
  }
  e.stopPropagation();
};

// Shuffle function.
function shuffle() {
  let currentIndex = this.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
}
