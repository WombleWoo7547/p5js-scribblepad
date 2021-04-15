function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(0, 255), random(0, 255), random(0, 255));
	setInterval(() => {
		background(random(0, 255), random(0, 255), random(0, 255))
	}, 3 * 1000)
}

function draw() {
  noStroke()
	fill(random(0, 255), random(0, 255), random(0, 255))
  ellipse(mouseX, mouseY, 25, 25);
}