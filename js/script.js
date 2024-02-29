const contextMenu = document.getElementById('contextMenu')

function contextHandler (event) {
    event.preventDefault()

    if (contextMenu.style.display === 'none') {

        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'

        contextMenu.style.display = 'block' 
    }else{
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }

    console.log(event);
}

function hideContectMenu () {
    contextMenu.style.display = 'none'
}


function keyDownHandler (event) {
    if (event.keycode === 27) {
        contextMenu.style.display = 'none'
    }
}

document.body.addEventListener('contextMenu', contextHandler)
document.body.addEventListener('click', hideContectMenu)
document.body.addEventListener('keydown', keyDownHandler)
