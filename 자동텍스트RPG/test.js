function logMessage(msg, color) {
    if(!color) { color = 'black' }
    let div = document.createElement('div')
    div.innerText = msg
    div.style.color = color
    document.getElementById('log').appendChild(div)
}

