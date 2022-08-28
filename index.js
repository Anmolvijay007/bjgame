cards = [];
sum = 0;
hasBlackJack = false;
isAlive = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let player={
    Name:"Anmol",
    Chips:499
}
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.Name+":💰"+player.Chips;
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}
function startGame() {
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards=[firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    sumEl.textContent = "Sum:" + sum;
    cardEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!"
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if(isAlive===true && hasBlackJack===false){
    card = getRandomNumber();
    sum += card;
    cards.push(card);
    renderGame();
    }
}