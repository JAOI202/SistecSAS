const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')  
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer')
const cerrarImagen = document.querySelector('.close')
// const parrafo = document.querySelector('.p1')
let tex

imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=> {
        aparecerImagen(imagen.getAttribute('src'))        
    })
})

// Selecionar imagen a aparecer
const aparecerImagen = (imagen)=> {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
    // parrafo.classList.toggle('show')
    let cinco = document.getElementById('photo');

    cinco.addEventListener('change', function () {
    figure.setAttribute('tooltip-dir', this.value);
  });
}

// Cerrar imagen 
contenedorLight.addEventListener('click', (e)=>{
    if(e.target == cerrarImagen){     
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')   
    hamburguer1.style.opacity = '1'
    // parrafo.classList.toggle('show')
    }
})

// Mostrar perfil de facebook
var a = document.getElementById('facebook'); 
a.href = "https://www.facebook.com/profile.php?id=61558624290011"
