let photo = document.querySelector(".headTwo")

setInterval(() => {
    photo.style.backgroundImage = "url(./jschmidt-2.png)"
},2000)
setInterval(() => {
    photo.style.backgroundImage = "url(./jschmidt.png)"
},4000)

let button = document.querySelector(".duyme")
let menu = document.querySelector(".newDiv")

let d = false
button.addEventListener("click",() => {
    d = !d   
    if(d){
        menu.style.display = "flex"
    }else{
        menu.style.display = "none"
    }
})