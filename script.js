const container = document.getElementById("container");
const card1 = document.getElementById("LA-card");
const card2 = document.getElementById("Yosemite-card");

var cards = [card1, card2];
card1.remove()
card2.remove()

for (const card of cards) {
    container.appendChild(card);
}

const left = document.getElementById("left");


left.addEventListener("click", function (e) {
    cards[cards.length - 1] = cards.shift();
    container.appendChild(cards[0]);
});
