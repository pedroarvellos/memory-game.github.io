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

document.querySelector(".moves").innerHTML = moves;
let mg = new MemoryGameClass();
mg.createDeck(cardsList);

document.querySelector(".restart").addEventListener("click", function() {
  let mg = new MemoryGameClass();
  mg.createDeck(cardsList);
  document.querySelector(".moves").innerHTML = moves;
});

document.querySelector(".restart-again").addEventListener("click", function() {
    let mg = new MemoryGameClass();
    mg.createDeck(cardsList);
    document.querySelector("div[class='container']").style.display = "flex";
    document.querySelector("div[class='victory-container']").style.display = "none";
    document.querySelector(".moves").innerHTML = moves;
  });