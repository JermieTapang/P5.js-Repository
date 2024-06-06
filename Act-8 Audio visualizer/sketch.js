let mic, fft;

function setup() {
  createCanvas(800, 600);
  noFill();

  // Create an audio input
  mic = new p5.AudioIn();
  mic.start();

  // Create an FFT analyzer
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0);

  let spectrum = fft.analyze();

  // Draw the spectrum as a series of rectangles
  stroke(255);
  strokeWeight(2);
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }

  // Draw waveform
  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255, 0, 0); // Waveform color
  strokeWeight(1);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();
}
