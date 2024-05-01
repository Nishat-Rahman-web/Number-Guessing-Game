const player = document.querySelector(".player");
const game_img = document.querySelector(".game-img");
const win_img = document.querySelector(".win-img");

const player_one = document.querySelector(".player-one");
const player_one_input = document.querySelector(".player-one-input");
const player_one_err = document.querySelector(".player-one-err");
const player_one_btn = document.querySelector(".player-one-btn");

const player_two = document.querySelector(".player-two");
const player_two_input = document.querySelector(".player-two-input");
const player_two_err = document.querySelector(".player-two-err");
const player_two_btn = document.querySelector(".player-two-btn");

const chance_main = document.querySelector(".chance-main");
const chance = document.querySelector(".chance");
let count = 5;
const restart = document.querySelector(".restart");

player_one_btn.addEventListener("click", function () {
  if (player_one_input.value == '') {
    player_one_err.innerHTML = 'Please enter a number';
  }
  else if (player_one_input.value >= 0 && player_one_input.value <= 20) {
    player_one_err.innerHTML = "";
    player.innerHTML = "Player Two";
    player_one.style.display = "none";
    player_two.style.display = "block";
  } 
  else {
    player_one_err.innerHTML = "Number must be between 0 and 20.";
  }
});

player_two_btn.addEventListener("click", function () {
  if (player_two_input.value >= 0 && player_two_input.value <= 20) {
    player_two_err.innerHTML = "";
    if (count !== 1) {
      count--;
      player_two_err.innerHTML = "Wrong Number, Please try again";
      if (player_two_input.value === player_one_input.value) {
        player.style.color = "green";
        player_two_err.innerHTML = "";
        player.innerHTML = "Congratulations, You are winner";
        player_two_input.style.display = "none";
        player_two_btn.style.display = "none";
        chance_main.style.display = "none";
        game_img.style.display = "none";
        win_img.style.display = "block";
        restart.style.display = "block";
      } else {
        chance.innerHTML = count;
      }
    } else {
      player.style.color = "green";
      player_two_err.innerHTML = "";
      player.innerHTML = "Opps! Player one winner";
      player_two_input.style.display = "none";
      player_two_btn.style.display = "none";
      chance_main.style.display = "none";
      game_img.style.display = "none";
      win_img.style.display = "block";
      restart.style.display = "block";
    }
  } else {
    player_two_err.innerHTML = "Number must be between 0 and 20.";
  }
});

restart.addEventListener("click", function () {
  location.reload();
});
