
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
		const platform = this.add.sprite(0, 538, "platform");
		platform.scaleX = 2;
		platform.scaleY = 2;
		platform.setOrigin(0, 0);

		// platform_1
		this.add.sprite(66, 325, "platform");

		// platform_2
		this.add.sprite(598, 427, "platform");

		// platform_3
		this.add.sprite(713, 200, "platform");

		// turn
		const turn = this.add.sprite(327, 433, "dude", 4);
		turn.play("turn");

		// left
		const left = this.add.sprite(195, 417, "dude", 0);
		left.play("left");

		// right
		const right = this.add.sprite(377, 290, "dude", 5);
		right.play("right");

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
