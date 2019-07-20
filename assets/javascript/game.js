$(document).ready(function() {
//Variables 
var bananaText
var graes;
var apple; 
var wins = 0;
var losses = 0;
var score = 0;
var clickArray= [];
var randomNumber = Math.floor((Math.random() * 70) + 30);
var bananaRandom = Math.floor((Math.random() * 11) +1); 
var grapeRandom = Math.floor((Math.random() * 21) +1); 
var appleRandom = Math.floor((Math.random() * 11) +1); 


//Contractor to print Random Number //numberGenerater();
function numberGenerater() {
    $("#random-number-box").text(randomNumber);
}

//Random # for Bananas 
function bananaGenerator() {
(bananaRandom);
}
bananaGenerator();
console.log(bananaRandom);
    
//Random # for Grapes 
function grapeGenerater() {
(grapeRandom);
}
grapeGenerater();
console.log(grapeRandom);

//Random # for Apples 
function appleGenerater() {
(appleRandom);
}
appleGenerater();
console.log(appleRandom);

//Onclick for Bananas
$("#bananaClick").on("click", function(){
    alert(bananaRandom);
    });
//Onclick for Grapes
$("#grapesClick").on("click", function(){
    alert(grapeRandom)
    });
//Onclick for Apples
$("#appleClick").on("click", function(){
    alert(appleRandom)
    });

//*****************************/MAIN GAME******************************//
//Onclick for Game to Start
$("body").on("click", function() {
    numberGenerater();
    $("#Score").text("Score: " + score);
    $("#Wins").text("Wins: " + wins);
    $("#Losses").text("Losses: " + losses);

});










});