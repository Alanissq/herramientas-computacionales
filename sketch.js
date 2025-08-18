function setup() {
  createCanvas(windowWidth, windowHeight);
  background(33, 52, 73);
}

function draw() {
  d = random(0, 60);
  colorMode(HSB, 360.1, 100);
  fill(random(0, 359), 100, 100);
  ellipse(mouseX, mouseY, d, d);
}
function keyPressed() {
  if (key === "p") {
    save("dibujo.jpg");
  }
}
