const card1 = document.getElementById("LA-card");
const card2 = document.getElementById("Yosemite-card");

var cards = [card1, card2];

const left = document.getElementById("left");

cards[cards.length - 1] = cards.shift();
console.log(cards);