const lista=document.querySelector('#listProducts');
const boton=document.querySelector('#pedir');
const modal=document.querySelector('.modal');
const cancelar=document.querySelector('.cancel');
const aceptar=document.querySelector('.acept');
const modalProduct=document.querySelector('.modalProduct');
const salir=document.querySelector('#out');

boton.addEventListener('click',()=>{
    if (lista.selectedIndex===0) {
        alert('No has escogido nada');
    }else{
        modal.style.top=0;
        modalProduct.textContent=lista.options[lista.selectedIndex].text
    }
  
})
cancelar.addEventListener('click',()=>{
    modal.style.top='-100vh';
    lista.selectedIndex=0;
})
salir.addEventListener('click',()=>{
    window.location.href="./index.html"
})
aceptar.addEventListener('click',()=>{
    window.location.href="./compra.html"
})