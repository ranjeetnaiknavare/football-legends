// script.js
document.addEventListener('DOMContentLoaded', () => {
    const players = { //  Object to hold player data
        current: [
            { name: "Lionel Messi", image: "messi.jpg", description: "Arguably the greatest of all time..." },
            { name: "Cristiano Ronaldo", image: "ronaldo.jpg", description: "Prolific goal-scorer..." },
            // ... more current players
        ],
        past: [
            { name: "Pelé", image: "pele.jpg", description: "The King of Football..." },
            { name: "Diego Maradona", image: "maradona.jpg", description: "A legendary player..." },
            // ... more past players
        ],
        underrated: [
            { name: "Ferenc Puskás", image: "puskas.jpg", description: "Prolific goal-scorer..." },
            { name: "Alfredo Di Stéfano", image: "distefano.jpg", description: "Dominant forward..." },
            // ... more underrated players
        ]
    };

    // Function to create player cards
    function createPlayerCard(player) {
        const card = document.createElement('div');
        card.classList.add('player-card');
        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>${player.description}</p>
        `;
        return card;
    }

    // Populate player grids
    for (const category in players) {
        const grid = document.querySelector(`#${category} .player-grid`);
        players[category].forEach(player => {
            const card = createPlayerCard(player);
            grid.appendChild(card);
        });
    }
});