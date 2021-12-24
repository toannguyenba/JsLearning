function User(name) {
    // this = {};  (implicitly) => if use operator new

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    this.hello = test;
    //return {name: "sample"};
    // return this;  (implicitly) => if use operator new => return this if function don't return
}

let user1 = new User("ToanNB1");
let user2 = User("ToanNB2");

console.log(user1);
console.log(user2);

// new.target
function Student(Id) {
    if (!new.target) { // if function return undefined
        return new Student(Id);
    }
    this.id = Id;
}

let stu1 = new Student(1);
let stu2 = Student(2);

console.log(stu1);
console.log(stu2);

// if not have property
function test() {
    console.log("hello");
}

let test1 = new test();
let test2 = test();

console.log(test1);
console.log(test2);

// Optional chaining
console.log(user2?.name); // check undefined
//console.log(user2.name);
user1.hello?.();

// ****************************Can using Symbol to using hidden property****************************************
//.......................................................

// **************************** Object to primitive conversion ***********************************