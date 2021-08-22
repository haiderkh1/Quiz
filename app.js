const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quitButton = document.getElementById("quit-btn");
const name = document.getElementById("name");
const thanks = document.getElementById("thanks");
const end = document.getElementById("end");
const questionContainerElement = document.getElementById("question-ctn");
const questionElement = document.getElementById("question");
const answerButtonsElements = document.getElementById("answer-btns");

//added these so questions are shuffled
//defaults them to undefined

let shuffledQuestions, currentQuestionIndex, score;
const total = 8;

// click events

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
quitButton.addEventListener("click", endGame);

// functions

function startGame() {
  startButton.classList.add("hide");
  name.classList.add("hide");

  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  questionContainerElement.classList.remove("hide");
  answerButtonsElements.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  //sets the text to the actual question from the questions array
  questionElement.innerText = question.question;

  //basically creating new buttons for the answers from the questions array
  question.answers.forEach((answer) => {
    const button = document.createElement("button");

    //sets the text to the text from the answers array
    button.innerText = answer.text;

    //adding the btn class so that it is styled like the other buttons
    button.classList.add("btn");
    button.classList.add("ans-opt");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    //
    button.addEventListener("click", selectAnswer);

    answerButtonsElements.appendChild(button);
  });
}

function resetState() {
  questionElement.classList.remove("hide");
  nextButton.classList.add("hide");
  quitButton.classList.add("hide");
  end.classList.add("hide");
  thanks.classList.add("hide");
  //basically removing the answers 1-4 so it's empty and we don't see, only the new answers from the questions array will display
  while (answerButtonsElements.firstChild) {
    answerButtonsElements.removeChild(answerButtonsElements.firstChild);
  }
}

function selectAnswer(e) {
  let value = "";
  const selectedButton = e.target;
  let correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElements.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (correct) {
    //adds 1 to score if answer is correct
    score++;
    value =
      score > 7
        ? "You must be my best friend 😘"
        : "HML, cause you need to know more about me 😭";
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
    //keeping count of correct answers
  } else {
    startButton.innerText = "Take Again?";
    startButton.classList.remove("hide");
    quitButton.classList.remove("hide");
    questionElement.classList.add("hide");

    end.classList.remove("hide");
    end.innerHTML = "You got " + score + " out of 10 right! " + value;
  }
}

function endGame() {
  questionElement.classList.add("hide");
  answerButtonsElements.classList.add("hide");
  // startButton.classList.add("hide");
  quitButton.classList.add("hide");
  thanks.classList.remove("hide");
  startButton.innerText = "Start Quiz";
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element, correct) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//create array object to hold questions that will be shown
const questions = [
  {
    question: "What year was I born?",
    // create an array object for answers, since it always before 4
    answers: [
      {
        text: "1993",
        correct: false,
      },
      {
        text: "1994",
        correct: false,
      },
      {
        text: "1995",
        correct: false,
      },
      {
        text: "1996",
        correct: true,
      },
    ],
  },
  {
    question: "Which is my favorite series?",
    answers: [
      {
        text: "Breaking Bad",
        correct: false,
      },
      {
        text: "Prison Break",
        correct: true,
      },
      {
        text: "Game of Thrones",
        correct: false,
      },
      {
        text: "Narcos",
        correct: false,
      },
    ],
  },
  {
    question: "When I got my personal mobile phone?",
    answers: [
      {
        text: "School",
        correct: false,
      },
      {
        text: "College",
        correct: false,
      },
      {
        text: "Diploma",
        correct: false,
      },
      {
        text: "University",
        correct: true,
      },
    ],
  },
  {
    question: "Who was my first crush?",
    answers: [
      {
        text: "selena gomez",
        correct: false,
      },
      {
        text: "kareena kapoor",
        correct: false,
      },
      {
        text: "Emma Watson",
        correct: true,
      },
      {
        text: "Ayeza khan",
        correct: false,
      },
    ],
  },
  {
    question: "What is my favorite social media application?",
    answers: [
      {
        text: "Instagran",
        correct: true,
      },
      {
        text: "Facebook",
        correct: false,
      },
      {
        text: "Twitter",
        correct: false,
      },
      {
        text: "Linkedin",
        correct: false,
      },
    ],
  },
  {
    question: "Am I?",
    answers: [
      {
        text: "Emotional",
        correct: false,
      },
      {
        text: "Logical",
        correct: true,
      },
    ],
  },

  {
    question: "What time do i wake up in the morning??",
    answers: [
      {
        text: "Around 6",
        correct: false,
      },
      {
        text: "Around 7-8",
        correct: false,
      },
      {
        text: "9",
        correct: true,
      },
      {
        text: "10",
        correct: false,
      },
    ],
  },
  {
    question: "Which of these hair lengths is best on a girl according to me?",
    answers: [
      {
        text: "Long",
        correct: false,
      },
      {
        text: "Around shoulder length",
        correct: true,
      },
      {
        text: "Really short",
        correct: false,
      },
      {
        text: "Ear-level",
        correct: false,
      },
    ],
  },
  {
    question: "Which is my favorite sport to watch?",
    answers: [
      {
        text: "BasketBall",
        correct: false,
      },
      {
        text: "Football",
        correct: false,
      },
      {
        text: "Cricket",
        correct: true,
      },
      {
        text: "Hockey",
        correct: false,
      },
    ],
  },
  {
    question: "How many pets do I have right now?",
    answers: [
      {
        text: "None",
        correct: true,
      },
      {
        text: "2",
        correct: false,
      },
      {
        text: "1",
        correct: false,
      },
    ],
  },
];
