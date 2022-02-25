var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p', 'q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var chances = 9;
var guesses = [];

var index = letters[Math.floor(Math.random() * letters.length)];
console.log(index)
function getAnswer(a) {
    // var a = document.querySelector("#input").value.toLowerCase();
    if (letters.includes(a)) {
        checkAnswer(a)
    }
    else if (a.length > 1 || !letters.includes(a) /*|| a.length == 0*/){
        alert("You must specify just one string value!")
        // document.querySelector("#input").value = "";
    }
    // else {
    //     alert("You must specify a STRING value!")
    //     document.querySelector("#input").value = "";
    // }
}
function askAnswer(){
    // document.querySelector(".btn").addEventListener("click", getAnswer);
    document.onkeyup = function(event){
    getAnswer(event.key.toLowerCase())
}
}
function checkAnswer(x) {
        if (x === index) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            alert("You Won!")
            restart();
        }
        else if (x !== index) {
            chances--;
            document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + chances;
            guesses.push(x)
            document.querySelector("#guesses").innerHTML = "Your Guesses so far: " + guesses.join(" ");
            if (chances == 0) {
                losses++;
                document.querySelector("#losses").innerHTML = "Losses: " + losses;
                alert("Your chances ran out! You Lost!")
                restart();
            }
            else {
                askAnswer();
            }
        }
        // document.querySelector("#input").value = "";
}
function restart() {
    index = letters[Math.floor(Math.random() * letters.length)];
    chances = 9
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + chances;
    guesses = [];
    document.querySelector("#guesses").innerHTML = "Your Guesses so far: " + guesses;
    askAnswer()
}
askAnswer();







