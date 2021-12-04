let SHAPE = "";
let CALC_METHOD = "";

let shapeSelect = document.querySelector("#shape");
for (let i = 0; i < Object.keys(shapesInputDetails).length; i++) {
    shapeSelect.innerHTML += `<option value="${Object.values(shapesInputDetails)[i].option.value}">${Object.values(shapesInputDetails)[i].option.text}</option>`;
}

function calcSelect(){
    clearInputDiv();
    document.getElementsByClassName("hr")[0].style.display = "block";
    const selectBox = document.querySelector("#shape");
    const selectedValue = SHAPE = selectBox.options[selectBox.selectedIndex].value;
    const inputs =  shapesInputDetails[selectedValue].input;
    let selectDiv = document.querySelector("#input-div");
    for (let i = 0; i < inputs.length; i++) {
        selectDiv.innerHTML += `
        <label for="${inputs[i].labelFor}">
            <span>${inputs[i].labelText}</span>
            <input type="${inputs[i].inputType}" name="${inputs[i].name}" id="${inputs[i].id}" placeholder="${inputs[i].placeholder}">
        </label>
        `;
    }
    selectDiv.innerHTML += `<button onclick="calculateShape();">Calculate</button>`;
    CALC_METHOD = shapesInputDetails[SHAPE].method;
}

function clearInputDiv() {
    document.querySelector("#input-div").innerHTML = "";
    document.getElementById("area-text").innerHTML = 0;
    document.getElementById("perimeter-text").innerHTML = 0;    
}

function calculateShape() {
    document.getElementsByClassName("hr")[1].style.display = "block";
    document.getElementsByClassName("result-div")[0].style.display = "block";
    let getAllInputValue = "";
    (getAllInputValue_Function = () => {
        for (let i = 0; i < shapesInputDetails[SHAPE].input.length; i++) {
            getAllInputValue += document.getElementById(shapesInputDetails[SHAPE].input[i].id).value;
        }
    })();
    getAllInputValue = getAllInputValue.replace(/.{1}/g, '$&, ');
    getAllInputValue = getAllInputValue.slice(0, -2);
    document.getElementById("area-text").innerHTML = CALC_METHOD.getArea(getAllInputValue);
    document.getElementById("perimeter-text").innerHTML = CALC_METHOD.getPerimeter(getAllInputValue);    
}