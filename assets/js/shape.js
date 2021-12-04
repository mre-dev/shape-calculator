class Shape {
    constructor() {
        let getArea;
        let getPerimeter;
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
        this.getArea = (width_and_height = "0, 0") => {
            const width = +width_and_height.split(",")[0].trim();
            const height = +width_and_height.split(",")[1].trim();
            return width * height;
        };
        this.getPerimeter = (width_and_height = "0, 0") => {
            const width = +width_and_height.split(",")[0].trim();
            const height = +width_and_height.split(",")[1].trim();
            return (width + height) * 2;
        };
    }
}

class Square extends Shape {
    constructor() {
        super();
        this.getArea = (width) => +width * +width;
        this.getPerimeter = (width) => +width * 4;
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.getArea = (radius) => +radius * +radius * Math.PI;
        this.getPerimeter = (radius) => +radius * 2 * Math.PI;
    }
}