class Enemy {
	constructor(size) {
		this._size = size;
		this._coordinate = this.setCoordinate();
		this._isHorizontal = this.setOrientation();
	}

	get size() {
		return this._size;
	}

	get coordinate() {
		return this._coordinate;
	}

	get isHorizontal() {
		return this._isHorizontal;
	}

	set coordinate(input) {
		this._coordinate = input;
	}

	set isHorizontal(input) {
		this._isHorizontal = input;
	}

	setCoordinate() {
		const result = [0, 0];
		for (let i = 0; i < result.length; i++) {
			result[i] = Math.floor(Math.random() * 10);
		}
		return result;
	}

	setOrientation() {
		return Math.floor(Math.random() * 2) ? true : false;
	}
}

class AircraftCarrier extends Enemy {
	constructor() {
		super(5);
	}
}

class Battleship extends Enemy {
	constructor() {
		super(4);
	}
}

class Cruiser extends Enemy {
	constructor() {
		super(3);
	}
}

class Destroyer extends Enemy {
	constructor() {
		super(2);
	}
}

module.exports = {
    AircraftCarrier,
    Battleship,
    Cruiser,
    Destroyer,
}