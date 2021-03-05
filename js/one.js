class Circle {
    constructor(allRadius) {
        this.Radius = allRadius;
    }

    get Radius() {
        return this.allRadius;
    }

    set Radius(justRadius) {
        this.allRadius = justRadius;
    }

    get Diamtr() {
        return this.allDiamtr = this.allRadius * 2;
    }

    calculateArea() {
        let result = 0;

        result = Math.pow(this.Radius, 2) / 4 * Math.PI;

        console.log(result);
    }

    calculateLength() {

        let result = 0;

        result = this.Diamtr * Math.PI;

        console.log(result);
    }
}

const p = new Circle(4);

p.calculateArea();
p.calculateLength();