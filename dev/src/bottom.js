// Bottomスプライト
Bottom = Class.create(Sprite, {
	initialize: function() {
		Sprite.call(this, MASK_WIDTH, MASK_HEIGHT);
		this.image = core.assets['images/bottom.png'];
		this.visible = false;
		this.scaleX = SCREEN_WIDTH / MASK_WIDTH;
		this.scaleY = SCREEN_HEIGHT / MASK_HEIGHT;
		this.originX = 0;
		this.originY = 0;
		this.on('touchstart', function(event) {
			newCancelMarker(event.x, event.y);
		});
	}
});
