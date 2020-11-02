// Read instructions. And remove this line.
let secretNumber = randomInt(100);

function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(randomInt(100));
console.log(randomInt(20));

function getUserGuess(){
    let guess = document.getElementById('user-input').value;
    return guess
} 
globalThis.getUserGuess = getUserGuess
