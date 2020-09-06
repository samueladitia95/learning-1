"use strict";

const {AircraftCarrier, Battleship, Cruiser, Destroyer} = require("./enemy")

class BattleShipBoard {
	constructor() {
		this._board = this.generateBoard();
        this._hit = 0;
        this._enemyShotDowns = [];
	}

	get board() {
		return this._board;
	}

	generateBoard() {
		const result = [];
		for (let i = 0; i < 10; i++) {
			const subResult = [];
			for (let j = 0; j < 10; j++) {
				subResult.push(" ");
			}
			result.push(subResult);
		}
		this.generateEnemy(result);
		return result;
	}

	generateEnemy(board) {
		const enemies = [new AircraftCarrier(), new Battleship(), new Cruiser(), new Destroyer()];
		for (let i = 0; i < enemies.length; i++) {
			while (true) {
				// it's memory waste, but I have to do it, so it's easier to read
				// I wish javascript have pointer
				const xCoordinate = enemies[i].coordinate[0];
				const yCoordinate = enemies[i].coordinate[1];
				const size = enemies[i].size;
				const isHorizontal = enemies[i].isHorizontal;
				let isClear = true;

				// horizontal check
				if (isHorizontal && yCoordinate + size < 10) {
					for (let j = yCoordinate; j < yCoordinate + size; j++) {
						if (board[xCoordinate][j] !== " ") {
							isClear = false;
						}
					}
					// vertical check
				} else if (!isHorizontal && xCoordinate + size < 10) {
					for (let j = xCoordinate; j < xCoordinate + size; j++) {
						if (board[j][yCoordinate] !== " ") {
							isClear = false;
						}
					}
					// if out of bound of 10x10
				} else {
					isClear = false;
				}

				if (isClear) {
					// if enemy is horizontal
					if (isHorizontal) {
						for (let j = yCoordinate; j < yCoordinate + size; j++) {
							board[xCoordinate][j] = enemies[i].constructor.name[0];
						}
						// if enemy if vertical
					} else {
						for (let j = xCoordinate; j < xCoordinate + size; j++) {
							board[j][yCoordinate] = enemies[i].constructor.name[0];
						}
					}
					break;
					// if place is not clear, reassign coordinate
				} else {
					enemies[i].coordinate = enemies[i].setCoordinate();
					enemies[i].isHorizontal = enemies[i].setOrientation();
				}
			}
		}
	}

	fireShot(shots) {
		const dictionary = "ABCDEFGHIJ";
        OUTERLOOP: 
        for (let i = 0; i < shots.length; i++) {
            // translate coordinate to array coordinate
			const shotCoordinate = [0, Number(shots[i].slice(1) - 1)];
			for (let j = 0; j < dictionary.length; j++) {
				if (dictionary[j] === shots[i][0]) {
					shotCoordinate[0] = j;
					break;
				}
            }

            // if shot hit enemy
			if (this._board[shotCoordinate[0]][shotCoordinate[1]] !== " ") {
                this._board[shotCoordinate[0]][shotCoordinate[1]] = `X`;
                this._hit++;
                // check if enemy already hit before
				for (let j = 0; j < this._enemyShotDowns.length; j++) {
					if (this._enemyShotDowns[i] === this._board[shotCoordinate[0]][shotCoordinate[1]]) {
						continue OUTERLOOP;
					}
				}
				this._enemyShotDowns.push(this._board[shotCoordinate[0]][shotCoordinate[1]]);
			} else {
                // log shot
				this._board[shotCoordinate[0]][shotCoordinate[1]] = `O`;
			}
		}
    }

    displayBoard() {
        console.log("     A   B   C   D   E   F   G   H   I   J  ");
        console.log("   +---------------------------------------+");
        for (let i = 0; i < this._board.length; i++) {
            let printed = "";
            if (i < 9) {
                printed += ` ${i + 1} |`;
            } else {
                printed += `${i + 1} |`;
            }
            
            for (let j = 0; j < this._board[i].length; j++) {
                printed += ` ${this._board[i][j]} |`
            }
            console.log(printed);
            console.log("   |---|---|---|---|---|---|---|---|---|---|");
        }
    }
    
    displayResult() {
        console.log(`Total Enemy Killed: ${this._enemyShotDowns.length}\nTotal hits: ${this._hit}`);
    }
}

let test = new BattleShipBoard();
test.displayBoard()
console.log("-------------------------------------------------------")

// input from console
const input = process.argv.slice(2);
test.fireShot(input)

// display end game
test.displayBoard()
test.displayResult();
