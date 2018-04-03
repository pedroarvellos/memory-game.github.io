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

//The first deck is created.
let mg = new MemoryGameClass();
document.querySelector(".moves").innerHTML = mg.moves;
mg.createDeck(cardsList);

//The game is restarted as the user clicks on the restart option.
document.querySelector(".restart").addEventListener("click", function() {
  let mg = new MemoryGameClass();
  mg.createDeck(cardsList);
  document.querySelector(".moves").innerHTML = mg.moves;
  location.reload();
});

//The game is restarted as the user clicks on the restart option when the game is concluded.
document.querySelector(".restart-again").addEventListener("click", function() {
  location.reload();
});

//Set the time.
var timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    document.querySelector(".time").innerHTML = timer.getTimeValues().toString();
});
