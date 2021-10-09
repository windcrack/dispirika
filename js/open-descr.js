function openDescr(body){
    body.addEventListener("click", (e) => {
        const target = e.target
        const title = target.classList.contains("individual-descr__text")
        const titleBlock =  target.classList.contains('individual-descr__title')
        const titleArrow = target.classList.contains('fas')
        if (title || titleBlock || titleArrow) {
            const details = target.closest(".title-quest").nextElementSibling.querySelector(".individual-descr__sub-text")
            const arrow = target.closest('.title-quest').querySelector('.fa-sort-down')
            details.classList.toggle("hide")
            arrow.classList.toggle('rotate-arrow')
        }
    })
}

export default openDescr