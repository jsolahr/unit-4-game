//VARIABLES
//========================================================================================================
var wins = 0;
var losses = 0;
var score = 0;
var bananaRandom = Math.floor(Math.random() * 13); 
var grapeRandom = Math.floor(Math.random() * 13); 
var appleRandom = Math.floor(Math.random() * 13);  
var peachRandom = Math.floor(Math.random() * 13); 
var randomNumber = Math.floor((Math.random() * 80) + 40);
var reset = Math.floor((Math.random() * 80) + 40);

//FUNCTIONS
//=========================================================================================================
function numberGenerater()
///Prints randomNumber into random-number div 
{    
    $("#random-number-box").text(randomNumber);
}
function bananaGenerator() 
//Gets a new bananaRandom # for Bananas 
{
(bananaRandom);
}
function grapeGenerater()
//Gets a new grapeRandom # for Grapes 
{
(grapeRandom);
} 
function appleGenerater() 
//Gets a new appleRandom # for Apples 
{
(appleRandom);
}
function peachGenerater() 
//Gets a new appleRandom # for Apples 
{
(peachRandom);
}
$("#bananaClick").on("click", function()
//Everytime user clicks the Banana a randomBanana # appears & adds to the score 
{
    score = bananaRandom + score;
    });
$("#grapesClick").on("click", function()
//Everytime user clicks the Banana a randomGrape # appears & adds to the score 
{
    score = grapeRandom + score;
    });
//Everytime user clicks the Apple a randomApple # appears & adds to the score 
$("#appleClick").on("click", function(){
    score = appleRandom + score;
    });
    //Everytime user clicks the Peach a randomApple # appears & adds to the score 
$("#peachClick").on("click", function(){
    score = peachRandom + score;
    });

//*****************************/MAIN GAME******************************//
//Onclick for Game to Start

$(document).ready(function() {
    $("body").on("click", function() {
        $("#Score").text("Score: " + score);
        $("#Wins").text("Wins: " + wins);
        $("#Losses").text("Losses: " + losses);
        $(".lead").text(" ");
        numberGenerater();

if (randomNumber === score) {
    score=0;
    wins++;
    alert("You won!");
    bananaRandom = Math.floor(Math.random() * 13); 
    grapeRandom = Math.floor(Math.random() * 13); 
    appleRandom = Math.floor(Math.random() * 13);  
    peachRandom = Math.floor(Math.random() * 13); 
    randomNumber = Math.floor((Math.random() * 80) + 40);
}
else if (score > randomNumber) {
    score =0;
    losses++; 
    alert("You Lost!");
    bananaRandom = Math.floor(Math.random() * 13); 
    grapeRandom = Math.floor(Math.random() * 13); 
    appleRandom = Math.floor(Math.random() * 13);  
    peachRandom = Math.floor(Math.random() * 13); 
    randomNumber = Math.floor((Math.random() * 80) + 40);
}
});
});
