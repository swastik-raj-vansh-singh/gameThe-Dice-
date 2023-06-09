var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomDice = "dice"+ randomnumber1 + ".png";

var randomsource1 = "images/" + randomDice ;

var image1st = document.querySelectorAll("img")[0];

image1st.setAttribute("src",randomsource1);


// for the second dice
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomsource2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomsource2);

// which player win message print
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    Document.querySelector("h1").innerHTML = "Draw";
}