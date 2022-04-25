// // STEP I (INITIATE VARIABLE VALUES)**************

// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// var level = 0;

// function nextSequence() {
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   getSound(randomChosenColour);
// }

// nextSequence();

// // level++;
// // $("h1").text("level " + level);

// // STEP II (MAKE IT FLASH) **************

// // function flashEffect() {
// //   $(".btn").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// // }

// // STEP III (ADD SOUND TO THE BUTTONS)**************

// $("#" + randomChosenColour)
//   .fadeOut(100)
//   .fadeIn(100)
//   .fadeOut(100)
//   .fadeIn(100);

// // .$(".btn")
// // .on("click", function () {
// //   var userChosenColour = this.id;
// //   getSound(userChosenColour);
// //   userClickedPattern.push(userChosenColour);
// //   checkAnswer(userClickedPattern.length - 1);
// //   animatedPress(userChosenColour);
// // });

// function getSound(e) {
//   switch (e) {
//     case "green":
//       var greenSound = new Audio("sounds/green.mp3");
//       greenSound.play();
//       break;

//     case "red":
//       var redSound = new Audio("sounds/red.mp3");
//       redSound.play();
//       break;

//     case "yellow":
//       var yellowSound = new Audio("sounds/yellow.mp3");
//       yellowSound.play();
//       break;

//     case "blue":
//       var blueSound = new Audio("sounds/blue.mp3");
//       blueSound.play();
//       break;

//     default:
//       console.log(
//         " :( There seems to be an issue with the Sound. Kindly reload page. "
//       );
//       break;
//   }
// }

// // STEP IV, (ADD VISUAL EFFECT TO BUTTON CLICK)**************

// function animatedPress(pressedkey) {
//   document.querySelector("." + pressedkey).classList.add("pressed");
//   setTimeout(() => {
//     document.querySelector("." + pressedkey).classList.remove("pressed");
//   }, 300);
// }

// // STEP V, (KEYBOARD PRESS FUNCTIONS)**************

// document.addEventListener(
//   "keydown",
//   function (event) {
//     nextSequence(event);
//   },
//   { once: true }
// );

// // STEP VI, (GAMER'S CHOICE Vs GAME PATTERN)**************
// function checkAnswer(currentlevel) {
//   if (
//     userClickedPattern[userClickedPattern.length - 1] ===
//     gamePattern[userClickedPattern.length - 1]
//   ) {
//     console.log("Success");
//   } else {
//     console.log(":( failed. Try again");
//   }
// }
