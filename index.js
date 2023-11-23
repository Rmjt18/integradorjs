// contenedor de tratamientos

const tratamientoscontainer= document.querySelector(".tratamientos-container");

// boton ver mas
const showMoreBtn = document.querySelector(".btn-load");

// traemos cotainer de categories
const categoriescontainer = document.querySelector(".categories");

// traemos el html collection de todas las categorias
const categorieslist= document.querySelectorAll(".category")

// Carrito
const cartBtn = document.querySelector(".cart-label");
// Boton para abrir y cerrar el menu
const menuBtn = document.querySelector(".menu-label");
// Carrito div
const cartMenu = document.querySelector(".cart");
// Menu (Hamburguesa)
const barsMenu = document.querySelector(".nav-links");
// Overlay
const overlay = document.querySelector(".overlay");

const cartBubble = document.querySelector(".cart-bubble");
// Total del carrito
const total = document.querySelector(".total");
// Boton de comprar
const buyBtn = document.querySelector(".btn-buy");
// Boton para borrar
const deleteBtn = document.querySelector(".btn-delete");
// Cart container
const tratamientosCart = document.querySelector(".cart-container");

const succesModal = document.querySelector(".add-modal")

// seteamos carro------------
let cart= JSON.parse(localStorage.getItem("cart")) || []

// local storage---------------


const saveCart=()=> {
    localStorage.setItem('cart', JSON.stringify(cart))
}

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
            <button class="btn-add" 
            data-id='${id}' 
            data-name='${name}' 
            data-img='${img}' 
            data-price='${price}' 

            >  Agregar </button>
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

// ocultar ver mas si hay categoria selecionada


const setshowmorevisibility= () => {
    if(!appState.activeFilter){
        showMoreBtn.classList.add("hidden");
    }
    showMoreBtn.classList.add("hidden")
}




// logica de filtros-------------------------

// cambiar color de seleccion category
const changeBtnActiveState = (selectedcategory) => {
    const categories =[...categorieslist]
    

    categories.forEach((categorybtn) => {
        if(categorybtn.dataset.category !== selectedcategory){
            categorybtn.classList.remove("active");
            return;

        }
        categorybtn.classList.add("active");
    });

}

// funcion para cambiar el estado del filtro activo 

const changeFilterstate = (btn) => {
appState.activeFilter = btn.dataset.category;
changeBtnActiveState(appState.activeFilter);
setshowmorevisibility(appState.activeFilter);

}

// funcion para renderizar lo filtrado 

const renderfilteredtratamientos= () => {

    const filteredtratamientos= tratamientosdata.filter((tratamiento) => tratamiento.category === appState.activeFilter)

    rendertratamientos(filteredtratamientos)
}


// Funcion para aplicar filtro


const applyfilter = ({target}) => {
    if (!isInactiveFilterBtn(target)) return;
    changeFilterstate(target);
    tratamientoscontainer.innerHTML = "";
    if(appState.activeFilter){
        renderfilteredtratamientos();
        appState.currentTratamientosIndex=0;
        return;
    }

};

// funcion para saber si el elemnto es un boton de categoria y no esta activo

const isInactiveFilterBtn = (element) => {
    return (element.classList.contains("category") &&
    !element.classList.contains("active"))
}


// logica de carrito------------------------------
const toggleCart = () => {
    cartMenu.classList.toggle("open-cart");
    if (barsMenu.classList.contains("open-menu")){
        barsMenu.classList.remove("open-menu");
        return;

    }

    overlay.classList.toggle("show-overlay")

};

const toggleMenu= () => {
    barsMenu.classList.toggle("open-menu");
    if(cartMenu.classList.remove("open.cart")){
        cartMenu.classList.remove("open-cart");
    return;
    }
    overlay.classList.toggle("show-overlay")
}


// funcion para cerrar el menu

const closeOnOverLayClick= () => {
    barsMenu.classList.remove("open-menu");
    cartMenu.classList.remove("open-cart");
    overlay.classList.remove("show-overlay");
}

// funcion para cerrar menues
const closeOnScroll= () => {
    if(barsMenu.classList.contains("open-menu") &&
    cartMenu.classList.contains("open-cart")
        )
            return;
        
    barsMenu.classList.remove("open-menu");
    cartMenu.classList.remove("open-cart");
    overlay.classList.remove("show-overlay");

}
// logica carrito_________

// funcion para crear el template del producto en el carrito--------------------
const createCartTratamientoTemplate= (tratamientosCart) => {
    const {price, id, img, name, quantity} = tratamientosCart

    return  `  <div class="cart-item">
    <img src="${img}" class="${name}">
    <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <span class="item-price">${price}</span>

        <div class="item-handler">
            <span class="quantity-handler down" data-id=${id}>-</span>
            <span class="item-quantity">${quantity}</span>
            <span class="quantity-handler up" data-id=${id}>+</span>
            </div>
    </div>
</div>`
    
}

// render carrito
const renderCart= () => {
    if (!cart.length){
    tratamientosCart.innerHTML = `<p class="empty-msg"> Agrega un tratamiento  </p>`;
        return;
    }
    tratamientosCart.innerHTML = cart.map(createCartTratamientoTemplate).join('')
};

// funcion para totalizar compra 
const getCartTotal =() => {
    return cart.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity ,0)

}
// funcion de Total----------------
const showCartTotal= () =>{
    total.innerHTML =`${getCartTotal().toFixed(0)} Pesos Argentinos`
    
}

// actulizar bubuja 

const renderCartBubble =() => {
    cartBubble.textContent=cart.reduce((acc, cur)=> acc + cur.quantity ,0)

}

// habilitacion de botones
const disableBtn= (btn) => {
    if (!cart.length){ 
        btn.classList.add(`disabled`)
    } else { 
        btn.classList.remove(`disabled`)
    }
};

// funcion para  ejecutar funciones de actualizacion del carro ------

const updateCartState = () => {
saveCart();
renderCart();
showCartTotal();
renderCartBubble();
disableBtn(buyBtn);
disableBtn(deleteBtn);

}


const addtratamiento = (e) => {  
    if (!e.target.classList.contains("btn-add")) return;
const tratamiento = e.target.dataset;

// if para verificar tratamientos que no este en el carrito
if (isExistingCartTratamiento(tratamiento)){
    addUnitToTratamiento(tratamiento);
    showSuccesModal("Se Agrego Una Unidad Mas Producto")
    
} else{
    createCartTratamiento(tratamiento);
    showSuccesModal("Tratamiento Agregado")

}
updateCartState();
console.log(cart);

};

// funcion para agregar una unidad 
const addUnitToTratamiento= (tratamiento) =>{
    cart = cart.map((tratamientosCart) => 
    tratamientosCart.id === tratamiento.id
    ? {...tratamientosCart, quantity: tratamientosCart.quantity + 1}
    :tratamientosCart
    );

}


// funcion para saber si el tratamiento ya esta en e carro
const isExistingCartTratamiento= (tratamiento) => {
    return cart.find((item) => item.id === tratamiento.id);
}
// funcion para crear un objeto con la info del tratamiento para agregar al carro
const createCartTratamiento= (tratamiento) => {
    cart =[...cart, {...tratamiento, quantity: 1}];


}

// funcion para mostar modal.----------
const showSuccesModal= (msg) =>{
    succesModal.classList.add("active-modal")
    succesModal.textContent= msg

    setTimeout(()=>{
        succesModal.classList.remove("active-modal")
    } ,2000)

}

// funcion agregar ____________

const handlePLusBtnEvent= (id)=> {
    const existingCartTratamiento = cart.find(item => item.id === id)
    addUnitToTratamiento(existingCartTratamiento)

}

// funcion para manejar le menos en el carrito 

const handleMinusBtnEvent= (id) => {
    const existingCartTratamiento = cart.find(item => item.id === id)
if (existingCartTratamiento.quantity === 1){
    if(window.confirm("Deseas Borrar El Producto?")){
    removeTratamientoFromCart(existingCartTratamiento)
    }
    return
}

    substractTratamientoUnit(existingCartTratamiento)

}
const substractTratamientoUnit = (existingCartTratamiento) => {
    cart = cart.map((tratamiento) => {
        return tratamiento.id === existingCartTratamiento.id
        ? {...tratamiento, quantity: Number(tratamiento.quantity) -1 }
        :tratamiento
    })
}

const removeTratamientoFromCart = ( existingCartTratamiento) => {
    cart = cart.filter((tratamiento) => tratamiento.id !== existingCartTratamiento.id)
    updateCartState()
}


// funcionalidad de mas y menos 

const handleQuantity= (e)=> {
    if (e.target.classList.contains("up")){
        console.log("tuki")
        handlePLusBtnEvent(e.target.dataset.id)
    }
    else if (e.target.classList.contains("down")){
        handleMinusBtnEvent(e.target.dataset.id)
    }

    updateCartState()
}

const resetCartItem= () => {
    cart = []
    updateCartState()

}
const completeCartAction = (confirmMsg, successMsg) =>
{if (!cart.length) return
    if (window.confirm(confirmMsg)){
        resetCartItem()
        alert(successMsg)
    }
}
const completeBuy= ()=> {
    completeCartAction ("Deseas Completar Tu Compra" , "Gracias Por Tu Compra")

}

const deleteCart = ()=> {
    completeCartAction("Deseas Borrar EL Carro" , "No Hay Productos En El Carro")

}

// funcion init
const init = () => {
    // console.log (tratamientosdata)
    rendertratamientos(appState.tratamientos[0]);
    showMoreBtn.addEventListener("click", showMoreTratamientos);
    categoriescontainer.addEventListener("click", applyfilter);

    cartBtn.addEventListener("click", toggleCart)
    menuBtn,addEventListener("click" , toggleMenu) 
    overlay.addEventListener("click" , closeOnOverLayClick)
    window.addEventListener("scroll",closeOnScroll );
    tratamientoscontainer.addEventListener("click" , addtratamiento)
    tratamientosCart.addEventListener("click" , handleQuantity)
    document.addEventListener("DOMContentLoaded", renderCart)
    buyBtn.addEventListener("click",  completeBuy)
    deleteBtn.addEventListener("click",  deleteCart)
    disableBtn(buyBtn)
    disableBtn(deleteBtn)
    renderCartBubble(cart)

};

init();