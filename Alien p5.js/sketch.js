function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //Head Shape
  beginShape();
  fill(192,192,192)
  translate(width/2,height/5)
  vertex(0,100)
  bezierVertex(0,-80,100,0,150,100)
  bezierVertex(30,200,10,200,0,100)
  endShape();
  
  fill(0,0,0)
  ellipse(10,100,10,30)
  ellipse(60,100,30,30)
  ellipse(30,130,10,20)
  
  
}