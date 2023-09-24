function validateFNameStrength() {
    var fname = document.getElementById("fname").value;
    if(fname.length == 0) {}
    else if(fname.length > 0 && fname.length < 5) {
        document.getElementById("message1").innerText = "POOR";
    }
    else if(fname.length < 8) {
        document.getElementById("message1").innerText = "GOOD";
        document.getElementById("message1").style.color = "Green";
    }
    else {
        document.getElementById("message1").innerText = "STRONG";
        document.getElementById("message1").style.color = "Green";
    }
}

function validateLNameStrength() {
    var lname = document.getElementById("lname").value;
    if(lname.length == 0) {}
    else if(lname.length > 0 && lname.length < 5) {
        document.getElementById("message2").innerText = "POOR";
    }
    else if(lname.length < 8) {
        document.getElementById("message2").innerText = "GOOD";
        document.getElementById("message2").style.color = "Green";
    }
    else {
        document.getElementById("message2").innerText = "STRONG";
        document.getElementById("message2").style.color = "Green";
    }
}

function validateEmailStrength(){
    var email = document.getElementById("email").value;
    var email_regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if(!email.match(email_regex)){
        document.getElementById("message3").innerText="POOR";
        document.getElementById("message3").style.color="Red";
    }
    else{
        document.getElementById("message3").innerText="GOOD";
        document.getElementById("message3").style.color="Green";
    }
}

function validatePassStrength() {
    var pwd = document.getElementById("pwd").value;
    if(pwd.length == 0) document.getElementById("message4").innerText = "NO STRENGTH";
    else if(pwd.length > 0 && pwd.length < 5) document.getElementById("message4").innerText = "POOR";
    else if(pwd.length < 8) {
        document.getElementById("message4").innerText = "GOOD";
        document.getElementById("message4").style.color = "Green";
    }
    else {
        document.getElementById("message4").innerText = "STRONG";
        document.getElementById("message4").style.color = "Green";
    }
}

function validatePass() {
    var pwd = document.getElementById("pwd").value;
    var cpwd = document.getElementById("cpwd").value;
    if (cpwd == null) {}
    else if(pwd === cpwd) {
        document.getElementById("message5").innerText = "MATCH";
        document.getElementById("message5").style.color = "Green";
    }
    else document.getElementById("message5").innerText = "MIS-MATCH";
}

function validateAgeStrength(){
    var age=Number(document.getElementById("age").value);
    if(age>100 || age<6){
        document.getElementById("message6").innerText="POOR";
        document.getElementById("message6").style.color="Red";
    }
    else{
        document.getElementById("message6").innerText="GOOD";
        document.getElementById("message6").style.color="Green"; 
    }
}

function validatePhoneStrength(){
    var mobnum_regex = /^\d{10}$/;
    var mobile = document.getElementById("mobile").value;
    if(mobile.length == 0) {}
    else if(!mobile.match(mobnum_regex)){
        document.getElementById("message7").innerText="POOR";
        document.getElementById("message7").style.color="Red";
    }
    else{
        document.getElementById("message7").innerText="GOOD";
        document.getElementById("message7").style.color="Green"; 
    }
}

function validateAddressStrength(){
    var address = document.getElementById("address").value;
    if(address.length == 0) {}
    else if(address.length <= 5 ){
        document.getElementById("message8").innerText="POOR";
        document.getElementById("message8").style.color="Red";
    }
    else if(address.length < 18) {
        document.getElementById("message8").innerText = "GOOD";
        document.getElementById("message8").style.color="Green";
    }
    else{
        document.getElementById("message8").innerText="STRONG";
        document.getElementById("message8").style.color="Green";
    }
}
function validateStateStrength(){
    var state = document.getElementById("state").value;
    if(state.length == 0) {}
    else if(state.length < 3 ){
        document.getElementById("message9").innerText="POOR";
        document.getElementById("message9").style.color="Red";
    }
    else if(state.length <= 8) {
        document.getElementById("message8").innerText = "GOOD";
    }
    else{
        document.getElementById("message9").innerText="STRONG";
        document.getElementById("message9").style.color="Green";
    }
}

function highlight(id) {
    document.getElementById(id).style.backgroundColor = "#c0ffff";
}

function checkandblur(id) {
    document.getElementById(id).style.backgroundColor = "#f0f0f0";
}