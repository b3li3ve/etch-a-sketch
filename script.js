const container = document.querySelector(".container")
for (let i = 0; i < 256; i++){
   const div = document.createElement('div')
   div.classList.add('item')
   div.addEventListener("mouseover", function(e) {
    e.target.style.background = "black"
   })
    container.appendChild(div)
}