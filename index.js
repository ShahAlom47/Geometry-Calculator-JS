

// fot taiangel

callButton("triBtn").addEventListener("click", function () {

    let invalue1 = input1Value('tBaseIn')
    let invalue2 = input2Value('tHiIn')
    let resultArea = callresulArea('triResultArea')



    let TareaIs = 0.5 * invalue1 * invalue2

    let result = resultArea.innerText = TareaIs.toFixed(3);
    sidebox('Triangel :', result)
})

// for Rectangle
callButton("recBtn").addEventListener("click", function () {

    let invalue1 = input1Value('rec-h')
    let invalue2 = input2Value('rec-w')
    let resultArea = callresulArea('rectResultArea')

    let TareaIs = invalue1 * invalue2

    let result = resultArea.innerText = TareaIs.toFixed(3);
    sidebox('Rectangle :', result)
})

// for Parallelogram
callButton("paraBtn").addEventListener("click", function () {

    let invalue1 = input1Value('para-base')
    let invalue2 = input2Value('para-height')
    let resultArea = callresulArea('paraResultArea')

    let TareaIs = invalue1 * invalue2

    let result = resultArea.innerText = TareaIs.toFixed(3);
    sidebox('Parallelogram :', result)
})


// for rhombus
callButton("romBtn").addEventListener("click", function () {

    let invalue1 = input1Value('rom-d1')
    let invalue2 = input2Value('rom-d2')
    let resultArea = callresulArea('rhomResultArea')

    let TareaIs = 0.5 * invalue1 * invalue2

    let result = resultArea.innerText = TareaIs.toFixed(3);
    sidebox('Rhombus :', result)
})



// for pentagon
callButton("penBtn").addEventListener("click", function () {

    let invalue1 = input1Value('penta-p')
    let invalue2 = input2Value('penta-b')
    let resultArea = callresulArea('pentaResultArea')

    let TareaIs = 0.5 * invalue1 * invalue2

    let result = resultArea.innerText = TareaIs.toFixed(3);
    sidebox('Pentagon :', result)
})




// for Ellipse
callButton("ellipBtn").addEventListener("click", function () {

    let invalue1 = input1Value('ellip-a')
    let invalue2 = input2Value('ellip-b')
    let resultArea = callresulArea('elipResultArea')

    let TareaIs = 3.14 * invalue1 * invalue2

    let result = resultArea.innerText = TareaIs.toFixed(3);

    sidebox('Ellipse :', result)
})




// for sidebox calculation 
let count = 0;
function sidebox(name, value) {
    let cmTometer = value;
    if (value == "NaN") {
        cmTometer = 'error'
    }

    count++;
    let createElement = document.createElement('p')
    let createBtn = document.createElement('button')
    createBtn.innerHTML = "Convert M<sup>2</sup>"
    createBtn.style.backgroundColor = 'blue'
    createBtn.classList.add("sideBtn")
    console.log(createBtn.classList);


    createElement.innerHTML = count + ". " + name + " " + cmTometer + ' cm<sup>2</sup>';
    let callDisplay = document.getElementById('areaCalculation');
    callDisplay.appendChild(createElement);
    callDisplay.appendChild(createBtn);
    createBtn.addEventListener('click', function () {
        cmTometer /= 10000
        createElement.innerHTML = count + ". " + name + " " + cmTometer + ' M<sup>2</sup>';
        console.log(cmTometer);
    })


}


// call button function 

function callButton(btnID) {

    return document.getElementById(btnID)
}


// call resultArea 
function callresulArea(areaID) {
    return document.getElementById(areaID)
}

// input box 1 \

function input1Value(inID) {
    let in1 = document.getElementById(inID).value;
    return parseFloat(in1);
}

// input box 2 \

function input2Value(inID) {
    let in2 = document.getElementById(inID).value;
    return parseFloat(in2);
}

// clear button 

callButton("clearBtn").addEventListener("click", function () {

    let xx = document.getElementById('areaCalculation')
    let zz = xx.innerHTML = '';

})
