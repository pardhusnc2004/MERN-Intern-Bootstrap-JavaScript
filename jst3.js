function multiply() {
    var num1 = Number.parseInt(document.getElementById("num1").value);
    var num2 = Number.parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = (num1*num2);
}

function divide() {
    var num1 = Number.parseInt(document.getElementById("num1").value);
    var num2 = Number.parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = (num1/num2);
}