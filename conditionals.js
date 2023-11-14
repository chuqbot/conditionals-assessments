var userChoice;
var randomNumber;
var computerChoice;

userChoice = prompt("Heads or tails?");
randomNumber = Math.random();

if (randomNumber < 0.5) {
    randomNumber = 0
}
else {
    randomNumber + 1
}

if (randomNumber == 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}

if (userChoice == computerChoice) {
    alert("You guessed right! The coin flip landed on" + userChoice);
} else {
    if (computerChoice == "heads") {
        alert("Sorry, the coin flip landed on heads");
    } else if (computerChoice == "tails"){
        alert("sorry, the coin flip landed on tails");
    }
}

const birthYear=prompt("What year were you born?")

if ((2023 - birthYear) < 21){
    alert("Sorry, you are not old enough to drink in the US");
}
else if ((2023 - birthYear) > 21){
    alert("You are old enough to drink in the US")
}
else if((2023 - birthYear) === 21){
    alert("You are old enough to drink in the US...barely")
}