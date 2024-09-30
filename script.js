function mathOperation(equation){
    const result = eval(equation);
    return result
}
function displayValue(val){
    var display = document.getElementById("display");
    if(val === "=")
        display.value = mathOperation(display.value);
    else{
        display.value += val;
    }    
}

addEventListener('keydown', function(event){
    var display = document.getElementById("display");
    if(event.key === "Backspace")
        display.value = "";
})