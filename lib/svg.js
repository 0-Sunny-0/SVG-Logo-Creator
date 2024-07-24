class SVG {
    constructor () {
        this.text = ""
        this.shape = ""
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
    setText(message, color) {
        if(message.length > 3) {
            throw new Error('Please use only three characters!'); 
        }
        this.text = `<text x="100" y="100" font-size="45" text-anchor="middle" fill="${color}">${message}</text>`
    }
    setShape(shape) {
        this.shape = shape.render()
    }
};

module.exports = SVG