function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255); 
  let hexSize = 30; 
  let spacing = 1; // Spacing for each shapes
   fill(random(255), random(255), random(255)); //random colors

  for (let x = 0; x < width + hexSize; x += 1.5 * hexSize + spacing) {
    for (let y = 0; y < height + hexSize; y += sqrt(3) * hexSize + spacing) {
      drawHexagon(x, y, hexSize);
    }
  }
}

function drawHexagon(x, y, size) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let xOffset = cos(angle) * size;
    let yOffset = sin(angle) * size;
    vertex(x + xOffset, y + yOffset);
  }
  endShape(CLOSE);
}
