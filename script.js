var capLet = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var smalLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
var num = "1234567890".split("");
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~", "{", "}", "[", "]"];


var generPassw = [];
console.log(generPassw);


// when user hit generate button
var password = ""
var minLen = 8;

function generate() {

    var pasLen = prompt("How many characters would you like to have?");
    if (pasLen < 8) {
        alert("Password should contain at least 8 characters");
        return;
    };
    
    
var confirmcapLet = confirm ("Do you want to use capital letter?")
var confirmsmalLet = confirm ("Do you want to use small letter?");
var confirmnum = confirm ("Do you want to use number?");
var confirmspecChar = confirm ("Do you want to use Special Character?");


// (conditions) to check user's pick  (push?)

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
if (confirmspecChar, confirmsmalLet, confirmnum, confirmspecChar === false) {
    alert("Password should contain at least one from quaestions")
    return (confirmcapLet);
}

// Math.random function


console.log(pasLen, confirmcapLet, confirmsmalLet, confirmnum, confirmspecChar);

// create for loop to choose password characters
var password = "";
for (let i = 0; i < pasLen; i++) {
    randomSymb = generPassw[Math.floor(generPassw.length * Math.random())]
};
console.log(randomSymb);
password += randomSymb;

console.log(password);
    // save random generated password???

};
generate();