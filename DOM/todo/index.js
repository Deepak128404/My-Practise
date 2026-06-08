// alert('connected')
const inputRef = document.getElementById('inputTodo')
const buttonRef = document.getElementById('addTodo')
const listRef = document.getElementById('listTodo')

buttonRef.addEventListener('click', () => {
    const value = inputRef.value
    const listElement = document.createElement('li')
    listElement.innerText = value

    listElement.addEventListener('click', () => {
        listElement.contentEditable = true
        listElement.focus({ focusVisible: true })
    })
    
    listElement.addEventListener('dblclick', () => {
        listElement.remove()
        
    })
    listRef.appendChild(listElement)
    inputRef.value = ""
})