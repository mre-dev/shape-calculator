const shapesInputDetails = {
    Circle: {
        option: {
            value: "Circle",
            text: "Circle"
        },
        input: [
            {
                id: "circle-input",
                name: "circle-input",
                placeholder: "Enter Circle Radius",
                labelFor: "circle-input",
                inputType: "number",
                labelText: "Circle Radius : "
            }
        ],
        method: new Circle()
    },
    Rectangle: {
        option: {
            value: "Rectangle",
            text: "Rectangle"
        },
        input: [
            {
                id: "rectangle-width-input1",
                name: "rectangle-width-input",
                placeholder: "Enter rectangle width",
                labelFor: "rectangle-width-input1",
                inputType: "number",
                labelText: "Rectangle Width : "
            },
            {
                id: "rectangle-height-input2",
                name: "rectangle-height-input",
                placeholder: "Enter Rectangle Height",
                labelFor: "rectangle-height-input2",
                inputType: "number",
                labelText: "Rectangle Height : "
            }
        ],
        method: new Rectangle()
    },
    Square: {
        option: {
            value: "Square",
            text: "Square"
        },
        input: [
            {
                id: "square-input",
                name: "square-input",
                placeholder: "Enter Square Width",
                labelFor: "square-input",
                inputType: "number",
                labelText: "Square Width : "
            }
        ],
        method: new Square()
    }
}