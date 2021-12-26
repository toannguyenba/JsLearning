function sayHi() {
    return "HI";
}

let person =  {
    name: "ToanNB",
    gender: 1,
    clothes: {
        shirt: 1,
        skirt: 2,
        jean: 3,
        owner: 'xxx'
    },

    sayHi() {
        console.log("I'm " + this.name);
    },

    getName() {
        return this.name;
    },

    getThis() {
        return this;
    }
}

console.log(person.getThis());

// summary:
// The value of this is defined at run-time
/// this has no value until the function is called