(() => {
    const index = 2
    const vue   = document.createElement('div')
    const text  = document.createTextNode(`Sou um app vue, e estou na ordem ${index + 1}`)
    vue.appendChild(text)
    var event   = new CustomEvent('update', { detail: { content: vue, index }})
    document.dispatchEvent(event)
})()
