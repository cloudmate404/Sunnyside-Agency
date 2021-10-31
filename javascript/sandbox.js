


const menuBtn = document.querySelector('.menu')
const menu = document.querySelector('.main-nav')

function menuDisplay(){
    if(menu.style.display === 'block'){
        menu.style.display ==='none'
    } else{
        menu.style.display === 'block'
    }
}
menuBtn.addEventListener('click', menuDisplay )