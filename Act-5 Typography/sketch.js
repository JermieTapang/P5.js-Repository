// Declare variable for the font
let font;
let points;
let colors = [];

// Preload the font
function preload() { 
  font = loadFont("Lagoonya-1jnqZ.otf");
}

function setup() { 
  createCanvas(700, 400); // Big canvas
  noStroke();
  textSize(100);
  textFont(font);

  // Generate points for the text
  points = font.textToPoints("Jerulee", 50, 220, 100, {
    sampleFactor: 0.2
  });

  // Generate random colors for each point
  for (let i = 0; i < points.length; i++) {
    colors.push(color(random(255), random(255), random(255)));
  }

  backgroundGradient("#FFC107", "#FF5722");
}

function draw() {
  // Redraw the gradient background
  backgroundGradient("#FFC107", "#FF5722");

  // Draw a decorative line
  fill("#03045e");
  rect(50, 250, 310, 4);

  // Draw the text points with animation and colors
  for (let i = 0; i < points.length; i++) { 
    let p = points[i];
    fill(colors[i]);
    ellipse(p.x, p.y, 6 + sin(frameCount * 0.1 + i * 0.5) * 2, 6 + sin(frameCount * 0.1 + i * 0.5) * 2);
  }
}

// Function to draw a gradient background
function backgroundGradient(c1, c2) {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(c1), color(c2), inter);
    stroke(c);
    line(0, y, width, y);
  }
}
