
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "dude", frame ?? 4);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 200;
		this.body.bounce.x = 0.2;
		this.body.bounce.y = 0.2;
		this.body.useDamping = true;
		this.body.collideWorldBounds = true;
		this.body.immovable = true;
		this.body.setSize(32, 48, false);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */

		// custom definition props
		this.action = "idle";
	}

	/* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
