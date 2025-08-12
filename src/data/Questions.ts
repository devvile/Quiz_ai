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
        answerSelected: null,
        explanation: "TypeScript generics allow you to create reusable components that work with multiple types while preserving type safety. They use placeholder types (like T) that are specified when the function or class is used, enabling code reuse without sacrificing type checking."
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
        answerSelected: null,
        explanation: "The useState hook is the primary way to add state to functional components in React. It returns an array with the current state value and a setter function to update it, triggering re-renders when the state changes."
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
        answerSelected: null,
        explanation: "The async keyword makes a function automatically return a Promise. Even if you return a regular value, it gets wrapped in a resolved Promise, allowing you to use await inside the function and handle asynchronous operations more elegantly."
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
        answerSelected: null,
        explanation: "useEffect handles side effects in functional components, such as data fetching, subscriptions, timers, or DOM manipulation. It runs after the component renders and can be configured to run on every render, only once, or when specific dependencies change."
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
        answerSelected: null,
        explanation: "Setting display: flex on an element makes it a flex container, enabling the flexbox layout model. This allows you to easily align, distribute, and arrange child elements using flex properties like justify-content and align-items."
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
        answerSelected: null,
        explanation: "The == operator performs type coercion, converting operands to the same type before comparison, which can lead to unexpected results. The === operator (strict equality) checks both type and value without any conversion, making it more predictable and generally preferred."
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
        answerSelected: null,
        explanation: "The Virtual DOM is a JavaScript representation of the actual DOM kept in memory. React uses it to optimize updates by comparing the new virtual DOM with the previous version, then efficiently updating only the parts of the real DOM that actually changed."
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
        answerSelected: null,
        explanation: "Partial<T> is a utility type that makes all properties of type T optional. This is useful when you want to create objects that may only have some of the original type's properties, such as in update operations or partial configurations."
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
        answerSelected: null,
        explanation: "A closure is a function that has access to variables from its outer (enclosing) scope even after the outer function has finished executing. This creates a persistent local environment where the inner function can access and modify variables from its parent scope."
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
        answerSelected: null,
        explanation: "The grid-template-areas property allows you to define named grid areas using a visual ASCII-art like syntax. You can then place grid items into these named areas using grid-area, making complex layouts more readable and maintainable."
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
        answerSelected: null,
        explanation: "The key prop helps React identify which list items have changed, been added, or removed. This enables React to efficiently update the DOM by reusing existing elements when possible, rather than recreating the entire list on every render."
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
        answerSelected: null,
        explanation: "The push() method adds one or more elements to the end of an array and returns the new length. It modifies the original array in place. Other methods: unshift() adds to the beginning, pop() removes from the end, and shift() removes from the beginning."
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
        answerSelected: null,
        explanation: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during compilation. This means you can use variables and functions before they're declared in your code, though the values aren't hoisted, only the declarations."
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
        answerSelected: null,
        explanation: "let has block scope (confined to the nearest enclosing block), while var has function scope (available throughout the entire function). let also prevents redeclaration in the same scope and creates a temporal dead zone, making it safer to use than var."
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
        answerSelected: null,
        explanation: "The readonly keyword prevents properties from being modified after they're initially set. This is a compile-time check only - it doesn't provide runtime immutability, but helps catch accidental modifications during development."
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
        answerSelected: null,
        explanation: "The z-index property controls the stacking order of positioned elements (elements with position other than static). Higher z-index values appear in front of lower values, allowing you to control which elements appear on top of others."
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
        answerSelected: null,
        explanation: "Event bubbling is the process where an event starts at the target element and then propagates up through its parent elements to the document root. This allows parent elements to handle events that occurred on their children, enabling event delegation patterns."
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
        answerSelected: null,
        explanation: "React.memo() is a higher-order component that memoizes the result of a component. It prevents unnecessary re-renders by only re-rendering when props change, improving performance for components that receive the same props frequently."
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
        answerSelected: null,
        explanation: "The vw (viewport width) unit is relative to 1% of the viewport's width. So 100vw equals the full width of the viewport. This makes it useful for responsive designs that need to scale with the browser window size."
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
        answerSelected: null,
        explanation: "Destructuring is a syntax that allows you to extract values from arrays or properties from objects into distinct variables. For example, const {name, age} = person or const [first, second] = array, providing a clean way to unpack data structures."
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
        answerSelected: null,
        explanation: "useCallback returns a memoized version of a callback function that only changes if one of its dependencies changes. This prevents child components from re-rendering unnecessarily when they receive the same function reference as a prop."
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
        answerSelected: null,
        explanation: "The spread operator (...) expands iterables (like arrays) or object properties. It's useful for copying arrays/objects, merging them, or passing array elements as separate arguments to functions. For example, [...array] creates a shallow copy."
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
        answerSelected: null,
        explanation: "The union type T | undefined represents a value that can be either of type T or undefined. This is TypeScript's way of expressing optional values and is commonly used when a value might not be present or initialized."
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
        answerSelected: null,
        explanation: "The CSS box model describes how the rectangular boxes around elements are structured. From inside out: content (the actual content), padding (space inside the border), border (the element's border), and margin (space outside the border)."
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
        answerSelected: null,
        explanation: "npm stands for Node Package Manager. It's the default package manager for Node.js that allows you to install, share, and manage JavaScript packages and dependencies for your projects through a command-line interface."
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
        answerSelected: null,
        explanation: "useReducer is used for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one. It uses a reducer function (similar to Redux) that takes the current state and an action, returning the new state."
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
        answerSelected: null,
        explanation: "The font-weight property controls the thickness or boldness of text. Common values include normal (400), bold (700), or numeric values from 100-900. It's part of the font family of CSS properties."
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
        answerSelected: null,
        explanation: "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in one of three states: pending, fulfilled, or rejected, and allows you to handle async operations with .then() and .catch() methods."
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
        answerSelected: null,
        explanation: "An interface in TypeScript defines the structure or shape that an object should have. It specifies what properties and methods an object must contain, serving as a contract that classes or objects must follow, enabling better type checking and code documentation."
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
        answerSelected: null,
        explanation: "The gap property (formerly known as grid-gap) controls the space between flex items in a flex container or grid items in a grid container. It's more convenient than using margins because it only adds space between items, not around the edges."
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
        answerSelected: null,
        explanation: "null is an intentional assignment representing 'no value' or 'empty value', while undefined means a variable has been declared but not assigned a value, or a property doesn't exist. null is explicitly set by developers, undefined occurs naturally in JavaScript."
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
        answerSelected: null,
        explanation: "JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code within JavaScript. It gets transpiled to React.createElement() calls, making it easier to describe what the UI should look like in a more familiar, declarative way."
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
        answerSelected: null,
        explanation: "ID selectors (#id) have the highest specificity among these options. The specificity hierarchy is: inline styles (highest), IDs, classes/attributes/pseudo-classes, then elements/pseudo-elements (lowest). Higher specificity rules override lower specificity ones."
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
        answerSelected: null,
        explanation: "package.json is a manifest file that contains metadata about your Node.js project, including its name, version, description, dependencies, scripts, and other configuration. It's essential for package management and tells npm how to handle your project."
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
        answerSelected: null,
        explanation: "The map() method creates a new array by calling a provided function on every element in the original array. It doesn't modify the original array but returns a new one with the transformed elements, making it perfect for data transformation operations."
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
        answerSelected: null,
        explanation: "A union type uses the | operator to specify that a value can be one of several types. For example, string | number means the value can be either a string or a number. This provides flexibility while maintaining type safety."
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
        answerSelected: null,
        explanation: "In flexbox, justify-content: center centers items along the main axis (horizontally by default), while align-items: center centers items along the cross axis (vertically by default). Using both together achieves perfect centering in both directions."
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
        answerSelected: null,
        explanation: "The setter function returned by useState updates the state value and triggers a re-render of the component. React will compare the new state with the previous state and re-render the component if they're different, updating the UI to reflect the new state."
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
        answerSelected: null,
        explanation: "DOM stands for Document Object Model. It's a programming interface that represents HTML and XML documents as a tree structure of objects, allowing JavaScript to dynamically access and modify the content, structure, and styling of web pages."
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
        answerSelected: null,
        explanation: "addEventListener() is the standard method for attaching event listeners to DOM elements. It allows you to specify the event type, the function to call, and options like whether to capture the event, providing more flexibility than inline event handlers."
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
        answerSelected: null,
        explanation: "The type keyword creates type aliases, allowing you to define custom types, union types, intersection types, and more complex type definitions. It's purely a compile-time feature that helps make code more readable and maintainable."
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
        answerSelected: null,
        explanation: "The opacity property controls the transparency level of an element, with values from 0 (completely transparent) to 1 (completely opaque). Unlike visibility: hidden, opacity preserves the element's space in the layout while making it transparent."
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
        answerSelected: null,
        explanation: "const creates constants that can't be reassigned (though objects/arrays can be mutated), let creates block-scoped variables that can be reassigned, and var creates function-scoped variables with hoisting behavior. const and let are generally preferred over var in modern JavaScript."
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
        answerSelected: null,
        explanation: "A React component is a reusable piece of UI that encapsulates its own logic and rendering. Components can accept inputs (props), manage their own state, and return JSX describing what should be rendered. They can be function or class-based."
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
        answerSelected: null,
        explanation: "The color property sets the foreground color of text content. It accepts various color formats including named colors (red), hex codes (#ff0000), RGB values (rgb(255,0,0)), and HSL values. It's one of the most basic CSS properties."
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
        answerSelected: null,
        explanation: "The filter() method creates a new array containing only the elements that pass a test implemented by a provided function. It doesn't modify the original array but returns a filtered copy, making it useful for data filtering operations."
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
        answerSelected: null,
        explanation: "A TypeScript interface defines the shape or structure that an object should have. It specifies what properties and methods an object must contain, their types, and whether they're optional. Interfaces provide compile-time type checking and better code documentation."
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
        answerSelected: null,
        explanation: "The border-radius property creates rounded corners on elements by curving the border edges. You can specify a single value for all corners or individual values for each corner. It works even when there's no visible border."
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
        answerSelected: null,
        explanation: "useContext allows functional components to consume context values that were provided by a Context.Provider higher up in the component tree. It's a way to access shared data without prop drilling through multiple component levels."
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
        answerSelected: null,
        explanation: "position: absolute removes an element from the normal document flow and positions it relative to its nearest positioned ancestor (an ancestor with position other than static). If no positioned ancestor exists, it positions relative to the initial containing block."
    }
]