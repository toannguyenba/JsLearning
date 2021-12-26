// Literal

let student = { name: "Toan", age: 24 };

// Constructor

function Student(name, age) {
    return {
        name: name,
        age: age
    };
}

function displayStudent(student, index = 1) {
    //console.log("Student " + index + ": " + student.name + ", " +student.age);
    //console.log("Student " + index + ": " + student["name"] + ", " +student["age"]);

    // get all property of object
    console.log("Student " + index + ": ");
    for (key in student) {
        console.log(student[key] + ", ");
    }
}

let stu1;
let stu2;


// test with literal
stu1 = student;
stu2 = stu1;
console.log("===Before change value===");
displayStudent(stu1, 1);
displayStudent(stu2, 2);

stu1.name = "name changed";

console.log("===After change value");
displayStudent(stu1, 1);
displayStudent(stu2, 2);

// test with constructor
stu1 = new Student("ToanNB", 11);
stu2 = new Student("ToanNB", 11);

console.log("===With constructor===")
console.log("===Before change value===");
displayStudent(stu1, 1);
displayStudent(stu2, 2);

stu1.name = "new name";
displayStudent(stu1, 1);
displayStudent(stu2, 2);

// add property
console.log("add property");
stu1.gender = "Male";
displayStudent(stu1);