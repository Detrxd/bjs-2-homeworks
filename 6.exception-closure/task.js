// (1)

// function parseCount(value) {
//     let initial = Number.parseInt(value)
//     if (Number.isNaN(initial) === false) {
//         throw ("Невалидное значение")
//     } else {
//         return console.log(initial);
//     }
// }

//(1.1)

// function validateCount(index) {
//     try {
//         let parsedValue = parseCount(index)
//         console.log(parsedValue);
//     } catch (mistakeValue) {
//         if (mistakeValue instanceof ReferenceError) {
//             return console.log('Ошибка')
//         }
//     }
// }

// parseCount(23);
// validateCount("10")

// (2)

class Triangle {
    constructor(a, b, c) {

        if (this.a + this.b < this.c) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
        else if (this.b + this.c < this.a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
        else if (this.c + this.a < this.b) {
            throw new Error("Треугольник с такими сторонами не существует")
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter = function () {
       let P = this.a + this.b + this.c;
        return console.log(P);
    }
     
     getArea = function () {
         newValue = Math.sqrt(P2 / 2((P2 - this.a)(P2 - this.b)(P2 - this.c)))
         return console.log(newValue.toFixed([3]))
     }
}

const ABC = new Triangle(
    1, 1, 1,

)

ABC.getPerimeter();

let P2 = ABC.getPerimeter;
ABC.getArea();


// getTriangle = function (d, e, f) {
//     try {
//         return new newTriangle;
//         newTriangle.lenght = d;
//         newTriangle.width = e;
//         newTriangle.height = f;
//         if (newTriangle.lenght + newTriangle.width > newTriangle.height) { }
//         console.log(newTriangle);
//     } catch (invalidTriangle) {

//     }
// }

// function getTriangle(a, b, c) {
//     try {
//         return new Triangle
//     } catch (aa) {
//         return {
//         getArea = () => {"Ошибка! Треугольник не существует"},
//         getPerimeter = () => {"Ошибка! Треугольник не существует"}

//         }
//     }

// }


