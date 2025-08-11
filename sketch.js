function setup() {
  createCanvas(windowWidth, windowHeight)  
  background(33,52,73)
}

function draw() {
 d=random(10,60)
  fill(66,random(27,23))
  ellipse(mouseX, mouseY,d,d)
  
}