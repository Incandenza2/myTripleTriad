"use strict"

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
    "status": {value: "", writable: true},
    "image": {value: "./images/antónioCosta.png"}
});

let cardJoca = Object.create(cardFactory, {
    "name": {value:"Joca"},
    "top": {value: "1"},
    "right": {value: "2"},
    "bottom": {value: "7"},
    "left": {value: "2"},
    "status": {value: "", writable: true},
    "image": {value: "./images/Joca.png"}
});

let cardKojima = Object.create(cardFactory, {
    "name": {value:"Hideo Kojima"},
    "top": {value: "6"},
    "right": {value: "3"},
    "bottom": {value: "6"},
    "left": {value: "3"},
    "status": {value: "", writable: true},
    "image": {value: "./images/Kojima.png"}
});

const cardArray = [cardAntónioCosta, cardJoca, cardKojima];

const tier3 = [];
const tier2 = [];
const tier1 = [];


let boardState = [0,0,0,0,0,0,0,0,0];

const board = (() => {
    let drawBoard = function(boardState, turn, cardsFlipped = "") {
        let table = document.querySelector(".table")
        table.replaceChildren("");
        boardState.forEach((item,index) => {
            let square = dom.addElement(".table", "div", "square");
            let squareNumber = index;
            if (item !== 0) {
                let cardOnBoard = cardDrawing.drawCard(square, boardState[index]);
                if (boardState[squareNumber].status === "player") {cardOnBoard.classList.add("playerCard"); console.log(squareNumber + boardState[squareNumber].status)};
                if (cardsFlipped !== "") {
                    cardsFlipped.forEach((item, index) => {
                        
                    });
                };
            } else if ((item === 0) && (turn === "player")) {
                square.addEventListener("dragover", function(event) {event.preventDefault()}, false);
                square.addEventListener("dragenter", function(event) {event.target.classList.toggle("dropZone")}, false)
                square.addEventListener("dragleave", function(event) {event.target.classList.toggle("dropZone")}, false)
                square.addEventListener("drop", function(event) {
                    event.preventDefault();
                    dragged.parentNode.removeChild(dragged);
                    event.target.appendChild(dragged);
                    let cardId = dragged.getAttribute("id");
                    boardState[squareNumber] = Object.create(cardArray.filter((obj) =>{return obj.name === cardId})[0]);
                    boardState[squareNumber].status = "player";
                    console.log(boardState);
                    console.log("Ok here is the status" + boardState[squareNumber].status);
                    setTimeout(function() {drawBoard(boardState, "opponent")}, 500);
                    //boardState = gameLogic.computePlay(boardState, squareNumber);
                })
            }; 
        });
        if (turn === "opponent") {
            setTimeout(function() {gameLogic.opponentPlay(boardState)}, 500);
        }
    }
    return {drawBoard};
})();

const gameLogic = (() => {
    let computePlay = function(boardState, squareNumber) {
        if ((squareNumber === 0) | (squareNumber === 3) | (squareNumber === 6)) {
            if (boardState[squareNumber].top > boardState[squareNumber - 3].bottom) {

            }
            
        }
        board.drawBoard(boardState);

    };
    let opponentPlay = function(boardState) {
        let openSquares = [];
        boardState.forEach((item, index) => {
            // temporary logic for testing, computer will play the last card every time, on the first available spot.
            if (item === 0) {
                openSquares.push(index);
            };
        });
        let cardHandOpponent = document.querySelector(".cardHandOpponent");
        let pickedCard = cardHandOpponent.lastChild.getAttribute("id");
        console.log(pickedCard);
        cardHandOpponent.removeChild(cardHandOpponent.lastChild)
        boardState[openSquares[0]] = Object.create(cardArray.filter((obj) =>{return obj.name === pickedCard})[0]);
        boardState[openSquares[0]].status = "opponent";

        board.drawBoard(boardState, "player");
    };
    return {computePlay, opponentPlay}
})();

// each card will have a card-top, a card-middle, and a card-bottom. The card-middle will have card-left and card-right elements.

const cardDrawing = (() => {
    let drawCard = function(parentNode, card, index) {
        let currentCard = document.createElement("div");
        currentCard.classList.add("card");
        parentNode.appendChild(currentCard);
        currentCard.setAttribute("id", `${card.name}`);
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
        if (parentNode !== cardHandPlayer)  {cardPicture.setAttribute("ondragstart", "return false")};
        cardPicture.setAttribute("draggable", "false");
        cardMiddle.appendChild(cardPicture);
        let cardRight = document.createElement("div");
        cardRight.classList.add("card-right");
        cardRight.textContent = `${card.right}`;
        cardMiddle.appendChild(cardRight);
        let cardBottom = document.createElement("div");
        cardBottom.classList.add("card-bottom");
        cardBottom.textContent = `${card.bottom}`;
        currentCard.appendChild(cardBottom);
        if (parentNode === cardHandPlayer) {currentCard.classList.toggle("playerCard")};
        

        return currentCard;
    }
    return {drawCard};
})();

/* parameters for dom.addElement are: 
    1 - element to append to
    2 - type of element to create
    3 - class tag to give to it 
    4 - optional text for the textContent */

let gameFrame = dom.addElement("#content", "div", "gameFrame");
let cardHandPlayer = dom.addElement(".gameFrame", "div", "cardHand");
cardHandPlayer.classList.add("cardHandPlayer");
dom.addElement(".gameFrame", "div", "table");
let cardHandOpponent = dom.addElement(".gameFrame", "div", "cardHand");
cardHandOpponent.classList.add("cardHandOpponent");
let dragged;

let playerHand = [cardJoca, cardKojima, cardKojima, cardJoca, cardAntónioCosta]
let opponentHand = [cardAntónioCosta, cardAntónioCosta, cardAntónioCosta, cardJoca, cardJoca]
console.log(playerHand);

function generateCardHand (player, array) {
    array.forEach(function(card, index) {
        let currentCard = cardDrawing.drawCard(player, card);
        currentCard.classList.toggle("isInHand");
        if (array === playerHand) {currentCard.setAttribute("owner", "player")}
        if (array === opponentHand) {currentCard.setAttribute("owner", "opponent")}
        if (currentCard.getAttribute("owner") === "player") {
            currentCard.setAttribute("draggable", "true");
            currentCard.addEventListener("drag", function(event) {}, false);
            currentCard.addEventListener("dragstart", function(event) {dragged = event.target;console.log(dragged);});
        }

    });
};


const startGame = function (playerHand, opponent) {
    let turn;
    if (Math.random() >= (1/2)) {turn = "player"} else {turn = "opponent"};
    generateCardHand(cardHandPlayer, playerHand);
    generateCardHand(cardHandOpponent, opponentHand);
    board.drawBoard(boardState, turn);
};

startGame(playerHand);