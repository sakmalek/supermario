const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    game.setup();
}


function draw() {
    game.draw();


    if (keyIsDown(LEFT_ARROW)) game.background.moveLeft();
    if (keyIsDown(RIGHT_ARROW)) game.background.moveRight();
}

function keyPressed() {
    if (keyCode === 32) {
        game.mario.jump()
    }
}