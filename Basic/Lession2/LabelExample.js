// Label Example for loop

// *****Break label not allow to jump anywhere****

function example1() {
    outer_for:
    for (let i = 0; i < 3; i++) {
        inner_for:
        for (let j = 0; j < 3; j++) {
            console.log(i + ", " + j);
            if (j == 2) break outer_for;
            if (j == 1) continue outer_for;
            console.log("not equal 1");
        }
    }
    
    cp1: {
        console.log("cp1");
        break cp1;
        console.log("cp2");
    }
    console.log("end");
}

example1();