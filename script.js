let flashcards = [];
let currentCard = 0;
let score = 0;
let showAnswer = false;

function addFlashcard() {
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    if (question && answer) {
        flashcards.push({ question, answer });
        document.getElementById("question").value = "";
        document.getElementById("answer").value = "";
    }
}

function flipCard() {
    if (flashcards.length === 0) return;
    let cardText = document.getElementById("card-text");
    if (showAnswer) {
        cardText.innerText = flashcards[currentCard].question;
    } else {
        cardText.innerText = flashcards[currentCard].answer;
    }
    showAnswer = !showAnswer;
}

function nextCard() {
    if (flashcards.length === 0) return;
    currentCard = (currentCard + 1) % flashcards.length;
    document.getElementById("card-text").innerText = flashcards[currentCard].question;
    showAnswer = false;
}

function correctAnswer() {
    score++;
    document.getElementById("score").innerText = score;
    nextCard();
}

function wrongAnswer() {
    nextCard();
}