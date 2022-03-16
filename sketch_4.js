console.log('Hello Javascript 4');

// state
let circleY = 0;
//Code that’s outside of any functions is run once at the very beginning of the program.


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 

  // p5.js automatically calls the draw function 60 times per second
function draw() {
  // clear out old frames

  //0, 50, 87, 162, 209,255 = black -> grey -> white 
  background(0);
  stroke(0);// remember that 0 = black
  fill('#39FF14');

 
  //draw current frame based on state
  circle(500, circleY, 75);

  // modify state
  circleY = circleY + 1;

  //You know the circle is below the bottom of the window when circleY is greater than height
  if(circleY > height) {
    circleY = 0;
  }
}

