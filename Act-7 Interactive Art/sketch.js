function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0); 

  let c1 = color(0, 0, 50);
  let c2 = color(0, 50, 100);

  // Draw the gradient background
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }

  noStroke(); 
  
 
  for (let x = 20; x < 400; x += 40) {
    for (let y = 20; y < 400; y += 40) {
      // Get the distance from the circle to the mouse
      let distance = dist(mouseX, mouseY, x, y);
      // Map the distance to a range that looks better
      let diameter = map(distance, 0, 400, 50, 10);
      
      // Map the x and y to color ranges
      let r = map(x, 0, 400, 50, 255);
      let g = map(y, 0, 400, 50, 255);
      let b = 255 - map(distance, 0, 400, 0, 255); 
      
      fill(r, g, b, 200);
      

      circle(x, y, diameter);
    }
  }
}
