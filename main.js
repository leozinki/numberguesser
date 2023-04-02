var score = 0;
var randomNumber 
var buttonText = document.getElementById("button");
var limite = Number(document.querySelector("#limite").value);
var textExplain = document.getElementById("textExplain")

function generateRandomNumber() {
    limite = Number(document.querySelector("#limite").value);
    randomNumber = Math.floor(Math.random() * limite + 1);
    //document.getElementById("numero").innerHTML = randomNumber;
    score = 0;
    document.getElementById("pontuacao").innerHTML = 0;
    button.innerHTML = "Number generated"
    isValid.innerHTML = ""
    textExplain.innerHTML = "Good Luck!"
    head.innerHTML = "Try to guess the number!"
}

function runGuess() {
    var button = document.getElementById("button");
    var guess = document.getElementById("guess").value;
    var isValid = document.getElementById("isValid");
    var head = document.getElementById("head");
    
    if (isNaN(randomNumber)) {
        isValid.innerHTML = "The number hasn't been generated";
        textExplain.innerHTML = ""

    }
    else if (guess.trim() === "") {
        isValid.innerHTML = "Enter a valid number!";
        textExplain.innerHTML = ""
    }   
    else if (isNaN(guess)) {
        isValid.innerHTML = "Enter a valid number!";
        textExplain.innerHTML = ""
    }
    
    else {
        isValid.innerHTML = "";
        score++ 
        document.getElementById("pontuacao").innerHTML = score;
        button.innerHTML = "Generate Number"
        if (limite === 100) {
            textExplain.innerHTML = "How fast can you guess it right?"
        }
        else if (limite > 100 && limite < 1000000) {
            textExplain.innerHTML = "Now it should be difficult. Good Luck!"
        }
        else if (limite > 100000) {
            textExplain.innerHTML = "Can you guess it right in under 20 guesses?"
        }
    }
    
    document.getElementById("guess").value = "";

    if (guess.trim() === "") {
        
    }
    else if (Number(guess) === randomNumber) {
        head.innerHTML = "You won, the number was " + randomNumber + "!";
        document.getElementById("pontuacao").innerHTML = score;
        if (limite === 100) {
            textExplain.innerHTML = "You got it right in " + score + " guesses! Try again but with a higher limit!"
        }
        else if (limite < 1000000 && limite > 100) {
            textExplain.innerHTML = "Nice, you got it right in " + score + " guesses! I think you should step up!"
        }
        else if (limite === 1000000) {
            textExplain.innerHTML = "Wow, you got it right in " + score + " guesses! Can you beat your record?"
        }
    }
    else if (Number(guess) > randomNumber) {
        head.innerHTML = "Less than " + guess;

    }
    else if (Number(guess) < randomNumber) {
        head.innerHTML = "More than " + guess;

    }
       
}

function handleEnter(event) {
  
    if (event.key === "Enter") {
        runGuess()
    }
}