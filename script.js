let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d')
document.body.appendChild(canvas)
canvas.style.background = '#1f1f1f'

let width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight


let properties = {
    bgColor: '#fff',
    radius: 3,
    count: 50,
    speed: 1,
}

let draw = () => {
    let x = Math.floor(Math.random() * width)
    let y = Math.floor(Math.random() * height)
    ctx.arc(x , y , properties.radius , 0 , Math.PI * 2)
    ctx.fillRect
}

for(i = 0; i < properties.count; i++) {
    draw()
}

window.onresize = () => {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
}