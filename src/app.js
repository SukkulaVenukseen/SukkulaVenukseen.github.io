console.log("app.js starting");

const config = {
    BUBBLE_MAX_SPEED: 8,
};

this.config = config;
this.nbrOfBubbles = config.BUBBLE_AMOUNT;
this.maxSpd = config.BUBBLE_MAX_SPEED;

function getNumber() {
    var id = this.dataset.value;
    console.log("Bubble number " + id + ".");
}
const buttons = document.querySelectorAll('.bubble-item');
buttons.forEach(button => button.addEventListener('click', getNumber, false));

function getRandomSpd() {
    return Math.floor(Math.random() * maxSpd) + 1;
}

let bg = {
    element: document.getElementById("bubble-container"),
    width: document.getElementById("bubble-container").offsetWidth,
    height: document.getElementById("bubble-container").offsetHeight
};

var widthBody = document.getElementById("body").offsetWidth;
var wSpace = widthBody - bg.width;

let bubble = {   
    add: function(dx, dy) {
        let newBubble = Object.create(this);
        newBubble.dx = dx;
        newBubble.dy = dy;
        newBubble.radius = 20;
        newBubble.element = document.getElementById("bubble");
        bg.element.appendChild(newBubble.element);
        return newBubble;
    },

    initialize: function (x, y) {
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
    },

    collision: function (x, y) {
        if (x + this.dx > widthBody - wSpace / 2 - this.radius * 2 || x + this.dx - wSpace / 2 + this.radius < this.radius) {
            this.dx = -this.dx;
        }
        if (y + this.dy > (bg.height + 85) - this.radius || y + this.dy + (bg.height - 385) < this.radius) {
            this.dy = -this.dy;
        }
    },

    draw: function (x, y) {
        this.initialize(x, y);
        let bubbleObj = this;
        setTimeout (function () {
            bubbleObj.collision(x, y);
            bubbleObj.draw(x + bubbleObj.dx, y + bubbleObj.dy);
        }, 1000 / 60);
    }
};

let bubble1 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble2 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble3 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble4 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble5 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble6 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble7 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble8 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble9 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));
let bubble10 = bubble.add(getRandomSpd(maxSpd), getRandomSpd(maxSpd));

bubble1.draw((bg.width / 2), Math.floor(Math.random() * 2) + 150);
bubble2.draw((bg.width / 2), Math.floor(Math.random() * 2) + 150);
bubble3.draw((bg.width / 2), Math.floor(Math.random() * 2) + 150);
bubble4.draw((bg.width / 2), Math.floor(Math.random() * 2) + 150);
bubble5.draw((bg.width / 2), Math.floor(Math.random() * 2) + 150);
bubble6.draw((bg.width / 2), Math.floor(Math.random() * 2) + 150);
bubble7.draw((bg.width / 2), Math.floor(Math.random() * 2) + 150);
bubble8.draw((bg.width / 2), Math.floor(Math.random() * 2) + 150);
bubble9.draw((bg.width / 2), Math.floor(Math.random() * 2) + 150);
bubble10.draw((bg.width / 2), Math.floor(Math.random() * 2) + 150);