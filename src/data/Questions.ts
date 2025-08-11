import { type Question } from "../types/Question"

export const QUESTIONS: Question[] = [
    {
        id: 1,
        wasCorrect: false,
        question: "What are typescript generics?",
        answers: [
            "A way to enforce strict typing by removing all type flexibility",
            "A feature that allows you to write reusable code that works with multiple types while maintaining type safety",
            "A method to automatically generate TypeScript code from JavaScript",
            "A built-in utility for converting types to their generic equivalents"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 2,
        wasCorrect: false,
        question: "Which hook is used to manage state in React functional components?",
        answers: [
            "useEffect",
            "useState",
            "useContext",
            "useReducer"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 3,
        wasCorrect: false,
        question: "What does the 'async' keyword do in JavaScript?",
        answers: [
            "Makes a function run faster",
            "Prevents a function from being called multiple times",
            "Makes a function return a Promise",
            "Converts a function to a generator"
        ],
        correctAnswer: 2,
        answerSelected: null
    },
    {
        id: 4,
        wasCorrect: false,
        question: "What is the purpose of the useEffect hook?",
        answers: [
            "To manage component state",
            "To handle side effects in functional components",
            "To create context providers",
            "To optimize component rendering"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 5,
        wasCorrect: false,
        question: "Which CSS property is used to create a flexbox container?",
        answers: [
            "display: block",
            "display: inline",
            "display: flex",
            "display: grid"
        ],
        correctAnswer: 2,
        answerSelected: null
    },
    {
        id: 6,
        wasCorrect: false,
        question: "What is the difference between '==' and '===' in JavaScript?",
        answers: [
            "There is no difference",
            "'==' checks type and value, '===' checks only value",
            "'==' performs type coercion, '===' checks type and value strictly",
            "'==' is faster than '==='"
        ],
        correctAnswer: 2,
        answerSelected: null
    },
    {
        id: 7,
        wasCorrect: false,
        question: "What is the Virtual DOM in React?",
        answers: [
            "A backup copy of the real DOM",
            "A JavaScript representation of the real DOM kept in memory",
            "A tool for debugging React applications",
            "A method for creating DOM elements"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 8,
        wasCorrect: false,
        question: "Which TypeScript utility type makes all properties optional?",
        answers: [
            "Required<T>",
            "Partial<T>",
            "Pick<T, K>",
            "Omit<T, K>"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 9,
        wasCorrect: false,
        question: "What is closure in JavaScript?",
        answers: [
            "A way to close browser windows",
            "A function that has access to variables in its outer scope",
            "A method to prevent memory leaks",
            "A technique for compressing JavaScript code"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 10,
        wasCorrect: false,
        question: "What does CSS Grid's 'grid-template-areas' property do?",
        answers: [
            "Sets the size of grid items",
            "Defines named grid areas for easier layout",
            "Controls grid line spacing",
            "Sets the grid container's background"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 11,
        wasCorrect: false,
        question: "What is the purpose of the 'key' prop in React lists?",
        answers: [
            "To encrypt data passed to components",
            "To help React identify which items have changed for efficient re-rendering",
            "To create unique CSS classes",
            "To sort list items automatically"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 12,
        wasCorrect: false,
        question: "Which method adds an element to the end of an array?",
        answers: [
            "unshift()",
            "push()",
            "pop()",
            "shift()"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 13,
        wasCorrect: false,
        question: "What is hoisting in JavaScript?",
        answers: [
            "Moving functions to the top of files",
            "The behavior where variable and function declarations are moved to the top of their scope",
            "A performance optimization technique",
            "A way to import modules"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 14,
        wasCorrect: false,
        question: "What is the main difference between 'let' and 'var' in JavaScript?",
        answers: [
            "let is faster than var",
            "var has block scope, let has function scope",
            "let has block scope, var has function scope",
            "There is no difference"
        ],
        correctAnswer: 2,
        answerSelected: null
    },
    {
        id: 15,
        wasCorrect: false,
        question: "What does the 'readonly' keyword do in TypeScript?",
        answers: [
            "Makes variables immutable at runtime",
            "Prevents properties from being modified after initialization",
            "Creates getter-only properties",
            "Optimizes memory usage"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 16,
        wasCorrect: false,
        question: "Which CSS property controls the stacking order of elements?",
        answers: [
            "z-index",
            "layer-index",
            "stack-order",
            "position-index"
        ],
        correctAnswer: 0,
        answerSelected: null
    },
    {
        id: 17,
        wasCorrect: false,
        question: "What is event bubbling in JavaScript?",
        answers: [
            "Creating multiple event listeners",
            "The process where events propagate from the target element up to its ancestors",
            "A method to prevent events from firing",
            "A way to animate DOM elements"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 18,
        wasCorrect: false,
        question: "What is the purpose of React.memo()?",
        answers: [
            "To memorize component props",
            "To optimize component re-rendering by memoizing the result",
            "To store component state",
            "To create memory-efficient components"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 19,
        wasCorrect: false,
        question: "Which CSS unit is relative to the viewport width?",
        answers: [
            "em",
            "rem",
            "vw",
            "px"
        ],
        correctAnswer: 2,
        answerSelected: null
    },
    {
        id: 20,
        wasCorrect: false,
        question: "What is destructuring in JavaScript?",
        answers: [
            "A way to delete object properties",
            "A syntax for extracting values from arrays or properties from objects",
            "A method to combine multiple objects",
            "A technique for error handling"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 21,
        wasCorrect: false,
        question: "What does the 'useCallback' hook do in React?",
        answers: [
            "Calls a function automatically",
            "Returns a memoized callback function",
            "Creates callback functions",
            "Handles component callbacks"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 22,
        wasCorrect: false,
        question: "What is the spread operator in JavaScript?",
        answers: [
            "A way to multiply numbers",
            "The ... syntax used to expand iterables or object properties",
            "A method to spread code across multiple files",
            "A technique for error propagation"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 23,
        wasCorrect: false,
        question: "Which TypeScript type represents a value that could be undefined?",
        answers: [
            "null",
            "undefined",
            "T | undefined",
            "Optional<T>"
        ],
        correctAnswer: 2,
        answerSelected: null
    },
    {
        id: 24,
        wasCorrect: false,
        question: "What is the CSS box model?",
        answers: [
            "A method for creating boxes in CSS",
            "The rectangular layout model consisting of content, padding, border, and margin",
            "A tool for debugging CSS",
            "A way to organize CSS files"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 25,
        wasCorrect: false,
        question: "What does 'npm' stand for?",
        answers: [
            "Node Package Manager",
            "New Programming Module",
            "Network Protocol Manager",
            "Node Project Manager"
        ],
        correctAnswer: 0,
        answerSelected: null
    },
    {
        id: 26,
        wasCorrect: false,
        question: "What is the purpose of the 'useReducer' hook?",
        answers: [
            "To reduce component size",
            "To manage complex state logic with reducer functions",
            "To reduce rendering time",
            "To minimize memory usage"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 27,
        wasCorrect: false,
        question: "Which CSS property is used to make text bold?",
        answers: [
            "text-weight",
            "font-weight",
            "font-bold",
            "text-bold"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 28,
        wasCorrect: false,
        question: "What is a Promise in JavaScript?",
        answers: [
            "A guarantee that code will execute",
            "An object representing the eventual completion or failure of an asynchronous operation",
            "A way to create synchronous code",
            "A method for handling errors"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 29,
        wasCorrect: false,
        question: "What does the 'interface' keyword do in TypeScript?",
        answers: [
            "Creates a new class",
            "Defines the shape of an object or contract for classes",
            "Imports external modules",
            "Creates type aliases"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 30,
        wasCorrect: false,
        question: "Which CSS property controls the space between flexbox items?",
        answers: [
            "margin",
            "padding",
            "gap",
            "spacing"
        ],
        correctAnswer: 2,
        answerSelected: null
    },
    {
        id: 31,
        wasCorrect: false,
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        answers: [
            "There is no difference",
            "null is assigned, undefined means no value has been assigned",
            "undefined is assigned, null means no value has been assigned",
            "null is for objects, undefined is for primitives"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 32,
        wasCorrect: false,
        question: "What is JSX in React?",
        answers: [
            "A new version of JavaScript",
            "A syntax extension that allows writing HTML-like code in JavaScript",
            "A CSS preprocessor",
            "A testing framework"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 33,
        wasCorrect: false,
        question: "Which CSS selector has the highest specificity?",
        answers: [
            "Class selector (.class)",
            "ID selector (#id)",
            "Element selector (div)",
            "Attribute selector ([attr])"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 34,
        wasCorrect: false,
        question: "What is the purpose of 'package.json' in a Node.js project?",
        answers: [
            "To store application data",
            "To define project metadata and dependencies",
            "To configure the database",
            "To set up routing"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 35,
        wasCorrect: false,
        question: "What does the 'map()' method do in JavaScript?",
        answers: [
            "Creates a new array by transforming each element of the original array",
            "Finds the first matching element in an array",
            "Sorts an array in ascending order",
            "Removes duplicate elements from an array"
        ],
        correctAnswer: 0,
        answerSelected: null
    },
    {
        id: 36,
        wasCorrect: false,
        question: "What is a TypeScript union type?",
        answers: [
            "A type that combines multiple interfaces",
            "A type that can be one of several types using the | operator",
            "A type that represents the intersection of two types",
            "A type that extends another type"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 37,
        wasCorrect: false,
        question: "Which CSS property is used to center content horizontally and vertically in a flex container?",
        answers: [
            "text-align: center",
            "align-items: center; justify-content: center",
            "margin: auto",
            "position: center"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 38,
        wasCorrect: false,
        question: "What is the purpose of the 'useState' hook's setter function?",
        answers: [
            "To get the current state value",
            "To update the state and trigger a re-render",
            "To validate state changes",
            "To persist state to localStorage"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 39,
        wasCorrect: false,
        question: "What does 'DOM' stand for?",
        answers: [
            "Document Object Model",
            "Data Object Management",
            "Dynamic Object Manipulation",
            "Document Oriented Markup"
        ],
        correctAnswer: 0,
        answerSelected: null
    },
    {
        id: 40,
        wasCorrect: false,
        question: "Which method is used to add event listeners in JavaScript?",
        answers: [
            "attachEvent()",
            "addEventListener()",
            "bindEvent()",
            "onEvent()"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 41,
        wasCorrect: false,
        question: "What is the purpose of TypeScript's 'type' keyword?",
        answers: [
            "To check variable types at runtime",
            "To create type aliases and union types",
            "To convert between different types",
            "To generate type documentation"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 42,
        wasCorrect: false,
        question: "Which CSS property controls the opacity of an element?",
        answers: [
            "transparency",
            "opacity",
            "alpha",
            "visibility"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 43,
        wasCorrect: false,
        question: "What is the difference between 'const', 'let', and 'var'?",
        answers: [
            "They are all the same",
            "const creates constants, let has block scope, var has function scope",
            "var is deprecated, let and const are identical",
            "const is for objects, let for primitives, var for functions"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 44,
        wasCorrect: false,
        question: "What is a React component?",
        answers: [
            "A CSS class",
            "A reusable piece of UI that can accept props and return JSX",
            "A JavaScript function only",
            "A HTML template"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 45,
        wasCorrect: false,
        question: "Which CSS property is used to change text color?",
        answers: [
            "text-color",
            "font-color",
            "color",
            "foreground-color"
        ],
        correctAnswer: 2,
        answerSelected: null
    },
    {
        id: 46,
        wasCorrect: false,
        question: "What does the 'filter()' method do in JavaScript?",
        answers: [
            "Creates a new array with elements that pass a test function",
            "Removes all elements from an array",
            "Sorts an array by a given criteria",
            "Converts array elements to strings"
        ],
        correctAnswer: 0,
        answerSelected: null
    },
    {
        id: 47,
        wasCorrect: false,
        question: "What is a TypeScript interface?",
        answers: [
            "A way to connect to external APIs",
            "A contract that defines the structure of an object",
            "A method for creating classes",
            "A tool for type conversion"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 48,
        wasCorrect: false,
        question: "Which CSS property is used to create rounded corners?",
        answers: [
            "corner-radius",
            "border-radius",
            "border-corner",
            "edge-radius"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 49,
        wasCorrect: false,
        question: "What is the purpose of the 'useContext' hook?",
        answers: [
            "To create new contexts",
            "To consume context values in functional components",
            "To manage global state",
            "To handle component lifecycle"
        ],
        correctAnswer: 1,
        answerSelected: null
    },
    {
        id: 50,
        wasCorrect: false,
        question: "What does CSS 'position: absolute' do?",
        answers: [
            "Positions element relative to its normal position",
            "Positions element relative to the nearest positioned ancestor",
            "Fixes element to the viewport",
            "Makes element stick to the top when scrolling"
        ],
        correctAnswer: 1,
        answerSelected: null
    }
]