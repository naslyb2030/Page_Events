const usuario=document.getElementById('username');
const contraseña=document.getElementById('contraseña');
const mensaje=document.querySelector('#mensaje');
const recordar=document.querySelector('#remember')
function error(){
    mensaje.style.display='block'
    setTimeout(()=>{
       mensaje.style.display='none'
    },3000)
}

document.getElementById('ingresar').addEventListener('click',e=>{
    e.preventDefault()
    if(usuario.value==='' || contraseña.value==='' ){
       error()
    }else if(usuario.value==='ranger'&&contraseña.value==='12345678'){
        setTimeout(()=>{
            window.location.href="./ingreso.html"
        },2000)
        
    }else{
        error()
    }
})

contraseña.addEventListener('mouseenter',(mostrar)=>{
    mostrar.target.type='text';
})
contraseña.addEventListener('mouseout',(mostrar)=>{
    mostrar.target.type='password';
})
recordar.addEventListener('change',()=>{
    if (recordar.checked) {
        alert("Vamos a recordarte")
    }
})