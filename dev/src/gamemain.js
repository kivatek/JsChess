enchant();

var core;
var gameGlobals = [];
var playRecords = [];
var updaterQueue = [];	// ゲーム全体のフレーム処理。末尾に追加、取り出すのは先頭から。

var squares = [];
var pieces = [];

// シーン全体の更新処理。
function updateStage() {
	if (updaterQueue.length > 0) {
		var updater = updaterQueue.shift();
		updater.proc(updater.args);
	}
}

// アプリのフレームメソッドで実行するprocを登録する。
function regUpdater(proc, args) {
	var updater = new Updater();
	if (updater != null) {
		updater.proc = proc;
		updater.args = args;
		updaterQueue.push(updater);
	}
}

// 指定したフレーム数を経過後にprocを実行する。
function regDelayedUpdater(delay, proc, args) {
	var igniter = new Entity();
	if (igniter) {
		procGroup.addChild(igniter);
		igniter.tl
			.delay(delay)
			.then(function() {
				procGroup.removeChild(igniter);
				regUpdater(proc, args);
			});
	}
}

function initGroup() {

	procGroup = new Group();
	core.currentScene.addChild(procGroup);

	background = new Group();
	core.currentScene.addChild(background);

	// 盤面以外のタッチ情報を拾うためのオブジェクト
	var bottom = new Bottom();
	background.addChild(bottom);

	// 盤面（枠部分）
	var frame = new Frame();
	background.addChild(frame);

	// 盤面
	var board = new Board();
	board.on('touchstart', onBoardTouched);
	background.addChild(board);

	// マスを光らせるオブジェクト
	squareEffectorGroup = new Group();
	core.currentScene.addChild(squareEffectorGroup);

	// ピース
	pieceGroup = new Group();
	core.currentScene.addChild(pieceGroup);

	// コンソール
	consoleGroup = new Group();
	core.currentScene.addChild(consoleGroup);
	
	markerGroup = new Group();
	consoleGroup.addChild(markerGroup);
}

// アプリケーション読み込み直後に行う処理
function onAppLoaded() {
	core.currentScene.backgroundColor = 'rgb(239, 228, 202)';

	playRecords.turn = 0;
	playRecords.side = SIDE_WHITE;

	initGroup();
	initBoard();

	regUpdater(PROC_BEGIN_STAGE, []);

	core.currentScene.addEventListener('enterframe', updateStage);
}

function initAppGlobals() {
	core.fps = FPS;
	core.touched = false;
	core.preload([
		'images/bottom.png'
		, 'images/board.png'
		, 'images/frame.png'
		, 'images/pieces.png'
		, 'images/squareeffector.png'
		, 'images/icons.png'
		, 'images/shadow.png'
		]);

	gameGlobals.phase = PHASE_NONE;

	core.onload = onAppLoaded;
}

window.onload = function() {
	core = new Core(SCREEN_WIDTH, SCREEN_HEIGHT);
	initAppGlobals();
	core.start();
};
