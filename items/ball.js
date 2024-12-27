function drawBall(ctx, x, y, size, hue) {
  const top = y - size / 2;
  const left = x - size / 2;

  const ring = {
    radius: size * 0.1,
    x,
    get y() {
      return top + this.radius;
    },
    thickness: size * 0.05,
    color: color.darkest(hue),
  };

  draw.circle(ctx, ring.x, ring.y, ring.radius, {
    strokeStyle: ring.color,
    lineWidth: ring.thickness,
    outline: "inside",
  });

  const ball = {
    radius: size * 0.45,
    x,
    get y() {
      return top + ring.radius + this.radius;
    },
    color: color.normal(hue),
  };
  const highlight = {
    x: ball.x - ball.radius * 0.3,
    y: ball.y - ball.radius * 0.3,
  };
  const grd = ctx.createRadialGradient(
    highlight.x,
    highlight.y,
    0,
    highlight.x,
    highlight.y,
    ball.radius
  );

  grd.addColorStop(0, color.light(hue));
  grd.addColorStop(0.3, color.normal(hue));
  grd.addColorStop(1, color.darkest(hue));

  draw.circle(ctx, ball.x, ball.y, ball.radius, {
    fillStyle: grd,
  });

  // ctx.beginPath()
  // ctx.arc(ring.x, ring.y, ring.radius - ring.thickness / 2 ,0,Math.PI * 2)
  // ctx.strokeStyle = ring.color
  // ctx.stroke()
}
