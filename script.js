function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver light-mode, adicionar essa imagem
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Jhuan Gomes sorrindo, usando oculos e utilizando uma camisa preta."
    )
  } else {
    // se estiver não estiver light-mode, adicionar essa imagem
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Jhuan Gomes em seu quarto, utilizando uma camisa preta."
    )
  }
}
