let shapesArea = document.getElementById("Shapes");

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

    displayEditor = () => {
        let rectangleHtml = `
        <section class="rectangle">
         <div class="data">
                <input id="TxtH" placeholder="H value">
                <input id="TxtW" placeholder="W value">
                <input value="Circrimference : ${this.getCircumference()}" disabled>
                <input value="Area : ${this.getArea()}" disabled>
                <input value="Type : ${this.getType()}" disabled>      
                <button class="btn-calcArea">Area</button>      
                <button class="btn-calcCircumference">Circumference</button>      
        </div>
        </section>      
      `
        shapesArea.insertAdjacentHTML('beforeend', rectangleHtml);
    };
}

class Square extends Rectangle {
    length = 1;

    constructor(shapeArgs) {

        if (typeof shapeArgs.shape !== 'undefined') {
            if (shapeArgs.shape.constructor.name === "Shape") {
                super(shapeArgs.shape.x, shapeArgs.shape.y, shapeArgs.length, shapeArgs.length);
                this.length = shapeArgs.shape.length;
            } else if (shapeArgs.shape.constructor.name === "Square") {
                super(shapeArgs.shape.x, shapeArgs.shape.y, shapeArgs.shape.length, shapeArgs.shape.length);
                this.length = shapeArgs.shape.length;
            }
        } else {
            super(shapeArgs.x, shapeArgs.y, shapeArgs.length, shapeArgs.length);
            this.length = shapeArgs.length;
        }
    }

    log() {
        console.log(`
            Circumference: ${this.getCircumference()}  Area:${this.getArea()}  Type:${this.getType()}
        `);
    }

    displayEditor = () => {
        let rectangleHtml = `
        <section class="rectangle">
         <div class="data">
                <input id="TxtL" placeholder="L value">
                <input value="Circrimference : ${this.getCircumference()}" disabled>
                <input value="Area : ${this.getArea()}" disabled>
                <input value="Type : ${this.getType()}" disabled>      
                <button class="btn-calcArea">Area</button>      
                <button class="btn-calcCircumference">Circumference</button>      
        </div>
        </section>      
      `
        shapesArea.insertAdjacentHTML('beforeend', rectangleHtml);
    };
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

    displayEditor = () => {
        let rectangleHtml = `
        <section class="oval">
        <div class="data">
                <input id="TxtA" placeholder="a value">
                <input id="TxtB" placeholder="b value">
                <input value="Circrimference : ${this.getCircumference()}" disabled>
                <input value="Area : ${this.getArea()}" disabled>
                <input value="Type : ${this.getType()}" disabled>      
                <button class="btn-calcArea">Area</button>      
                <button class="btn-calcCircumference">Circumference</button>      
        </div>
        </section>      
      `
        shapesArea.insertAdjacentHTML('beforeend', rectangleHtml);
    };

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


    displayEditor = () => {
        let rectangleHtml = `
        <section class="oval">
        <div class="data">
                <input id="TxtR" placeholder="r value">
                <input value="Circrimference : ${this.getCircumference()}" disabled>
                <input value="Area : ${this.getArea()}" disabled>
                <input value="Type : ${this.getType()}" disabled>      
                <button class="btn-calcArea">Area</button>      
                <button class="btn-calcCircumference">Circumference</button>      
        </div>
        </section>      
      `
        shapesArea.insertAdjacentHTML('beforeend', rectangleHtml);
    };

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

    renderShapes() {
        for (const shape of this.shapes) {
            shape.displayEditor();
        }
    }
}


let shapes = [
    new Rectangle(new Rectangle(0, 0, 10, 5)),
    new Square({
        shape: new Square({x: 0, y: 1, length: 5})
    }),
    new Oval(0, 0, 10, 5),
    new Circle(0, 0, 5)
]

let drawArea = new DrawArea();
drawArea.addShapes(shapes);
drawArea.logShapes();
drawArea.renderShapes();
