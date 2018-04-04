let gameInstance = null;

class MemoryGameClass {
  constructor() {
    this.chosenCards = [];
    this.matches = 0;
    this.moves = 0;
    this.isWaiting = false;
    this.stars = { trials: 0, starsNumber: 3 };
  }

  createDeck(cardsList) {
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
    for (let i = 0; i < cardsList.length; i++) {
      if (cardsList[i] != undefined) {
        deck.innerHTML += cardsList[i];
      }
    }

    var cards = document.getElementsByClassName("card");

    //Including listeners in each card.
    for (let i = 0; i < cards.length; i++) {
      //Closure is used to store a value which will be used another time. In this case, I'm sending values to a function which will receive these values and return something which used this values, but this something will be executed just when I click and trigger an event, that's will in this return I'll receive just the event, because the other params are already stored.
      cards[i].addEventListener("click", pickACard(this, cards[i]));
    }
  }
}

function pickACard(game, card) {
  return (e) => {
    if (
      e.target.className != "card open show" &&
      e.target.className != "card open show match" &&
      game.isWaiting == false &&
      e.target == card
    ) {
      e.target.className = "card open show";

      if (game.chosenCards.length < 2) {
        game.chosenCards.push(e.target);

        if (
          game.chosenCards[0] != undefined &&
          game.chosenCards[1] != undefined &&
          game.chosenCards.length == 2
        ) {
          if (
            game.chosenCards[0].childNodes[0].className ==
            game.chosenCards[1].childNodes[0].className
          ) {
            game.chosenCards[0].classList.add("match");
            game.chosenCards[1].classList.add("match");
            game.chosenCards.length = 0;

            if (game.matches < 7) {
              game.matches++;
            } else {
              document.querySelector("div[class='container']").style.display =
                "none";
              document.querySelector(
                "div[class='victory-container']"
              ).style.display =
                "flex";
              document.querySelector(".moves-result").innerHTML = game.moves++;
              document.querySelector(".stars-result").innerHTML =
                game.stars.starsNumber;
              document.querySelector(
                ".time-result"
              ).innerHTML = timer.getTimeValues().toString();
            }

            addMoviment(game);
            checkStar(game);
          } else {
            let delay = 1000; //1000 microseconds = 1 second
            game.isWaiting = true;
            setTimeout(function() {
              game.chosenCards[0].className = "card close";
              game.chosenCards[1].className = "card close";
              game.chosenCards.length = 0;
            }, delay);
            setTimeout(function() {
              game.isWaiting = false;
            }, delay);

            addMoviment(game);
            checkStar(game);
          }
        }
      } else {
        game.chosenCards.length = 0;
      }
    }
    e.stopPropagation();
  };
}

function addMoviment(game) {
  document.querySelector(".moves").innerHTML = game.moves++;
}

function checkStar(game) {
  game.stars.trials++;
  let starsNode = document.querySelector(".stars");
  if (game.stars.trials > 10 && game.stars.trials < 15) {
    starsNode.removeChild(document.querySelector(".starThird"));
    game.stars.starsNumber--;
  } else if (game.stars.trials > 15) {
    starsNode.removeChild(document.querySelector(".starSecond"));
    game.stars.starsNumber--;
  }
}

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
