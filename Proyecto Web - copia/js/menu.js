const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

/*Mostrar contenido en console*/
console.log(menu)
console.log(hamburguer)

/*Esta parte es para mostrar las opciones del menu*/
hamburguer.addEventListener('click', ()=> {
    menu.classList.toggle("spread")
})

/*Esta parte es para ocultar las opciones del menu*/
window.addEventListener('click', e=> {
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread")
    }
})