let button = document.getElementById("submit-btn")
let inputVal = document.getElementById("inputField")
let userList = document.getElementById("item-list")

button.addEventListener("click",()=>{
    const task = inputVal.value.trim()
    if(task!==" "){
        const list = document.createElement("li")
        list.textContent=task
        userList.appendChild(list)
        inputVal.value=' '
    }
})
inputVal.addEventListener("keypress",(e)=>{
    if(e.key==='Enter'){
        button.click()
    }
})