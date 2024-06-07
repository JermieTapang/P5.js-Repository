let img;
let img2;

function preload() {
  img = loadImage("arasaka.jpg");
  img2 = loadImage("quote.png");
}

function setup() {
  // Set up the canvas
  createCanvas(800, 600);
  background("white");

  // Resize the images
  img.resize(450, 300);
  img2.resize(450, 135);

  // Position of the img
  let imgX = (width - img.width) / 2;
  let imgY = (height - img.height) / 2 - 100;
  let img2X = (width - img2.width) / 2;
  let img2Y = imgY + img.height + 20;

  // borders and shadow
  drawImageWithBorderAndShadow(img, imgX, imgY, 10, "#000000", 5, 5);

  drawImageWithBorderAndShadow(img2, img2X, img2Y, 10, "#000000", 5, 5);
}

function drawImageWithBorderAndShadow(img, x, y, borderWidth, borderColor, shadowOffsetX, shadowOffsetY) {
  // Draw shadow
  push();
  fill(0, 0, 0, 50);
  noStroke();
  rect(x + shadowOffsetX, y + shadowOffsetY, img.width, img.height);
  pop();

  // Draw border
  push();
  stroke(borderColor);
  strokeWeight(borderWidth);
  noFill();
  rect(x, y, img.width, img.height);
  pop();

  // Draw image
  image(img, x, y);
}
