//var for the img
let romeoandjuliet

function preload(){
  tower =loadImage("look.jpg")
}

function setup() {
  createCanvas(600, 500)
  background("#9C27B0")
  tower.resize(300, 200)
  
  let block = createGraphics(500,400)
  block.rect(0, 0, 900, 300)
  block.canvas.getContext("2d").clip() 
  tower.resize(510, 300)
  block.image(tower, -10, 0)
  image(block, 47, 50) 
  

  quote = createGraphics(width, height)
  quote.fill("#FFFFFF")
  quote.textFont("Oswald") 
  quote.rect(47, 340, 500, 100)
  quote.erase() 
  quote.textSize(24) 
  
  quote.textAlign(CENTER) 
  quote.text("Look mom I'm here... Very top of Arasaka Tower.", 300, 381) 
 
  image(quote, 0, 0) //the quote canvas is main
}
