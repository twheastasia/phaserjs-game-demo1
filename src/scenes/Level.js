
// You can write more code here
// import PlayerPrefab from "./src/scenes/PlayerPrefab.js";
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
		const platform = this.physics.add.staticImage(0, 538, "platform");
		platform.scaleX = 2;
		platform.scaleY = 2;
		platform.setOrigin(0, 0);
		platform.body.setSize(400, 32, false);

		// platform_1
		const platform_1 = this.physics.add.staticImage(66, 325, "platform");
		platform_1.body.setSize(400, 32, false);

		// platform_2
		const platform_2 = this.physics.add.staticImage(598, 427, "platform");
		platform_2.body.setSize(400, 32, false);

		// platform_3
		const platform_3 = this.physics.add.staticImage(713, 200, "platform");
		platform_3.body.setSize(400, 32, false);

		// player
		const player = this.physics.add.sprite(327, 433, "dude", 4);
		player.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 48), Phaser.Geom.Rectangle.Contains);
		player.body.velocity.y = 200;
		player.body.gravity.y = 200;
		player.body.bounce.x = 0.2;
		player.body.bounce.y = 0.2;
		player.body.useDamping = true;
		player.body.allowRotation = false;
		player.body.collideWorldBounds = true;
		player.body.immovable = true;
		player.body.setSize(33, 50, false);

		// left
		const left = this.add.sprite(201, 417, "dude", 0);
		left.play("left");

		// right
		const right = this.add.sprite(377, 290, "dude", 5);
		right.play("right");

		// playerPrefab
		// const playerPrefab = new PlayerPrefab(this, 282, 408);
		// this.add.existing(playerPrefab);

		// collider
		this.physics.add.collider(player, platform_1);

		// collider_1
		this.physics.add.collider(player, platform);

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
