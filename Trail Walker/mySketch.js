// Artist Statement Nikki Cuozzo
// "Trail Walker" is a single-button hiking-themed game where the player is represented by an orange backpack. The objective of the game is to dodge trees and collect compasses and maps for points.
// If you hit a tree, the game is over. It is a simple game that I wanted to make aesthetically pleasing and relaxing while you're playing it, that mimicks the experience of being outside in nature. 
// Some of my favorite hobbies are hiking and playing video games. They are two completely different hobbies, but I thought it would be cool to combine them by creating "Trail Walker." I referenced the  
// p5.js reference website (https://p5js.org/reference/) and Google Gemini to find solutions to some lines of code that I was stuck on. I used the p5.js reference webiste for help on translate,
// framecount, defining positions, collsion, spawning, and for loops. If I wasn't able to find exactly what I was looking for I would ask google Gemini to explain these concepts so I could better understand how to execute my code. 
// All lines in the code are commented, and the sources are put next to the lines that I needed help with. I ran into many challenges while making this game. Starting out, I drew the map, compass, backpack, and tree with all of 
// the small details inside of them, like the compass needle, backpack straps, and pocket. I then thought about how I drew these at fixed coordinates, and that wouldn't work for a game that moves. My solution was to use translate() for the
// backpack, which moves the origin to the player's position, with all of the details being drawn to that new origin. For the collectibles (maps and compasses), I made them relative to the x and y properties using c.x and c.y. (Collectibles x,y). 
// I then had issues getting the trees and collectibles to respawn after they left the game screen. I used arrays to store the obstacles and collectibles, and I updated their positions each frame with splice. I spawned new ones by using frameCount 
// and random. It was sort of similar to the time assignment because my clock bubbles moved down the screen according to time and regenerated at the top of the hour, minute, or second. I had to figure out how to get the collision right with the backpack 
// colliding with the trees and collectibles. I did my first few runs, attempting to be very precise, taking the width and height of the objects into consideration. I made it simpler by making the backpack a rectangle that uses x,y,w, and h values. 
// All in all, this is my attempt at a very simple one-click game that shows my interests in hiking. I wanted to give it a sort of old-fashioned, retro game feel. I plan on expanding the game in the future to make more obstacles and maybe even levels. 

// declaring global variables

let trailX, trailY, trailWidth, trailHeight; // position and size of trail
let player; // to store backpack 
let obstacles = []; //array to store trees
let collectibles = []; // array to store maps and compasses
let score = 0; // player score
let gameOver = false; // boolean for game end 
let lanes = []; // array for x positions of lanes
let laneIndex = 1; // player starts in center lane (index 1)

// setup function 
function setup() {
  createCanvas(windowWidth, windowHeight); // create canavs as big as window 

// define trail position and size (p5.js Reference, https://p5js.org/reference/)
  trailX = width / 2.5 + 50; // x position
  trailY = height / 4; // y position
  trailWidth = 150; // width 
  trailHeight = 400; // height

  // define lanes x positions relative to trail (p5.js Reference, https://p5js.org/reference/)
  lanes = [
    trailX + trailWidth / 4 - 15,  // left lane 
    trailX + trailWidth / 2 - 15,  // center lane 
    trailX + 3 * trailWidth / 4 - 15  // right lane 
  ];

  // player (backpack) in center lane (p5.js Reference, https://p5js.org/reference/)
  player = { 
    x: lanes[laneIndex], // current x position 
    y: trailY + trailHeight - 60, //starting y position near bottom of trail 
    w: 30, // backpack width 
    h: 40 // backpack height 
  };
}

// draw function 
function draw() {
  background(65, 105, 225); // sky blue background 

  // background title at top 
  push(); // save current state of drawing 
  textAlign(CENTER, CENTER); // center text 
  textSize(120); // large font 
  fill(178, 34, 34); // red font 
  noStroke(); // no outline 
  text("TRAIL WALKER", width / 2, height / 6); // display title text 
	
  pop(); // restore drawing state 

  // grass border around trail 
  fill(46, 139, 87); // green grass 
  rect(width / 2.5, height / 4, 250, 400); // grass rectangle shape 

  // trail down the middle 
  fill(160, 82, 45); // brown trail 
  rect(trailX, trailY, trailWidth, trailHeight); // trail shape 

  // score box for points
  fill(173, 216, 230); // light blue score box 
  rect(450, 250, 100, 150, 10); // score box shape 
  fill(0); // black text 
  textAlign(CENTER, CENTER); // center text 
  textSize(25); // text size 
  text("Score", 500, 270); // display score text 
  textSize(35); // text size 
  text(score, 500, 320); // display score 
	
  // instructions box
  fill(173, 216, 230); // light blue instructions box 
  rect(width - 450, 250, 250, 150, 10); // instructions box shape 
  fill(178, 34, 34);  // red text 
  textAlign(LEFT, TOP); // text position 
  textSize(25); // text size 
  text("Instructions:", width - 440, 210); // display instructions text
  textSize(20); // text size 
  text("- Welcome Hiker!\n- Grab your backpack!\n- Click to dodge trees!\n- Collect maps and \n  compasses for points.", width - 450, 270);// text in instruction box 

  if (!gameOver) { // only continue running the game if not over 
    // obstacle (trees) (p5.js Reference, https://p5js.org/reference/)
    for (let i = obstacles.length - 1; i >= 0; i--) {
      obstacles[i].y += 5;// move trees down 
      drawTree(obstacles[i].x, obstacles[i].y, obstacles[i].h); // draw trees

      // collision with player/backpack (p5.js Reference, https://p5js.org/reference/, Gemini Reference)
      if (
        player.x < obstacles[i].x + 20 &&
        player.x + player.w > obstacles[i].x &&
        player.y < obstacles[i].y + obstacles[i].h &&
        player.y + player.h > obstacles[i].y
      ) {
        gameOver = true; // end game with collision
      }
		// remove trees if off screen (p5.js Reference, https://p5js.org/reference/, Gemini Reference)
      if (obstacles[i].y > trailY + trailHeight) {
        obstacles.splice(i, 1);
      }
    }

  
    // collectibles (maps and compasses)
    for (let i = collectibles.length - 1; i >= 0; i--) {
      collectibles[i].y += 5; // move collectibles down 
      drawCollectible(collectibles[i]); // draw collectibles 

      // collision with player/backpack
      if (
        player.x < collectibles[i].x + 25 &&
        player.x + player.w > collectibles[i].x &&
        player.y < collectibles[i].y + 25 &&
        player.y + player.h > collectibles[i].y
      ) {
        score++; // increase score
        collectibles.splice(i, 1); // remove collected items 
        continue; // skip the rest of the loop 
      }

      // remove collectible off screen
      if (collectibles[i] && collectibles[i].y > trailY + trailHeight) {
        collectibles.splice(i, 1);
      }
    }

    // spawn new trees every 90 frames (p5.js Reference, https://p5js.org/reference/, Gemini Reference)
    if (frameCount % 90 === 0) {
      let lane = random(lanes); // random lanes 
      let treeHeight = random(50, 70); // random tree height 
      obstacles.push({ x: lane, y: trailY - treeHeight, w: 20, h: treeHeight }); // add tree
    }

    // spawn new maps/compasses every 150 frames 
    if (frameCount % 150 === 0) {
      let lane = random(lanes); // random lane 
      let type = random(["map", "compass"]); // random tree height 
      collectibles.push({ x: lane, y: trailY - 30, w: 25, h: 25, type: type }); // add tree
    }


    // draw Player (backpack)

   translate(player.x, player.y); // move orgin to player position (p5.js Reference,https://p5js.org/reference/)

	// main body to backpack 
	fill(255, 150, 0); // orange backpack
	stroke(0); // outline
	strokeWeight(2);// outline thickness
	rect(0, 0, 30, 40, 6); // rounded rectangle body 

	// backpack shading
	fill(230, 130, 0); //darker orange
	noStroke(); //no outline
	rect(22, 2, 6, 36, 4); //shading shape

	// top flap 	
	fill(255, 170, 30); // orange flap
	stroke(0); // outline
	rect(0, -8, 30, 15, 6); // flap shape

	// front pocket
	fill(255, 130, 0); // orange pocket
	rect(5, 18, 20, 16, 4); // front pocket shape

	// pocket detail
	line(5, 25, 25, 25); // pocket detail line

	// side pockets
	fill(255, 160, 20); // orange pockets
	rect(-4, 12, 8, 15, 4); // side pocket shape
	rect(26, 12, 8, 15, 4); // side pocket shape

	// arm straps
	stroke(70, 40, 10); // outline
	strokeWeight(3); // outline thickness
	line(6, 0, 6, -12); // strap shape
	line(24, 0, 24, -12); // strap shape

  } else { // if game is over 
    textAlign(CENTER, CENTER); // center text
	 textSize(50); // text size
	 fill(255, 0, 0); // red text

	// center of trail/game box
	text("Game Over", trailX + trailWidth / 2, trailY + trailHeight / 2); // display game over 

  }
}

// mouse click input (p5.js Reference, https://p5js.org/reference/)

function mousePressed() {
  if (!gameOver) {
    laneIndex = (laneIndex + 1) % lanes.length; // move to next lane 
    player.x = lanes[laneIndex]; // update player x position 
  }
}

// tree
function drawTree(x, y, h) {
  fill(139, 69, 19); // brown tree
  rect(x, y, 20, h); // trunk shape

  fill(34, 139, 34); // green foliage
  ellipse(x + 10, y - 20, 60, 60); // green foliage shape
  ellipse(x + 10, y - 40, 50, 50); // green foliage shape
}

// collectible (map or compass)

function drawCollectible(c) {
  if (c.type === "map") {// map (square with blue and green shapes)    
    fill(250, 240, 230); 
    rect(c.x, c.y, 25, 25, 3);

    // little terrain shapes on maps
    noStroke(); // no outline
    // blue water shape
    fill(100, 150, 255);
    ellipse(c.x + 8, c.y + 10, 6, 4);
    // green forest blob
    fill(60, 170, 60);
    ellipse(c.x + 16, c.y + 15, 7, 5);
    // small blue pond
    fill(90, 140, 255);
    ellipse(c.x + 12, c.y + 20, 5, 3);

  } else {
    // round compass with needle 
    fill(200); 
    ellipse(c.x + 12.5, c.y + 12.5, 28, 28); // compass body
    fill(255, 0, 0);
    triangle(
      c.x + 12.5, c.y + 4,
      c.x + 9.5,  c.y + 20,
      c.x + 15.5, c.y + 20
    ); // needle 

    fill(0); // black color
    ellipse(c.x + 12.5, c.y + 12.5, 4, 4); // compass center 

  }
}
