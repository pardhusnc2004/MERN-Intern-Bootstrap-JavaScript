function validate(){
    uname=document.getElementById("name").value;
    email=document.getElementById("email").value;
    url=document.getElementById("url").value;
    msg=document.getElementById("message").value;
    var cnt=0;
    if(uname.length<6){
        cnt++;
        document.getElementById("message1").innerText="This field is required";
        document.getElementById("message1").style.color="red";
        document.getElementById("name").style.borderColor="brown"
    }
    else{
        document.getElementById("message1").innerText="";
        document.getElementById("name").style.borderColor="Green";
    }
    if(!email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)){
        cnt++;
        document.getElementById("message2").innerText="A valid email address is required";
        document.getElementById("message2").style.color="red";
        document.getElementById("email").style.borderColor="brown";
    }
    else{
        document.getElementById("message2").innerText="";
        document.getElementById("email").style.borderColor="Green";
    }
    if(!url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)){
        cnt++;
        document.getElementById("message3").innerText="This valid url is required";
        document.getElementById("message3").style.color="red";
        document.getElementById("url").style.borderColor="brown";
    }
    else{
        document.getElementById("message3").innerText="";
        document.getElementById("url").style.borderColor="Green";
    }
    if(msg.length==0){
        cnt++;
        document.getElementById("message4").innerText="This field is required";
        document.getElementById("message4").style.color="red";
        document.getElementById("message").style.borderColor="brown";
    }
    else{
        document.getElementById("message4").innerText="";
        document.getElementById("message").style.borderColor="Green";
    }
    if(cnt>0){
        return false;
    }
    return true;
}