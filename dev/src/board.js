var tags_ = [];

// Boardスプライト
var Board = Class.create(Sprite, {
	initialize: function() {
		Sprite.call(this, BOARD_IMAGE_WIDTH, BOARD_IMAGE_HEIGHT);
		this.image = core.assets['images/board.png'];
		this.x = BOARD_X;
		this.y = BOARD_Y;
	}
});

// Frameスプライト
var Frame = Class.create(Sprite, {
	initialize: function() {
		Sprite.call(this, FRAME_IMAGE_WIDTH, FRAME_IMAGE_HEIGHT);
		this.image = core.assets['images/frame.png'];
		this.touchEnabled = false;
		this.x = FRAME_X;
		this.y = FRAME_Y;
	}
});

// 有効なCell座標かどうかを判定する。
function isAvailableSquare(col, row) {
	return (0 <= col) && (col < COL_FIELD) && (0 <= row) && (row < (ROW_FIELD));
}

// Squareのタグを生成する。
function makeSquareTag(col, row) {
	var tag = 'SQUARE_';
	if (col < 10) {
		tag += '0';
	}
	tag += col;
	if (row < 10) {
		tag += '0';
	}
	tag += row;
	return tag;
}

// 指定されたSquare座標のタグを返す。
function getSquareTag(col, row) {
	if (isAvailableSquare(col, row)) {
		return tags_[(row * COL_FIELD) + col];
	}
	return null;
}

// Square座標から表示x座標を算出する。
function squareX(col, row) {
	return BOARD_X + (col * SQUARE_WIDTH);
}

// Square座標から表示y座標を算出する。
function squareY(col, row) {
	return BOARD_Y + (row * SQUARE_HEIGHT);
}

function indexToX(index) {
	return squareX(FLOOR(index % COL_FIELD), FLOOR(index / COL_FIELD));
}

function indexToY(index) {
	return squareY(FLOOR(index % COL_FIELD), FLOOR(index / COL_FIELD));
}

function boardXToCol(x)
{
	return FLOOR(x / SQUARE_WIDTH);
}

function boardYToRow(y)
{
	return FLOOR(y / SQUARE_HEIGHT);
}

function initBoard() {
	for (var n = 0; n < COL_FIELD * ROW_FIELD; n++) {
		var col = FLOOR(n % COL_FIELD);
		var row = FLOOR(n / COL_FIELD);
		if (isAvailableSquare(col, row)) {
			tags_[n] = makeSquareTag(col, row);
		}
	}
}

