


const menuBtn = document.querySelector('.menu')
const mainNav = document.querySelector('.main-nav')
const closeMenu = document.querySelector('.closeMenu')

function menuDisplay(){
   mainNav.style.display ='flex'
   menuBtn.style.display ='none'
   closeMenu.style.display = 'flex'
}

function close(){
    mainNav.style.display = 'none'
    menuBtn.style.display ='flex'
    closeMenu.style.display = 'none'
}

menuBtn.addEventListener('click', menuDisplay )

closeMenu.addEventListener('click', close)
