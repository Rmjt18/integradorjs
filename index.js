// contenedor de tratamientos

const tratamientoscontainer= document.querySelector(".tratamientos-container");

// boton ver mas
const showMoreBtn = document.querySelector(".btn-load")

// traemos cotainer de categories
const categoriescontainer = document.querySelector(".categories")

// traemos el html collection de todas las categorias
const categorieslist= document.querySelectorAll(".category")


// funcion para crear el html del tratamiento



const createtratamientotemplate=  (tratamiento) => {
const {id, name, price, prestaciones, consultas, img,} = tratamiento;

    return`  <div class="tratamiento-card">
    <h3 class="title">${name}</h3>
    <img src="${img}" alt="img">
    <div class="tratamiento__info">
        <div class="tratamiento__info--top">
            <span>📍$${price} Pesos Argentinos</span> 
            <span> 📌# de Consultas: ${consultas}</span>  
        </div>
        <div class="tratamiento__info--mid">
            <span>📌Prestaciones: ${prestaciones}</span>
            </div>
    </div>

</div>`
    

}
// funcion para renderizar
const rendertratamientos = (tratamientoslist) => {
    tratamientoscontainer.innerHTML += tratamientoslist.map(createtratamientotemplate).join("")

};

// // Logica ver mas tratamientos 

const showMoreTratamientos = () => {
    appState.currentTratamientosIndex +=1;

    let {tratamientos, currentTratamientosIndex} = appState
    rendertratamientos(tratamientos[currentTratamientosIndex]);

    if (currentTratamientosIndex === appState.tratamientosLimit-1 ){
        showMoreBtn.classList.add("hidden")
    }
};


// logica de filtros-------------------------

// cambiar color de seleccion category
const changeBtnActiveState = (selectedcategory) => {
    const categories =[...categorieslist]
    console.log(selectedcategory)



}

// funcion para cambiar el estado del filtro activo 

const changeFilterstate = (btn) => {
appState.activeFilter = btn.dataset.category;
changeBtnActiveState(appState.activeFilter);

}




// Funcion para aplicar filtro


const applyfilter = ({target}) => {
    if (!isInactiveFilterBtn(target)) return;
    changeFilterstate(target)

}

// funcion para saber si el elemnto es un boton de categoria y no esta activo

const isInactiveFilterBtn = (element) => {
    return (element.classList.contains("category")  &&
    !element.classList.contains("active"))
}





// funcion init
const init = () => {
    // console.log (tratamientosdata)
    rendertratamientos(appState.tratamientos[0]);
    showMoreBtn.addEventListener("click", showMoreTratamientos);
    categoriescontainer.addEventListener("click", applyfilter)


};

init();