const draw = {}

draw.circle = (ctx, x , y, radius, options) =>{
    ctx.beginPath()
    ctx.arc(x,y,radius, 0 , Math.PI * 2)
    Object.assign(ctx, options)

    options.fillStyle && ctx.fill()
    options.strokeStyle && ctx.stroke()
}

draw.line=(ctx, fromX, fromY, toX, toY, options)=>{
    ctx.beginPath()
    ctx.moveTo(fromX, fromY)
    ctx.lineTo(toX, toY)
    Object.assign(ctx, options)
    ctx.stroke()

}



const color = {}
color.darkest = (hue)=> `hsl(${hue}, 100%, 10%)`
color.dark = (hue)=> `hsl(${hue}, 100%, 30%)`
color.normal = (hue)=> `hsl(${hue}, 100%, 50%)`
color.light = (hue)=> `hsl(${hue}, 100%, 70%)`
color.lightest = (hue)=> `hsl(${hue}, 100%, 90%)`