// script.js
document.addEventListener('DOMContentLoaded', () => {
    const players = {
        current: [
            { name: "Lionel Messi", image: "messi.jpg", description: "Arguably the greatest of all time. Exceptional dribbling, playmaking, and goal-scoring." },
            { name: "Cristiano Ronaldo", image: "ronaldo.jpg", description: "Prolific goal-scorer, incredible athleticism, and dedication." },
            { name: "Kylian Mbappé", image: "mbappe.jpg", description: "Speed, skill, and goal-scoring ability make him a rising star." },
            { name: "Erling Haaland", image: "haaland.jpg", description: "A goal-scoring machine with incredible physical attributes." },
            { name: "Kevin De Bruyne", image: "de_bruyne.jpg", description: "Midfield maestro with exceptional passing and vision." },
            { name: "Robert Lewandowski", image: "lewandowski.jpg", description: "Clinical finisher and consistent goal-scorer." },
            { name: "Mohamed Salah", image: "salah.jpg", description: "Skilful winger with an eye for goal." },
            { name: "Neymar Jr.", image: "neymar.jpg", description: "Exceptional dribbling and flair." },
            { name: "Virgil van Dijk", image: "van_dijk.jpg", description: "Dominant defender and leader." },
            { name: "Harry Kane", image: "kane.jpg", description: "Prolific goal-scorer and playmaker." },
        ],
        past: [
            { name: "Pelé", image: "pele.jpg", description: "Widely regarded as the king of football. Incredible skill, athleticism, and goal-scoring." },
            { name: "Diego Maradona", image: "maradona.jpg", description: "A legendary player with unmatched dribbling skills and charisma." },
            { name: "Johan Cruyff", image: "cruyff.jpg", description: "Total Football pioneer, revolutionary player, and influential coach." },
            { name: "Franz Beckenbauer", image: "beckenbauer.jpg", description: "\"Der Kaiser,\" a dominant defender and leader." },
            { name: "Zinedine Zidane", image: "zidane.jpg", description: "Elegant and skillful midfielder, known for his control and vision." },
            { name: "Ferenc Puskás", image: "puskas.jpg", description: "Prolific goal-scorer, considered one of the greatest strikers of all time." },
            { name: "Alfredo Di Stéfano", image: "di_stefano.jpg", description: "Dominant forward who excelled in multiple positions." },
            { name: "Garrincha", image: "garrincha.jpg", description: "Exceptional dribbler and key player for Brazil's World Cup victories." },
            { name: "Eusébio", image: "eusebio.jpg", description: "\"The Black Panther,\" a fast and powerful forward." },
            { name: "Marco van Basten", image: "van_basten.jpg", description: "Elegant and clinical striker, cut his career short due to injury." },
        ],
        underrated: [
            { name: "Matthias Sindelar", image: "sindelar.jpg", description: "Austrian 'Mozart of Football', known for his elegance and skill." },
            { name: "Josef Bican", image: "bican.jpg", description: "One of the most prolific goalscorers of all time, often overlooked." },
            { name: "Nándor Hidegkuti", image: "hidegkuti.jpg", description: "Hungarian forward, crucial to the 'Magical Magyars' success." },
            { name: "Raymond Kopa", image: "kopa.jpg", description: "French playmaker, known for his dribbling and passing." },
            { name: "Gigi Riva", image: "riva.jpg", description: "Italian striker, record goalscorer for Cagliari and a national hero." },
            { name: "Jimmy McGrory", image: "mcgrory.jpg", description: "Scottish goal-scoring legend, holds the British goal-scoring record." },
            { name: "Adolfo Pedernera", image: "pedernera.jpg", description: "Argentine forward, known for his playmaking and leadership." },
            { name: "Juan Alberto Schiaffino", image: "schiaffino.jpg", description: "Uruguayan-Italian playmaker, key to Uruguay's 1950 World Cup win." },
            { name: "Fritz Walter", image: "walter.jpg", description: "German captain, led his team to the 1954 World Cup victory." },
            { name: "Lev Yashin", image: "yashin.jpg", description: "Soviet goalkeeper, revolutionized the position with his aggressive style." },
        ]
    };

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

    for (const category in players) {
        const grid = document.querySelector(`#${category} .player-grid`);
        players[category].forEach(player => {
            const card = createPlayerCard(player);
            grid.appendChild(card);
        });
    }
});