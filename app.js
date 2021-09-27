

let firstCard;
let secondCard;
let sum;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let allCards = []

function getRandomCard()
{
    return Math.floor(Math.random()*10) + 2
}


function startGame() {
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    sum = firstCard + secondCard
    allCards = [firstCard, secondCard]
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
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    const newCard = getRandomCard()
    sum += newCard;  
    allCards.push(newCard)
    renderGame();
}
