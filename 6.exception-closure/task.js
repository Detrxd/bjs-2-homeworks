function parseCount(value) {
    if (isNaN(value)) {
        throw new Error("Невалидное значение")
    } else {
        return parseInt(value, 10);
    }
}

function validateCount(index) {
    try {
        let parsedValue = parseCount(index);
        return parsedValue;
    } catch (mistakeValue) {
        return mistakeValue;
    }
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a + this.b < this.c) || (this.b + this.c < this.a) || (this.c + this.a < this.b)) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    };

    getArea() {
        let polu = this.getPerimeter() / 2
        let newValue = Math.sqrt(polu * ((polu - this.a) * (polu - this.b) * (polu - this.c)))
        return newValue.toFixed(3);
    };
}

getTriangle = function (d, e, f) {
    try {
        return new Triangle(d, e, f);
    } catch (invalidTriangle) {
        {
            getArea() = console.log("Ошибка! Треугольник не существует");
            getPerimeter() = console.log("Ошибка! Треугольник не существует");
        } 
        return invalidTriangle;
    }
}
// const triangle = new Triangle(2,5,5);
// // console.log(triangle.getPerimeter())
// console.log(triangle.getArea(triangle.getPerimeter()))