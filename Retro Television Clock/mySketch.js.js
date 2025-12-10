//For this project, I chose to make a retro TV that works as a clock. I enjoy old electronics and thought this would be a cool
//concept. The time is displayed on the TV screen. The largest ball represents the hour, the middle ball is the minutes, and 
//the smallest ball is the seconds. The balls fall on the screen as time passes and restart at the top of the screen every full hour,
//minute or 60 seconds that pass. The balls start at the top of the screen in bright colors, then gradually lose their color as they fall
//to the bottom of the screen. 

//time variables
let h; //current hour
let m; //current minute
let s; //current second

function setup() {
	createCanvas(windowWidth, windowHeight); //set canvas size to browser 
	noStroke();//default no outline 
	//textAlign(CENTER, CENTER)// center text horizontally and vertically
	//textSize(30); //default text size
		
}

function draw() {
	background(0); //black background 
	translate(width / 2 - 625, height /2 - 600);	// center tv in canvas

	//time balls

	// ball bounds within the TV screen 
	let screenTop = 500;
	let screenBottom = 710;

	//position of TV knobs 
	let knobY= 780;

	//current time
	h = hour();
	m = minute();
	s = second();

	//12-hour format
	let h12 = h % 12;
	if (h12 === 0) h12 = 12;

	//ball fading- starts bright
	
	//gets darker as time gets closer to changing
	let fadeH = map(h12,1,12,255,100);//hour ball fade
	let fadeM = map(m,0,59,255,100);//minute ball fade
	let fadeS = map(s,0,59,255,100);//second ball fade

	//draw TV body
	
	//outer TV body
	stroke(139,69,19);//dark brown outline
	strokeWeight(5); //outline thickeness
	fill(90, 50, 15); //brown fill for tv body 
	rect(400,400,450,400,50);// tv shape with rounded corners 
	
	//tv screen
	stroke(35); //dark gray outline for screen
	strokeWeight(20); //screen thickness
	fill(10);//almost black tv screen color
	rect(425,450,400,300,50);//tv screen shape with rounded corners 
	
		//hour ball
	let h_position = map(h12,1,12,screenTop,screenBottom);// map hour vertical position	
	fill(0,200,100,fadeH);// green color that fades
	noStroke();
	circle(500,h_position,100);//large hour ball
	fill(255);
	//text(h12, 500,h_position);//display hour inside ball
	
	//minute	ball
	let m_position = map(m,0,59,screenTop,screenBottom);// map minute vertical position	
	fill(80,160,fadeM);//blue color that fades
	noStroke();
	circle(625,m_position,75);//medium sized minute ball
	fill(255);
	//text(m,625,m_position);//display minute inside ball

	//second ball
	let s_position = map(s,0,59,screenTop,screenBottom);// map second vertical position	
	fill(255,230,0,fadeS);//yellow color that fades 
	noStroke();
	circle(730,s_position,50);//small sized second ball
	fill(255);
	//text(s,730,s_position);//display second inside ball


	//tv antennas
	
	//left antenna 
	fill(105,105,105); //antenna color
	noStroke(); //no outline 
	ellipse(600,340,10,100); //antenna shape
	
	//right antenna
	fill(105,105,105);// antenna color
	noStroke(); // no outline
	ellipse(650,340,10,100);//antenna shape

	//antenna tip one
	fill(105,105,105);// antenna tip gray color
	noStroke(); // no outline
	ellipse(600,290,10,10);	//antenna tip shape

	//antenna tip two
	fill(105,105,105);// antenna tip gray color	
	noStroke();// no outline
	ellipse(650,290,10,10);	//antenna tip shape

	//antenna base
	fill(105,105,105); //antenna base gray color	
	noStroke(); //no outline
	ellipse(625,390,70,20);	//antenna base shape	
	
	//tv stand
	fill(139,69,19);// tv stand lighter brown color
	ellipse(625,850,150,20);// tv stand platform shape
	fill(139,69,19);// tv stand lighter brown color	
	ellipse(625,825,10,50);	// tv stand stem shape

	//tv knobs 
	fill(100);//gray knob color
	circle(575,knobY,20);//knob shape
	circle(620,knobY,20);//knob shape
	circle(665,knobY,20);//knob shape

	//tv knob buttons
	fill(0);//black center 
	circle(575,knobY,10);//knob button shape
	circle(620,knobY,10);//knob button shape
	circle(665,knobY,10);//knob button shape
	
	//tv speakers
	fill(10);//dark speaker 
	rect(500,knobY,50,15,20);//left speaker
	rect(700,knobY,50,15,20);//right speaker
}