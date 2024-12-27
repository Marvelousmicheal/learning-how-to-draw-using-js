function drawBow(ctx,x, y, size, hue) {
  // Draw the bow
  const top = y - size / 2;
  const left = x - size / 2;
const right = x + size / 2;
const bottom = y + size/2
  ctx.strokeRect(top,left,size,size)

  ctx.beginPath()
  ctx.moveTo(x, y)
 ctx.quadraticCurveTo(left, top, left,y)

  ctx.quadraticCurveTo(left, bottom,x,y)
  ctx.quadraticCurveTo(right, bottom, right,y)

  ctx.quadraticCurveTo(right, top, x, y)
  
  ctx.fillStyle = color.normal(hue)
  ctx.fill()


  const knot ={
    size: size * 0.3,
    get top(){return y - this.size/2},
    get left(){return x - this.size/2},

    roundness: size * 0.1
  }
    ctx.beginPath()
    ctx.roundRect(knot.left,knot.top,knot.size, knot.size, knot.roundness)
    ctx.fillStyle = color.lightest(hue)
    ctx.fill()
}
