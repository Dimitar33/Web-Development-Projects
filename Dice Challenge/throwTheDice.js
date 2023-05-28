var dice1 = Math.random() * 6;
var dice2 = Math.random() * 6;

dice1 = Math.floor(dice1) + 1;
dice2 = Math.floor(dice2) + 1;


if (dice1 > dice2) {
    
    document.querySelector("h1").textContent = "Player one wins";
}

else if (dice2 > dice1) {
    
    document.querySelector("h1").textContent = "Player two wins";
}

else{

    document.querySelector("h1").textContent = "Draw";
}

switch (dice1) {
  case 1:
    document.querySelector(".img1").attributes[1].textContent =
      "./images/dice1.png";

    break;
    case 2:
    document.querySelector(".img1").attributes[1].textContent =
      "./images/dice2.png";

    break;
    case 3:
    document.querySelector(".img1").attributes[1].textContent =
      "./images/dice3.png";

    break;
    case 4:
    document.querySelector(".img1").attributes[1].textContent =
      "./images/dice4.png";

    break;
    case 5:
    document.querySelector(".img1").attributes[1].textContent =
      "./images/dice5.png";

    break;
    case 6:
    document.querySelector(".img1").attributes[1].textContent =
      "./images/dice6.png";

    break;

  default:
    break;
}

switch (dice2) {
    case 1:
      document.querySelector(".img2").attributes[1].textContent =
        "./images/dice1.png";
  
      break;
      case 2:
      document.querySelector(".img2").attributes[1].textContent =
        "./images/dice2.png";
  
      break;
      case 3:
      document.querySelector(".img2").attributes[1].textContent =
        "./images/dice3.png";
  
      break;
      case 4:
      document.querySelector(".img2").attributes[1].textContent =
        "./images/dice4.png";
  
      break;
      case 5:
      document.querySelector(".img2").attributes[1].textContent =
        "./images/dice5.png";
  
      break;
      case 6:
      document.querySelector(".img2").attributes[1].textContent =
        "./images/dice6.png";
  
      break;
  
    default:
      break;
  }

