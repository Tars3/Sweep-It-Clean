

var b1 = document.getElementById("box1")
var b2 = document.getElementById("box2")
var b3 = document.getElementById("box3")
var b4 = document.getElementById("box4")
var b5 = document.getElementById("box5")
var b6 = document.getElementById("box6")
var b7 = document.getElementById("box7")
var b8 = document.getElementById("box8")
var b9 = document.getElementById("box9")
var b10 = document.getElementById("box10")
var b11 = document.getElementById("box11")
var b12 = document.getElementById("box12")

var b1Clicked = false;
var b3Clicked = false;
var b5Clicked = false;
var b8Clicked = false;
var b12Clicked = false;


b1.addEventListener("click", b1Click)
b2.addEventListener("click", mark)
b3.addEventListener("click", b3Click)
b4.addEventListener("click", mark)
b5.addEventListener("click", b5Click)
b6.addEventListener("click", mark)
b7.addEventListener("click", mark)
b8.addEventListener("click", b8Click)
b9.addEventListener("click", mark)
b10.addEventListener("click", mark)
b11.addEventListener("click", mark)
b12.addEventListener("click", b12Click)

function b1Click() {
  b1Clicked = true;
  checkWin()
}

function b3Click() {
  b3Clicked = true;
  checkWin()
}


function b5Click() {
  b5Clicked = true;
  checkWin()
}

function b8Click() {
  b8Clicked = true;
  checkWin()
}

function b12Click() {
  b12Clicked = true;
  checkWin()
}


function checkWin() {
  if (b1Clicked == true && b3Clicked == true && b5Clicked == true && b8Clicked == true && b12Clicked == true){
    $('.main-game').addClass('main-game-end')
    console.log("checkWin is all true")
  }else{
    console.log("checkWin is running")
  }
}

function mark(){
$('.main-game').addClass('main-game-end-lose')
}

if (b1 == true && b5 == true && b8== true){
  $('.main-game').addClass('main-game-end')
}

$('.grid-game1').click(function(event) {
  $('.grid-game1').addClass('test')
});

$('.grid-game2').click(function(event) {
  $('.grid-game2').addClass('test')
});

$('.grid-game3').click(function(event) {
  $('.grid-game3').addClass('test')
});

$('.grid-game4').click(function(event) {
  $('.grid-game4').addClass('test')
});
$('.grid-game5').click(function(event) {
  $('.grid-game5').addClass('test')
});


//This is the start of the Game srceen it
//will say Lets play and slide the option too
//to play on the screen
$('.letsPlay').slideUp(0)
$('.letsPlay').slideDown(4000)
  $('.startBtn').slideUp(2000)
  $('.startBtn').fadeIn(4000)

//
$('.startBtn').click(function() {
  $('.letsPlayMain').fadeOut(3000)
    $('.iconHolder').slideUp(0)
  $('.iconHolder').slideDown(4000)
  });
