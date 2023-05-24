// ejercicio 1
// martin julio
// basado en obra de yakov chernikhov

let img;
let vsb = false;

function setup() {
  createCanvas(400, 500);
  img = loadImage("imagen.png");

  background(246, 224, 184);

  stroke(20, 31, 23);
  strokeCap(SQUARE);
  strokeWeight(1.5);

  fill(88, 98, 85);
  triangle(61, 114, 79, 388, 173, 333);

  fill(24, 75, 75);
  quad(79, 388, 173, 333, 247, 358, 208, 431);

  fill(101, 130, 111);
  quad(247, 358, 173, 333, 270, 79, 290, 264);

  fill(61, 120, 102);
  triangle(208, 431, 302, 376, 340, 152);

  fill(88, 151, 120);
  triangle(270, 79, 198, 233, 75, 193);

  fill(188, 99, 29);
  triangle(126, 186, 131, 270, 155, 257);

  fill(229, 151, 24);
  triangle(126, 186, 131, 270, 101, 262);
}

function draw() {
  if (!vsb) setup();
  else {
    image(img, 0, 0);

    if (0 <= mouseX && mouseX <= width && 0 <= mouseY && mouseY <= height) {
      noStroke();
      fill(230);
      rect(0, 0, 60, 16);
      fill(0);
      textAlign(CENTER);
      text(" - ", 28, 12);
      textAlign(RIGHT);
      text(Math.trunc(mouseX), 23, 12);
      textAlign(LEFT);
      text(Math.trunc(mouseY), 33, 12);
    }
  }
}

function mousePressed() {
  vsb = true;
  return false;
}

function mouseReleased() {
  vsb = false;
  return false;
}
