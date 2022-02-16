class Shape {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    log() {
    }

    getCircumference() {
    }

    getArea() {
    }

    getType = () => this.constructor.name;
}

class Rectangle extends Shape {
    height = 1;
    width = 1;

    constructor(shape = undefined, x = 0, y = 0, height = 0, width = 0) {

        if (arguments.length == 1) {
            if (shape.constructor.name === "Shape") {
                super(shape.x, shape.y);
                this.height = height;
                this.width = width;
            } else if (shape.constructor.name === "Rectangle") {
                super(shape.x, shape.y);
                this.height = shape.height;
                this.width = shape.width;
            }
        } else {
            super(arguments[0], arguments[1]);
            this.height = arguments[2];
            this.width = arguments[3];
        }
    }

    getCircumference = () => (this.height + this.width) * 2;
    getArea = () => this.height * this.width;
    log = () => {
        console.log(`
            Circumference: ${this.getCircumference()}  Area:${this.getArea()}  Type:${this.getType()}
        `);
    }
}

class Square extends Rectangle {
    length = 1;

    constructor(shape = undefined, x = 0, y = 0, length = 0) {
        if (arguments.length == 1 || arguments.length == 2) {
            if (shape.constructor.name === "Shape") {
                super(shape.x, shape.y, arguments[1], arguments[1]);
                this.length = arguments[1];
            } else if (shape.constructor.name === "Square") {
                super(shape.x, shape.y, shape.length, shape.length);
                this.length = shape.length;
            }
        } else {
            super(arguments[0], arguments[1], arguments[2], arguments[2]);
            this.length = arguments[2];
        }
    }

    log() {
        console.log(`
            Circumference: ${this.getCircumference()}  Area:${this.getArea()}  Type:${this.getType()}
        `);
    }
}

class Oval extends Shape {
    a = 1;
    b = 1;

    constructor(x, y, a, b) {
        super(x, y);
        this.a = a;
        this.b = b;
    }

    getCircumference = () => 3.14 * (this.a + this.b);
    ;
    getArea = () => (3.14 * (this.a) * (this.b));

    log() {
        console.log(`
            Circumference: ${this.getCircumference()}  Area:${this.getArea()}  Type:${this.getType()}
        `);
    }

}

class Circle extends Oval {
    r = 1;

    constructor(x, y, r) {
        super(x, y, r, r);
        this.r = r;
    }

    log() {
        console.log(`
            Circumference: ${this.getCircumference()}  Area:${this.getArea()}  Type:${this.getType()}
        `);
    }
}

class DrawArea {
    shapes = []

    addShapes(shapes) {
        this.shapes = shapes;
    }

    logShapes() {
        for (const shape of this.shapes) {
            shape.log();
        }
    }
}


let shapes = [
    new Rectangle(new Rectangle(0, 0, 10, 5)),
    new Square(0, 0, 5),
    new Oval(0, 0, 10, 5),
    new Circle(0, 0, 5)
]

let drawArea = new DrawArea();
drawArea.addShapes(shapes);
drawArea.logShapes();
