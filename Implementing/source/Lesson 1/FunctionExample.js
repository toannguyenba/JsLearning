function Hello(name = 'temp', age) {
    if (age == null) {
        age = 20;
    }
    console.log("Hello " + name + ". Age of you: " + age);
    return 1;
}

function test() {
    console.log('aaaa');
    void function voidFuntion() {
        console.log('hihi');
    }();
    return 2;
}

function middleware(nextCallback) {
    return String(Hello());
}

console.log(middleware());

var a = void(1);

//console.log(test());

console.log(typeof(Hello()));

console.log(a);


//Change Text functio
function changeText(id) {
    document.getElementById(id).text = 'new link';
}

