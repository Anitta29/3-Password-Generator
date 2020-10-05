var capLet = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var smalLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
var num = "1234567890".split("");
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~", "{", "}", "[", "]"];

// when user hit generate button
var password = ""
var minLen = 8;

function generate() {``

    var pasLen = parseInt(prompt("How many characters would you like to have?"));
    if (pasLen < 8) {
        alert("Password should contain at least 8 characters");
        return generate();
    };
    
    
var confirmcapLet = confirm ("Do you want to use capital letter?")
var confirmsmalLet = confirm ("Do you want to use small letter?");
var confirmnum = confirm ("Do you want to use number?");
var confirmspecChar = confirm ("Do you want to use Special Character?");


// (conditions) to check user's pick  (push?)

var generPassw = [];


if (confirmcapLet === true) {
    generPassw = generPassw.concat(capLet);
    
}

if (confirmsmalLet === true) {
    generPassw = generPassw.concat(smalLet);
}

if (confirmnum === true) {
    generPassw = generPassw.concat(num);
}

if (confirmspecChar === true) {
    generPassw = generPassw.concat(specChar);
}
console.log(generPassw);

if (!confirmcapLet && !confirmsmalLet && !confirmnum && !confirmspecChar) {
    alert("Password should contain at least one specific character")
    return generate();
}

// Math.random function

console.log("=");
console.log(typeof pasLen, confirmcapLet, confirmsmalLet, confirmnum, confirmspecChar);
console.log("=");
// create for loop to choose password characters


var password = [];

for (let i = 0; i < pasLen; i++) {
    randomSymb = Math.floor(Math.random() * generPassw.length);
    password.push(generPassw[randomSymb]);

};
password=password.join("");



document.getElementById("display").value = password;


// console.log(randomSymb);
// password += randomSymb;


    // save random generated password???

};

generate();