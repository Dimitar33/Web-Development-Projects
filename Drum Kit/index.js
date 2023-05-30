var element = document.querySelectorAll("button");
var keyPressed = document.addEventListener("keypress", (e) => {

    
  btnKlick(e.key)
    
});

for (let i = 0; i < element.length; i++) {
  element[i].addEventListener("click", function (){

    btnKlick(this.classList[0]);
  });
}

function btnKlick(k) {

  var audio = new Audio();

  switch (k) {
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
      return;
  }
  changeBtn(k);
  audio.play();
}

function  changeBtn(key) {
  
  var el = document.querySelector("." + key);
  el.classList.add("pressed");
  setTimeout(() => {
    el.classList.remove("pressed");
  }, 111);
}


