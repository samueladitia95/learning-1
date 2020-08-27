const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const humanScore = document.getElementById("score-human");
const compScore = document.getElementById("score-computer");
const winMoveSpan = document.getElementById("win-move");
const lostMoveSpan = document.getElementById("lost-move");
const resultSpan = document.getElementById("result");
const resultH1 = document.getElementById("result-text");
const resultDescription = document.getElementById("result-description");
// const moveRing = document.getElementsByClassName("player-choice");

console.log(humanScore);
console.log(compScore);

function game(userInput) {
	const compInput = Math.floor(Math.random() * 3);
	// console.log(compInput)
	if (
		(userInput === 0 && compInput === 2) ||
		(userInput === 1 && compInput === 0) ||
		(userInput === 2 && compInput === 1)
	) {
		win(userInput, compInput);
	} else if (
		(userInput === 0 && compInput === 1) ||
		(userInput === 1 && compInput === 2) ||
		(userInput === 2 && compInput === 0)
	) {
		lose(userInput, compInput);
	} else {
		draw(userInput);
	}
}

function win(userMove, compMove) {
	showResult(userMove, compMove, " You Win!");
	humanScore.textContent = (Number(humanScore.textContent) + 1).toString();
	animationSelector(userMove, "green-border");
}

function lose(userMove, compMove) {
	showResult(compMove, userMove, " You Lost!");
	compScore.textContent = (Number(compScore.textContent) + 1).toString();
	animationSelector(userMove, "red-border");
}

function draw(userMove) {
	winMoveSpan.textContent = "";
	lostMoveSpan.textContent = "";
	resultSpan.textContent = "";
	resultDescription.textContent = " It's a Draw! ";
	animationSelector(userMove, "grey-border");
}

function animationSelector(userMove, classChoice) {
	switch (userMove) {
		case 0:
			animationChange("rock", classChoice);
			break;
		case 1:
			animationChange("paper", classChoice);
			break;
		case 2:
			animationChange("scissors", classChoice);
			break;
	}
}

function animationChange(x, y) {
	document.getElementById(x).classList.add(y);
	setTimeout(function () {
		document.getElementById(x).classList.remove(y);
	}, 300);
}

function showResult(winMove, lostMove, winner) {
	winMoveSpan.textContent = numToMove(winMove);
	lostMoveSpan.textContent = numToMove(lostMove) + ",";
	resultSpan.textContent = winner;
	resultDescription.textContent = " beat ";
}

function numToMove(num) {
	switch (num) {
		case 0:
			return "Rock";
		case 1:
			return "Paper";
		case 2:
			return "Scissors";
	}
}

rock.addEventListener("click", function () {
	game(0);
});

paper.addEventListener("click", function () {
	game(1);
});

scissors.addEventListener("click", function () {
	game(2);
});
