let tower;
let quote;

function preload() {
  tower = loadImage("look.jpg");
}

function setup() {
  createCanvas(600, 500);

  // Create a gradient background
  let gradient = drawingContext.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#1668FF");
  gradient.addColorStop(1, "#6A1B9A");
  drawingContext.fillStyle = gradient;
  rect(0, 0, width, height);

  // Resize tower image once before use
  tower.resize(510, 300);

  // Create a graphics object for the tower block
  let block = createGraphics(510, 300);
  block.rect(0, 0, 510, 300);
  block.canvas.getContext("2d").clip();
  block.image(tower, 0, 0);

  stroke(255);
  strokeWeight(4);
  noFill();
  rect(45, 50, 510, 300);
  image(block, 45, 50);

  
  quote = createGraphics(width, height);
  quote.fill(255, 255, 255, 150); 
  quote.textFont("Arial"); // Changed the font to Arial
  quote.textSize(22);
  quote.textAlign(CENTER, CENTER);
  quote.noStroke();
  
  quote.rect(47, 370, 500, 80, 10); 
  
  quote.fill(0); 
  quote.text("Look mom I'm here... Very top of Arasaka Tower.", 300, 410);
  

  image(quote, 0, 0);
}
