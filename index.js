// contenedor de tratamientos

const tratamientoscontainer= document.querySelector(".tratamientos-container");

// funcion para crear el htl del tratamiento



const createtratamientotemplate=  (tratamiento) => {
const {id, name, price, prestaciones, consultas, img,} = tratamiento;

    return`  <div class="tratamiento-card">
    <h3 class="title">${name}</h3>
    <img src="${img}" alt="img">
    <div class="tratamiento__info">
        <div class="tratamiento__info--top">
            <span>📍$${price} Pesos Argentinos</span> 
            <span> 📌# de Consultas:${consultas}</span>  
        </div>
        <div class="tratamiento__info--mid">
            <span>📌Prestaciones:${prestaciones}</span>
            </div>
    </div>

</div>`
    

}
// funcion para renderizar
const rendertratamientos = (tratamientoslist) => {
    tratamientoscontainer.innerHTML += tratamientoslist.map(createtratamientotemplate).join("")

};

// funcion init
const init = () => {
    // console.log (tratamientosdata)
    rendertratamientos(tratamientosdata);

};

init()