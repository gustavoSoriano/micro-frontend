let portlets    = new Array(3)
const container = document.getElementById('content')

document.addEventListener('update', _ => {        
    const { index, content } = _.detail 
    container.innerHTML      = ''   
    portlets[index]          = content
    portlets.forEach( element => container.appendChild(element) )
})
