"use strict"
console.log("Watashi Wa WonderOfU")

document.addEventListener("DOMContentLoaded", () => {
    const jokeButton = document.createElement("button");
    jokeButton.textContent = "Générer une blague";
    jokeButton.id = "jokeButton";
    jokeButton.classList.add("btn-joke");
    document.body.appendChild(jokeButton);

    const jokeDisplay = document.createElement("div");
    jokeDisplay.id = "jokeDisplay";
    document.body.appendChild(jokeDisplay);

    jokeButton.addEventListener("click", fetchChuckNorrisJoke);

    async function fetchChuckNorrisJoke() {
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random", {
                method: "GET"
            });
            const data = await response.json();
            
            jokeDisplay.innerHTML = `
                <img src="${data.icon_url}" alt="Chuck Norris">
                <p><strong>${data.value}</strong></p>
            `;
        } catch (error) {
            jokeDisplay.innerHTML = "Une erreur est survenue. Réessayez plus tard.";
        }
    }
});

