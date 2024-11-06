

function getInfo(){
    
let email = document.querySelector("#email").value;
let password = document.querySelector(".password").value;

if(email == "" || password == ""){
    
    alert("please fill-up all");
    
    console.log("I'm working");
    return false;
}else if(password.length < 6 || password.length > 12){

   
    alert("please enter minumum 6 degits of password");
    return false;

} else if(isNaN(password)){

   
    alert("Only Numbers are allowed");
    return false;

} else{
    let email = document.querySelector("#email").value;
let password = document.querySelector(".password").value;
    return true;
}


}