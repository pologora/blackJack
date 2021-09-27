

let firstCard = 0;
let secondCard = 0;
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""

const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const playerEl = document.getElementById("player-el")

let player = {
    name: "Aleks",
    chips: 145,
}
let allCards = []

playerEl.textContent = player.name + ": $" + player.chips 
function getRandomCard() {
    const random = Math.floor(Math.random() * 13) + 1
    if (random > 10) {
        return 10;
    } else if (random === 1) {
        return 11
    } else return random;
}


function startGame() {
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    sum = firstCard + secondCard
    allCards = [firstCard, secondCard]
    isAlive = true
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: " + allCards.join(" ");
    // for(let i = 0;i<allCards.length;i++)
    // {
    //     cardsEl.textContent += allCards[i] + " "
    // }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        isAlive = false
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive) {
        const newCard = getRandomCard()
        sum += newCard;
        allCards.push(newCard)
        renderGame();
    }
}
