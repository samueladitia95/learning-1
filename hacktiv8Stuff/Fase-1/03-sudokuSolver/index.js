"use strict";

class Sudoku {
	constructor(boardString) {
		this._board = this.generateBoard(boardString);
	}

	get board() {
		return get._board;
	}

	generateBoard(boardString) {
		const result = [];
		let counter = 0;
		for (let i = 0; i < 9; i++) {
			const subResult = [];
			for (let j = 0; j < 9; j++) {
				subResult.push(Number(`${boardString[counter]}`));
				counter++;
			}
			result.push(subResult);
		}
		return result;
	}

	solve() {
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (this._board[i][j] === 0) {
					for (let k = 1; k <= 9; k++) {
						if (this.isValid(this._board, i, j, k)) {
							this._board[i][j] = k;

							this.displayBoard();
							this.sleep(1000)
							this.clearScreen();
							
							if (this.solve()) {
								return true;
							} else {
								this._board[i][j] = 0;
							}
						}
					}
					return false;
				}
			}
		}
		return true;
	}

	isValid(board, xCoordinate, yCoordinate, k) {
		for (let i = 0; i < 9; i++) {
			// detemine the 3x3 box
			const xBox = xCoordinate - xCoordinate % 3;
			const yBox = yCoordinate - yCoordinate % 3;
			if (board[xCoordinate][i] == k || board[i][yCoordinate] == k || board[xBox][yBox] == k) {
				return false;
			}
		}
		return true;
	}

	// Returns a string representing the current state of the board
	displayBoard() {
		for (let i = 0; i < 9; i++) {
			if (i % 3 === 0) {
				console.log("-------------");
			}
			let printed = "";
			for (let j = 0; j < 9; j++) {
				if (j % 3 === 0) {
					printed += `|${this._board[i][j]}`;
				} else {
					printed += this._board[i][j];
				}
			}
			printed += "|";
			console.log(printed);
		}
		console.log("-------------");
	}

	sleep(milliseconds) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if (new Date().getTime() - start > milliseconds) {
				break;
			}
		}
	}

	clearScreen() {
		console.clear();
	}
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
const fs = require("fs");
const { resourceUsage } = require("process");
const { get } = require("http");
var board_string = fs.readFileSync("set-01_sample.unsolved.txt").toString().split("\n")[0];

const game = new Sudoku(board_string);
// game.displayBoard();
game.solve();
console.log("****************************");
game.displayBoard();

// Remember: this will just fill out what it can and not "guess"
// game.solve()

// console.log(game.board())
