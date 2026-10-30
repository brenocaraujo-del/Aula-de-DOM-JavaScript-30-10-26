let form = document.querySelector
("form");
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#password")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email = inputEmail.value
    let password = inputPassword.value

    if(validarUsuer(email,password)){
        console.log("usuario logado com sucesso");
    }
    else{
        console.log("Error")
    }
    
});

let emailFic = "Breno244@gmail.com"
let senhaFic = "20112011"

function validarUsuer(email,password){

    if(email === emailFic && password === senhaFic){
        return true;
    }

    else if(email === "" || password === ""){
        message.innerText = "Não deixe campos vazios"
        message.style.color = "red";
        return false;
    }

    else if(password.length < 8){
        message.innerText = "Senha muito curta"
        message.style.color = "red";
        return false;
    }

    else{
        message.innerText = "Email ou senha incorretos"
        message.style.color = "red";
        return false;
    }
}
