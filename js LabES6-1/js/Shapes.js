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

    constructor(shapeArgs) {
        if (shapeArgs.hasOwnProperty('shape')) {
            if (shapeArgs.shape.constructor.name === "Shape") {
                super(shapeArgs.shape.x, shapeArgs.shape.y);
                this.height = shapeArgs.height;
                this.width = shapeArgs.width;
            } else if (shapeArgs.shape.constructor.name === "Rectangle") {
                super(shapeArgs.shape.x, shapeArgs.shape.y);
                this.height = shapeArgs.shape.height;
                this.width = shapeArgs.shape.width;
            }
        } else {
            super(shapeArgs.x, shapeArgs.y);
            this.height = shapeArgs.height;
            this.width = shapeArgs.height;
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
                <button class="btn-calcArea">Calculate</button>      
        </div>
        </section>            
      `
        shapesArea.insertAdjacentHTML('beforeend', rectangleHtml);

        document.querySelector(".rectangle").addEventListener('click', function (event) {
            let selectedRect = event.target.closest('.rectangle');
            if (event.target.className === 'btn-calcArea') {

                let newRect = refreshRect({
                    height: parseInt(document.getElementById("TxtH").value),
                    width: parseInt(document.getElementById('TxtW').value)
                });

                shapesArea.removeChild(selectedRect);
                shapesArea.insertAdjacentHTML('afterbegin', newRect);
            }
        });
    };
}

class Square extends Rectangle {
    length = 1;

    constructor(shapeArgs) {

        if (shapeArgs.hasOwnProperty('shape')) {
            if (shapeArgs.shape.constructor.name === "Shape") {
                super({
                    x: shapeArgs.shape.x,
                    y: shapeArgs.shape.y,
                    height: shapeArgs.length,
                    width: shapeArgs.length
                });
                this.length = shapeArgs.length;
            } else if (shapeArgs.shape.constructor.name === "Square") {
                super({
                    x: shapeArgs.shape.x,
                    y: shapeArgs.shape.y,
                    height: shapeArgs.shape.length,
                    width: shapeArgs.shape.length
                });

                this.length = shapeArgs.shape.length;
            }
        } else {
            super({
                x: shapeArgs.x,
                y: shapeArgs.y,
                height: shapeArgs.length,
                width: shapeArgs.length
            });
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
        <section class="square">
             <div class="data">
                <input id="TxtL" placeholder="L value">
                <input value="Circrimference : ${this.getCircumference()}" disabled>
                <input value="Area : ${this.getArea()}" disabled>
                <input value="Type : ${this.getType()}" disabled>      
                <button class="btn-calcArea">Calculate</button>      
            </div>
        </section>      
      `
        shapesArea.insertAdjacentHTML('beforeend', rectangleHtml);
    };
}

class Oval extends Shape {
    a = 1;
    b = 1;

    constructor(shapeArgs) {
        if (shapeArgs.hasOwnProperty('shape')) {
            if (shapeArgs.constructor.name === "Shape") {
                super(shapeArgs.shape.x, shapeArgs.shape.y);
                this.a = shapeArgs.a;
                this.b = shapeArgs.b;
            } else if (shapeArgs.constructor.name === "Oval") {
                super(shapeArgs.shape.x, shapeArgs.shape.y);
                this.a = shapeArgs.shape.a;
                this.b = shapeArgs.shape.b;
            }
        } else {
            super(shapeArgs.x, shapeArgs.y);
            this.a = shapeArgs.a;
            this.b = shapeArgs.b;
        }
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
                <button class="btn-calcArea">Calculate</button>      
            </div>
        </section>      
      `
        shapesArea.insertAdjacentHTML('beforeend', rectangleHtml);
    };

}

class Circle extends Oval {
    r = 1;

    constructor(shapeArgs) {
        if (shapeArgs.hasOwnProperty('shape')) {
            if (shapeArgs.shape.constructor.name === "Shape") {
                super({shape: shapeArgs.shape, a: shapeArgs.r, b: shapeArgs.r});
                this.r = shapeArgs.r;
            } else if (shapeArgs.shape.constructor.name === "Circle") {
                super({x: shapeArgs.shape.x, y: shapeArgs.shape.y, a: shapeArgs.shape.r, b: shapeArgs.shape.r});
                this.r = shapeArgs.shape.r;
            }
        } else {
            super({x: shapeArgs.x, y: shapeArgs.y, a: shapeArgs.r, b: shapeArgs.r});
        }
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
                <button class="btn-calcArea">Calculate</button>      
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

    getShapes() {
        return this.shapes;
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

    renderShape(shape) {
        shape.displayEditor();
    }
}


function refreshRect(userInput) {

    let rect = drawArea.getShapes()[0];

    if (userInput.hasOwnProperty('height') && userInput.hasOwnProperty('width')) {
        rect.height = userInput.height;
        rect.width = userInput.width;
    }

    let rectangleHtml = `
        <section class="rectangle">
         <div class="data">
                <input id="TxtH" placeholder="H value">
                <input id="TxtW" placeholder="W value">
                <input value="Circrimference : ${rect.getCircumference()}" disabled>
                <input value="Area : ${rect.getArea()}" disabled>
                <input value="Type : ${rect.getType()}" disabled>      
                <button class="btn-calcArea">Calculate</button>      
        </div>
        </section>            
      `;

    return rectangleHtml;
}

let shapes = [
    new Rectangle(
        {
            shape: new Rectangle(
                {
                    x: 0,
                    y: 0,
                    height: 10,
                    width: 5
                }
            )
        }),
    new Square({
        shape: new Square(
            {
                x: 0,
                y: 0,
                length: 5
            }
        )
    }),
    new Oval({x: 0, y: 0, a: 10, b: 5}),
    new Circle({x: 0, y: 0, r: 5})
]

let drawArea = new DrawArea();
drawArea.addShapes(shapes);
drawArea.logShapes();
drawArea.renderShapes();
