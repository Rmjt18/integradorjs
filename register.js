const registerForm = document.querySelector(".container-form");
const nameInput = document.querySelector(".name")
const emailInput = document.querySelector(".email")
const phoneInput = document.querySelector (".phone");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToLocalStorage = () => {
localStorage.setItem("users", JSON.stringify(users));
};




// funciones auxiliares ---------------------------
// VACIO-------------------
const isEmpty = (input) => {
    return !input.value.trim().length;

}
// LARGO----------------
const  isBetween= (input, min, max ) => {
return input.value.length >= min && input.value.length <= max;
}

// validar email ----------------------

const isEmailValid= (input) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    //testear 
    return re.test(input.value.trim());

}

// email guardado.---------------------
const isExistingEmail = (input) => {
    return users.some((user) =>user.email === input.value.trim());

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

// checl email

const checkEmail= (input) => {
    let valid = false ;
    if (isEmpty(input)){
        showError(input, " El Email Es Obligatorio")
        return;
    }

        if (!isEmailValid(input)){
            showError(input , "El Email No Es Valido")
            return;
        }

        if(isExistingEmail(input)){
            showError(input, "El Email Ya Esta Registrado")
            return;
        }
        showSuccess(input);
        valid = true;
        return valid;
    
}


// verificamos telefono-----------

const isPhoneValid = (input) => {
    const re = /^[0-9]{10}$/;

    return re.test(input.value.trim());
};

// ----validamos telefono-____________
const checkPhone = (input) => {
    let valid = false;

    if (isEmpty(input)) {
    showError(input, "El telefono es obligario");
    return;
    }

    if (!isPhoneValid(input)) {
    showError(input, "El telefono no es valido");
    return;
    }

    showSuccess(input);
    valid = true;
    return valid;
};

// validar el formulario

const validateForm = (e) => {
    e.preventDefault();

    let isNameValid = checkInput(nameInput);
    let isEmailValid = checkEmail(emailInput);
    let isPhoneValid = checkPhone(phoneInput);

    let isValidForm =
    isNameValid &&
    isEmailValid &&
    isPhoneValid;

    if (isValidForm) {
    users.push({
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
    });

    saveToLocalStorage(users);
    alert("Recibimos tu mensaje, nos contactaremos a la brevedad ");
    window.location.href = "index.html";
    }
};



const inicio = () => {
    nameInput.addEventListener("input", () => checkInput(nameInput));
    emailInput.addEventListener(`input`, ()=> checkEmail(emailInput));
    phoneInput.addEventListener("input", () => checkPhone(phoneInput));
    registerForm.addEventListener("submit", () => validateForm (e));
};

inicio();
