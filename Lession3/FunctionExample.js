
// Function Declaration
function sayHi() {
    console.log("Hello");
    return "Value sayHi";
} // no need semicolon ;

// Function expression
// Assign function sayHi() to varible hi
let sayHiFunction = sayHi; // need semicolon ;

// Assign return value of sayHi() to varible
let sayHiValue = sayHi();

console.log("caller 1: ");
sayHi();

console.log("caller 2: " + sayHiFunction);

console.log("caller 3: " + sayHiValue);

// Decision in runtime
let a = 0;

if (a) {
    function foo() {
        console.log("foo is called");
    }
} else {
    function bar() {
        console.log("bar is called");
    }
}

//foo(); // foo is not a function
bar();


/**
 * Arrow function
 */
let sum = (a, b) => a + b; // Function expression as follow: let sum = function(a, b) {return a + b;}
let sqr = n => n * n; // Function expression as follow: let sqr = function(n) {return n * n;}

// if no arguments => parentheses will be empty (but they should be present)
let hello = () => console.log("hello");

//Multiline arrow functions
let calculator = (a , b) => {
    return {
        sum: a + b,
        minus: a - b,
        multiple: a * b,
        div: a / b
    };
}

console.log(calculator(5,2));