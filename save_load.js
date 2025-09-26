const saveToFileButton = document.getElementById("saveToFileButton");
const loadFromFileButton = document.getElementById("loadFromFileButton");
const loadFromFileInput = document.getElementById("loadFromFileInput");

// Save Tamagotchi state as a file
function saveToFile() {
    const gameState = {
        tamagotchiName,
        hunger,
        happiness,
    };

    const blob = new Blob([JSON.stringify(gameState, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "tamagotchi_save.json";
    link.click();
}

// Load Tamagotchi state from a file
function loadFromFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const loadedState = JSON.parse(e.target.result);
            tamagotchiName = loadedState.tamagotchiName;
            hunger = loadedState.hunger;
            happiness = loadedState.happiness;

            tamagotchiNameDisplay.textContent = tamagotchiName;
            hungerLevel.textContent = hunger;
            happinessLevel.textContent = happiness;

            createScreen.classList.add("hidden");
            gameScreen.classList.remove("hidden");
        } catch (error) {
            alert("Invalid file format!");
        }
    };
    reader.readAsText(file);
}

// Trigger file input when clicking the Load button
loadFromFileButton.addEventListener("click", () => loadFromFileInput.click());
loadFromFileInput.addEventListener("change", loadFromFile);
saveToFileButton.addEventListener("click", saveToFile);
