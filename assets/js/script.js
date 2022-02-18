let imagensContainer = document.querySelector(".imagens")
let botoes = document.querySelector(".botoes")
let imgBotoes = botoes.querySelectorAll("img")
let img = imagensContainer.querySelector("img");

function clicado(i){
    let clickcIndex = i.target.getAttribute("data-index")
    img.src = `./assets/img/${clickcIndex}.jpg`
    imgBotoes.forEach((image)=>{
        image.classList.remove('ativo')
    })
    i.target.classList.add('ativo')
}

function setIndexImg(i, index){
    i.setAttribute("data-index", ++index)
}
function escutador(i){
    i.addEventListener("click", clicado)
}


imgBotoes.forEach(escutador)
imgBotoes.forEach(setIndexImg)