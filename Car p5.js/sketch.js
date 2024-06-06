function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Rectangle (x,y, width, height)
  fill(51,25,0);
  rect(50,200,300,50);
  rect(100,150,150,50);
  fill(0,239,255);
  rect(100,150,50,30);
  fill(85,255,0)
  rect(165,210,80,30);
  
  
  
  // ellipse
  fill(0)
  ellipse(100,250,50,50);
  ellipse(300,250,50,50);
  ellipse(100,250,30,30);
  ellipse(300,250,30,30);
  
  //triangle (x1,y1,x2,y2,x3,y3)
 
  triangle(100,150,350,150,280,120);
  fill(255,205,0)
  triangle(300,200,350,200,390,140);

  
  //healights
  fill(255,205,0);
  ellipse(60,220,10,20);
  fill(255,0,0);
  ellipse(340,220,10,20);
}