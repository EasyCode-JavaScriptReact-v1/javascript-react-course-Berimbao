
let block1 = document.querySelector(".one").children[0]
let block2 = document.querySelector(".two").children[0]
let block3 = document.querySelector(".three").children[0]


let startPosition = 0;
let mousePositionX = 0;

block1.addEventListener("mousedown", function(event){
    if(event.target.className == "resize"){
        let activeBlock = block1.children
        console.log(block1.parentElement)
        startPosition = event.target.parentElement.offsetLeft
        console.log(event.clientX)
        block1.addEventListener("mousemove",setMaxWidth)
    }
})
block1.addEventListener("mouseup", function(event){
    block1.removeEventListener("mousemove",setMaxWidth)
})
  
function setMaxWidth(){
    mousePositionY = event.clientX
    let width = mousePositionY - startPosition + 10
    console.log(event.target)
    event.target.style.maxWidth = width+"px"
}


// block1.addEventListener("mouseup", function(event){
    
// })
