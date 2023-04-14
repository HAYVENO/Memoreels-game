// STEP I (INITIATE VARIABLE VALUES)**************

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// STEP II, AI MOVE FUNCTION **************
function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);

	$("#" + gamePattern[gamePattern.length - 1])
		.fadeOut(100)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);

	getSound(gamePattern[gamePattern.length - 1]);

	level++;
	$("h2").text("level " + level);
}

// SOUND FX FUNCTION **************
function getSound(e) {
	switch (e) {
		case "green":
			var greenSound = new Audio("sounds/green.mp3");
			greenSound.play();
			break;

		case "red":
			var redSound = new Audio("sounds/red.mp3");
			redSound.play();
			break;

		case "yellow":
			var yellowSound = new Audio("sounds/yellow.mp3");
			yellowSound.play();
			break;

		case "blue":
			var blueSound = new Audio("sounds/blue.mp3");
			blueSound.play();
			break;

		default:
			console.log(" :( There seems to be an issue with the Sound. Kindly reload page. ");
			break;
	}
}

// STEP III, LISTEN FOR BUTTON CLICKS AND REACT**************

$(".btn").on("click", function () {
	var userChosenColour = this.id;
	getSound(userChosenColour);
	userClickedPattern.push(userChosenColour);
	animatedPress(userChosenColour);
	checkAnswer(userClickedPattern.length - 1);
});

// STEP IV, (ADD VISUAL EFFECT TO BUTTON CLICK)**************

function animatedPress(pressedkey) {
	document.querySelector("." + pressedkey).classList.add("pressed");
	setTimeout(() => {
		document.querySelector("." + pressedkey).classList.remove("pressed");
	}, 300);
}

// FEATURE: PRESS ANY KEY TO BEGIN **************

document.addEventListener("keydown", function () {
	if (level == 0) {
		nextSequence();
	}
});
// FOR MOBILE - TAP THE SCREEN TO BEGIN
document.addEventListener("touchstart", function () {
	if (level == 0) {
		nextSequence();
	}
});

// STEP V, (GAMER'S CHOICE Vs GAME PATTERN)**************
function checkAnswer(currentlevel) {
	if (
		userClickedPattern[userClickedPattern.length - 1] ===
			gamePattern[userClickedPattern.length - 1] &&
		userClickedPattern.length === gamePattern.length
	) {
		console.log("Success");
		setTimeout(function () {
			userClickedPattern.length = 0;
			nextSequence();
		}, 1000);
	} else if (
		userClickedPattern[userClickedPattern.length - 1] !==
		gamePattern[userClickedPattern.length - 1]
		// &&userClickedPattern.length !== gamePattern.length
	) {
		console.log(":( failed. Try again");

		var wrongSound = new Audio("sounds/wrong.mp3");
		wrongSound.play();
		document.querySelector("body").classList.add("game-over");
		document.querySelector(
			"h2"
		).innerHTML = `:( OOPS! WRONG BUTTON. <br> GAME OVER AT <em>LEVEL ${level}</em>`;

		setTimeout(() => {
			document.querySelector("body").classList.remove("game-over");
			document.querySelector("h2").innerHTML = "PRESS ANY KEY TO BEGIN A NEW GAME";

			startOver();
		}, 4000);
	}
}

// STEP VI, (GAMER'S CHOICE Vs GAME PATTERN)**************
function startOver() {
	// window.location.reload();
	level = 0;
	gamePattern.length = 0;
	userClickedPattern.length = 0;
}

$(".btn").on("click", function (event) {
	event.preventDefault();
});
