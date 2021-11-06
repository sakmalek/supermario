class Game {

    constructor() {
        this.backgroundImage
        this.coinImage
    }

    setup() {
        this.background = new Background();
        this.mario = new Mario();
        this.cylinders = [];
        this.coins = [];

        this.marioSong = new Audio('assets/audios/mario.mp3');
        this.marioGameOverSong = new Audio('assets/audios/game-over.mp3');
        this.marioJumpSong = new Audio('assets/audios/mario-jump.mp3');

        this.fillWithCylinders();
        this.fillWithCoins();
    }

    preload() {
        this.backgroundImage = loadImage('assets/images/bg-image.png');
        this.marioImageR = loadImage('assets/images/mario_r.png');
        this.marioImageL = loadImage('assets/images/mario_l.png');
        this.coinImage = loadImage('assets/images/coin.gif');
        this.cylinderImage = loadImage('assets/images/cylinder.png');

        this.cylinderInfos = [
            {x: 1340, width: 60, height: 50},
            {x: 1820, width: 60, height: 80},
            {x: 2190, width: 60, height: 70},
            {x: 2710, width: 60, height: 60},
            {x: 7720, width: 60, height: 70},
            {x: 8480, width: 60, height: 70},
        ];

        this.coinInfos = [

            {x: 2000, width: 50, height: 50},
            {x: 2060, width: 50, height: 50},
            {x: 2120, width: 50, height: 50},
            {x: 2180, width: 50, height: 50},
            {x: 2240, width: 50, height: 50},

            {x: 3000, width: 50, height: 50},
            {x: 3060, width: 50, height: 50},
            {x: 3120, width: 50, height: 50},
            {x: 3180, width: 50, height: 50},
            {x: 3240, width: 50, height: 50},

            {x: 4000, width: 50, height: 50},
            {x: 4060, width: 50, height: 50},
            {x: 4120, width: 50, height: 50},
            {x: 4180, width: 50, height: 50},
            {x: 4240, width: 50, height: 50},

            {x: 5000, width: 50, height: 50},
            {x: 5060, width: 50, height: 50},
            {x: 5120, width: 50, height: 50},
            {x: 5180, width: 50, height: 50},
            {x: 5240, width: 50, height: 50},

            {x: 6000, width: 50, height: 50},
            {x: 6060, width: 50, height: 50},
            {x: 6120, width: 50, height: 50},
            {x: 6180, width: 50, height: 50},
            {x: 6240, width: 50, height: 50},

            {x: 7720, width: 50, height: 50},
            {x: 7780, width: 50, height: 50},
            {x: 7840, width: 50, height: 50},
            {x: 7900, width: 50, height: 50},
            {x: 7960, width: 50, height: 50},
            {x: 8020, width: 50, height: 50},
            {x: 8080, width: 50, height: 50},
        ];

    }

    draw() {
        //this.marioSong.play();
        clear();
        this.background.draw();
        this.drawCylinders();
        this.drawCoins();
        this.mario.draw();
    }


    drawCoins() {
        this.coins.forEach(function (coin) {
            coin.draw();
        })
        this.coins = this.coins.filter(coin => {
            return !(coin.collision(this.mario) || coin.x < 0 - coin.width);
        })
    }

    drawCylinders() {
        this.cylinders.forEach(function (cylinder) {
            cylinder.draw();
        })
        for(let cylinder of this.cylinders) {
            cylinder.collision(this.mario);
        }

    }

    fillWithCylinders() {
        for (let cylinder of this.cylinderInfos) {
            this.cylinders.push(new Cylinder(this.cylinderImage, cylinder.x, cylinder.width, cylinder.height));
        }
    }

    fillWithCoins() {
        for (let coin of this.coinInfos) {
            this.coins.push(new Coin(this.coinImage, coin.x, coin.width, coin.height));
        }
    }

}