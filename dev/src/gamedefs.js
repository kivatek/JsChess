var SOUND_ON	= false;

// フレームレート
var FPS	= 24;

// 画面サイズ
var SCREEN_WIDTH	= 320;
var SCREEN_HEIGHT	= 320;

// グリッドのマス数
var COL_FIELD	= 8;
var ROW_FIELD	= 8;

var SIDE_WHITE	= 0;
var SIDE_BLACK	= 1;
var MAX_PIECE_TYPE	= 6;

var FRAME_IMAGE_WIDTH	= 288;
var FRAME_IMAGE_HEIGHT	= 288;
var FRAME_X	= (SCREEN_WIDTH - FRAME_IMAGE_WIDTH) / 2;
var FRAME_Y	= (SCREEN_HEIGHT - FRAME_IMAGE_HEIGHT) / 2;

var BOARD_IMAGE_WIDTH	= 256;
var BOARD_IMAGE_HEIGHT	= 256;
var BOARD_X	= FRAME_X + (FRAME_IMAGE_WIDTH-BOARD_IMAGE_WIDTH)/2;
var BOARD_Y	= FRAME_Y + (FRAME_IMAGE_HEIGHT-BOARD_IMAGE_HEIGHT)/2;

// マスのサイズ
var SQUARE_WIDTH	= 32;
var SQUARE_HEIGHT	= 32;

var FRAME_FADE_SQUAREEFFECTOR	= 12;

var PIECE_TYPE_PAWN		= 0;
var PIECE_TYPE_KNIGHT	= 1;
var PIECE_TYPE_BISHOP	= 2;
var PIECE_TYPE_ROOK		= 3;
var PIECE_TYPE_QUEEN	= 4;
var PIECE_TYPE_KING		= 5;

// 20pxサイズのアイコン
var ICON_WIDTH	= 20;
var ICON_HEIGHT	= 20;

// ×印の消滅にかけるフレーム数
var FRAME_FADE_NOACTION	= 20;

// ラベル（Scoreなど）
var LABEL_WIDTH		= 80;
var LABEL_HEIGHT	= 24;

// スクリーンマスク
var MASK_WIDTH	= 16;
var MASK_HEIGHT	= 16;

// 実行しているアクションを表す定数
var PHASE_NONE = 0;
var PHASE_PLAYING = 1;


// 数学系メソッドの別名
var ABS = Math.abs;
var CEIL = Math.ceil;
var COS = Math.cos;
var FLOOR = Math.floor;
var MAX = Math.max;
var MIN = Math.min;
var RANDOM = Math.random;
var SQRT = Math.sqrt;
var M_PI = Math.PI;
