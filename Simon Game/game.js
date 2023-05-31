var gamePatern = [];
var userPatern = [];
var level = 0;
var started = false;

$(document).keypress(function () {

  if (!started) {
    let color = random();

    gamePatern.push(clicked(color));
    
  $("h1").text("Level " + level);
    started = true;

  }

});

$(".btn").click(function () {
  
  userPatern.push(clicked(this.classList[1]));

  checkAnswear(userPatern.length - 1);
});

function checkAnswear(level) {

  if (userPatern[level] === gamePatern[level]) {

    if (gamePatern.length === userPatern.length) {
      
      userPatern = [];
      level++;
      $("h1").text("Level " + level);
      setTimeout(() => {
        gamePatern.push(clicked(random()));
      }, 1000);
    }

  } else {
    var audioo = new Audio();
    audioo.src = "./sounds/wrong.mp3";
    audioo.play();

    $("h1").text("game over, press any key to restart");

    restart();
  }
}

function clicked(color) {
  var audio = new Audio();

  $("." + color).addClass("pressed");
  let returnColor;

  setTimeout(() => {
    $("." + color).removeClass("pressed");
  }, 111);

  switch (color) {
    case "red":
      audio.src = "./sounds/red.mp3";
      returnColor = "red";
      break;

    case "blue":
      audio.src = "./sounds/blue.mp3";
      returnColor = "blue";
      break;

    case "green":
      audio.src = "./sounds/green.mp3";
      returnColor = "green";
      break;

    case "yellow":
      audio.src = "./sounds/yellow.mp3";
      returnColor = "yellow";
      break;

    default:
      break;
  }
  audio.play();
  return returnColor;
}

function random() {
  let rng = Math.floor(Math.random() * 4) + 1;
  let color;

  switch (rng) {
    case 1:
      color = "red";
      break;
    case 2:
      color = "blue";
      break;
    case 3:
      color = "yellow";
      break;
    case 4:
      color = "green";
      break;
    default:
      break;
  }

  return color;
}

function restart (){

  started = false;
  level = 0;

  
  userPatern = [];
  gamePatern = [];
}