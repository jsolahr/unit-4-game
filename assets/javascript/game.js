$(document).ready(function() {
//Variables 
var bananaText
var graes;
var apple; 
var wins;
var losses;
var score = 0;
var clickArray= [];
var randomNumber = Math.floor((Math.random() * 90) + 30);
 


//Contractor to print Random Number //numberGenerater();
function numberGenerater() {
    $("#random-number-box").text(randomNumber);
};
numberGenerater();


//Onclick for Game Starts
$("body").on("click", function(){

});

//Onclick for Apples 
$("#appleClick").on("click", function(){
});

//Onclick for Bananas
$("#bananaClick").on("click", function(){
    });
//Onclick for Grapes
$("#grapesClick").on("click", function(){
    alert("grapes")
    });

});


  
