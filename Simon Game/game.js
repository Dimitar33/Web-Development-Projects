var gamePatern = [];
var userPatern = [];

$(document).keypress(function () {
  $("h1").text("Level");

  let color = random();

  clicked(color);

  $(".btn").click(function () {
    clicked(this.classList[1]);

    userPatern.push(this.classList[1]);

    if (userPatern == gamePatern) {

        setTimeout(() => {
            clicked(random());
        }, 1000);
    }
    else{
        $(document).Audio.src = "./sounds/wrong.mp3";
        audio.play();
    }
    console.log(userPatern);

  });

 
});

function clicked(color) {
  var audio = new Audio();

  $("." + color).addClass("pressed");

  setTimeout(() => {
    $("." + color).removeClass("pressed");
  }, 111);

  switch (color) {
    case "red":
      audio.src = "./sounds/red.mp3";
      break;

    case "blue":
      audio.src = "./sounds/blue.mp3";
      break;

    case "green":
      audio.src = "./sounds/green.mp3";
      break;

    case "yellow":
      audio.src = "./sounds/yellow.mp3";
      break;

    default:
      break;
  }
  audio.play();
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
