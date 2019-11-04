//VARIABLES
//========================================================================================================
var wins = 0;
var losses = 0;
var score = 0;
var bananaRandom = Math.floor(Math.random() * 13)+ 1;
var grapeRandom = Math.floor(Math.random() * 13) +1; 
var appleRandom = Math.floor(Math.random() * 13) +1; 
var peachRandom = Math.floor(Math.random() * 13) +1; 
var randomNumber = Math.floor((Math.random() * 80) + 40);

//FUNCTIONS
//=========================================================================================================
function resetButtons (){
    bananaRandom = Math.floor(Math.random() * 13) +1; 
    grapeRandom = Math.floor(Math.random() * 13) +1; 
    appleRandom = Math.floor(Math.random() * 13) +1; 
    peachRandom = Math.floor(Math.random() * 13) +1; 
}

$("#bananaClick").on("click", function()
//Everytime user clicks the Banana a randomBanana # appears & adds to the score 
{
    score = bananaRandom + score;
    console.log(score);
    })
$("#grapesClick").on("click", function()
//Everytime user clicks the Banana a randomGrape # appears & adds to the score 
{
    score = grapeRandom + score;
    console.log(score);
    })
//Everytime user clicks the Apple a randomApple # appears & adds to the score 
$("#appleClick").on("click", function(){
    score = appleRandom + score;
    })
    //Everytime user clicks the Peach a randomApple # appears & adds to the score 
$("#peachClick").on("click", function(){
    score = peachRandom + score;
    });
    

//*****************************/MAIN GAME******************************//
//Onclick for Game toto Start
$(document).ready(function() {
    $("body").on("click", function() {
        $(".lead").text(" ");
        $("#random-number-box").text(randomNumber);
        $("#Score").text("Score: " + score);
        $("#Wins").text("Wins: " + wins);
        $("#Losses").text("Losses: " + losses);
        
if (randomNumber === score) {
    wins++;
    score = 0;
    alert("You won!");
    $("#Wins").text("Wins: " + wins);
    $("#Score").text("Score: " + score);
    randomNumber = Math.floor((Math.random() * 80) + 40);
    $("#random-number-box").text(randomNumber);
    resetButtons();
}
else if (score > randomNumber) {
    losses++; 
    score = 0;
    alert("You Lost!");
    $("#Losses").text("Losses: " + losses);
    $("#Score").text("Score: " + score);
    randomNumber = Math.floor((Math.random() * 80) + 40);
    $("#random-number-box").text(randomNumber);
    resetButtons();
}
});
});