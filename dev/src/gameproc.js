// 盤面がタッチされたときのハンドラ
function onBoardTouched(event) {
	var col = boardXToCol(event.localX);
	var row = boardYToRow(event.localY);
//	console.log('COL:'+col+', ROW:'+row);

	var tag = getSquareTag(col, row);
//	console.log(tag);

	var sprite = new SquareEffector();
	if (sprite) {
		sprite.touchEnabled = false;
		sprite.x = BOARD_X + (SQUARE_WIDTH * col);
		sprite.y = BOARD_Y + (SQUARE_HEIGHT * row);
		sprite.tl
			.fadeTo(0.0, FRAME_FADE_SQUAREEFFECTOR, enchant.Easing.LENEAR)
			.then(function() {
				squareEffectorGroup.removeChild(sprite);
			});
		squareEffectorGroup.addChild(sprite);
	}
}

function onPieceTouched(event) {
}

function PROC_BEGIN_STAGE(args) {
	// ステージ開始時毎に行う処理をここで行う。
	
	// Kingの表示テスト
	var white = obtainPieceWithProperties(SIDE_WHITE, 5);
	white.col = 3;
	white.row = 3;
	white.on('touchstart', onPieceTouched);
	pieceGroup.addChild(white);

	var black = obtainPieceWithProperties(SIDE_BLACK, 5);
	black.col = 4;
	black.row = 3;
	black.on('touchstart', onPieceTouched);
	pieceGroup.addChild(black);

	gameGlobals.phase = PHASE_PLAYING;
}

// タッチ入力の評価
function PROC_VALIDATE_PIECE(args) {
}

function PROC_VALIDATE_SQUARE(args) {
}

