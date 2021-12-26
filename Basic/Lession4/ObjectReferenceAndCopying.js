let message1 = "Hello!";
let message2 = message1; // Clone value

//let numbers = [1, 2, 3];
let numbers = [
    [1, 2, 3],
    [4, 5, 6]
];

function increaseOneByForLoop(numbers) {
    if (numbers != null && numbers != undefined && numbers.length > 0) {
        for (let i = 0; i < numbers.length; i++) {
            numbers[i]++;
        }
    }
}

function increaseOneByForeach(numbers) {
    if (numbers != null && numbers != undefined && numbers.length > 0) {
        for (let number in numbers) {
            number++;
            console.log(number);
        }
    }
}

increaseOneByForeach(numbers);


// use assign to clone object
let user = { name: "John" };

let permissions1 = { age: 18 };
let permissions2 = { age: 20 };
Object.assign(user, permissions1, permissions2);