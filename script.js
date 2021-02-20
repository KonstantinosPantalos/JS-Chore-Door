let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let BeachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

let numClosedDoors = 3;
let OpenDoor1;
let OpenDoor2;
let OpenDoor3;
let currentlyPlaying = true;

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
}
}
const isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }

}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
} 
}


const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if(choreDoor === 0) {
  OpenDoor1 = botDoorPath;
  OpenDoor2 = BeachDoorPath;
  OpenDoor3 = spaceDoorPath;
}   else if (choreDoor === 1) {
  OpenDoor2 = botDoorPath;
  OpenDoor1 = BeachDoorPath;
  OpenDoor3 = spaceDoorPath;
}   else { (choreDoor === 2) 
  OpenDoor3 = botDoorPath;
  OpenDoor1 = BeachDoorPath;
  OpenDoor2 = spaceDoorPath;
}
}

door1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)) {
doorImage1.src=OpenDoor1;
playDoor(door1);
}
}
door2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
doorImage2.src=OpenDoor2;
playDoor(door2);
}
}
door3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
doorImage3.src=OpenDoor3;
playDoor(door3);
}
}

startButton.onclick = () => {
  if (!currentlyPlaying){
  startRound();
}
}
const startRound = () => {
door1.src = closedDoorPath;
door2.src = closedDoorPath;
door3.src = closedDoorPath;
numClosedDoors = 3;
currentlyPlaying = true;
startButton.innerHTML = "Good luck!";
randomChoreDoorGenerator();
}


const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  }else {
  startButton.innerHTML = 'Game over! Play again?'
}
currentlyPlaying = false;
}

StartRound();
