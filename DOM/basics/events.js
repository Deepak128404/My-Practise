const parent = document.getElementById('parent')
const child = document.getElementById('child')
const body = document.body

// body.addEventListener('click', ()=> console.log('body clicked'), true)
parent.addEventListener('click', () => console.log("parent clicked"), false)
// child.addEventListener('click', () => console.log("child clicked"), false)
child.addEventListener('click', function (event) {
    event.stopPropagation()
    // event.stopImmediatePropagation()
    console.log('only target');
})
parent.addEventListener('click', function (event) {
    event.stopPropagation()
    console.log('only target parent capturing');
}, true)


// body.addEventListener('click', ()=> console.log('body clicked 2'), true)
// parent.addEventListener('click', () => console.log("parent clicked 2"),true)
// child.addEventListener('click', () => console.log("child clicked 2"), true)


// event phases 1. capturing, 2. target, 3. bubbling
// event phases happen regardless...
