var img;
function preload() {

img = loadImage("tower.jpg");

}


function setup() {
  createCanvas(1024, 576);
  background(0);
}

function draw() {

background(0);

x = mouseX;

y = mouseY;

image( img, 0, 0);

var c = get(x, y);

fill(c);

rect (x, y, 50,50);

}