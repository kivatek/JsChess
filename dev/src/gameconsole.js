//## アイコンスプライト
var Icon = Class.create(Sprite, {
	initialize: function() {
		Sprite.call(this, ICON_WIDTH, ICON_HEIGHT);
		this.image = core.assets['images/icons.png'];
		this.frame = 0;
	}
});

// タッチ操作がキャンセルされたことを表すマーカーを生成する。
function newCancelMarker(x, y) {
	var marker = new Icon();
	if (marker) {
		marker.touchEnabled = false;
		marker.frame = 0;
		marker.x = x - (ICON_WIDTH / 2);
		marker.y = y - (ICON_HEIGHT / 2);
		marker.scaleX = 1;
		marker.scaleY = 1;
		// Timelineを使用してアニメーションを行う。
		marker.tl
			.scaleTo(0.2, 0.2, FRAME_FADE_NOACTION)
			.and()
			.fadeTo(0.2, FRAME_FADE_NOACTION, enchant.Easing.LENEAR)
			.then(function() {
				markerGroup.removeChild(marker);
			});
		markerGroup.addChild(marker);
	}
}

//## スクリーンマスク
var Mask = Class.create(Sprite, {
	initialize: function() {
		Sprite.call(this, MASK_WIDTH, MASK_HEIGHT);
		this.image = core.assets['images/shadow.png'];
		this.frame = 0;
	}
});

// 画面全体を暗く表示するマスクオブジェクトを生成
function makeScreenMask() {
	var rect = new Mask();
	rect.touchEnabled = false;
	rect.x = 0;
	rect.y = 0;
	rect.originX = 0;
	rect.originY = 0;
	rect.scaleX = SCREEN_WIDTH / MASK_WIDTH;
	rect.scaleY = SCREEN_HEIGHT / MASK_HEIGHT;
	rect.opacity = 0.25;
	return rect;
}

