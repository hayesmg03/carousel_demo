const container = document.getElementById("container");
const card1 = document.getElementById("LA-card");
const card2 = document.getElementById("Yosemite-card");
const card3 = document.getElementById("DV-card")

var cards = [card1, card2, card3];
card1.remove();
card2.remove();
card3.remove();

for (const card of cards) {
    container.appendChild(card);
}

const left = document.getElementById("left");
const right = document.getElementById("right");


left.addEventListener("click", function (e) {
    cards[cards.length - 1] = cards.shift();
    for (const card of cards){
        container.appendChild(card)
    }
    console.log(container);
    console.log(cards);
});

right.addEventListener("click", function (e) {
    cards[0] = cards.pop();
    console.log(cards);
})