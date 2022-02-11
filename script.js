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
    this.tier = tier;
}

let cardDummy = Object.create(cardFactory, {
    "name": {value: "Dummy"},
    "top": {value: "10"}, "right": {value: "10"}, "bottom": {value: "10"}, "left": {value: "10"},
    "tier": {value: "dummy"},
    "status": {value: "", writable: true},
    "image": {value: "./images/antónioCosta.png"}
});

let cardAntónioCosta = Object.create(cardFactory, {
    "name": {value: "António Costa"},
    "top": {value: "3"}, "right": {value: "4"}, "bottom": {value: "3"}, "left": {value: "4"},
    "tier": {value: "3"},
    "status": {value: "", writable: true},
    "image": {value: "./images/AntónioCosta.png"}
});

let cardJoca = Object.create(cardFactory, {
    "name": {value:"Joca"}, 
    "top": {value: "1"}, "right": {value: "2"}, "bottom": {value: "7"},"left": {value: "2"},
    "tier": {value: "3"},
    "status": {value: "", writable: true},
    "image": {value: "./images/Joca.png"}
});

let cardKojima = Object.create(cardFactory, {
    "name": {value:"Hideo Kojima"},
    "top": {value: "6"}, "right": {value: "3"}, "bottom": {value: "6"}, "left": {value: "3"},
    "tier": {value: "2"},
    "status": {value: "", writable: true},
    "image": {value: "./images/Kojima.png"}
});

let cardSexHaver = Object.create(cardFactory, {
    "name": {value:"Sex Haver"},
    "top": {value: "5"}, "right": {value: "9"}, "bottom": {value: "5"}, "left": {value: "6"},
    "tier": {value: "1"},
    "status": {value: "", writable: true},
    "image": {value: "./images/SexHaver.png"}
});

let card1984 = Object.create(cardFactory, {
    "name": {value:"1984"},
    "top": {value: "1"}, "right": {value: "8"}, "bottom": {value: "4"}, "left": {value: "9"},
    "tier": {value: "1"},
    "status": {value: "", writable: true},
    "image": {value: "./images/1984.png"}
});

let cardShrike = Object.create(cardFactory, {
    "name": {value:"Shrike"},
    "top": {value: "7"}, "right": {value: "7"}, "bottom": {value: "4"}, "left": {value: "7"},
    "tier": {value: "1"},
    "status": {value: "", writable: true},
    "image": {value: "./images/Shrike.png"}
});

let cardMachoLatino = Object.create(cardFactory, {
    "name": {value: "Macho Latino"},
    "top": {value: "4"}, "right": {value: "5"}, "bottom": {value: "3"}, "left": {value: "1"},
    "tier": {value: "3"},
    "status": {value: "", writable: true},
    "image": {value: "./images/MachoLatino.png"}
});

let cardSaad = Object.create(cardFactory, {
    "name": {value: "Saad"},
    "top": {value: "6"}, "right": {value: "3"}, "bottom": {value: "2"}, "left": {value: "2"},
    "tier": {value: "3"},
    "status": {value: "", writable: true},
    "image": {value: "./images/Saad.png"}
});

let cardShrimpPizza = Object.create(cardFactory, {
    "name": {value:"Shrimp Pizza"},
    "top": {value: "4"}, "right": {value: "7"}, "bottom": {value: "5"}, "left": {value: "4"},
    "tier": {value: "2"},
    "status": {value: "", writable: true},
    "image": {value: "./images/ShrimpPizza.png"}
});

let cardJoséFigueiras = Object.create(cardFactory, {
    "name": {value:"José Figueiras"},
    "top": {value: "2"}, "right": {value: "3"}, "bottom": {value: "6"}, "left": {value: "8"},
    "tier": {value: "2"},
    "status": {value: "", writable: true},
    "image": {value: "./images/JoséFigueiras.png"}
});

let cardCucoo = Object.create(cardFactory, {
    "name": {value:"Cucoo"},
    "top": {value: "4"}, "right": {value: "3"}, "bottom": {value: "2"}, "left": {value: "4"},
    "tier": {value: "3"},
    "status": {value: "", writable: true},
    "image": {value: "./images/Cucoo.png"}
});



// REMEMBER TO ADD TO THE ARRAY
const cardArray = [cardDummy, cardAntónioCosta, cardJoca, cardKojima, cardSexHaver, card1984, cardShrike, cardMachoLatino, cardSaad, cardShrimpPizza, 
    cardCucoo, cardJoséFigueiras];

const tier3 = cardArray.filter((obj) => {return obj.tier === "3"})
const tier2 = cardArray.filter((obj) => {return obj.tier === "2"});
const tier1 = cardArray.filter((obj) => {return obj.tier === "1"});

const opponents = (function () {
    
    const opponentFactory = function (name, cardSet, level, unlocked) {
        this.name = name;
        this.cardSet = cardSet;
        this.level = level;
        this.unlocked = unlocked;
    };
        
    let opponent1 = Object.create(opponentFactory, {
        "name": {value: "Roberto"},
        "cardSetFormula": {value: {tier3: "5", tier2: "0", tier1: "0"}},
        "level": {value: "1"},
        "unlocked": {value: "yes", writable: true}
    });
    
    let opponent2 = Object.create(opponentFactory, {
        "name": {value: "Condoriano"},
        "cardSetFormula": {value: {tier3: "4", tier2: "1", tier1: "0"}},
        "level": {value: "2"},
        "unlocked": {value: "no", writable: true}
    });
    
    let opponent3 = Object.create(opponentFactory, {
        "name": {value: "Guidobaldo"},
        "cardSetFormula": {value: {tier3: "2", tier2: "3", tier1: "0"}},
        "level": {value: "3"},
        "unlocked": {value: "no", writable: true}
    });
    
    let opponent4 = Object.create(opponentFactory, {
        "name": {value: "Dorothea"},
        "cardSetFormula": {value: {tier3: "1", tier2: "4", tier1: "0"}},
        "level": {value: "4"},
        "unlocked": {value: "no", writable: true}
    });
    
    let opponent5 = Object.create(opponentFactory, {
        "name": {value: "Jimin"},
        "cardSetFormula": {value: {tier3: "0", tier2: "4", tier1: "1"}},
        "level": {value: "5"},
        "unlocked": {value: "no", writable: true}
    });

    let opponent6 = Object.create(opponentFactory, {
        "name": {value: "You, 4 years ago."},
        "cardSetFormula": {value: {tier3: "0", tier2: "3", tier1: "2"}},
        "level": {value: "6"},
        "unlocked": {value: "no", writable: true}
    });

    let opponent7 = Object.create(opponentFactory, {
        "name": {value: "Berto"},
        "cardSetFormula": {value: {tier3: "0", tier2: "2", tier1: "3"}},
        "level": {value: "7"},
        "unlocked": {value: "no", writable: true}
    });

    let opponent8 = Object.create(opponentFactory, {
        "name": {value: "Tó."},
        "cardSetFormula": {value: {tier3: "0", tier2: "0", tier1: "5"}},
        "level": {value: "8"},
        "unlocked": {value: "no", writable: true}
    });

    const opponentArray = [opponent1, opponent2, opponent3, opponent4, opponent5, opponent6, opponent7, opponent8];

    return {opponentArray}
})();



const board = (() => {
    
    let drawBoard = function(boardState, turn, cardsFlipped, opponentHand) {
        let table = document.querySelector(".table")
        table.replaceChildren("");
        boardState.forEach((item,index) => {    
            let square = dom.addElement(".table", "div", "square");
            let squareNumber = index;
            if (item !== 0) {   
                let cardOnBoard = cardDrawing.drawCard(square, boardState[squareNumber]);
                if (boardState[squareNumber].status === "player") {cardOnBoard.classList.toggle("playerCard");};
                if ((cardsFlipped.length > 0) && (cardsFlipped.indexOf(squareNumber) != -1)) {
                    setTimeout(function() {cardOnBoard.classList.toggle("flip1")}, 20 + (index*(1)));  //we need a 20ms time out here
                    setTimeout(function() {cardOnBoard.classList.toggle("playerCard"); // we need 600ms time out here for these 2
                    cardOnBoard.classList.toggle("flip1")}, 600 + (index*1));
                    cardsFlipped.forEach((item, index) => {
                        let flipDirection;
                        if (boardState[item].status === "player") {
                            flipDirection = "to opponent";
                        } else if (boardState[item].status === "opponent") {
                            flipDirection = "to player";
                        } if (flipDirection === "to player") {boardState[item].status = "player"; console.log("we flipped" + item);
                        } else if (flipDirection === "to opponent") {boardState[item].status = "opponent"; console.log("we flipped" + item);
                        }
                        cardsFlipped.splice(index, 1);
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
        //check for game ending!
        if (turn === "over") {
            let playerCount = boardState.filter((obj) => {return obj.status === "player"}).length;
            let opponentCount = boardState.filter((obj) => {return obj.status === "opponent"}).length;
            setTimeout(function() {
                let gameFrame = document.querySelector(".gameFrame");
                gameFrame.classList.add("blur")}, 600);
            if (playerCount === opponentCount) {
                let result = dom.addElement("#content", "div", "result");
                result.textContent = "Draw";
                result.classList.add("draw");
                setTimeout(function() {result.classList.add("resultFadeIn")}, 600);
                setTimeout(function () {startGame(playerHand, (currentOpponent.level - 1))}, 4000);
                /*show draw and restart the game*/
            } else if (playerCount > opponentCount) {
                winCount += 1;
                let result = dom.addElement("#content", "div", "result");
                if (winCount !== 2) {
                result.textContent = `${winCount} - ${lossCount}`;
                result.classList.add("win");
                setTimeout(function() {result.classList.add("resultFadeIn")}, 600);
                }
                if (winCount === 2) {
                    result.textContent = "You win";
                result.classList.add("win");
                setTimeout(function() {result.classList.add("resultFadeIn")}, 600);
                    setTimeout(function() {minorMenuMethods.executeCardChoice(result)}, 1000); //play music and check the executeCardChoice function to return to menu THERE, not here.
                } else {
                    setTimeout(function() {startGame(playerHand, (currentOpponent.level - 1))}, 4000);
                }
                
            } else if (playerCount < opponentCount) {
                lossCount +=1;
                if (lossCount !== 2) {
                    let result = dom.addElement("#content", "div", "result");
                    result.textContent = `${winCount} - ${lossCount}`;
                    result.classList.add("loss");
                setTimeout(function() {result.classList.add("resultFadeIn")}, 600);
                }
            if (lossCount === 2) {
                let result = dom.addElement("#content", "div", "result");
                result.textContent = "You lost";
                result.classList.add("loss");
                setTimeout(function() {result.classList.add("resultFadeIn")}, 600);
                setTimeout(function() {menuing.drawMainMenu()}, 4000);
                setTimeout(function () {const fadeAudio = setInterval(() => {
                    if (audio.volume !== 0) {
                    audio.volume -= 0.1
                    }
              
                 if (audio.volume < 0.003) {
                    clearInterval(fadeAudio)
                    audio.pause();
                    }
                 }, 200);}, 3000);/*minorMenuMethods.Maybe have a function here for them stealing a card from you and return to menu*/
            } else {
                setTimeout(function() {startGame(playerHand, (currentOpponent.level - 1))}, 4000);
            }

                //go back to the menu and maybe remove a card from the player if he has more than 5 cards!
            }
            /*announce win, record something like "level X = 'beaten'", let player pick a card from the opponent's hand
            
            userMenu.endGame(playerCount)*/
        };
    }
    return {drawBoard};
})();

const gameLogic = (() => {
    const computePlay = function(boardState, squareNumber) {
        let cardsFlipped = [];   
        console.log("inside computePLay")
        console.log(boardState[squareNumber])
        if ((squareNumber == 0) | (squareNumber == 3) | (squareNumber == 6)) {
            if ((typeof(boardState[squareNumber - 3]) === "object") && (parseInt(boardState[squareNumber].top) > parseInt(boardState[squareNumber - 3].bottom))) {
                if (boardState[squareNumber - 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber - 3))};
            };
            if ((typeof(boardState[squareNumber + 1]) === "object") && (parseInt(boardState[squareNumber].right) > parseInt(boardState[squareNumber + 1].left))) {
                if (boardState[squareNumber + 1].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber + 1))};
            }
            if ((typeof(boardState[squareNumber + 3]) === "object") && (parseInt(boardState[squareNumber].bottom) > parseInt(boardState[squareNumber + 3].top))) {
                if (boardState[squareNumber + 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber + 3))};
            }
        } if ((squareNumber == 1) | (squareNumber == 4) | (squareNumber == 7)) {
            if ((typeof(boardState[squareNumber - 3]) === "object") && (parseInt(boardState[squareNumber].top) > parseInt(boardState[squareNumber - 3].bottom))) {
                if (boardState[squareNumber - 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber - 3))};
            };
            if ((typeof(boardState[squareNumber + 1]) === "object") && (parseInt(boardState[squareNumber].right) > parseInt(boardState[squareNumber + 1].left))) {
                if (boardState[squareNumber + 1].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber + 1))};
            }
            if ((typeof(boardState[squareNumber + 3]) === "object") && (parseInt(boardState[squareNumber].bottom) > parseInt(boardState[squareNumber + 3].top))) {
                if (boardState[squareNumber + 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber + 3))};
            }
            if ((typeof(boardState[squareNumber -1]) === "object") && (parseInt(boardState[squareNumber].left) > parseInt(boardState[squareNumber - 1].right))) {
                if (boardState[squareNumber - 1].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber - 1))};
            }
        } if ((squareNumber == 2) | (squareNumber == 5) | (squareNumber == 8)) {
            if ((typeof(boardState[squareNumber - 3]) === "object") && (parseInt(boardState[squareNumber].top) > parseInt(boardState[squareNumber - 3].bottom))) {
                if (boardState[squareNumber - 3].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber - 3))};
            };
            if ((typeof(boardState[squareNumber - 1]) === "object") && (parseInt(boardState[squareNumber].left) > parseInt(boardState[squareNumber - 1].right))) {
                if (boardState[squareNumber - 1].status !== boardState[squareNumber].status) {cardsFlipped.push((squareNumber - 1))};
            };
            if ((typeof(boardState[squareNumber + 3]) === "object") && (parseInt(boardState[squareNumber].bottom) > parseInt(boardState[squareNumber + 3].top))) {
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
                    flip3Outcomes.push({squareNumber: `${square}`, cardId: `${card.name}`, cardTier: `${card.tier}`})
                } else if (cardsFlipped.length === 2) {
                    flip2Outcomes.push({squareNumber: `${square}`, cardId: `${card.name}`, cardTier: `${card.tier}`})
                } else if (cardsFlipped.length === 1) {
                    flip1Outcomes.push({squareNumber: `${square}`, cardId: `${card.name}`, cardTier: `${card.tier}`})
                };
            });
        });

        let flip1OutcomesTier3 = flip1Outcomes.filter((outcome) => {return outcome.cardTier == 3});
        let flip1OutcomesTier2 = flip1Outcomes.filter((outcome) => {return outcome.cardTier == 2});
        

        let picked = false;
        let pickedOutcome;
        if (flip3Outcomes.length > 0) {
            pickedOutcome = flip3Outcomes[Math.floor(Math.random() * flip3Outcomes.length)]
            picked = true; 
        } else if ((picked === false) && (flip2Outcomes.length > 0)) {
            pickedOutcome = flip2Outcomes[Math.floor(Math.random() * flip2Outcomes.length)]
            picked = true;
        } else if ((picked === false) && (flip1Outcomes.length > 0)) {
            if (flip1OutcomesTier3.length > 0) {
                pickedOutcome = flip1OutcomesTier3[Math.floor(Math.random() * flip1OutcomesTier3.length)]
            } else if (flip1OutcomesTier2.length > 0) {
                pickedOutcome = flip1OutcomesTier2[Math.floor(Math.random() * flip1OutcomesTier2.length)]  
            } else {
                pickedOutcome = flip1Outcomes[Math.floor(Math.random() * flip1Outcomes.length)]
            }
            picked = true;
            
        // if there are 2 squares left, compute a dummy play where a 6/6/6/6 card flips your mate, and make it play there.
        } else if ((picked === false) && (openSquares.length > 1) && (openSquares.length < 9)) {
            let bestSquares = []
            openSquares.forEach((square,index) => {
                let tempBoardState = boardState.map((x)=> x);
                tempBoardState[square] = Object.create(cardArray.filter((obj) =>{return obj.name === "Dummy"})[0])
                tempBoardState[square].status = "player";
                console.log(tempBoardState)
                let cardsFlipped = gameLogic.computePlay(tempBoardState, square);
                console.log(square + "flippedcardslength" + cardsFlipped.length);
                if (cardsFlipped.length > 0) {bestSquares.push(square)}
                
            })
            console.log(bestSquares);
            if ((bestSquares.length > 0) && (openSquares.length == 2)) {
                let tier1Cards = currentCardHand.filter((card)=> {return card.tier == 1});
                let tier2Cards = currentCardHand.filter((card)=> {return card.tier == 2});
                let tier3Cards = currentCardHand.filter((card)=> {return card.tier == 3});
                let squareValue = [{squareN: 0}, {squareN: 1}]
                let correctSquare = []
                bestSquares.forEach((sq,index) => {
                    if ((boardState[sq + 3] !== undefined) && (boardState[sq + 3].status === "opponent")) {
                        squareValue[index]["vertical"] = boardState[sq + 3].top;
                    };
                    if ((boardState[sq - 3] !== undefined) && (boardState[sq - 3].status === "opponent")) {
                        squareValue[index]["vertical"] = boardState[sq - 3].bottom;
                    };
                    if ((sq === 1) | (sq === 4) | (sq === 7)) {
                        if ((boardState[sq + 1] !== undefined) && (boardState[sq + 1].status === "opponent")) {
                            squareValue[index]["horizontal"] = boardState[sq + 1].left;
                        };
                        if ((boardState[sq - 1] !== undefined) && (boardState[sq - 1].status === "opponent")) {
                            squareValue[index]["horizontal"] = boardState[sq - 1].right;
                        }
                    }
                    if ((sq === 0) | (sq === 3) | (sq === 6)) {
                        if ((boardState[sq + 1] !== undefined) && (boardState[sq + 1].status === "opponent")) {
                            squareValue[index]["horizontal"] = boardState[sq + 1].left;
                        };
                    }
                    if ((sq === 2) | (sq === 5) | (sq === 8)) {
                        if ((boardState[sq - 1] !== undefined) && (boardState[sq - 1].status === "opponent")) {
                            squareValue[index]["horizontal"] = boardState[sq - 1].right;
                        }
                    }
                });
                if ((squareValue[0]["horizontal"] !== undefined) && (squareValue[1]["horizontal"] !== undefined)) {
                    if (squareValue[0]["horizontal"] < squareValue[1]["horizontal"]) {
                        correctSquare.push(bestSquares[0]);
                    }
                    if (squareValue[1]["horizontal"] < squareValue[0]["horizontal"]) {
                        correctSquare.push(bestSquares[1]);
                    }
                }
                if ((squareValue[0]["horizontal"] !== undefined) && (squareValue[1]["vertical"] !== undefined)) {
                    if (squareValue[0]["horizontal"] < squareValue[1]["vertical"]) {
                        correctSquare.push(bestSquares[0]);
                    }
                    if (squareValue[1]["vertical"] < squareValue[0]["horizontal"]) {
                        correctSquare.push(bestSquares[1]);
                    }
                }
                if ((squareValue[0]["vertical"] !== undefined) && (squareValue[1]["vertical"] !== undefined)) {
                    if (squareValue[0]["vertical"] < squareValue[1]["vertical"]) {
                        correctSquare.push(bestSquares[0]);
                    }
                    if (squareValue[1]["vertical"] < squareValue[0]["vertical"]) {
                        correctSquare.push(bestSquares[1]);
                    }
                }
                if ((squareValue[0]["vertical"] !== undefined) && (squareValue[1]["horizontal"] !== undefined)) {
                    if (squareValue[0]["vertical"] < squareValue[1]["horizontal"]) {
                        correctSquare.push(bestSquares[0]);
                    }
                    if (squareValue[1]["horizontal"] < squareValue[0]["vertical"]) {
                        correctSquare.push(bestSquares[1]);
                    }
                }
                if (correctSquare.length > 0) {
                    if (tier1Cards.length > 0) {
                        pickedOutcome = {
                            squareNumber: `${correctSquare[Math.floor(Math.random()*correctSquare.length)]}`, 
                            cardId: `${tier1Cards[0].name}`
                        };
                        picked = true;
                    } else if (tier2Cards.length > 0) {
                        pickedOutcome = {
                            squareNumber: `${correctSquare[Math.floor(Math.random()*correctSquare.length)]}`, 
                            cardId: `${tier2Cards[0].name}`
                        };
                        picked = true;
                    } else if (tier3Cards.length > 0) {
                        pickedOutcome = {
                            squareNumber: `${correctSquare[Math.floor(Math.random()*correctSquare.length)]}`, 
                            cardId: `${tier3Cards[0].name}`
                        };
                        picked = true;
                    }
                } else {
                    if (tier1Cards.length > 0) {
                        pickedOutcome = {
                            squareNumber: `${bestSquares[0]}`, 
                            cardId: `${tier1Cards[0].name}`
                        };
                        picked = true;
                    } else if (tier2Cards.length > 0) {
                        pickedOutcome = {
                            squareNumber: `${bestSquares[0]}`, 
                            cardId: `${tier2Cards[0].name}`
                        };
                        picked = true;
                    } else if (tier3Cards.length > 0) {
                        pickedOutcome = {
                            squareNumber: `${bestSquares[0]}`, 
                            cardId: `${tier3Cards[0].name}`
                        };
                        picked = true;
                    }
                }
                
            } else if ((bestSquares.length > 0) && (openSquares.length > 2)) {
                let tier1Cards = currentCardHand.filter((card)=> {return card.tier == 1});
                let tier2Cards = currentCardHand.filter((card)=> {return card.tier == 2});
                let tier3Cards = currentCardHand.filter((card)=> {return card.tier == 3});
                if (tier3Cards.length > 0) {
                    pickedOutcome = {
                        squareNumber: `${bestSquares[0]}`, 
                        cardId: `${tier3Cards[0].name}`
                    };
                    picked = true;
                } else if (tier2Cards.length > 0) {
                    pickedOutcome = {
                        squareNumber: `${bestSquares[0]}`, 
                        cardId: `${tier2Cards[0].name}`
                    };
                    picked = true;
                } else if (tier1Cards.length > 0) {
                    pickedOutcome = {
                        squareNumber: `${bestSquares[0]}`, 
                        cardId: `${tier1Cards[0].name}`
                    };
                    picked = true;
                }
            }
            
            

        } if (picked === false) {

            let tier1Cards = currentCardHand.filter((card)=> {return card.tier == 1});
            let tier2Cards = currentCardHand.filter((card)=> {return card.tier == 2});
            let tier3Cards = currentCardHand.filter((card)=> {return card.tier == 3});
            let randomSquare = openSquares[Math.floor(Math.random() * openSquares.length)]
            if (tier3Cards.length > 0) {
                pickedOutcome = {
                    squareNumber: `${randomSquare}`, 
                    cardId: `${tier3Cards[`${Math.floor(Math.random() * tier3Cards.length)}`].name}`
                };
            } else if (tier2Cards.length > 0) {
                pickedOutcome = {
                    squareNumber: `${randomSquare}`,  
                    cardId: `${tier2Cards[`${Math.floor(Math.random() * tier2Cards.length)}`].name}`
                };
            } else if (tier1Cards.length > 0) {
                pickedOutcome = {
                    squareNumber: `${randomSquare}`, 
                    cardId: `${tier1Cards[`${Math.floor(Math.random() * tier1Cards.length)}`].name}`
                };
            }
            picked = true;
        };

        let pickedCard = pickedOutcome.cardId;
        let pickedSquare = pickedOutcome.squareNumber;
        console.log("pickedSquare:"+ pickedSquare)
        cardHandOpponent.removeChild(cardHandOpponent.querySelector(`[id='${pickedCard}']`));
        boardState[pickedSquare] = Object.create(cardArray.filter((obj) =>{return obj.name === pickedCard})[0])                   ;
        boardState[pickedSquare].status = "opponent";
        let cardsFlipped2 = gameLogic.computePlay(boardState, parseInt(pickedSquare));
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
    let drawCard = function(parentNode, card, owner) {
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
        if (owner === "player")  {cardPicture.setAttribute("ondragstart", "return false")};
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
        if (owner === "player") {currentCard.classList.toggle("playerCard")};
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

const buildFrame = function() {
    let gameFrame = dom.addElement("#content", "div", "gameFrame");
    let cardHandPlayer = dom.addElement(".gameFrame", "div", "cardHand");
    cardHandPlayer.classList.add("cardHandPlayer");
    dom.addElement(".gameFrame", "div", "table");
    let cardHandOpponent = dom.addElement(".gameFrame", "div", "cardHand");
    cardHandOpponent.classList.add("cardHandOpponent");
};

let dragged;

const minorMenuMethods = (() => {
    let executeCardChoice = (result) => {
        let nextLevel = parseInt(currentOpponent.level);
        console.log("next level:" + nextLevel);
        if (nextLevel < 8) {
        opponents.opponentArray[nextLevel].unlocked = "yes";
        }
        setTimeout(function() {result.classList.add("resultFadeIn")}, 600);
        setTimeout(function() {
            let cardChoices = dom.addElement("#content", "div", "cardChoices")
            setTimeout(function() {cardChoices.classList.add("visible")}, 10);
            let cardsAvailable = currentOpponent.cardSet.map((x)=>x);
            let added = 0;
            cardsAvailable.forEach((item,index) => {
                let pickableCard = cardDrawing.drawCard(cardChoices, item);
                pickableCard.classList.add("pickableCard");
                pickableCard.addEventListener("click", (event) => {
                    if (added === 0) {
                        playerCardArray.push(Object.create(cardArray.filter((obj) =>{return obj.name === pickableCard.getAttribute("id")})[0])); 
                        added = 1;
                        pickableCard.classList.remove("pickableCard");
                           
                        setTimeout(function() {pickableCard.classList.toggle("flip1")}, 210);
                        setTimeout(function() {
                            pickableCard.classList.toggle("playerCard");
                            pickableCard.classList.toggle("flip1");
                        }, 600);
                        setTimeout(function(){
            
                            menuing.drawMainMenu();
                            const fadeAudio = setInterval(() => {
                                if (audio.volume !== 0) {
                                audio.volume -= 0.1
                                }
                          
                             if (audio.volume < 0.003) {
                                clearInterval(fadeAudio);
                                audio.pause();    
                            }
                             }, 200);
                
                        }, 3000);
                    }
                    }, {once: true});
                }, 2000);
            });
    };
            
    return {executeCardChoice}
})();

const cardSorting = (function() {
    const playerCardHandSorting = function () {
        let cardSetFormula = {
            tier3: "5",
            tier2: "0",
            tier1: "0",
        };
        let cardSet = [0, 1, 2, 3, 4]
        let j = 0
        for (let i = 0; i < cardSetFormula.tier3; i++) {
            cardSet[j] = (tier3[Math.floor(Math.random() * tier3.length)])
            if (cardSet.filter((item) => {return item === cardSet[j]}).length > 2) {i--; j--};
            j++;
        };
        for (let i = 0; i < cardSetFormula.tier2; i++) {
            cardSet[j] = (tier2[Math.floor(Math.random() * tier2.length)])
            if (cardSet.filter((item) => {return item === cardSet[j]}).length > 2) {i--; j--}
            j++        
        };
        for (let i = 0; i < cardSetFormula.tier1; i++) {
            cardSet[j] = (tier1[Math.floor(Math.random() * tier1.length)])
            if (cardSet.filter((item) => {return item === cardSet[j]}).length > 2) {i--; j--}
            j++
        };
        return cardSet;
        
    };
    const opponentCardHandSorting = function (cardSetFormula) {
        let cardSet = [0, 1, 2, 3, 4]
        let j = 0
        for (let i = 0; i < cardSetFormula.tier3; i++) {
            cardSet[j] = (tier3[Math.floor(Math.random() * tier3.length)])
            if (cardSet.filter((item) => {return item === cardSet[j]}).length > 2) {i--; j--}
            j++
        };
        for (let i = 0; i < cardSetFormula.tier2; i++) {
            cardSet[j] = (tier2[Math.floor(Math.random() * tier2.length)])
            if (cardSet.filter((item) => {return item === cardSet[j]}).length > 2) {i--; j--}
            j++        
        };
        for (let i = 0; i < cardSetFormula.tier1; i++) {
            cardSet[j] = (tier1[Math.floor(Math.random() * tier1.length)])
            if (cardSet.filter((item) => {return item === cardSet[j]}).length > 2) {i--; j--}
            j++
        };
        return cardSet;
        
    };
    return {playerCardHandSorting, opponentCardHandSorting}

})();

// this only runs once, right at the start; we might put it into a first screen IIFE and return the object  
let playerCardArray = cardSorting.playerCardHandSorting();
let playerHand = playerCardArray.map((x) => x);
// we shall generate a hand for every opponent when the page first loads.
opponents.opponentArray[0]["cardSet"] = cardSorting.opponentCardHandSorting(opponents.opponentArray[0].cardSetFormula);
opponents.opponentArray[1]["cardSet"] = cardSorting.opponentCardHandSorting(opponents.opponentArray[1].cardSetFormula);
opponents.opponentArray[2]["cardSet"] = cardSorting.opponentCardHandSorting(opponents.opponentArray[2].cardSetFormula);
opponents.opponentArray[3]["cardSet"] = cardSorting.opponentCardHandSorting(opponents.opponentArray[3].cardSetFormula);
opponents.opponentArray[4]["cardSet"] = cardSorting.opponentCardHandSorting(opponents.opponentArray[4].cardSetFormula);
opponents.opponentArray[5]["cardSet"] = cardSorting.opponentCardHandSorting(opponents.opponentArray[5].cardSetFormula);
opponents.opponentArray[6]["cardSet"] = cardSorting.opponentCardHandSorting(opponents.opponentArray[6].cardSetFormula);
opponents.opponentArray[7]["cardSet"] = cardSorting.opponentCardHandSorting(opponents.opponentArray[7].cardSetFormula);



function generateCardHand (player, cardSet, owner) {
    cardSet.forEach(function(card, index) {
        let currentCard = cardDrawing.drawCard(player, card, owner);
        currentCard.classList.toggle("isInHand");
        if (owner === "player") {currentCard.setAttribute("owner", "player")}
        if (owner === "opponent") {currentCard.setAttribute("owner", "opponent")}
        if (currentCard.getAttribute("owner") === "player") {
            currentCard.setAttribute("draggable", "true");
            currentCard.addEventListener("drag", function(event) {}, false);
            currentCard.addEventListener("dragstart", function(event) {dragged = event.target});
        }

    });
};

let currentOpponent;
let winCount;
let lossCount;
let nextRound;
let audio = document.createElement("audio");
audio.setAttribute("src", "./audio/ost.mp3")
audio.setAttribute("loop", "true");

const startGame = function (playerHand, opponentIndex) {
    let content = document.querySelector("#content")
    content.replaceChildren("");
    buildFrame();
    let cardHandPlayer = content.querySelector(".cardHandPlayer");
    let cardHandOpponent = content.querySelector(".cardHandOpponent");
    let turn;
    currentOpponent = opponents.opponentArray[opponentIndex];
    if (nextRound === undefined) {
        if (Math.random() >= (1/2)) {turn = "player"; let nextRound = "opponent"} else {turn = "opponent"; let nextRound = "player"};
    } else {
        if (nextRound === "opponent") {turn = "opponent", nextRound = "player"} else {turn = "player", nextRound = "opponent"};
    };
    
    generateCardHand(cardHandPlayer, playerHand, "player");
    generateCardHand(cardHandOpponent, currentOpponent["cardSet"], "opponent");
    let boardState = [0,0,0,0,0,0,0,0,0];
    board.drawBoard(boardState, turn);
    
};

const menuing = (() => {
    const drawMainMenu = () => {
        winCount = 0;
        lossCount = 0;
        nextRound = undefined;
        let content = document.querySelector("#content");
        content.replaceChildren("");
        let mainMenuFrame = dom.addElement("#content", "div", "mainMenuFrame");
        let deckBuildingDiv = dom.addElement(".mainMenuFrame", "div", "deckBuildingDiv");
        let deckSelect = dom.addElement(".deckBuildingDiv", "button", "deckSelect");
        deckSelect.textContent = "Edit deck";
        let deckDisplay = dom.addElement(".deckBuildingDiv", "div", "deckDisplay");
        let drawDisplayedCards = (function() {
            for (let i = 0; i < 5; i++) {
                let displayedCard = cardDrawing.drawCard(deckDisplay, playerHand[i], "player");
                displayedCard.classList.add("displayedCard");
                if (i > 0) {displayedCard.style["margin-left"] = "-100px";}
            };
        })();
        
        
        let levelLibrary = dom.addElement(".mainMenuFrame", "div", "levelLibrary");
        for (let i = 0; i < 8; i++) {
            // generate level divs, buttons, addeventlistener with an if statement based on their unlocked property
            let levelDiv = dom.addElement(".levelLibrary", "div", "level");
            levelDiv.setAttribute("id", `level${i+1}`);
            if (opponents.opponentArray[i].unlocked === "no") {
                let levelLocked = dom.addElement(`#level${i+1}`, "p", "locked");
                levelLocked.textContent = "???";


            };
            if (opponents.opponentArray[i].unlocked === "yes") {
                let levelButton = dom.addElement(`#level${i+1}`, "button", "unlocked")
                levelButton.textContent = `${i+1}: ${opponents.opponentArray[i].name}`;
                levelButton.addEventListener("click", (event) => {
                    startGame(playerHand, i)
                    audio.volume = 1;
                    audio.play()
                });
            };

        }

    }
    return {drawMainMenu};
})();

//for testing, function to unlock all levels:

for (let i = 0; i < 8; i++) {opponents.opponentArray[i].unlocked = "yes"}

menuing.drawMainMenu();



/* WE START THE GAME HERE; BY LETTING THE PLAYER CLICK A SINGLE EXISTING ELEMENT WHICH WILL REVEAL
THE STARTING SET OF CARDS. THE SET OF CARDS WILL FADE AFTER A FEW SECONDS AND WE'RE ON THE MAIN MENU.
THE MAIN MENU CAN BE A "LIBRARY" OF LEVELS, WHICH MUST BE UNLOCKED SEQUENTIALLY. BEATING OPPONENT 1
WILL DO opponent2.unlocked = "yes", etc... IN THIS SCREEN WE WILL HAVE A NICE WAY TO SELECT CARD LOADOUT*/