let heading = document.getElementById("heading")
let decreaseButton = document.getElementById("decrease")
let resetButton = document.getElementById("reset")
let increaseButton = document.getElementById("increase")
let count = 0

resetButton.style.backgroundColor = "grey"

increaseButton.addEventListener("click",()=>{
    count += 1
    heading.textContent = count
})
decreaseButton.addEventListener("click",()=>{
    if(count > 0){
        count -= 1
        heading.textContent = count
    }
})
resetButton.addEventListener("click",()=>{
    count = count*0
    heading.textContent = count
})

