window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("window-scroll", scrollY > 30);

  // document
  //   .querySelector("header ul li a.active")
  //   .classList.toggle("active", scrollY > 30);
});

// NAV BAR MENU

const openMenu = document.querySelector(".open-menu");
const closMenu = document.querySelector(".close-menu");

const navMenu = document.querySelector("header ul");

openMenu.addEventListener("click", () => {
  navMenu.style.display = "block";
  openMenu.style.display = "none";
  closMenu.style.display = "block";
});

closMenu.addEventListener("click", () => {
  navMenu.style.display = "none";
  openMenu.style.display = "block";
  closMenu.style.display = "none";
});

// Function to handle clicks outside the menu
document.addEventListener("click", (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnIcons =
    openMenu.contains(event.target) || closMenu.contains(event.target);

  if (!isClickInsideMenu && !isClickOnIcons) {
    closeMenu();
  }
});

// Function to close menu and toggle icons
function closeMenu() {
  navMenu.style.display = "none";
  closMenu.style.display = "none";
  openMenu.style.display = "block";
}

const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".pop-up");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector("main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizContainer = document.querySelector(".quiz-container");
const resultSection = document.querySelector(".results");

const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");

startBtn.addEventListener("click", () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
});

exitBtn.addEventListener("click", () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
});

let questionNumber = 0;
let questionNumberCount = 1;
let userScore = 0;

continueBtn.addEventListener("click", () => {
  quizSection.classList.add("active");
  main.classList.remove("active");
  popupInfo.classList.remove("active");
  quizContainer.classList.add("active");

  showQuestion(questionNumber);
  questionNumberCounter(questionNumberCount);
  showScore();
});

const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {
  if (questionNumber < frontendQuiz.length - 1) {
    questionNumber++;
    questionNumberCount++;

    showQuestion(questionNumber);
    questionNumberCounter(questionNumberCount);
    nextBtn.classList.remove("active");

    if (questionNumber === frontendQuiz.length - 1) {
      // nextBtn.style.transition = ".3s ease"
      nextBtn.textContent = "Submit";
    }
  } else {
    console.log("quiz completed");
    showResults();
  }
});

tryAgainBtn.addEventListener("click", () => {
  resultSection.classList.remove("active");
  quizContainer.classList.add("active");
  nextBtn.classList.remove("active");

  questionNumber = 0;
  questionNumberCount = 1;
  userScore = 0;

  showQuestion(questionNumber);
  questionNumberCounter(questionNumberCount);
  showScore();

  nextBtn.innerHTML = "Next";
});

goHomeBtn.addEventListener("click", () => {
  resultSection.classList.remove("active");
  quizContainer.classList.remove("active");
  quizSection.classList.remove("active");
  nextBtn.classList.remove("active");

  questionNumber = 0;
  questionNumberCount = 1;
  userScore = 0;

  showQuestion(questionNumber);
  questionNumberCounter(questionNumberCount);
  showScore();

  nextBtn.innerHTML = "Next";
});

const optionList = document.querySelector(".options");

function showQuestion(index) {
  const currentQuestion = document.querySelector(".quiz-question");

  currentQuestion.textContent = ` ${frontendQuiz[index].numb}. ${frontendQuiz[index].question}`;

  let optionTag = `
  <div class="option"><span>${frontendQuiz[index].options[0]}</span></div>
  <div class="option"><span>${frontendQuiz[index].options[1]}</span></div>
  <div class="option"><span>${frontendQuiz[index].options[2]}</span></div>
  <div class="option"><span>${frontendQuiz[index].options[3]}</span></div>
  `;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(option) {
  const answer = option.textContent;
  const correctAnswer = frontendQuiz[questionNumber].answer;
  const allOption = optionList.children.length;
  const childrenArray = Array.from(optionList.children);

  if (answer === correctAnswer) {
    option.classList.add("correct");
    userScore += 1;
    showScore();
  } else {
    option.classList.add("incorrect");

    childrenArray.forEach((child) => {
      if (child.textContent === correctAnswer) {
        child.setAttribute("class", "option correct");
      }
    });

    //   for (let i = 0; i < allOption; i++) {
    //   if (optionList.children[i].textContent === correctAnswer) {
    //     optionList.children[i].setAttribute("class", "option correct")
    //   }
    // }
  }

  for (let i = 0; i < allOption; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn.classList.add("active");
}

function showScore() {
  const scoreElement = document.querySelector(".score");
  scoreElement.textContent = `Score: ${userScore} / ${frontendQuiz.length}`;
}

function questionNumberCounter(index) {
  const questionTotal = document.querySelector(".question-total");

  questionTotal.textContent = `${index} / ${frontendQuiz.length}`;
}

function showResults() {
  quizContainer.classList.remove("active");
  resultSection.classList.add("active");

  const resultScore = document.querySelector(".result-score");
  resultScore.textContent = `Your Score: ${userScore} out of ${frontendQuiz.length}`;

  const progressBar = document.querySelector(".progress-bar");
  const progressScore = document.querySelector(".progress-score");

  let progressStartValue = -1;
  let progressEndValue = Math.round((userScore / frontendQuiz.length) * 100);
  let speed = 30;

  let progress = setInterval(() => {
    progressStartValue++;

    progressScore.textContent = `${progressStartValue}%`;

    progressBar.style.background = `conic-gradient(#c40094 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, 0.1) 0deg)`;

    if (progressStartValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}

// // FORM

// const conInput = document.querySelector(".contact-right input");
// const conSubmit = document.querySelector(".contact-right .contact-btn");

// // Select the form element
// const form = document.getElementById("contactForm");

// // Add a submit event listener to the form
// form.addEventListener("submit", function (event) {
//     // Add a small delay to allow the form submission to complete
//     setTimeout(function() {
//         // Reset all the form fields after submission
//         form.reset();
        
//         // Optionally, you can display a success message or perform other actions
//         alert("Message sent successfully!");
//     }, 500);  // Delay of 500 milliseconds
// });
