let cards=[];
let sum = 0
let hasBlackJack = false;
let isAlive = false;

let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");

let player = {
    name: "Per",
    chips: 145
}
let playerEl = document.getElementById("player-el");

function startGame(){
    isAlive = true;
    hasBlackJack = false;
    let firstCard = Math.floor((Math.random() * 12) + 1);
    let secondCard = Math.floor((Math.random() * 12) + 1);
    cards=[firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();

    playerEl.textContent = player.name + ": $" + player.chips;
}

function renderGame() {
    if (sum < 21) {
        message = "Wanna hit again?"
    } else if (sum === 21) {
        message = "Blackjack."
        hasBlackJack = true;
    } else {
        message = "You're out."
        isAlive = false;
    }
    console.log(message);
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
}
console.log(cards);
function newCard(){

    if(isAlive === true && hasBlackJack === false){
        let newCard = Math.floor((Math.random() * 13) + 1);
        if(newCard === 1){
            newCard = 11;
        }else if(newCard === 11 || newCard === 12|| newCard ===13){
            newCard = 10;
        }
        sum += newCard;
        cards.push(newCard);
        renderGame()
    }else{
        ;
    }

}