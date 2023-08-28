
let amplitude = 100;
let omega = 0.05;
let phi = 0;
let amplitudeSlider, frequencySlider;
let amplitudeValueSpan, frequencyValueSpan;

function setup() {
    createCanvas(600, 400);
    noStroke();
    
    // Configurar controles
    amplitudeSlider = select("#amplitude");
    frequencySlider = select("#frequency");
    amplitudeValueSpan = select("#amplitudeValue");
    frequencyValueSpan = select("#frequencyValue");
    
    amplitudeSlider.input(updateAmplitude);
    frequencySlider.input(updateFrequency);
}

function updateAmplitude() {
    amplitude = amplitudeSlider.value();
    amplitudeValueSpan.html(amplitude);
}

function updateFrequency() {
    omega = parseFloat(frequencySlider.value());
    frequencyValueSpan.html(omega);
}

function draw() {
    background(240);

    // Dibujar la función sinusoidal
    for (let x = 0; x < width; x++) {
        let y = height / 2 - amplitude * sin(omega * x * 0.05 + phi);
        stroke(100, 100, 250);
        point(x, y);
    }

    // Dibujar el objeto en movimiento (un pequeño péndulo)
    let pendulumX = width / 2;
    let pendulumY = height / 2 - amplitude * sin(omega * frameCount * 0.05 + phi);
    fill(255, 0, 0);
    ellipse(pendulumX, pendulumY, 40, 40);
    stroke(255, 0, 0);
    line(pendulumX, height / 2, pendulumX, pendulumY);
}
