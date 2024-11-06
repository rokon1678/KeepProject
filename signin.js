

function getInfo(){
    
let email = document.querySelector("#email").value;
let password = document.querySelector(".password").value;

if(email == "" || password == ""){
    email.style.border = "1px solid red";
    password.style.border = "1px solid red";
    alert("please fill-up all");
    console.log("I'm working");
    return false;
}else if (password.length < 6 || password.length > 12 ){

    password.style.border = "1px solid red";
    alert("please enter minumum 6 degits of password");
    return false;

} else {
    return true;
}


}