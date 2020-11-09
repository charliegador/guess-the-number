// Part 1

function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
const secretNumber = randomInt(100);

console.log(secretNumber);
// Part 2
function getUserGuess(){
    const guess = document.getElementById('user-input').value;
    return parseInt(guess, 10);
} 
globalThis.getUserGuess = getUserGuess;
// Part 3
document.addEventListener('keyup', keyPress);

function keyPress(enter){
    if(enter.key == "Enter"){
        console.log(getUserGuess() + " " + secretNumber);
        // Part 4
        if (getUserGuess() < secretNumber){
            setMessage("Too low!");  
        }
        else if (getUserGuess() > secretNumber){
            setMessage("Too High!");
        }
        else {
            setMessage("You are correct!");
        }
        guesses.push(getUserGuess());
        console.log(guesses);
        clearInput();
    }
    
}

function setMessage(msg){
    console.log("setMessage")
    let textfield = document.getElementById('message');
    textfield.innerHTML = msg;
}
// Part 5
function clearInput(){
    document.getElementById('user-input').value = "";

}

//Fördjupning
const guesses = []

