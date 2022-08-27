var bet = prompt("Place your bet, type the player number 1/2");
if(bet!=1&&bet!=2){
    alert("Wrong Choice,Chose between player 1 and player 2 only");
    // bet = prompt("Place your bet, type the player number 1/2");
}
else{
    var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",randomImage1);



var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

var result = "";

if(randomNumber1<randomNumber2 && bet == 1){
    result = "You lose 💩";
}
else if(randomNumber1>randomNumber2 && bet==2){
    result = "You lose 💩";
}
else if(randomNumber1<randomNumber2 && bet == 2){
    result = "You Win 🔥";
}
else if(randomNumber1>randomNumber2 && bet==1){
    result = "You Win 🔥";
}
else{
    result = "It's a Draw, Try again 😐"
}
document.querySelector("h1").textContent = result;

var betText = "Your bet was on Player " + bet;
console.log(betText);
document.querySelector(".bet").textContent = betText;

}

document.querySelector("a").textContent.style.color = "white";

