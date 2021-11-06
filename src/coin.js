class Coin {
    constructor(image, x, width, height) {
        this.image = image
        this.x = x
        this.y = HEIGHT / 2
        this.width = width
        this.height = height
    }

    draw() {
        image(this.image, this.translateToBackgroundXCoordinates(this.x), this.y, this.width, this.height)
    }

    collision(playerInfo) {
        const playerX = playerInfo.x + playerInfo.width / 2
        const playerY = playerInfo.y + playerInfo.height / 2
        const coinX = this.translateToBackgroundXCoordinates(this.x) + this.width / 2
        const coinY = this.y + this.height / 2

        if (!(dist(playerX, playerY, coinX, coinY) > 25)) {
            game.mario.score++;
            document.querySelector('#score > span').innerText = game.mario.score++;
            return true;
        } else {
            return false;
        }
    }

    translateToBackgroundXCoordinates(x) {
        return this.x + game.background.x;
    }
}