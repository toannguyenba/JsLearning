
// Or operator

var role = prompt("Who's there?");

if (role == "Admin") {
    var password = prompt("Your password?");
    if (password == "TheMaster") {
        alert("Welcome!");
    } else {
        alert("Wrong password")
    }
} else if (role == '' || role == null) {
    alert( 'Canceled' );
} else {
    alert("I don't know you")
}