var element = document.querySelectorAll("button");
var keyPressed = document.addEventListener("keypress", (e) => {

    console.log(e.key);
    var audio = new Audio();
    switch (e.key) {
        case "w":
          audio.src = "./sounds/crash.mp3";
    
          break;
        case "a":
          audio.src = "./sounds/kick-bass.mp3";
    
          break;
        case "s":
          audio.src = "./sounds/snare.mp3";
    
          break;
        case "d":
          audio.src = "./sounds/tom-1.mp3";
    
          break;
        case "j":
          audio.src = "./sounds/tom-2.mp3";
    
          break;
        case "k":
          audio.src = "./sounds/tom-3.mp3";
    
          break;
        case "l":
          audio.src = "./sounds/tom-4.mp3";
    
        default:
          break;
      }
    
      audio.play();
    
});

for (let i = 0; i < element.length; i++) {
  element[i].addEventListener("click", btnKlick);
}

function btnKlick() {

  var audio = new Audio();

  switch (this.classList[0]) {
    case "w":
      audio.src = "./sounds/crash.mp3";

      break;
    case "a":
      audio.src = "./sounds/kick-bass.mp3";

      break;
    case "s":
      audio.src = "./sounds/snare.mp3";

      break;
    case "d":
      audio.src = "./sounds/tom-1.mp3";

      break;
    case "j":
      audio.src = "./sounds/tom-2.mp3";

      break;
    case "k":
      audio.src = "./sounds/tom-3.mp3";

      break;
    case "l":
      audio.src = "./sounds/tom-4.mp3";

    default:
      break;
  }

  audio.play();
}

function HKeeper1 (name, age, exp , stuff){

    this.name = "asd",
    this.age = age,
    this.exp = exp,
    this.stuff = stuff
    this.clean = function () {

        console.log("cleaning in progress");
    }
}


