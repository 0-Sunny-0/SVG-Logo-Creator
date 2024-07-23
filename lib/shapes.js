// Triangle shape sizing code: '<polygon points="150, 18 244, 182 56, 182" fill="" />'
// Circle shape sizing: `<circle cx="25" cy="75" r="20" fill=""/>`
// Square shape sizing: `<rect x="10" y="10" width="30" height="30" fill=""/>`

class Shape {
    setColor(color) {
        Shape.fill = color;
    }
};

class Triangle extends Shape {
    
};

class Circle extends Shape {
    render(){
         return ``
    }
};

class Square extends Shape {};

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