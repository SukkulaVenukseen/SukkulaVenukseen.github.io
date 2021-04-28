console.log("app.js starting");

const config = {
    BUBBLE_MAX_SPEED: 8,
};

this.config = config;
this.nbrOfBubbles = config.BUBBLE_AMOUNT;
this.maxSpeed = config.BUBBLE_MAX_SPEED;

function getValue() {
    // Function for getting the right number of the clicked bubble
    var value = this.dataset.value;
    console.log("Bubble number " + value + ".");
}
const numbers = document.querySelectorAll('.bubble-item');
numbers.forEach(button => button.addEventListener('click', getValue, false));

function getRandomSpeed() {
    // Setting random speed for bubbles
    return Math.floor(Math.random() * maxSpeed) + 1;
}

let area = {
    // Setting up the bubble-area
    element: document.getElementById("bubble-container"),
    width: document.getElementById("bubble-container").offsetWidth,
    height: document.getElementById("bubble-container").offsetHeight
};

var bodyWidth = document.getElementById("body").offsetWidth;
var space = bodyWidth - area.width;

let bubble = {  
    // Bubble configurations
    
    add: function(dx, dy) {
        // Setting up properties of the new bubbles
        let newBubble = Object.create(this);
        newBubble.dx = dx;
        newBubble.dy = dy;
        newBubble.radius = 20;
        newBubble.element = document.getElementById("bubble");
        area.element.appendChild(newBubble.element);
        return newBubble;
    },
    start: function (x, y) {
        // base starting point of the bubbles w/o modifiers
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
    },
    collision: function (x, y) {
        // Bouncing of the bubble when they hit the walls of the container
        if (x + this.dx > bodyWidth - space / 2 - this.radius * 2 || x + this.dx - space / 2 + this.radius < this.radius) {
            this.dx = -this.dx;
        }
        if (y + this.dy > (area.height + 85) - this.radius || y + this.dy + (area.height - 385) < this.radius) {
            this.dy = -this.dy;
        }
    },
    draw: function (x, y) {
        // Drawing the bubbles
        this.start(x, y);
        let bubbleObj = this;
        setTimeout (function () {
            bubbleObj.collision(x, y);
            bubbleObj.draw(x + bubbleObj.dx, y + bubbleObj.dy);
        }, 1000 / 60);
    }
};

let bubble1 = bubble.add(getRandomSpeed(maxSpeed), getRandomSpd(maxSpeed));
let bubble2 = bubble.add(getRandomSpeed(maxSpeed), getRandomSpd(maxSpeed));
let bubble3 = bubble.add(getRandomSpeed(maxSpeed), getRandomSpd(maxSpeed));
let bubble4 = bubble.add(getRandomSpeed(maxSpeed), getRandomSpd(maxSpeed));
let bubble5 = bubble.add(getRandomSpeed(maxSpeed), getRandomSpd(maxSpeed));
let bubble6 = bubble.add(getRandomSpeed(maxSpeed), getRandomSpd(maxSpeed));
let bubble7 = bubble.add(getRandomSpeed(maxSpeed), getRandomSpd(maxSpeed));
let bubble8 = bubble.add(getRandomSpeed(maxSpeed), getRandomSpd(maxSpeed));
let bubble9 = bubble.add(getRandomSpeed(maxSpeed), getRandomSpd(maxSpeed));
let bubble10 = bubble.add(getRandomSpeed(maxSpeed), getRandomSpd(maxSpeed));

bubble1.draw((area.width / 2), Math.floor(Math.random() * 2) + 150);
bubble2.draw((area.width / 2), Math.floor(Math.random() * 2) + 150);
bubble3.draw((area.width / 2), Math.floor(Math.random() * 2) + 150);
bubble4.draw((area.width / 2), Math.floor(Math.random() * 2) + 150);
bubble5.draw((area.width / 2), Math.floor(Math.random() * 2) + 150);
bubble6.draw((area.width / 2), Math.floor(Math.random() * 2) + 150);
bubble7.draw((area.width / 2), Math.floor(Math.random() * 2) + 150);
bubble8.draw((area.width / 2), Math.floor(Math.random() * 2) + 150);
bubble9.draw((area.width / 2), Math.floor(Math.random() * 2) + 150);
bubble10.draw((area.width / 2), Math.floor(Math.random() * 2) + 150);
