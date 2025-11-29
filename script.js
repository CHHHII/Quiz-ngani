const questions = [
  { question: "What's my favorite color?", answer: "black" },
  { question: "What's my dream career?", answer: "civil engineer" },
  { question: "What's my zodiac sign?", answer: "pisces" },
  { question: "When is my birthday?", answer: ["feb 25, 2006", "feb 25"] },
  { question: "What's my favorite anime?", answer: "one piece" },
  { question: "Who's my favorite anime character?", answer: "shanks" },
  { question: "Coffee or Tea?", answer: "coffee" },
  { question: "Movie or Gaming?", answer: "gaming" },
  { question: "Do I prefer cats or dogs?", answer: ["both", "cats", "dogs"] },
  { question: "What's my favorite drink?", answer: "coke" },
  { question: "What's my favorite band?", answer: ["linkin park", "coldplay", "green day"] },
  { question: "Who's my favorite person?", answer: "catherine" },
  { question: "What's the food I absolutely hate?", answer: ["kimchi", "paa ng manok"] },
  { question: "Do I believe in Ghosts?", answer: "no" },
  { question: "One best friend or Large Group Friend?", answer: ["one best friend", "both", "large group friend"] },
  { question: "Extrovert or Introvert", answer: "introvert" },
  { question: "Who's my GOAT in Basketball", answer: "michael jordan" }
];

let currentQuestion = 0;
let score = 0;
let userName = "";

const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const quizArea = document.getElementById('quizArea');
const questionContainer = document.getElementById('questionContainer');
const questionEl = document.getElementById('question');
const answerInput = document.getElementById('answerInput');
const resultContainer = document.getElementById('resultContainer');
const scoreEl = document.getElementById('score');

// Start Quiz
startBtn.addEventListener('click', () => {
  userName = document.getElementById('name').value.trim();
  if (!userName) return alert("Please enter your name");

  quizArea.style.display = 'none';
  questionContainer.style.display = 'block';
  showQuestion();
});

// Show Question
function showQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
  answerInput.value = "";
  answerInput.focus();
}

// Next Button
nextBtn.addEventListener('click', () => {
  let userAnswer = answerInput.value
    .trim()
    .toLowerCase()
    .replaceAll(",", "");

  if (!userAnswer) return alert("Please type an answer");

  let correct = questions[currentQuestion].answer;
  let isCorrect = false;

  if (Array.isArray(correct)) {
    isCorrect = correct.some(ans =>
      userAnswer === ans.toLowerCase().replaceAll(",", "")
    );
  } else {
    isCorrect = userAnswer === correct.toLowerCase();
  }

  if (isCorrect) score++;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

// End Quiz
function endQuiz() {
  questionContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  scoreEl.textContent = `${userName}, your score is: ${score}/${questions.length}`;
}