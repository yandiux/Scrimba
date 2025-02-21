let homeScore = 0;
let guestScore = 0;
let increaseOne = document.querySelector(".increase-one");
let increaseTwo = document.querySelector(".increase-two");
let increaseThree = document.querySelector(".increase-three");
console.log(increaseOne);
console.log(increaseTwo);
console.log(increaseThree);

// setting up the score
let home = document.getElementById("home-score");
//home.textContent = homeScore;

let guest = document.getElementById("guest-score");

function increaseScoreByOne() {
  homeScore += 1;
  home.textContent = homeScore;
}

function increaseScoreBytwo() {
  homeScore += 2;
  home.textContent = homeScore;
}

function increaseScoreByThree() {
  homeScore += 3;
  home.textContent = homeScore;
}
