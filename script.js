const questions = [
  { question: "What's my favorite color?", answer: "black" },
  { question: "What's my dream career?", answer: "civil engineer" },
  { question: "What's my zodiac sign?", answer: "pisces" },
  { question: "When is my birthday?", answer: ["feb 25, 2006", "feb 25 2006"] },
  { question: "What's my favorite anime?", answer: "one piece" },
  { question: "What's my favorite anime character?", answer: "shanks" },
  { question: "Coffee or Tea?", answer: "coffee" },
  { question: "Movie or Gaming?", answer: "gaming" },
  { question: "Do I prefer cats or dogs?", answer: "both" },
  { question: "What's my favorite drink?", answer: "coke" },
  { question: "What's my favorite band?", answer: ["linkin park", "coldplay", "green day"] },
  { 
    question: "Who's my favorite person?", 
    answer: [ "cath", "jassy or cath", "jas", "jasmin", "ayekah", "liit", "cathcath", "catherine"] 
  },
  { question: "What's the food I absolutely hate?", answer: ["kimchi", "paa ng manok"] },
  { question: "Do I believe in Ghosts?", answer: "no" },
  { question: "One best friend or Large Group Friend?", answer: "one best friend" }
];

let currentQuestion = 0;
let score = 0;
let userName = "";

document.getElementById('startBtn').addEventListener('click', () => {
  userName = document.getElementById('name').value.trim();
  if (!userName) return alert("Please enter your name");

  document.getElementById('quizArea').style.display = 'none';
  document.getElementById('questionContainer').style.display = 'block';
  showQuestion();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase().replaceAll(",", "");
  if (!userAnswer) return alert("Please type an answer");

  let correctAnswer = questions[currentQuestion].answer;

  let isCorrect = false;

  if (Array.isArray(correctAnswer)) {
    isCorrect = correctAnswer.some(ans => userAnswer === ans.toLowerCase().replaceAll(",", ""));
  } else {
    isCorrect = userAnswer === correctAnswer.toLowerCase();
  }

  if (isCorrect) score++;

  currentQuestion++;
  document.getElementById('answerInput').value = '';

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
});

function showQuestion() {
  document.getElementById('questionText').innerText = questions[currentQuestion].question;
}

function finishQuiz() {
  document.getElementById('questionContainer').style.display = 'none';
  document.getElementById('resultArea').style.display = 'block';
  document.getElementById('resultArea').innerText = `${userName}, you've got ${score}/${questions.length}!`;
}