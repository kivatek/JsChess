var SquareEffector = Class.create(Sprite, {
	initialize: function() {
		Sprite.call(this, SQUARE_WIDTH, SQUARE_HEIGHT);
		this.image = core.assets['images/squareeffector.png'];
		this.touchEnabled = false;
	}
});

