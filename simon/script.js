const btnColors = ["r", "y", "g", "b"];
const keyColors = ["r", "y", "g", "b"];
var gamePattern = [],
  userPattern = [];
var started = false,
  level = 0;

$(document).keypress((event) => {
  if (!started) {
    $(".heading").text("Level " + level);
    setTimeout(() => {
      nextSequence();
    }, 100);
    started = true;
  } else {
    if (keyColors.includes(event.key)) {
      userPattern.push(event.key);
      playSound(event.key);
      pressAnimation(event.key);
      checkAnswer(userPattern.length - 1);
    } else {
      playSound("wrong");
      wrongAnimation();
    }
  }
});

$(".btn").click((event) => {
  const color = event.target.id;
  userPattern.push(color);
  playSound(color);
  pressAnimation(color);
  checkAnswer(userPattern.length - 1);
});

const playSound = (color) => {
  const audio = new Audio(`./sounds/${color}.mp3`);
  audio.play();
};

const pressAnimation = (color) => {
  $(`#${color}`).addClass("pressed");
  setTimeout(() => {
    $(`#${color}`).removeClass("pressed");
  }, 100);
};

const wrongAnimation = () => {
  gamePattern = [];
  userPattern = [];
  started = false;
  level = 0;
  $("main").addClass("game-over");
  playSound("wrong");
  setTimeout(() => {
    $("main").removeClass("game-over");
  }, 400);
  $(".heading").text("Game over,Press any key to start");
};

const reset = () => {
  gamePattern = [];
  userPattern = [];
  started = false;
  level = 0;
};

const nextSequence = () => {
  userPattern = [];
  level++;
  $(".heading").text("Level " + level);
  const randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(btnColors[randomNumber]);
  playSound(btnColors[randomNumber]);
  pressAnimation(btnColors[randomNumber]);
};

const checkAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (gamePattern.length === userPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    wrongAnimation();
  }
};
