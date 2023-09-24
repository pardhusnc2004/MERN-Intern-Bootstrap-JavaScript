function reverse() {
    var number = document.getElementById("num").value;
    document.getElementById("reversedNumber").innerText = number.split("").reverse().join("");
}