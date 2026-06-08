const buttonRef = document.getElementById('toggleButton')
buttonRef.innerText = 'toggleDark'

buttonRef.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    
    if(document.body.classList.contains('dark')) {
        buttonRef.textContent = 'toggleLight'
    }
    else{
        buttonRef.textContent = 'toggleDark'
   }

})