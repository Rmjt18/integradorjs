// contenedor de tratamientos

const tratamientoscontainer= document.querySelector(".tratamientos-container");

// funcion para crear el htl del tratamiento



const createtratamientotemplate=  (tratamiento) => {
const {id, name, price, consultas, img} = tratamiento;
    return`  <div class="pokemon">
    <img src="${img}" alt="ivysaur">
    <div class="pokemon__info">
        <div class="pokemon__info--top">
            <h3>${name}</h3>
        </div>
        <div class="pokemon__info--mid">
            <div class="pokemon__info--mid--type">
                <img src="img/tipoplanta.jpeg" alt="tipoplanta">
                <span>${price}</span>
            </div>
            </div>
            <div class="pokemon__info--down">
                <p>Fuerte contra - tipo Agua 💪<br>
                Debil contra - tipo fuego 😵‍💫</p>
            </div>
            
    </div>
    
    <div> <a class="btn" href="#"> Evolucionar</a></div>
    
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