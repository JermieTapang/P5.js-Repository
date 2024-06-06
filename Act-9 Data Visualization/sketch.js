let categories = ['Movies', 'Gaming', 'Sports', 'Social Media'];
let data = [30, 50, 40, 60]; // Example data for each category
let colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']; // Colors for each category

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(255);
  let total = data.reduce((sum, value) => sum + value, 0); 
  let angleStart = 0; 

  // Draw the pie chart
  for (let i = 0; i < data.length; i++) {
    let angleEnd = angleStart + (data[i] / total) * TWO_PI; 
    fill(colors[i]);
    arc(width / 2, height / 2, 400, 400, angleStart, angleEnd, PIE);
    angleStart = angleEnd;
  }


  for (let i = 0; i < categories.length; i++) {
    fill(colors[i]);
    rect(50, 50 + i * 30, 20, 20);
    fill(0);
    textAlign(LEFT, CENTER);
    text(categories[i], 80, 60 + i * 30);
  }
}
