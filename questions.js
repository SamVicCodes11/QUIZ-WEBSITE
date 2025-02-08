let frontendQuiz = [
  {
    numb: 1,
    question:
      "Which of these declarations is NOT recommended for variable assignment in modern JavaScript?",
    answer: "A. var myVar;",
    options: [
      "A. var myVar;",
      "B. let myVar;",
      "C. const myVar;",
      "D. All are recommended",
    ],
  },
  {
    numb: 2,
    question:
      "In a regular function, what does `this` typically refer to in non-strict mode?",
    answer: "A. The global object",
    options: [
      "A. The global object",
      "B. The function itself",
      "C. The object that called the function",
      "D. The parent object",
    ],
  },
  {
    numb: 3,
    question: "Which of these is NOT a primitive data type in JavaScript?",
    answer: "C. Object",
    options: ["A. String", "B. Number", "C. Object", "D. Boolean"],
  },
  {
    numb: 4,
    question: "Which method converts a string to an integer in JavaScript?",
    answer: "A. parseInt()",
    options: [
      "A. parseInt()",
      "B. Number()",
      "C. toInteger()",
      "D. Math.floor()",
    ],
  },
  {
    numb: 5,
    question: "Which of these will return `true`?",
    answer: "D. [] == false",
    options: [
      "A. '0' === 0",
      "B. null == undefined",
      "C. {} == {}",
      "D. [] == false",
    ],
  },
  {
    numb: 6,
    question: "What will `console.log(typeof function(){});` return?",
    answer: "A. function",
    options: [
      "A. function",
      "B. object",
      "C. undefined",
      "D. It depends on the function's contents",
    ],
  },
  {
    numb: 7,
    question: "What will `console.log([1,2,3] + [4,5,6]);` return?",
    answer: "B. '1,2,34,5,6'",
    options: [
      "A. [1,2,3,4,5,6]",
      "B. '1,2,34,5,6'",
      "C. Error",
      "D. undefined",
    ],
  },
  {
    numb: 8,
    question: "Which event phase does `setTimeout()` execute in?",
    answer: "B. Callback queue",
    options: [
      "A. Microtask queue",
      "B. Callback queue",
      "C. Rendering phase",
      "D. Event loop prioritization",
    ],
  },
  {
    numb: 9,
    question:
      "What happens when you call `console.log(x);` before declaring `var x;`?",
    answer: "A. undefined",
    options: ["A. undefined", "B. ReferenceError", "C. null", "D. NaN"],
  },
  {
    numb: 10,
    question: "What is the difference between `null` and `undefined`?",
    answer: "B. `null` is an assigned value, `undefined` is uninitialized",
    options: [
      "A. Both mean the same thing",
      "B. `null` is an assigned value, `undefined` is uninitialized",
      "C. `undefined` is a valid object",
      "D. `null` has a type of `undefined`",
    ],
  },
  {
    numb: 11,
    question: "Which of the following is NOT a falsy value?",
    answer: "D. 'false'",
    options: ["A. 0", "B. ''", "C. null", "D. 'false'"],
  },
  {
    numb: 12,
    question: "What is logged? `console.log(!!'false' == !!'true');`",
    answer: "A. true",
    options: ["A. true", "B. false", "C. undefined", "D. NaN"],
  },
  {
    numb: 13,
    question: "What does `console.log([] + []);` return?",
    answer: "A. An empty string",
    options: ["A. An empty string", "B. []", "C. undefined", "D. NaN"],
  },
  {
    numb: 14,
    question: "Which function removes the last element from an array?",
    answer: "A. pop()",
    options: ["A. pop()", "B. shift()", "C. splice()", "D. removeLast()"],
  },
  {
    numb: 15,
    question:
      "Which JavaScript feature allows function execution before declaration?",
    answer: "B. Hoisting",
    options: ["A. Closure", "B. Hoisting", "C. Currying", "D. Callback"],
  },
  {
    numb: 16,
    question:
      "Which statement correctly checks if a property exists in an object?",
    answer: "D. Both B & C",
    options: [
      "A. if (obj.property)",
      "B. if ('property' in obj)",
      "C. if (obj[property] !== undefined)",
      "D. Both B & C",
    ],
  },
  {
    numb: 17,
    question: "What is the output of `console.log(2 + true);`?",
    answer: "B. 3",
    options: ["A. 2true", "B. 3", "C. NaN", "D. TypeError"],
  },
  {
    numb: 18,
    question: "Which of these is NOT a valid JavaScript loop?",
    answer: "D. repeat()",
    options: [
      "A. for loop",
      "B. while loop",
      "C. do-while loop",
      "D. repeat()",
    ],
  },
  {
    numb: 19,
    question:
      "Which of the following is the best way to handle asynchronous operations?",
    answer: "D. All of the above",
    options: [
      "A. Callbacks",
      "B. Promises",
      "C. Async/Await",
      "D. All of the above",
    ],
  },
  {
    numb: 20,
    question: "Which of the following is true about closures?",
    answer:
      "A. A function can access variables from its outer scope even after the outer function has returned",
    options: [
      "A. A function can access variables from its outer scope even after the outer function has returned",
      "B. Closures only work with global variables",
      "C. Closures do not exist in JavaScript",
      "D. Closures prevent garbage collection",
    ],
  },
];

