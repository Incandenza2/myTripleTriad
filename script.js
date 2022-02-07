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

const cardFactory = (name, top, right, bottom, left, tier) => {
    this.name = name;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.tier = tier
}

let cardAntónioCosta = Object.create(cardFactory, {
    "name": {value: "António Costa"},
    "top": {value: "3"},
    "right": {value: "4"},
    "bottom": {value: "3"},
    "left": {value: "4"},
    "tier": {value: "3"},
    "status": {value: "", writable: true},
    "image": {value: "./images/antónioCosta.png"}
});

let cardJoca = Object.create(cardFactory, {
    "name": {value:"Joca"},
    "top": {value: "1"},
    "right": {value: "2"},
    "bottom": {value: "7"},
    "left": {value: "2"},
    "tier": {value: "3"},
    "status": {value: "", writable: true},
    "image": {value: "./images/Joca.png"}
});

let cardKojima = Object.create(cardFactory, {
    "name": {value:"Hideo Kojima"},
    "top": {value: "6"},
    "right": {value: "3"},
    "bottom": {value: "6"},
    "left": {value: "3"},
    "tier": {value: "2"},
    "status": {value: "", writable: true},
    "image": {value: "./images/Kojima.png"}
});

let cardSexHaver = Object.create(cardFactory, {
    "name": {value:"Sex Haver"},
    "top": {value: "6"},
    "right": {value: "9"},
    "bottom": {value: "9"},
    "left": {value: "6"},
    "tier": {value: "1"},
    "status": {value: "", writable: true},
    "image": {value: "./images/sexHaver.png"}
});

let card1984 = Object.create(cardFactory, {
    "name": {value:"1984"},
    "top": {value: "1"},
    "right": {value: "8"},
    "bottom": {value: "4"},
    "left": {value: "9"},
    "tier": {value: "1"},
    "status": {value: "", writable: true},
    "image": {value: "./images/1984.png"}
});


// REMEMBER TO ADD TO THE ARRAY
const cardArray = [cardAntónioCosta, cardJoca, cardKojima, cardSexHaver, card1984];

const tier3 = cardArray.filter((obj) => {return obj.tier === "3"})
const tier2 = cardArray.filter((obj) => {return obj.tier === "2"});
const tier1 = cardArray.filter((obj) => {return obj.tier === "1"});

const opponentFactory = function (name, cardSet, level) {
    this.name = name;
    this.cardSet = cardSet;
    this.level = level;
};

let opponent1 = Object.create(opponentFactory, {
    "name": {value: "Roberto"},
    "cardSetFormula": {value: {tier3: "4", tier2: "0", tier1: "1"}},
    "level": {value: "1"}
});

const board = (() => {
    
    let drawBoard = function(boardState, turn, cardsFlipped) {
        let table = document.querySelector(".table")
        table.replaceChildren("");
        boardState.forEach((item,index) => {    
            let square = dom.addElement(".table", "div", "square");
            let squareNumber = index;
            if (item !== 0) {   
                let cardOnBoard = cardDrawing.drawCard(square, boardState[squareNumber]);
                if (boardState[squareNumber].status === "player") {cardOnBoard.classList.toggle("playerCard");};
                if ((cardsFlipped.length > 0) && (cardsFlipped.indexOf(squareNumber) != -1)) {
                    setTimeout(function() {cardOnBoard.classList.toggle("flip1")}, 20 + index*(1/10));  //we need a 20ms time out here
                    setTimeout(function() {cardOnBoard.classList.toggle("playerCard"); // we need 600ms time out here for these 2
                    cardOnBoard.classList.toggle("flip1")}, 600 + index*1);
                    cardsFlipped.forEach((item, index) => {
                        let flipDirection;
                        if (boardState[item].status === "player") {
                            flipDirection = "to opponent";
                        } else if (boardState[item].status === "opponent") {
                            flipDirection = "to player";
                        } if (flipDirection === "to player") {boardState[item].status = "player"; console.log("we flipped");
                        } else if (flipDirection === "to opponent") {boardState[item].status = "opponent"; console.log("we flipped");
                        }
                        console.log(cardsFlipped)
                        cardsFlipped.splice(index,1) 
                        console.log(cardsFlipped)
                    });
                };
            //check for game ending!
            if (turn === "over") {
                let playerCount = boardState.filter((obj) => {obj.status === "player"}).length;
                let opponentCount = boardState.filter((obj) => {obj.status === "opponent"}).length;
                if (playerCount === opponentCount) {
                    /*show draw and restart the game*/
                } else if (playerCount > opponentCount) {
                /*announce win, record something like "level X = 'beaten'", let player pick a card from the opponent's hand
                
                userMenu.endGame(playerCount)*/
                }
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
                    console.log("When the player plays a card")
                    console.log(boardState[squareNumber])
                    let cardsFlipped = gameLogic.computePlay(boardState, squareNumber);
                    if (boardState.indexOf(0) === -1) {setTimeout(function() {drawBoard(boardState, "over", cardsFlipped)}, 50);
                    } else {
                        setTimeout(function() {drawBoard(boardState, "opponent", cardsFlipped)}, 50);
                    }
                    //boardState = gameLogic.computePlay(boardState, squareNumber);
                })
            }; 
        });
        if (turn === "opponent") {
            setTimeout(function() {gameLogic.opponentPlay(boardState)}, 1500);
        }
    }
    return {drawBoard};
})();

const gameLogic = (() => {
    const computePlay = function(boardState, squareNumber) {
        let cardsFlipped = [];   
        if ((squareNumber === 0) | (squareNumber === 3) | (squareNumber === 6)) {
            if ((typeof(boardState[squareNumber - 3]) === "object") && (boardState[squareNumber].top > boardState[squareNumber - 3].bottom)) {
                if (boardState[squareNumber - 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber - 3))};
            };
            if ((typeof(boardState[squareNumber + 1]) === "object") && (boardState[squareNumber].right > boardState[squareNumber + 1].left)) {
                if (boardState[squareNumber + 1].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber + 1))};
            }
            if ((typeof(boardState[squareNumber + 3]) === "object") && (boardState[squareNumber].bottom > boardState[squareNumber + 3].top)) {
                if (boardState[squareNumber + 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber + 3))};
            }
        } if ((squareNumber === 1) | (squareNumber === 4) | (squareNumber === 7)) {
            if ((typeof(boardState[squareNumber - 3]) === "object") && (boardState[squareNumber].top > boardState[squareNumber - 3].bottom)) {
                if (boardState[squareNumber - 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber - 3))};
            };
            if ((typeof(boardState[squareNumber + 1]) === "object") && (boardState[squareNumber].right > boardState[squareNumber + 1].left)) {
                if (boardState[squareNumber + 1].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber + 1))};
            }
            if ((typeof(boardState[squareNumber + 3]) === "object") && (boardState[squareNumber].bottom > boardState[squareNumber + 3].top)) {
                if (boardState[squareNumber + 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber + 3))};
            }
            if ((typeof(boardState[squareNumber -1]) === "object") && (boardState[squareNumber].left > boardState[squareNumber - 1].right)) {
                if (boardState[squareNumber - 1].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber - 1))};
            }
        } if ((squareNumber === 2) | (squareNumber === 5) | (squareNumber === 8)) {
            if ((typeof(boardState[squareNumber - 3]) === "object") && (boardState[squareNumber].top > boardState[squareNumber - 3].bottom)) {
                if (boardState[squareNumber - 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber - 3))};
            };
            if ((typeof(boardState[squareNumber - 1]) === "object") && (boardState[squareNumber].left > boardState[squareNumber - 1].right)) {
                if (boardState[squareNumber - 1].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber - 1))};
            };
            if ((typeof(boardState[squareNumber + 3]) === "object") && (boardState[squareNumber].bottom > boardState[squareNumber + 3].top)) {
                if (boardState[squareNumber + 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber + 3))};
            };
        };
        return cardsFlipped;

    };
    const opponentPlay = function(boardState) {
        let openSquares = [];
        boardState.forEach((item, index) => {
            // temporary logic for testing, computer will play the last card every time, on the first available spot.
            if (item === 0) {
                openSquares.push(index);
            };
        });
        let flip3Outcomes = [];
        let flip2Outcomes = [];
        let flip1Outcomes = [];
        let currentCardHand = [];
        let cardHandOpponent = document.querySelector(".cardHandOpponent");
        cardHandOpponent.childNodes.forEach((card,index) => {
            let cardId = card.getAttribute("id")
            currentCardHand.push(Object.create(cardArray.filter((obj) =>{return obj.name === cardId})[0]))
        });

        openSquares.forEach((square,index) => {
            currentCardHand.forEach((card, index2) => {
                let tempBoardstate = boardState.map((x)=> x);
                tempBoardstate[square] = card;
                tempBoardstate[square].status = "opponent";
                let cardsFlipped = computePlay(tempBoardstate, square);
                if (cardsFlipped.length === 3) {
                    flip3Outcomes.push({squareNumber: `${square}`, cardId: `${card.name}`, flipped: `${cardsFlipped.join(".")}`})
                } else if (cardsFlipped.length === 2) {
                    flip2Outcomes.push({squareNumber: `${square}`, cardId: `${card.name}`, flipped: `${cardsFlipped.join(".")}`})
                } else if (cardsFlipped.length === 1) {
                    flip1Outcomes.push({squareNumber: `${square}`, cardId: `${card.name}`, flipped: `${cardsFlipped.join(".")}`})
                    console.log("card name:" + card.name);
                };
            });
        });

        let picked = false;
        let pickedOutcome;
        if (flip3Outcomes.length > 0) {
            pickedOutcome = flip3Outcomes[Math.floor(Math.random()) * flip3Outcomes.length]
            picked = true; 
        } else if ((picked === false) && (flip2Outcomes.length > 0)) {
            pickedOutcome = flip2Outcomes[Math.floor(Math.random()) * flip2Outcomes.length]
            picked = true;
        } else if ((picked === false) && (flip1Outcomes.length > 0)) {pickedOutcome = flip1Outcomes[Math.floor(Math.random()) * flip1Outcomes.length]
            picked = true;
        } else if (picked === false) {
            pickedOutcome = {
                squareNumber: `${openSquares[Math.floor(Math.random() * openSquares.length)]}`, 
                cardId: `${currentCardHand[0].name}`,
                flipped: ""
            };
            picked = true;
        };

        let pickedCard = pickedOutcome.cardId;
        let pickedSquare = pickedOutcome.squareNumber;
        console.log("pickedSquare:"+ pickedSquare)
        cardHandOpponent.removeChild(cardHandOpponent.querySelector(`[id='${pickedCard}']`));
        boardState[pickedSquare] = Object.create(cardArray.filter((obj) =>{return obj.name === pickedCard})[0])                   ;
        boardState[pickedSquare].status = "opponent";
        console.log("When the pc plays a card")
        console.log(boardState[pickedSquare])
        console.log(boardState);
        let cardsFlipped2 = gameLogic.computePlay(boardState, parseInt(pickedSquare));
        console.log(cardsFlipped2);
        if (boardState.indexOf(0) === -1) {
            setTimeout(function() {board.drawBoard(boardState, "over", cardsFlipped2)}, 50);
        } else {
            setTimeout(function() {board.drawBoard(boardState, "player", cardsFlipped2)}, 50);
        }
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
        if (card.tier === "2") {currentCard.style.borderColor = "purple"};
        if (card.tier === "1") {currentCard.style.borderColor = "#ffe0389c"};
        

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

let playerHand = [cardJoca, cardKojima, cardKojima, cardSexHaver, cardAntónioCosta]
let opponentHand = [cardJoca, cardAntónioCosta, cardSexHaver, cardJoca, cardAntónioCosta]
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

const opponentCardHandSorting = function (cardSetFormula) {
    let cardSet = []
    for (let i = 0; i < cardSetFormula.tier3; i++) {
        cardSet.unshift(tier3[Math.floor(Math.random() * tier3.length)])
    };
    for (let i = 0; i < cardSetFormula.tier2; i++) {
        cardSet.unshift(tier2[Math.floor(Math.random() * tier2.length)])
    };
    for (let i = 0; i < cardSetFormula.tier1; i++) {
        cardSet.unshift(tier1[Math.floor(Math.random() * tier1.length)])
    };
    return cardSet;
    
};

const startGame = function (playerHand, opponent) {
    let turn;
    if (Math.random() >= (1/2)) {turn = "player"} else {turn = "opponent"};
    let cardSet = opponentCardHandSorting(opponent.cardSetFormula)
    generateCardHand(cardHandPlayer, playerHand);
    generateCardHand(cardHandOpponent, cardSet);
    let boardState = [0,0,0,0,0,0,0,0,0];
    board.drawBoard(boardState, turn);
};

startGame(playerHand, opponent1);