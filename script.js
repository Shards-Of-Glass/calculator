let displayVal='';
let firstVal='';
let secondVal='';
let operand='';
let point=false;
let display=document.getElementById('display');

function append(value) {
    if(point&&value=='.')
        return;
    if(value=='.')
        point=true;
    display.value += value;
}

function setOperand(val){
    operand=val;
    point=false;
    firstVal=display.value;
    display.value = '';
}

function calc(){
    secondVal=display.value;
    let result;
    if(firstVal!=''&&secondVal!=''){
        switch(operand){
            case '+':
                result=parseFloat(firstVal)+parseFloat(secondVal);
                break;
            case '-':
                result=parseFloat(firstVal)-parseFloat(secondVal);
                break;
            case '*':
                result=parseFloat(firstVal)*parseFloat(secondVal);
                break;
            case '/':
                if(parseFloat(secondVal)!=0)
                    result=parseFloat(firstVal)/parseFloat(secondVal);
                else
                    result='Error';
                break;
            case '^':
                result=Math.pow(parseFloat(firstVal),parseFloat(secondVal));
                break;
            case '%':
                result=parseFloat(firstVal)%parseFloat(secondVal);
            default:
                return;
        }
    
    }
    else
        return;
    display.value=result;
    firstVal='';
    secondVal='';
    operand='';
}

function clearAll(){
    display.value = '';
    firstVal='';
    secondVal='';
    operand='';
    point=false;
}

function del(){
    if(displayVal.charAt(displayVal.length-1)=='.')
        point=false;
    display.value = display.value.slice(0, -1);
}