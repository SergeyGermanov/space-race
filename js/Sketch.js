let leftShip;
let rigthShip;

function setup() {
    createCanvas(400, 400);
    leftShip = new Ship(width * 0.33);
    rigthShip = new Ship(width * 0.66);
}

function draw() {
    background(0);

    leftShip.update();
    rigthShip.update();

    leftShip.display();
    rigthShip.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        rigthShip.isUp = true;
        rigthShip.isDown = false;
    } else if (keyCode === DOWN_ARROW) {
        rigthShip.isDown = true;
        rigthShip.isUp = false;
    }

    if (keyCode === 87) {
        leftShip.isUp = true;
        leftShip.isDown === false;
    } else if (keyCode === 83) {
        leftShip.isDown === true;
        leftShip.isUp = false;
    }
}

function keyReleased() {
    if (keyCode === UP_ARROW) {
        rigthShip.isUp = false;
    } else if (keyCode === DOWN_ARROW) {
        rigthShip.isDown === false;
    }

    if (keyCode === 87) {
        leftShip.isUp === false;
    } else if (keyCode === 83) {
        leftShip.isDown = false;
    }
}