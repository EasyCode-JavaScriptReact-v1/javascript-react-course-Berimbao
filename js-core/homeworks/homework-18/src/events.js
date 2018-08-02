
let block1 = document.querySelector(".one")
let block2 = document.querySelector(".two")
let block3 = document.querySelector(".three")


let startPosition = 0;
let mousePositionX = 0;


block1.parentElement.addEventListener("mousedown", function(event){
    
    if(event.target.className == "resize"){
        startPosition = event.target.parentElement.offsetLeft
        block1.parentElement.addEventListener("mousemove", function(){
            setMaxWidth(block1)
        })
    }
})
block1.parentElement.addEventListener("mouseup", function(event){
    console.log(event)
    console.log(this)
    this.removeEventListener("mousemove",function(){
        setMaxWidth(block1)
    })
})
  
function setMaxWidth(elem){
    let blockStartWidth = block1.offsetWidth
    mousePositionY = event.clientX
    let width = (mousePositionY + startPosition) - blockStartWidth
    elem.style.flexBasis = width+"px"
}


// block1.addEventListener("mouseup", function(event){
    
// })
