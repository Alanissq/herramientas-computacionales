function setup() {
  createCanvas(windowWidth, windowHeight)  
  background(33,52,73)
}

function draw() {
 d=random(0,255)
  fill(d,d,d)
  ellipse(mouseX, mouseY,d,d)

}
function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
