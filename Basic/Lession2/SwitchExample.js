//Switch example

function example1() {

    console.log("begin");

    let a = '1';

    console.log(typeof (a));

    if (a === 1) {
        console.log("compare with type of varible");
    } else if (a == 1) {
        console.log("compare without type of varible");
    } else {
        console.log("other value");
    }

    switch (a) {
        case 0: console.log(0); break;
        case 1: console.log(1); break;
        case 2, 3: console.log('2, 3'); break;
        default: console.log("other value");
    }

    console.log("end");
}

example1();