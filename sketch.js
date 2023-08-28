
let amplitude = 100;  // Amplitud
let omega = 0.05;     // Velocidad angular
let phi = 0;          // Fase inicial

function setup() {
    createCanvas(600, 400);
    noStroke();
}

function draw() {
    background(240);

    let x = width / 2;
    let y = height / 2 + amplitude * sin(omega * frameCount + phi);

    fill(255, 0, 0);
    ellipse(x, y, 50, 50);
}
