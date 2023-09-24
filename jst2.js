function sort() {
    var string = document.getElementById("sort").value.toString();
    document.getElementById("sortedText").innerText = string.split("").sort().join("");
}