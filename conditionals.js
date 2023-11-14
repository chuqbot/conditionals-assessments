
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