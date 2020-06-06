(() => {
    const index   = 3
    const svelte  = document.createElement('div')
    const text    = document.createTextNode(`Sou um app svelte, e estou na ordem ${index + 1}`)
    svelte.appendChild(text)
    var event     = new CustomEvent('update', { detail: { content: svelte, index }})
    document.dispatchEvent(event)
})()
