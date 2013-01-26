var Piece = Class.create(Sprite, {
	initialize: function() {
		Sprite.call(this, SQUARE_WIDTH, SQUARE_HEIGHT);
		this.image = core.assets['images/pieces.png'];
		this.frameTop = 0;
		this.col = 0;
		this.row = 0;
		this.side = SIDE_WHITE;
		this.type = 0;
	},
	side: {
		get: function() {
			return this._side;
		},
		set: function(side) {
			this._side = side;
			if (side == SIDE_WHITE) {
				this.frameTop = 0;
			} else {
				this.frameTop = MAX_PIECE_TYPE;
			}
		}
	},
	type: {
		get: function() {
			return this._type;
		},
		set: function(type) {
			this._type = type;
			this.frame = this.frameTop + type;
		}
	},
	col: {
		get: function() {
			return this._col;
		},
		set: function(col) {
			this._col = col;
			this.x = squareX(col);
		}
	},
	row: {
		get: function() {
			return this._row;
		},
		set: function(row) {
			this._row = row;
			this.y = squareY(row);
		}
	}
});

function obtainPieceWithProperties(side, type) {
	var sprite = new Piece();
	sprite.side = side;
	sprite.type = type;
	return sprite;
}

