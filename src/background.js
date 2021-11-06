class Background {

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    draw() {
        image(game.backgroundImage, this.x, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
    }

    moveRight() {
        if (-this.x < (IMAGE_WIDTH - WIDTH)) this.x -= 30;
        game.mario.image = game.marioImageR;
    }

    moveLeft() {
        if (-this.x > 0) this.x += 30;
        game.mario.image = game.marioImageL;
    }
    stop() {
        this.x = this.x
    }
}