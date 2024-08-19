let menu = document.querySelector('#menubar');
let mynav = document.querySelector('nav')

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}