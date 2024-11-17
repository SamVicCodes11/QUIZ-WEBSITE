let frontendQuiz = [
  {
    numb: 1,
    question:
      "Which HTML attribute is used to specify a unique identifier for an element?",
    answer: "B. id",
    options: ["A. class", "B. id", "C. name", "D. key"],
  },
  {
    numb: 2,
    question:
      "What does the this keyword refer to in JavaScript within a regular function?",
    answer: "D. The object that called the function",
    options: [
      "A. The global object",
      "B. The function itself",
      "C. The parent object",
      "D. The object that called the function",
    ],
  },
  {
    numb: 3,
    question:
      "Which pseudo-class is used to style an element when it is hovered over?",
    answer: "A. :hover",
    options: ["A. :hover", "B. :focus", "C. :active", "D. :checked"],
  },
  {
    numb: 4,
    question:
      "Which JavaScript feature allows functions to remember the scope in which they were created?",
    answer: "B. Closures",
    options: ["A. Callbacks", "B. Closures", "C. Prototypes", "D. Promises"],
  },
  {
    numb: 5,
    question: "What is the purpose of the z-index property in CSS?",
    answer: "B. To specify the stack order of elements",
    options: [
      "A. To change the zoom level of an element",
      "B. To specify the stack order of elements",
      "C. To define the position of an element",
      "D. To set the opacity of an element",
    ],
  },
  {
    numb: 6,
    question: "What does HTML stand for?",
    answer: "C. Hyper Text Markup Language",
    options: [
      "A. Hyper Type Multi Language",
      "B. Hyper Text Multiple Language",
      "C. Hyper Text Markup Language",
      "D. Home Text Multi Language",
    ],
  },
  {
    numb: 7,
    question:
      "How do you apply a CSS rule only when the screen width is less than 768px?",
    answer: "A. @media screen and (max-width: 768px)",
    options: [
      "A. @media screen and (max-width: 768px)",
      "B. @media (min-width: 768px)",
      "C. @responsive (max-width: 768px)",
      "D. @screen (less-than: 768px)",
    ],
  },
  {
    numb: 8,
    question: "Which method is used to stop event propagation in JavaScript?",
    answer: "B. event.stopPropagation()",
    options: [
      "A. event.preventDefault()",
      "B. event.stopPropagation()",
      "C. event.stopDefault()",
      "D. event.cancelBubble()",
    ],
  },
  {
    numb: 9,
    question: "What will the following code output? console.log(typeof NaN);",
    answer: "A. number",
    options: ["A. number", "B. NaN", "C. undefined", "D. object"],
  },
  {
    numb: 10,
    question: "What does the async attribute in a script tag do?",
    answer: "B. Loads the script while the HTML parsing continues",
    options: [
      "A. Loads the script after the HTML parsing is complete",
      "B. Loads the script while the HTML parsing continues",
      "C. Prevents the script from loading",
      "D. Loads the script synchronously",
    ],
  },
  {
    numb: 11,
    question: "What is the difference between == and === in JavaScript?",
    answer: "A. == checks only value, === checks value and type",
    options: [
      "A. == checks only value, === checks value and type",
      "B. == checks value and type, === checks only value",
      "C. Both are the same",
      "D. None of the above",
    ],
  },
  {
    numb: 12,
    question:
      "Which JavaScript array method creates a new array with elements that pass a test?",
    answer: "A. filter()",
    options: ["A. filter()", "B. map()", "C. reduce()", "D. forEach()"],
  },
  {
    numb: 13,
    question: "Which CSS property is used to create a flex container?",
    answer: "B. display: flex",
    options: [
      "A. flex-container",
      "B. display: flex",
      "C. container-flex",
      "D. flex-direction",
    ],
  },
  {
    numb: 14,
    question: "Which CSS property is used to apply a 3D transformation?",
    answer: "C. transform",
    options: ["A. perspective", "B. animation", "C. transform", "D. skew"],
  },
  {
    numb: 15,
    question: "What does the innerHTML property do in JavaScript?",
    answer: "A. Gets or sets the content of an HTML element",
    options: [
      "A. Gets or sets the content of an HTML element",
      "B. Adds a new HTML element",
      "C. Executes JavaScript within an element",
      "D. Removes an HTML element",
    ],
  },
  {
    numb: 16,
    question: "What is a Promise in JavaScript?",
    answer:
      "A. An object representing the eventual completion or failure of an async operation",
    options: [
      "A. An object representing the eventual completion or failure of an async operation",
      "B. A method used for error handling",
      "C. A function that executes synchronously",
      "D. A loop construct",
    ],
  },
  {
    numb: 17,
    question: "What is the output of 1 + '2' in JavaScript?",
    answer: "A. '12'",
    options: ["A. '12'", "B. 3", "C. '3'", "D. undefined"],
  },
  {
    numb: 18,
    question:
      "Which CSS property is used to specify the area inside the padding and border?",
    answer: "D. width",
    options: ["A. padding", "B. content-area", "C. margin", "D. width"],
  },
  {
    numb: 19,
    question: "What is the default position value in CSS?",
    answer: "D. static",
    options: ["A. relative", "B. absolute", "C. fixed", "D. static"],
  },
  {
    numb: 20,
    question:
      "Which method in JavaScript is used to bind a function to a specific object?",
    answer: "C. bind()",
    options: ["A. call()", "B. apply()", "C. bind()", "D. attach()"],
  },
];
