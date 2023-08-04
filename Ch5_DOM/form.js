const form = document.querySelector("form")
// console.log(form)

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(form.user.value, form.email.value)
})

// KeyboardEvent

form.addEventListener('keyup', (e)=>{
    // console.log(form.user.value)
    console.log(e.target.value)
    console.log("\nTyping...")
})