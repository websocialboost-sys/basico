// SCROLL SUAVE
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault()

    const section = document.querySelector(this.getAttribute('href'))

    section.scrollIntoView({
      behavior: "smooth"
    })
  })
})


// ANIMACIÓN AL HACER SCROLL
const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }

  })

})

cards.forEach(card => {

  card.style.opacity = "0"
  card.style.transform = "translateY(40px)"
  card.style.transition = "0.6s"

  observer.observe(card)

})


// MODAL DE AUTOS
const autos = document.querySelectorAll(".card")

autos.forEach(auto => {

  auto.addEventListener("click", () => {

    const nombre = auto.querySelector("h3").innerText
    const precio = auto.querySelector("p").innerText
    const img = auto.querySelector("img").src

    const modal = document.createElement("div")

    modal.classList.add("modal")

    modal.innerHTML = `
      <div class="modal-content">
        <span class="cerrar">X</span>
        <img src="${img}">
        <h2>${nombre}</h2>
        <p>${precio}</p>

        <a href="https://wa.me/5212221234567?text=Hola quiero información del ${nombre}" target="_blank">
        Preguntar por WhatsApp
        </a>

      </div>
    `

    document.body.appendChild(modal)

    modal.querySelector(".cerrar").onclick = () => {
      modal.remove()
    }

  })

})



