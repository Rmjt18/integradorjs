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

const showError = (input, message) => {
    const formField= input.parentElement;
    formField.classList.add("error")
    console.log(formField);

}





const checkInput = (input) => {
//cpdifo a checkear 
// console.log( "empty" + isEmpty(input));
// console.log( "largo" + isBetween(input, 3 , 25));
console.log(showError(nameInput))
}


const inicio = () => {
    nameInput.addEventListener("input", () => checkInput(nameInput));
};

inicio();
