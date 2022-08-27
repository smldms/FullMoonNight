//////////////////
console.log("Full Moon Night | smldms 2022.08"), console.log("HASH: " + fxhash);
console.log(palette.name);
///////////////////////
let _seed;
let scl = 2;
let w = 1024 * scl;
/////TREE VAR

///////
let cnv;
let splash;
let noiseScale = 1;
let xoff = 0;
let yoff = 0;
let woff = 0;
let zoff = 0;
let down = fxrand();
let g;
let skyClr1, skyClr2, moonClr1, moonClr2, mountClr1, mountClr2;
let myFont;
let maxCount;
let angle;
let s = false;
let pX = [];
let pY = [];

let fg = {
  n: fxrand(),
  name: ""
}
if (fg.n <= 0.5) {
  fg.name = "YES"
} else {
  fg.name = "NO"
}
let birdy = {
  n: fxrand(),
  name: ""
}
if (birdy.n <= 0.5) {
  birdy.name = "YES"
} else {
  birdy.name = "NO"
}

function setup() {
  _seed = floor(999999 * fxrand());
  randomSeed(_seed);
  noiseSeed(_seed);
  cnv = createCanvas(w * 1.75, w);
  cnv.parent('fullScreen');
  background(0)
  skyClr1 = random(palette.sky)
  skyClr2 = random(palette.sky)
  // drawingContext.filter = 'invert('+negatif.val+')'
  current = createVector(0, 0);
  previous = createVector(0, 0);
  mountClr1 = random(palette.mount)
  mountClr2 = random(palette.mount)
  pixelDensity(1);
  angleMode(DEGREES)
  /////////////////////////
  poY = fxrandBetween(height * 0.1, height * 0.25);
  poX = fxrandBetween(width * 0.15, width * 0.85);

  push()
  blendMode(OVERLAY)
  linearGradientFill(0, height / 2, 0, height, skyClr1, skyClr2)
  rect(0, 0, width, height)
  pop()


  stars()
  ////////SUN
  push()
  let factor = fxrandBetween(1,5)
  noStroke()
  linearGradientFill(width / 2, height * 0.1, width / 2, height * 0.66, palette.moon[1], palette.moon[0])
  drawingContext.filter = 'blur(' + 50 * scl + 'px)'
  ellipse(poX, height * 0.33, height / factor)
  linearGradientFill(width / 2, height * 0.1, width / 2, height * 0.66, palette.moon[1], palette.moon[0])

  drawingContext.filter = 'blur(' + 250 * scl + 'px)'
  ellipse(poX, height * 0.33, height / factor)
  linearGradientFill(width / 2, height * 0.1, width / 2, height * 0.66, palette.moon[1], palette.moon[0])

  drawingContext.filter = 'blur(' + 12.5 * scl + 'px)'
  ellipse(poX, height * 0.33, height / factor)
  pop()
  ////////////////END SUN
}

function draw() {
  blendMode(BLEND)
  mount()

  if (s == true) {
    noLoop();
    rectMode(CENTER)
    radial()
    myFrame(width / 2, height / 2, 50, width, height, 255)
    grainy()
    fxpreview()
    // timer()
  }
}

function mount() {
  push()
  let x = map(noise(xoff), 0, 1, 0, width);
  let y = map(noise(yoff), 0, 1, 0, height);
  let w = map(noise(woff), 0, 1, -width, width * 2);
  let z = map(noise(woff), 0, 1, width * 2, -width);

  pX.push(x);
  pY.push(y);
  print(pX[0], pY[0]);

  linearGradientFill(x, y, w / 3, z / 3, palette.moon[1], palette.moon[0])


  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 5 + down / 1000;
  drawingContext.shadowBlur = 5 + (down / 100 * scl);
  drawingContext.shadowColor = color(0, 75);
  strokeWeight(width / 500)
  stroke(random(palette.mount))

  beginShape()
  vertex(x, y + down)
  vertex(w, height)
  vertex(z, height)
  endShape()
  pop()
  xoff += 0.005;
  yoff += 0.0025;
  woff += 0.025;
  zoff += 0.0015;
  down++;


  if (y + down >= height * 1.01) {
    s = true;
  }
}

function fxrandBetween(a, b) {
  if (!b) {
    return fxrand() * a
  }
  return fxrand() * (b - a) + a
}


function stars() {
  let nbrStars = Math.floor(fxrandBetween(500,2500))
  print (nbrStars)
  for (let i = 0; i < nbrStars; i++) {
    ellipse(fxrand() * width, fxrand() * height, fxrand() * 5)
  }
}

function radialGradientFill(x1, y1, r1, x2, y2, r2, color1, color2) {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
  gradient.addColorStop(0.5, color1);
  gradient.addColorStop(1, color2);
  ctx.fillStyle = gradient;
}

function radial(){
  push()
  blendMode(OVERLAY)
  radialGradientFill(width / 2, height / 2, height * 2, width / 2, height / 2, 0, color(0), color(255))
  rect(width/2,height/2, width, height)
  pop()
}