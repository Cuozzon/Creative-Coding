// I originally submitted another book that had the same sentence repeated over and over, but I was interested in taking it a step further
// with something that I think is meaningful. I really enjoy Sylvia Plath and wanted to incorporate her into this project. This book is 
// titled something random that reminds me of a Sylvia Plath poem, "The Fox with the Glass Teeth." I used all of Sylvia Plath's titles to 
// her poems as the sentences for this book. They are in random order on each page, which gives a new experience each time you read them. 
// I named each chapter "Sylvia" since the poems are hers. I tried to make the appearance of the book old and refined-looking. I used 
// courier text which gives more of a typewriter feel- Sylvia went through several typewriters in her life, writing all of the poems listed
// in this book. 

let chapterHeadings = "Syliva"
function preload(){

}

function setup() {

	// not needed
	noLoop();
	// not needed
	noCanvas();
	
	// set the book's title using createElement(), https://p5js.org/reference/p5/createElement/
	createElement("h1","The Fox with the Glass Teeth");

// List of poem names
let poemNames1 = [
"A Birthday Present","A Life","A Secret","A Sketch of Life and Death",
"A Winter Ship","Aerialist","All the Dead Dears","Amnesiac","Among the Narcissi",
"April 18","Ariel","Black Rook in Rainy Weather","Bluebeard","Blackberrying",
"Brazilliant","Burning the Letters","Child","Conversation Among the Ruins",
"Crossing the Water","Cardiac","Caresses","Child’s Park Stones","Cinderella",
"Contusion","Coxcomb","Daddy","Dark Wood, Dark Water","Death & Co.","Departure",
"Dialogue Between Ghost and Priest","Dirge for a Joker","Dissatisfied Woman",
"Dream with Clam-Diggers","Dream with Flowers and Bowl","Eavesdropper",
"Elegy for a Dead Neighbor","Electra on Azalea Path","Elm","Event","Face Lift",
"Fantasy","Fever 103°","Finisterre","Frog Autumn","Full Fathom Five","Gigolo",
"Goatsucker","Gold Mouths Cry","Gulliver","The Ghost’s Leavetaking","The Goring",
"Heavy Women","The Hermit at Outermost House","The Disquieting Muses",
"I Am Vertical","I Can’t Tell You","Initiation","In Midas’ Country","In Plaster",
"Insomniac","Johnny Panic and the Bible of Dreams","June 11","Kindness",
"Lady Lazarus","Last Words","Letter in November","Lesbos","Lament","Lorelei",
"Love Is a Parallax","Magi","Medallion","Mirror","Miss Drake Proceeds to Supper",];

//shuffle the poem names
let shuffled1=shuffle(poemNames1);

	
let poemNames2=[
"Monument","Mushrooms","Mystic","Nick and the Candlestick","Night Shift","Noir",
"Nursery Rhyme of Innocence and Experience","Ode for Ted","Old Ladies’ Home",
"On Looking Into the Eyes of a Demon Lover","Parliament Hill Fields","Pheasant",
"Point Shirley","Poem for a Birthday","Poppies in October","Poppies in July",
"Portrait of a Girl with an Earring","Pursuit","Rabbit Catcher","The Ravaged Face",
"Rectitude", "Rhyme","Roadside Stand","Robin Redbreast","The Rival","Stillborn",
"Sleep in the Mojave Desert","Spinster","Sheep in Fog","Soliloquy of the Solipsist",
"Stings", "Street Song","Suicide Off Egg Rock","The Surgeon at 2 A.M.","Thalidomide",
"The Applicant","The Babysitters","The Bee Meeting","The Arrival of the Bee Box",
"The Colossus","The Couriers","The Detective","The Munich Mannequins",
"The Night Dances","The Other","The Swarm","Totem","Tulips",
"Two Campers in Cloud Country","Two Sisters of Persephone","Virgin in a Tree",
"Waking in Winter","Watercolor of Grantchester Meadows","Whitsun","Who","Widow",
"Winter Landscape","with Rooks","Winter Trees","Witch Burning","Words","You’re",
"Zoo Keeper’s Wife"
];

//shuffle the poem names
let shuffled2=shuffle(poemNames2);

//join text together and clean up paragraphs, 
let allText = shuffled1.join(" ") + " " + shuffled2.join(" ");

// Add paragraph
createP("");

	// to make a chapter title, create an H2 element
	createElement("h2",chapterHeadings);

	// to add text, create paragraph tags (<p>). You can use createElement() or just createP()
	createP(allText);

	// of course, you can use string variables in a loop to make lots of text
	for (let c = 0; c < 10; c++){
		createElement("h2",chapterHeadings);
		for (let p = 0; p < 10; p++){
			createP(allText)
		}
	}

	// or use any of Rita.js's methods to get some string data
   // https://rednoise.org/rita/#reference 
	
	createElement("h2",chapterHeadings);
	for (let r = 0; r < 10; r++){
		createP(allText + RiTa.randomWord({pos:"vb"}) + 
              allText + RiTa.randomWord({pos:"vb"}) + 
				  allText + RiTa.randomWord({pos:"jj"}) +
				  allText + RiTa.randomWord({pos:"nn"}) + ".")
	}
		
//50000 words
let novel = "";
let wordCount = 0;

while(wordCount < 50000){
novel += allText + " ";  // adds space 
wordCount += allText.split(" ").length; // count words
}

	// this will trigger Paged.js to parse the HTML and render it the book-like layout
	window.PagedPolyfill.preview();
}


  