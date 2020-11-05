// Read instructions. And remove this line.

function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(randomInt(100));
console.log(randomInt(20));

const secretNumber = randomInt(100);

function getUserGuess(){
    const guess = document.getElementById('user-input').value;
    return parseInt(guess, 10);
} 
globalThis.getUserGuess = getUserGuess;

document.addEventListener('keyup', keyPress);

function keyPress(enter){
    if(enter.key == "Enter"){
        console.log(getUserGuess())
    }
} 