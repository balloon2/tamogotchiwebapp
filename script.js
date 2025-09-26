let hunger = 50;
let happiness = 50;
let isGameOver = false;
let tamagotchiName = "";

const hungerLevel = document.getElementById("hunger-level");
const happinessLevel = document.getElementById("happiness-level");
const tamagotchi = document.getElementById("tamagotchi");
const gameOverScreen = document.getElementById("gameOverScreen");
const tamagotchiNameDisplay = document.getElementById("tamagotchiNameDisplay");
const createScreen = document.getElementById("create-screen");
const gameScreen = document.getElementById("game-screen");
const restartButton = document.getElementById("restartButton");
const feedButton = document.getElementById("feedButton");
const playButton = document.getElementById("playButton");
const cleanButton = document.getElementById("cleanButton");
const startGameButton = document.getElementById("startGameButton");
const tamagotchiNameInput = document.getElementById("tamagotchiName");
const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");

const marketplaceButton = document.getElementById("marketplaceButton");


function marketplace() {
    marketplaceButton.addEventListener("click", () => {
        window.location.href = 'marketplace.html';
        window.open("file://marketplace.html","_self")
        console.log("loading Marketplace")
    });
}


function startGame() {
    tamagotchiName = tamagotchiNameInput.value.trim();

    if (tamagotchiName === "") {
        alert("Please enter a name for your Tamagotchi!");
        return;
    }

    tamagotchiNameDisplay.textContent = tamagotchiName;
    createScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
}




function checkGameOver() {
    if (hunger <= 0 || happiness <= 0) {
        isGameOver = true;
        gameOverScreen.classList.remove("hidden");
        gameScreen.classList.add("hidden");
    }
}


function feed() {
    if (isGameOver) return;
    hunger = Math.min(100, hunger + 10);
    hungerLevel.textContent = hunger;
    checkGameOver();
}

function play() {
    if (isGameOver) return;
    happiness = Math.min(100, happiness + 10);
    happinessLevel.textContent = happiness;
    checkGameOver();
}

function clean() {
    if (isGameOver) return;
    hunger = Math.max(0, hunger - 5);
    happiness = Math.max(0, happiness - 5);
    hungerLevel.textContent = hunger;
    happinessLevel.textContent = happiness;
    checkGameOver();
}


function restartGame() {
    hunger = 50;
    happiness = 50;
    isGameOver = false;
    hungerLevel.textContent = hunger;
    happinessLevel.textContent = happiness;
    gameOverScreen.classList.add("hidden");
    createScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    tamagotchiNameInput.value = "";
}


startGameButton.addEventListener("click", startGame);
feedButton.addEventListener("click", feed);
playButton.addEventListener("click", play);
cleanButton.addEventListener("click", clean);
restartButton.addEventListener("click", restartGame);


setInterval(() => {
    if (!isGameOver) {
        hunger = Math.max(0, hunger - 1);
        happiness = Math.max(0, happiness - 1);
        hungerLevel.textContent = hunger;
        happinessLevel.textContent = happiness;
        checkGameOver();
    }
}, 2000);
