const quesJSON = [
  {
    correctAnswer: "Three",
    options: ["Two", "Three", "four", "five"],
question: "how many peices of bun are in a Mcdonald's big mac?",
},
{
    correctAnswer: "Eight",
    options: ["Two", "Eight", "four", "five"],
question: "how many Finger you have?",
},
{
    correctAnswer: "Two",
    options: ["Two", "Three", "four", "five"],
question: "how many Thumb you have",
},
{
    correctAnswer: "Two",
    options: ["Two", "Three", "four", "five"],
question: "how many legs you have",
},
{
    correctAnswer: "One",
    options: ["Two", "Three", "four", "One"],
question: "how many mind you have?"
}
];

let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;
//accessing all element 

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl = document.getElementById('next');


showQuestion();

nextEl.addEventListener('click',() =>{
  scoreEl.textContent = `score: ${score}/ ${totalScore}`;
});

function showQuestion() {
  //de structuring objects

  const { correctAnswer, options, question } = quesJSON[currentQuestion];
  // SETTING QUESTION TEXT CONTENT
  questionEl.textContent = question;

  const shuffledOptions = suffleOptions(options);

  shuffledOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    //EVENT HANDLING ON THE BUTTON
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }

      scoreEl.textContent =  `score: ${score}/ ${totalScore}`;
      nextQuestion();
    });
  });
}
function nextQuestion() {
  currentQuestion++;
  optionEl.textContent = "";
  if (currentQuestion >= quesJSON.length) {
    questionEl.textContent = "quiz completed!!";
    nextEl.remove();
  } else {
    showQuestion();
  }
}

// MANIPULATING THE DOM

//POPULATING THE OPTIONS DIV WITH THE BUTTONS

// suffling the options

function suffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

// suffleOptions([1,2,3,4,5]);
