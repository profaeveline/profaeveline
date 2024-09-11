function setup() {
  createCanvas(400, 400);
  background("white")
}

function draw() {
  stroke("pink");
  fill("blue");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 50, 30);
  }
}
