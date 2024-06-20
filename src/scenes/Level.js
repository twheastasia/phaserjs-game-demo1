
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sky
		const sky = this.add.image(0, 0, "sky");
		sky.setOrigin(0, 0);

		// platform
		const platform = this.physics.add.image(0, 538, "platform");
		platform.scaleX = 2;
		platform.scaleY = 2;
		platform.setOrigin(0, 0);
		platform.body.setSize(400, 32, false);

		// platform_1
		const platform_1 = this.physics.add.image(66, 325, "platform");
		platform_1.body.setSize(400, 32, false);

		// platform_2
		const platform_2 = this.physics.add.image(598, 427, "platform");
		platform_2.body.setSize(400, 32, false);

		// platform_3
		const platform_3 = this.physics.add.image(713, 200, "platform");
		platform_3.body.setSize(400, 32, false);

		// player
		const player = this.physics.add.sprite(327, 433, "dude", 4);
		player.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 48), Phaser.Geom.Rectangle.Contains);
		player.body.velocity.x = 200;
		player.body.velocity.y = 200;
		player.body.gravity.x = 200;
		player.body.gravity.y = 200;
		player.body.bounce.x = 0.2;
		player.body.allowGravity = false;
		player.body.setSize(33, 50, false);

		// left
		const left = this.add.sprite(195, 417, "dude", 0);
		left.play("left");

		// right
		const right = this.add.sprite(377, 290, "dude", 5);
		right.play("right");

		// collider
		this.physics.add.collider();

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
