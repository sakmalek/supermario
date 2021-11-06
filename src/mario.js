class Mario {
    constructor() {
        this.score = 0;
        this.velocity = 0;
        this.gravity = 0.2;
        this.width = 50;
        this.height = 70;
        this.x = WIDTH / 2;
        this.y = this.height;
        this.image = game.marioImageR;
        this.canJump = true;
    }

    draw() {
        this.velocity += this.gravity
        this.y += this.velocity

        if (this.y >= HEIGHT - this.height - 40) {
            this.y = HEIGHT - this.height - 40
            this.canJump = true;
        }

        image(this.image, this.x, this.y, this.width, this.height)
    }

    jump() {

        if (this.canJump) {
            this.velocity = -7
            this.canJump = !this.canJump;
        }
    }


}

