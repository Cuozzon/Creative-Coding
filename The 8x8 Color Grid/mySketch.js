//In this code, I created a colorful generative art grid using p5.js. 
//This is an 8×8 grid of randomly sized and colored circles, rectangles, and triangles, all centered on the canvas. 
//Each shape has random fill, stroke, and stroke weight, making the artwork unique every time you run the code.

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(random(255),random(255),random (255)); // random backgroud color
	noLoop(); // no loop
	
}

function draw() {
	
	translate(width/2, height/2); // shift to center

	for (let x = 0; x < 8; x++){ //grid row horizontal
		for (let y = 0; y < 8; y++){ //grid row verticle
			
			push(); //saves style
			
			translate(x * 100-350, y * 100-350); //grid position x,y, center
		
			fill(random(225), random(150), random(190)); // random inside circle colors
		
			stroke(random(210), random (220), random(240)); // random circle outline colors
			
			strokeWeight(random(1,7)); //circle outline thickness
			
			let w = random(50,100); //random width of circle
			let h = random(50,100); //random height of circle 
			ellipse(0,0,w,h);//circle 
			
			//grid extra shapes
			rect(random(5), random(30),random(32)); //random rectangles
			triangle(random(40),random(20),random(30), random(30),random(50),random(50)); //random triangles
		 	
			pop(); //refreshes style to before last push()//
		}
	}
}

