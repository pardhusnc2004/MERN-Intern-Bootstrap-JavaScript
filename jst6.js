function validate(){
    var uname=document.getElementById("uname").value;
    var pwd=document.getElementById("pwd").value;
    var log={"user1":"Password@1","user2":"Password@2","user3":"Password@3","user4":"Password@4"}
    document.getElementById("msg").style.textAlign="center";
    if(uname.length==0){
        document.getElementById("msg").innerHTML="Please supply Username";
        document.getElementById("msg").style.color="red";
        return false;
    }
    else if(pwd.length == 0){
        document.getElementById("msg").innerHTML="Please supply Password";
        document.getElementById("msg").style.color="red";
        return false;
    }
    else if(uname==="hello" && pwd==="hello@1") {
        document.getElementById("msg").innerHTML="Login Successful";
        document.getElementById("msg").style.color="Green";
        return false;
    }
    else {
        document.getElementById("msg").innerHTML="Invalid Credentials";
        document.getElementById("msg").style.color="red";
        return false;
    }
    return true;
}