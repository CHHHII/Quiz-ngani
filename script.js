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

// Start quiz
startBtn.addEventListener('click', () => {
  userName = document.getElementById('name').value.trim();
  if (!userName) {
    alert("Please enter your name");
    return;
  }
  quizArea.style.display = 'none';
  questionContainer.style.display = 'block';
  showQuestion();
});

// Show current question
function showQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
  answerInput.value = '';
  answerInput.focus();
}

// Next question
nextBtn.addEventListener('click', () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  if (!userAnswer) {
    alert("Please type an answer");
    return;
  }

  const correctAnswer = questions[currentQuestion].answer;
  let isCorrect = false;

  if (Array.isArray(correctAnswer)) {
    isCorrect = correctAnswer.some(ans => ans.toLowerCase() === userAnswer);
  } else {
    isCorrect = correctAnswer.toLowerCase() === userAnswer;
  }

  if (isCorrect) score++;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

// End quiz and show score
function endQuiz() {
  questionContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  scoreEl.textContent = `${userName}, your score is: ${score}/${questions.length}`;
}    .toLowerCase()
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

  document.getElementById('answerInput').value = '';
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function showQuestion() {
  document.getElementById('question').textContent = questions[currentQuestion].question;
}

function endQuiz() {
  document.getElementById('questionContainer').style.display = 'none';
  document.getElementById('resultContainer').style.display = 'block';

  document.getElementById('score').textContent =
    `${userName}, your score is: ${score}/${questions.length}`;
}    .trim()
    .toLowerCase()
    .replaceAll(",", "");

  if (!userAnswer) return alert("Please type an answer");

  let correctAnswer = questions[currentQuestion].answer;
  let isCorrect = false;

  // Accept UPPERCASE and lowercase for both user and correct answers
  if (Array.isArray(correctAnswer)) {
    isCorrect = correctAnswer.some(ans =>
      userAnswer === ans.toLowerCase().replaceAll(",", "")
    );
  } else {
    isCorrect = userAnswer === correctAnswer.toLowerCase();
  }

  if (isCorrect) score++;

  userAnswers.push({
    question: questions[currentQuestion].question,
    yourAnswer: userAnswer,
    correctAnswer: Array.isArray(correctAnswer) ? correctAnswer[0] : correctAnswer,
    isCorrect: isCorrect
  });

  currentQuestion++;
  document.getElementById('answerInput').value = '';

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function showQuestion() {
  document.getElementById('question').textContent = questions[currentQuestion].question;
}

function endQuiz() {
  document.getElementById('questionContainer').style.display = 'none';
  document.getElementById('resultContainer').style.display = 'block';
  document.getElementById('score').textContent = `${userName}, you scored ${score}/${questions.length}`;
}    showQuestion();
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

  let resultHTML = `<h2>${userName}, you've got ${score}/${questions.length}!</h2><hr>`;
  resultHTML += `<ul>`;
  userAnswers.forEach((entry, index) => {
    resultHTML += `<li>
      <strong>Q${index + 1}: ${entry.question}</strong><br>
      Your answer: <span style="color:${entry.isCorrect ? 'green' : 'red'}">${entry.yourAnswer}</span><br>`;
    if (!entry.isCorrect) {
      resultHTML += `Correct answer: ${entry.correctAnswer}<br>`;
    }
    resultHTML += `</li><br>`;
  });
  resultHTML += `</ul>`;

  document.getElementById('resultArea').innerHTML = resultHTML;
}
