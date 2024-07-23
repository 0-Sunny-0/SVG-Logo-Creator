// Triangle shape sizing code: '<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />'
// Circle shape sizing: `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
// Square shape sizing: `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`

class Shape {
    setColor(color) {
        this.color = color;
    }
};

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
};

class Circle extends Shape {
    render() {
         return `<circle cx="100" cy="100" r="70" fill="${this.color}"/>`
    }
};

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="150" height="150" fill="${this.color}"/>`
    }
};

module.exports = { Triangle, Circle, Square }


// Ask Vinnie about the difference

// example
// class Shape {
//     constructor(a, b, c){
//        this.a = a
//        this.b = b
//        this.c = c
//     }
// };

// Shapes class
// class Shape {
//     constructor() {
//         this.color = ""
//     }

//     setColor(color) {
//         this.color = color;
//     }}

    // vs

//     class Shape {
//         setColor(color) {
//             Shape.fill = color;
//         }
//     };