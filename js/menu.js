function menuOpen(button, menu){
    button.addEventListener('click', () => {
        menu.classList.toggle('hide-menu')
    })
}

export default menuOpen