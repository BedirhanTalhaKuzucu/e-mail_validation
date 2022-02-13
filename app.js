let eMail = document.getElementById("e_mail");


let button = document.getElementById("submit");

let control;

myFunction = () => {
   let control = eMail.value;
   if (control.includes("@") && control.includes(".", control.indexOf("@"))) {
        index1 = control.indexOf(".", control.indexOf("@") )
        if (control.slice(index1+1).length <= 3) {
        alert("valid email")
        } else{ alert("invalid email") }
   }else{ alert("invalid email") }
}
    
button.addEventListener("click", myFunction )
