function Square(length) {
    this.length = length;
    this.result = 0;

    this.area = function () {
        this.result = (this.length * this.length);
    }
    this.showArea = function () {
        prompt("Square area = " + this.result);
    }
}

function Circle(radius) {
    this.radius = radius;
    this.result = 0;

    this.area = function () {
        this.result = (3.14 * this.radius * this.radius);
    }
    this.showArea = function () {
        prompt("Square area = " + this.result);
    }
}

var shape = prompt("please choose shape circle or square");

switch (shape) {
    case "circle":
        var circle = new Circle(Number(prompt("Please enter the radius")));
        circle.area();
        circle.showArea();
        break;
    case "square":
        var square = new Square(Number(prompt("Please enter the length")));
        square.area();
        square.showArea();
        break;
    default:
        break;
}