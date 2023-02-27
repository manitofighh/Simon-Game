var level = 0;
var startState = false;
var order = [];
var b1Sound = new Audio("Sounds/b1.mp3");
var b2Sound = new Audio("Sounds/b2.mp3");
var b3Sound = new Audio("Sounds/b3.mp3");
var b4Sound = new Audio("Sounds/b4.mp3");
var wrongSound = new Audio("Sounds/wrong.mp3");

$(document).keydown(function(event){
    if (event.which === 13 && startState === false){
        level = 1;
        $("h1").text("Level " + level);
        startState = 1;
        startGame();
    }
});

function startGame(){
    number = Math.floor(Math.random() * 4) + 1;
    $(".b" + number).css("opacity", 0.5);

    setTimeout(() => 
    $(".b" + number).css("opacity", 1), 700);
    order.push(number);
}