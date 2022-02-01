const dom = (() => {
    let addElement = (place, type, cssClass, text = "") => {
        let element = document.createElement(type)
        let spot = document.querySelector(place)
        spot.appendChild(element);
        element.classList.add(`${cssClass}`)
        if (text !== "") {
            element.textContent = text;
        };
        return element;
    };

    let createElement = (type, cssClass, text = "") => {
        let element = document.createElement(type);
        element.classList.add(cssClass);
        if (text !== "") {
        element.textContent = text;
        }
        return element;
};

    return {addElement, createElement};
})();

const cardFactory = (name, top, right, bottom, left) => {
    this.name = name;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
}

let cardAntónioCosta = Object.create(cardFactory, {
    "name": {value: "António Costa"},
    "top": {value: "3"},
    "right": {value: "4"},
    "bottom": {value: "3"},
    "left": {value: "4"},
    "status": {value: ""},
    "image": {value: "./images/antónioCosta.png"}
});

let cardJoca = Object.create(cardFactory, {
    "name": {value:"Joca"},
    "top": {value: "1"},
    "right": {value: "2"},
    "bottom": {value: "7"},
    "left": {value: "2"},
    "status": {value: ""},
    "image": {value: "./images/Joca.png"}
});

console.log(cardJoca);
console.log(cardAntónioCosta);

const generateCard = () => {

}


/* parameters for dom.addElement are: 
    1 - element to append to
    2 - type of element to create
    3 - class tag to give to it 
    4 - optional text for the textContent */

let gameFrame = dom.addElement("#content", "div", "gameFrame");
let cardHandPlayer = dom.addElement(".gameFrame", "div", "cardHand");
cardHandPlayer.classList.add("cardHandPlayer");
let board = dom.addElement(".gameFrame", "div", "board");
let cardHandOpponent = dom.addElement(".gameFrame", "div", "cardHand");
cardHandOpponent.classList.add("cardHandOpponent");

let playerHand = [cardJoca, cardJoca, cardJoca, cardJoca, cardAntónioCosta]
let opponentHand = [cardAntónioCosta, cardAntónioCosta, cardAntónioCosta, cardJoca, cardJoca]
console.log(playerHand);

// each card will have a card-top, a card-middle, and a card-bottom. The card-middle will have card-left and card-right elements.

function generateCardHand (player, array) {
    array.forEach(function(card, index) {
        let currentCard = document.createElement("div");
        currentCard.classList.add("card");
        player.appendChild(currentCard);
        currentCard.style["z-index"] = `${index}`;
        currentCard.setAttribute("id", `${card.name+index}`);
        let cardTop = document.createElement("div");
        cardTop.classList.add("card-top");
        cardTop.textContent = `${card.top}`;
        currentCard.appendChild(cardTop);
        let cardMiddle = document.createElement("div");
        cardMiddle.classList.add("card-middle");
        currentCard.appendChild(cardMiddle);
        let cardLeft = document.createElement("div");
        cardLeft.classList.add("card-left");
        cardLeft.textContent = `${card.left}`;
        cardMiddle.appendChild(cardLeft);
        let cardPicture = document.createElement("img");
        cardPicture.setAttribute("src", `${card.image}`);
        cardPicture.classList.add("cardPicture");
        cardMiddle.appendChild(cardPicture);
        let cardRight = document.createElement("div");
        cardRight.classList.add("card-right");
        cardRight.textContent = `${card.right}`;
        cardMiddle.appendChild(cardRight);
        let cardBottom = document.createElement("div");
        cardBottom.classList.add("card-bottom");
        cardBottom.textContent = `${card.bottom}`;
        currentCard.appendChild(cardBottom);
    });
};

generateCardHand(cardHandPlayer, playerHand);
generateCardHand(cardHandOpponent, opponentHand);