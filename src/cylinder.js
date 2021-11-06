class Cylinder {
    constructor(image, x, width, height) {
        this.image = image;
        this.x = x;
        this.y = 0;
        this.width = width;
        this.height = height;
    }

    draw() {
        image(this.image,
            this.translateToBackgroundXCoordinates(this.x),
            this.y + HEIGHT - this.height - 42,
            this.width,
            this.height);
    }

    collision(playerInfo) {
        const playerX = playerInfo.x + playerInfo.width / 2
        const playerY = playerInfo.y + playerInfo.height / 2
        const cylinderX = this.translateToBackgroundXCoordinates(this.x)
        const cylinderY = this.y

        if (!(dist(playerX, playerY, cylinderX, cylinderY) > 25)) {
            game.background.stop();
        }
    }


    translateToBackgroundXCoordinates(x) {
        return this.x + game.background.x;
    }
}