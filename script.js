let display = document.querySelector("#display");
let a = 0;
let b = '';
let displayVal = '';
let func;
const operator = document.querySelector('#operator');
const btnVal = [];
let ac = document.querySelector('#clear');
ac.addEventListener('click', () => {
    a = 0;
    b = '';
    displayVal = '';
    display.textContent = '';
})

for (let i = 0; i < 15; i++) {
    btnVal[i] = document.getElementById(i);
}
{
    for (let i = 0; i < 10; i++) {
        if (b == '') {
            btnVal[i].addEventListener('click', () => {
                a = parseInt(a + '' + i);
                if (displayVal == '') {
                    a = i;
                    displayVal = a;
                }
                display.textContent = a;


            })
        }

    };
}
for (let i = 10; i < 15; i++) {
    btnVal[i].addEventListener('click', () => {
        func = i;
        console.log(func)
        if (b == '') b = 0;
        if (b == '') {
            for (let j = 0; j < 10; j++) {
                {
               
                    btnVal[j].addEventListener('click', () => {
                        b = parseInt(b + '' + j);
                        display.textContent = b;
                    })
                }
            };
        }
    })
}

operator.addEventListener('click', () => {
    if (func == 10) { 
        
       console.log(add());
    }
    else if (func == 11) { 
        console.log(b);
       console.log(subtract());
    }
    else if (func == 12) { 
        console.log(a);
       console.log(multiply());
    }
   else if (func == 13) { 
        console.log(a);
       console.log(divide());
    }
    else if (func == 14) { 
        console.log(a);
       console.log(remainder());
    }
})

function add() {

    return parseInt(a + b);
}
function subtract() {
    return parseInt(a - b);
}
function multiply() {
    return parseInt(a*b);
}
function divide() {
    if (b == 0) return "Error";
    else return parseInt (a / b);
}
function remainder() {
    if (a < b) return 0;
    return parseInt(a % b);
}