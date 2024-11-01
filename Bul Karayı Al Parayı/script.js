document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const result = document.getElementById("result");
    const restartButton = document.getElementById("restart-button");
    let correctCard;

    function shuffleCards() {
       
        const cardContainer = document.querySelector(".cards");
        const shuffledCards = Array.from(cards).sort(() => Math.random() - 0.5);

        
        shuffledCards.forEach(card => cardContainer.appendChild(card));

        
        correctCard = Math.floor(Math.random() * 3);
    }

    function revealCard(card, isCorrect) {
        if (isCorrect) {
            card.src = "img/ace.png";
            result.textContent = "Tebrikler! Karayı buldunuz!";
        } else {
            card.src = "img/wrong.png";
            result.textContent = "Yanlış kart! Tekrar deneyin.";
        }
        disableCards();
    }

    function disableCards() {
        cards.forEach(card => card.removeEventListener("click", handleCardClick));
    }

    function handleCardClick(event) {
        const selectedCard = event.target;
        const selectedId = parseInt(selectedCard.getAttribute("data-id"));
        const isCorrect = selectedId === correctCard;
        revealCard(selectedCard, isCorrect);
    }

    function resetGame() {
        result.textContent = "";
        shuffleCards();
        cards.forEach((card, index) => {document.addEventListener("DOMContentLoaded", () => {
            const cards = document.querySelectorAll(".card");
            const result = document.getElementById("result");
            const restartButton = document.getElementById("restart-button");
            let winningCard;
        
            // Oyunu başlat
            function startGame() {
                result.textContent = "";
                winningCard = Math.floor(Math.random() * 3);
                cards.forEach(card => {
                    card.src = "img/back.png";
                    card.classList.remove("disabled");
                });
            }
        
        
            function selectCard(event) {
                const selectedCard = event.target;
                const cardId = parseInt(selectedCard.dataset.id);
        
                if (selectedCard.classList.contains("disabled")) return;

                if (cardId === winningCard) {
                    selectedCard.src = "img/spade.png";
                    result.textContent = "Tebrikler! Doğru Kartı buldunuz 🎉";
                    result.style.color = "#00ff00";
                } else {
                    selectedCard.src = "img/heart.png";
                    result.textContent = "Maalesef, tekrar deneyin.";
                    result.style.color = "#ff1a1a";
                }

                cards.forEach(card => card.classList.add("disabled"));
            }
        

            restartButton.addEventListener("click", startGame);
        

            cards.forEach(card => {
                card.addEventListener("click", selectCard);
            });

            startGame();
        });
        
            card.src = "img/back.png";
            card.setAttribute("data-id", index);
            card.addEventListener("click", handleCardClick);
        });
    }

    shuffleCards(); 
    cards.forEach(card => card.addEventListener("click", handleCardClick));
    restartButton.addEventListener("click", resetGame);
});
