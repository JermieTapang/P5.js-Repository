var img;
function preload() {

img = loadImage("nightcity.jpg");

}


function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(0);
  x = mouseX
  y = mouseY
  image(img,0,0);
  var c = get (x,y);
  fill(c);
  ellipse (x,y,50,50);
   var v = map(mouseX, 0, width,0,-10);
  filter(BLUR,y)
}