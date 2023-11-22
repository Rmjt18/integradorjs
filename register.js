const registerForm = document.querySelector(".container-form");
const nameInput = document.querySelector(".name")
const emailInput = document.querySelector(".email")
const phoneInput = document.querySelector (".phone");

// funciones auxiliares ---------------------------
// VACIO-------------------
const isEmpty = (input) => {
    return !input.value.trim().length;

}
// LARGO----------------
const  isBetween= (input, min, max ) => {
return input.value.length >= min && input.value.length <= max;
}

// ERROR--------------
const showError = (input, message) => {
    const formField= input.parentElement;
    formField.classList.remove("success")
    formField.classList.add("error")
    const error = formField.querySelector("small")
    error.style.display= "block"
    error.textContent = message;

}

// TODO OK--------------

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
    
    const error = formField.querySelector("small")
    error.textContent = "";

};




const checkInput = (input) => {
    // que vamos a ckekear
    let valid = false;

    const MINCHARACTERS = 3;
    const MAXCHARACTERS = 26 ;

    console.log(isBetween(input , 3 , 25 ));

    if (isEmpty(input)){
        showError(input, "Este Campo es Obligatorio ");
        return
    
    }

    if( !isBetween(input, MINCHARACTERS, MAXCHARACTERS)){
        showError(input, `Este Campo Debe Tener entre ${MINCHARACTERS} Y ${MAXCHARACTERS} caracteres`)
return
    }
showSuccess(input)
valid = true
return valid;
}


const inicio = () => {
    nameInput.addEventListener("input", () => checkInput(nameInput));
};

inicio();
