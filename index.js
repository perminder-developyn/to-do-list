
const input = document.querySelector("#add")
const button = document.querySelector("#btn")
const list = document.querySelector("#list")

button.onclick = function(){
    
    var text = input.value
    li = document.createElement('li')
    li.innerHTML = text
    list.insertBefore(li,list.childNodes[0])
    input.value = ''
    
}
