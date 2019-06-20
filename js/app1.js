function plus() {
    var plus = document.getElementById("num1").value;
    var plus_1 = document.getElementById("num2").value;
    document.getElementById("outp").value =  parseInt(plus) + parseInt(plus_1);
}

function minus() {
    var minus = document.getElementById("num1").value;
    var minus_1 = document.getElementById("num2").value;
    document.getElementById("outp").value =  parseInt(minus) - parseInt(minus_1);
}

function div() {
    var div = document.getElementById("num1").value;
    var div_1 = document.getElementById("num2").value;
    document.getElementById("outp").value =  parseInt(div) / parseInt(div_1); 
}

function mul() {
    var mul = document.getElementById("num1").value;
    var mul_1 = document.getElementById("num2").value;
    document.getElementById("outp").value =  parseInt(mul) * parseInt(mul_1);
}
