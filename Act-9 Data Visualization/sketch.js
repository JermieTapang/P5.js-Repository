let table;
let data = [];

function preload() {
  // Load the CSV file
  table = loadTable("Chart.csv", "csv", "header");
}

function setup() {
  createCanvas(500, 400);
  background(255);

  // Check if the table is loaded
  if (table) {
    // Get the number of rows
    let rowCount = table.getRowCount();

    // Get the Data
    for (let r = 0; r < rowCount; r++) {
      let row = table.getRow(r);
      let category = row.getString("ID");
      let value = row.getNum("Activities");
      data.push({ category, value });
    }

    // Draw the pie chart
    drawPieChart(data);
  } else {
    console.error("Failed to load the CSV file.");
  }
}

function drawPieChart(data) {
  let total = data.reduce((sum, item) => sum + item.value, 0);
  let angleStart = 0;
  let colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  for (let i = 0; i < data.length; i++) {
    let angleEnd = angleStart + (data[i].value / total) * TWO_PI;
    let percentage = (data[i].value / total) * 100;
    let hours = data[i].value;

    // Display percentage and hours spent on each segment
    let label = `${data[i].category}\n${percentage.toFixed(
      1
    )}% (${hours} hours)`;

    fill(colors[i % colors.length]);
    arc(width / 2, height / 2, 300, 300, angleStart, angleEnd, PIE);
    angleStart = angleEnd;

    // Add labels
    let angleMid = (angleStart + angleEnd) / 2;
    let labelX = width / 2 + cos(angleMid) * 170; // Adjusted radius for labels
    let labelY = height / 2 + sin(angleMid) * 170; // Adjusted radius for labels
    textAlign(CENTER, CENTER);
    fill(0);
    text(label, labelX, labelY);
  }
}
