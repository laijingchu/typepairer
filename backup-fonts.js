//--------DECLARE VARIABLES OF PAPER AREA ----------//

const paper = document.querySelector("main .paper")
const paperH1s = document.querySelectorAll(".paper h1")
const paperH2s = document.querySelectorAll(".paper h2")
const paperH3s = document.querySelectorAll(".paper h3")
const paperH4s = document.querySelectorAll(".paper h4")
const allHs = document.querySelectorAll(".paper h1, .paper h2, .paper h3, .paper h4")
const paperPs = document.querySelectorAll(".paper p")



//--------DECLARE VARIABLES OF HEADER FONT CONTROL PANEL ----------//

// MAIN DROPDOWN [0=any, 1=serif, 2=sans-serif]
const selectHFontCategory = document.querySelector(`select[name=font-category--header]`)
const selectBFontCategory = document.querySelector(`select[name=font-category--body]`)

// BUTTON
const btnHFontRandomize = document.querySelector(".btn.random-h-font")
const btnBFontRandomize = document.querySelector(".btn.random-b-font")

// CURRENT DISPLAY
const dropdownCurrentHFont = document.querySelector(`select[name=header-font]`)

const dropdownCurrentBFont = document.querySelector(`select[name=body-font]`)

//--------DECLARE FONT VARIABLES ----------//

const fonts = [
	{
		display: "Roboto",
		type: "sans-serif",
	},
	{
		display: "Reem Kufi Fun",
		type: "sans-serif",
	},
	{
		display: "Montserrat",
		type: "sans-serif",
	},
	{
		display: "Lato",
		type: "sans-serif",
	},
	{
		display: "Poppins",
		type: "sans-serif",
	},
	{
		display: "Source Sans Pro",
		type: "sans-serif",
	},
	{
		display: "Raleway",
		type: "sans-serif",
	},
	{
		display: "Mukta",
		type: "sans-serif",
	},
	{
		display: "Ubuntu",
		type: "sans-serif",
	},
	{
		display: "Nunito",
		type: "sans-serif",
	},
	{
		display: "PT Sans",
		type: "sans-serif",
	},
	{
		display: "Rubik",
		type: "sans-serif",
	},
	{
		display: "Work Sans",
		type: "sans-serif",
	},
	{
		display: "Fira Sans",
		type: "sans-serif",
	},
	{
		display: "Barlow",
		type: "sans-serif",
	},
	{
		display: "Titillium Web",
		type: "sans-serif",
	},
	{
		value: "Mulish",
		display: "Mulish",
		type: "sans-serif",
	},
	{
		display: "Kanit",
		type: "sans-serif",
	},
	{
		display: "Heebo",
		type: "sans-serif",
	},
	{
		display: "IBM Plex Sans",
		type: "sans-serif",
	},
	{
		display: "Libre Franklin",
		type: "sans-serif",
	},
	{
		display: "Josefin Sans",
		type: "sans-serif",
	},
	{
		display: "Karla",
		type: "sans-serif",
	},
	{
		display: "Arimo",
		type: "sans-serif",
	},
	{
		display: "Cabin",
		type: "sans-serif",
	},
	{
		display: "Cairo",
		type: "sans-serif",
	},
	{
		display: "Prompt",
		type: "sans-serif",
	},
	{
		display: "Exo 2",
		type: "sans-serif",
	},
	{
		display: "Overpass",
		type: "sans-serif",
	},
	{
		display: "Merriweather Sans",
		type: "sans-serif",
	},
	{
		display: "Asap",
		type: "sans-serif",
	},
	{
		display: "Jost",
		type: "sans-serif",
	},
	{
		display: "Public Sans",
		type: "sans-serif",
	},
	
	{
		display: "Marcellus SC",
		type: "small caps",
	},
	{
		display: "Catamaran",
		type: "sans-serif",
	},
	{
		display: "Red Hat Text",
		type: "sans-serif",
	},
	{
		display: "Exo",
		type: "sans-serif",
	},
	{
		display: "Chakra Petch",
		type: "sans-serif",
	},
	{
		display: "Sarabun",
		type: "sans-serif",
	},
	{
		display: "Alegreya Sans",
		type: "sans-serif",
	},
	
	{
		display: "Alegreya Sans SC",
		type: "small caps",
	},
	{
		display: "Encode Sans",
		type: "sans-serif",
	},
	
	{
		display: "Encode Sans SC",
		type: "small caps",
	},
	{
		display: "Chivo",
		type: "sans-serif",
	},
	{
		display: "Sora",
		type: "sans-serif",
	},
	{
		display: "Lexend Deca",
		type: "sans-serif",
	},
	{
		display: "Gothic A1",
		type: "sans-serif",
	},
	{
		display: "Montserrat Alternates",
		type: "sans-serif",
	},
	{
		display: "Saira",
		type: "sans-serif",
	},
	{
		display: "Outfit",
		type: "sans-serif",
	},
	{
		display: "Commissioner",
		type: "sans-serif",
	},
	{
		display: "Be Vietnam Pro",
		type: "sans-serif",
	},
	{
		display: "Urbanist",
		type: "sans-serif",
	},
	{
		display: "Bai Jamjuree",
		type: "sans-serif",
	},
	
	{
		display: "Plus Jakarta Sans",
		type: "sans-serif",
	},
	{
		display: "Cuprum",
		type: "sans-serif",
	},
	{
		display: "Blinker",
		type: "sans-serif",
	},
	{
		display: "Kumbh Sans",
		type: "sans-serif",
	},
	{
		display: "Niramit",
		type: "sans-serif",
	},
	{
		display: "Krub",
		type: "sans-serif",
	},
	{
		display: "Sansita",
		type: "sans-serif",
	},
	{
		display: "League Spartan",
		type: "sans-serif",
	},
	{
		display: "K2D",
		type: "sans-serif",
	},
	{
		display: "Roboto Flex",
		type: "sans-serif",
	},
	
	{
		display: "Proza Libre",
		type: "sans-serif",
	},
	
	{
		display: "Epilogue",
		type: "sans-serif",
	},
	
	{
		display: "Rosario",
		type: "sans-serif",
	},
	
	{
		display: "Livvic",
		type: "sans-serif",
	},
	{
		display: "Vazirmatn",
		type: "sans-serif",
	},
	{
		display: "Fahkwang",
		type: "sans-serif",
	},
	{
		display: "Georama",
		type: "sans-serif",
	},
	{
		display: "KoHo",
		type: "sans-serif",
	},
	{
		display: "Kodchasan",
		type: "sans-serif",
	},
	{
		display: "Tomorrow",
		type: "sans-serif",
	},
	{
		display: "Lexend Zetta",
		type: "sans-serif",
	},
	{
		display: "Lexend Exa",
		type: "sans-serif",
	},
	{
		display: "Glory",
		type: "sans-serif",
	},
	{
		display: "Kufam",
		type: "sans-serif",
	},
	{
		display: "Albert Sans",
		type: "sans-serif",
	},
	{
		display: "Alumni Sans",
		type: "sans-serif",
	},
	{
		display: "Kulim Park",
		type: "sans-serif",
	},
	{
		display: "Radio Canada",
		type: "sans-serif",
	},
	{
		display: "Murecho",
		type: "sans-serif",
	},
	{
		display: "Gantari",
		type: "sans-serif",
	},
	{
		display: "IM Fell English SC",
		type: "small caps",
	},
	{
		display: "IM Fell Great Primer SC",
		type: "small caps",
	},
	
	{
		display: "IM Fell Double Pica SC",
		type: "small caps",
	},
	{
		display: "Mate SC",
		type: "small caps",
	},
	{
		display: "Smooch Sans",
		type: "sans-serif",
	},
	{
		display: "Familjen Grotesk",
		type: "sans-serif",
	},
	{
		display: "Anek Latin",
		type: "sans-serif",
	},
	
	{
		display: "Atkinson Hyperlegible",
		type: "sans-serif",
	},
	{
		display: "Truculenta",
		type: "sans-serif",
	},
	{
		display: "Trispace",
		type: "sans-serif",
	},
	{
		display: "Kantumruy Pro",
		type: "sans-serif",
	},
	{
		display: "Finlandica",
		type: "sans-serif",
	},
	{
		display: "Genos",
		type: "sans-serif",
	},
	
	
	
/*----*/
	{
		display: "Roboto Slab",
		type: "serif",
	},
	{
		display: "Merriweather",
		type: "serif",
	},
	{
		display: "Playfair Display",
		type: "serif",
	},
	{
		display: "Lora",
		type: "serif",
	},
	{
		display: "Bitter",
		type: "serif",
	},
	{
		display: "Source Serif Pro",
		type: "serif",
	},
	{
		display: "EB Garamond",
		type: "serif",
	},
	{
		display: "Zilla Slab",
		type: "serif",
	},
	{
		display: "IBM Plex Serif",
		type: "serif",
	},
	{
		display: "Cormorant Garamond",
		type: "serif",
	},
	{
		display: "Vollkorn",
		type: "serif",
	},
	
	{
		display: "Vollkorn SC",
		type: "small caps",
	},
	
	{
		display: "Alegreya",
		type: "serif",
	},
	{
		display: "Rokkitt",
		type: "serif",
	},
	{
		display: "Cormorant",
		type: "serif",
	},
	{
		display: "Cormorant SC",
		type: "small caps",
	},
	
	{
		display: "Patrick Hand SC",
		type: "small caps",
	},
	{
		display: "Spectral",
		type: "serif",
	},
	{
		display: "Faustina",
		type: "serif",
	},
	{
		display: "Josefin Slab",
		type: "serif",
	},
	{
		display: "Gelasio",
		type: "serif",
	},
	{
		display: "Taviraj",
		type: "serif",
	},
	{
		display: "Crimson Pro",
		type: "serif",
	},
	{
		display: "Literata",
		type: "serif",
	},
	{
		display: "Bodoni Moda",
		type: "serif",
	},
	{
		display: "Yrsa",
		type: "serif",
	},
	{
		display: "Fraunces",
		type: "serif",
	},
	{
		display: "Source Serif 4",
		type: "serif",
	},
	{
		display: "Trirong",
		type: "serif",
	},
	{
		display: "Cormorant Infant",
		type: "serif",
	},
	{
		display: "STIX Two Text",
		type: "serif",
	},
	{
		display: "Rasa",
		type: "serif",
	},
	{
		display: "Hepta Slab",
		type: "serif",
	},
	{
		display: "Roboto Serif",
		type: "serif",
	},
	{
		display: "Newsreader",
		type: "serif",
	},
	{
		display: "Petrona",
		type: "serif",
	},
	{
		display: "Andada Pro",
		type: "serif",
	},
	{
		display: "Libre Bodoni",
		type: "serif",
	},{
		display: "Brygada 1918",
		type: "serif",
	},{
		display: "Besley",
		type: "serif",
	},{
		display: "Ibarra Real Nova",
		type: "serif",
	},{
		display: "Manuale",
		type: "serif",
	},{
		display: "Hahmlet",
		type: "serif",
	},{
		display: "Piazzolla",
		type: "serif",
	},{
		display: "Texturina",
		type: "serif",
	},
	{
		display: "Imbue",
		type: "serif",
	},
	
/*----*/
	{
		display: "Bebas Neue",
		type: "caps",
	},
	{
		display: "Lobster",
		type: "display",
	},
	{
		display: "Comfortaa",
		type: "display",
	},
	{
		display: "Abril Fatface",
		type: "display",
	},
	{
		display: "Righteous",
		type: "display",
	},
	{
		display: "Fredoka One",
		type: "display",
	},
	{
		display: "Baloo 2",
		type: "display",
	},
	{
		display: "Lobster Two",
		type: "display",
	},
	{
		display: "Patua One",
		type: "display",
	},
	{
		display: "Concert One",
		type: "display",
	},
	{
		display: "Yeseva One",
		type: "display",
	},
	{
		display: "Passion One",
		type: "display",
	},
	{
		display: "Press Start 2P",
		type: "display",
	},
	{
		display: "Carter One",
		type: "display",
	},
	{
		display: "Luckiest Guy",
		type: "Caps",
	},
	{
		display: "Special Elite",
		type: "display",
	},
	{
		display: "Titan One",
		type: "display",
	},
	{
		display: "Poiret One",
		type: "display",
	},
	{
		display: "Bangers",
		type: "display",
	},
	{
		display: "Bungee",
		type: "caps",
	},
	{
		display: "Playball",
		type: "display",
	},
	{
		display: "Oleo Script",
		type: "display",
	},
	{
		display: "Lilita One",
		type: "display",
	},
	{
		display: "Black Ops One",
		type: "display",
	},
	{
		display: "Monoton",
		type: "display",
	},
	{
		display: "Gruppo",
		type: "display",
	},
	{
		display: "Unica One",
		type: "display",
	},
	{
		display: "Sigmar One",
		type: "display",
	},
	{
		display: "Fugaz One",
		type: "display",
	},
	{
		display: "Forum",
		type: "display",
	},
	{
		display: "Shrikhand",
		type: "display",
	},
	{
		display: "Lalezar",
		type: "display",
	},
	{
		display: "Audiowide",
		type: "display",
	},
	{
		display: "Coda",
		type: "display",
	},
	{
		display: "Lemonada",
		type: "display",
	},
	{
		display: "Squada One",
		type: "display",
	},
	{
		display: "Fredericka the Great",
		type: "display",
	},
	{
		display: "Arima Madurai",
		type: "display",
	},
	{
		display: "Chewy",
		type: "display",
	},
	{
		display: "Bowlby One SC",
		type: "small caps",
	},
	{
		display: "Londrina Solid",
		type: "display",
	},
	{
		display: "Overlock",
		type: "display",
	},
	{
		display: "Racing Sans One",
		type: "display",
	},
	{
		display: "Graduate",
		type: "small caps",
	},
	{
		display: "Cabin Sketch",
		type: "display",
	},
	{
		display: "Rye",
		type: "display",
	},
	{
		display: "Bevan",
		type: "display",
	},
	{
		display: "Cinzel Decorative",
		type: "Caps",
	},
	{
		display: "Corben",
		type: "display",
	},
	{
		display: "Boogaloo",
		type: "display",
	},
	{
		display: "Contrail One",
		type: "display",
	},
	{
		display: "Libre Barcode 39 Text",
		type: "display",
	},
	{
		display: "Sniglet",
		type: "display",
	},
	{
		display: "Big Shoulders Display",
		type: "condensed",
	},
	{
		display: "Henny Penny",
		type: "display",
	},
	{
		display: "Calistoga",
		type: "display",
	},
	{
		display: "Rammetto One",
		type: "display",
	},
	{
		display: "Macondo",
		type: "display",
	},
	{
		display: "Bowlby One",
		type: "display",
	},
	{
		display: "Grandstander",
		type: "display",
	},
	{
		display: "Chonburi",
		type: "display",
	},
	{
		display: "Nixie One",
		type: "display",
	},
	{
		display: "Seaweed Script",
		type: "display",
	},
	{
		display: "Bungee Inline",
		type: "display",
	},
	{
		display: "Balsamiq Sans",
		type: "display",
	},
	{
		display: "Averia Libre",
		type: "display",
	},
	{
		display: "Bubblegum Sans",
		type: "display",
	},
	{
		display: "Share",
		type: "display",
	},
	{
		display: "Averia Serif Libre",
		type: "display",
	},
	{
		display: "Oleo Script Swash Caps",
		type: "display",
	},
	{
		display: "Knewave",
		type: "display",
	},
	{
		display: "Koulen",
		type: "display",
	},
	{
		display: "Wallpoet",
		type: "display",
	},
	{
		display: "Lemon",
		type: "display",
	},
	{
		display: "Oxanium",
		type: "display",
	},
	{
		display: "Limelight",
		type: "display",
	},
	{
		display: "Skranji",
		type: "display",
	},
	{
		display: "Grenze Gotisch",
		type: "display",
	},
	{
		display: "Poller One",
		type: "display",
	},
	{
		display: "Yatra One",
		type: "display",
	},
	{
		display: "Turret Road",
		type: "display",
	},
	{
		display: "Kelly Slab",
		type: "display",
	},
	{
		display: "Big Shoulders Text",
		type: "sans-serif",
	},
	{
		display: "UnifrakturMaguntia",
		type: "display",
	},
	{
		display: "Allan",
		type: "display",
	},
	{
		display: "Oregano",
		type: "display",
	},
	{
		display: "Pirata One",
		type: "display",
	},
	{
		display: "Sansita Swashed",
		type: "display",
	},
	{
		display: "Raleway Dots",
		type: "display",
	},
	{
		display: "Gugi",
		type: "display",
	},
	{
		display: "Love Ya Like A Sister",
		type: "display",
	},
	{
		display: "Bungee Shade",
		type: "caps",
	},
	{
		display: "Irish Grover",
		type: "display",
	},
	{
		display: "Chelsea Market",
		type: "display",
	},
	{
		display: "Mirza",
		type: "display",
	},
	{
		display: "Original Surfer",
		type: "display",
	},
	{
		display: "Gravitas One",
		type: "display",
	},
	{
		display: "Rubik Moonrocks",
		type: "display",
	},
	{
		display: "Goblin One",
		type: "display",
	},
	{
		display: "Stardos Stencil",
		type: "display",
	},
	{
		display: "Emilys Candy",
		type: "display",
	},
	{
		display: "Happy Monkey",
		type: "display",
	},
	{
		display: "Obdibee Sans",
		type: "display",
	},
	{
		display: "Pompiere",
		type: "display",
	},
	{
		display: "Galada",
		type: "display",
	},
	{
		display: "Reggae One",
		type: "display",
	},
	{
		display: "Metamorphous",
		type: "display",
	},
	{
		display: "Saira Stencil One",
		type: "display",
	},
	{
		display: "Expletus Sans",
		type: "display",
	},
	{
		display: "Megrim",
		type: "small caps",
	},
	{
		display: "Baumans",
		type: "display",
	},
	{
		display: "Modak",
		type: "display",
	},
	{
		display: "Ceviche One",
		type: "display",
	},
	{
		display: "Elsie",
		type: "display",
	},
	{
		display: "Battambang",
		type: "display",
	},
	{
		display: "Supermercado One",
		type: "display",
	},
	{
		display: "Freckle Face",
		type: "display",
	},
	{
		display: "Rakkas",
		type: "display",
	},
	{
		display: "Bellota Text",
		type: "display",
	},
	{
		display: "Coiny",
		type: "display",
	},
	{
		display: "ZCOOL QingKe HuangYou",
		type: "display",
	},
	{
		display: "Sail",
		type: "display",
	},
	{
		display: "Unicial Antiqua",
		type: "display",
	},
	{
		display: "Atma",
		type: "display",
	},
	{
		display: "Faster One",
		type: "small caps",
	},
	{
		display: "Ranchers",
		type: "display",
	},
	{
		display: "Vast Shadow",
		type: "display",
	},
	{
		display: "Katibeh",
		type: "display",
	},
	{
		display: "McLaren",
		type: "display",
	},
	{
		display: "Amarante",
		type: "display",
	},
	{
		display: "Ruslan Display",
		type: "caps",
	},
	{
		display: "Goldman",
		type: "display",
	},
	{
		display: "Finger Paint",
		type: "display",
	},
	{
		display: "Averia Sans Libre",
		type: "display",
	},
	{
		display: "Lily Script One",
		type: "display",
	},
	{
		display: "Flamenco",
		type: "display",
	},
	{
		display: "Life Savers",
		type: "display",
	},
	{
		display: "Codystar",
		type: "display",
	},
	{
		display: "Medieval Sharp",
		type: "display",
	},
	{
		display: "Cherry Cream Soda",
		type: "display",
	},
	{
		display: "Potta One",
		type: "display",
	},
	{
		display: "Dela Gothic One",
		type: "display",
	},
	{
		display: "Cherry Swash",
		type: "display",
	},
	{
		display: "Salsa",
		type: "display",
	},
	{
		display: "Trade Winds",
		type: "small caps",
	},
	{
		display: "Voces",
		type: "display",
	},
	{
		display: "MuseoModerno",
		type: "display",
	},
	{
		display: "Germania One",
		type: "display",
	},
	{
		display: "Iceberg",
		type: "display",
	},
	{
		display: "Jomhuria",
		type: "display",
	},
	{
		display: "Prosto One",
		type: "display",
	},
	{
		display: "Slackey",
		type: "display",
	},
	{
		display: "Yeon Sung",
		type: "display",
	},
	{
		display: "Nova Round",
		type: "display",
	},
	{
		display: "Peralta",
		type: "display",
	},
	{
		display: "Londrina Outline",
		type: "display",
	},
	{
		display: "Mountains of Christmas",
		type: "display",
	},
	{
		display: "Dangrek",
		type: "display",
	},
	{
		display: "Medula One",
		type: "display",
	},
	{
		display: "Rowdies",
		type: "display",
	},
	{
		display: "Kranky",
		type: "display",
	},
	{
		display: "Nova Square",
		type: "display",
	},
	{
		display: "Sancreek",
		type: "display",
	},
	{
		display: "Iceland",
		type: "display",
	},
	{
		display: "Ewert",
		type: "caps",
	},
	{
		display: "ZCOOL KuaiLe",
		type: "display",
	},
	{
		display: "Red Rose",
		type: "display",
	},
	{
		display: "Londrina Shadow",
		type: "display",
	},
	{
		display: "Dynalight",
		type: "display",
	},
	{
		display: "Ribeye",
		type: "display",
	},
	{
		display: "Nova Flat",
		type: "display",
	},
	{
		display: "Macondo Swash Caps",
		type: "display",
	},
	{
		display: "Akaya Kanadaka",
		type: "display",
	},
	{
		display: "UnifrakturCook",
		type: "display",
	},
	{
		display: "Miniver",
		type: "display",
	},
	{
		display: "Sarina",
		type: "display",
	},
	{
		display: "Barrio",
		type: "caps",
	},
	{
		display: "Mystery Quest",
		type: "display",
	},
	{
		display: "Bigshot One",
		type: "display",
	},
	{
		display: "Paprika",
		type: "display",
	},
	{
		display: "Gorditas",
		type: "display",
	},
	{
		display: "Piedra",
		type: "display",
	},
	{
		display: "Spicy Rice",
		type: "display",
	},
	{
		display: "Sonsie One",
		type: "display",
	},
	{
		display: "Viaoda Libre",
		type: "display",
	},
	{
		display: "Cute Font",
		type: "display",
	},
	{
		display: "Modern Antiqua",
		type: "display",
	},
	{
		display: "Bellota",
		type: "display",
	},
	{
		display: "Train One",
		type: "display",
	},
	{
		display: "Buda",
		type: "display",
	},
	{
		display: "Overlock SC",
		type: "small caps",
	},
	{
		display: "Farsan",
		type: "display",
	},
	{
		display: "Chicle",
		type: "display",
	},
	{
		display: "Milonga",
		type: "display",
	},
	{
		display: "Ravi Prakash",
		type: "display",
	},
	{
		display: "Sirin Stencil",
		type: "display",
	},
	{
		display: "Croissant One",
		type: "display",
	},
	{
		display: "Unkempt",
		type: "display",
	},
	{
		display: "Ranga",
		type: "display",
	},
	{
		display: "Akaya Telivigala",
		type: "display",
	},
	{
		display: "Hanalei Fill",
		type: "caps",
	},
	{
		display: "Wellfleet",
		type: "display",
	},
	{
		display: "Monofett",
		type: "caps",
	},
	{
		display: "New Rocker",
		type: "display",
	},
	{
		display: "Elsie Swash Caps",
		type: "display",
	},
	{
		display: "Simonetta",
		type: "display",
	},
	{
		display: "Crushed",
		type: "caps",
	},
	{
		display: "Orelega One",
		type: "display",
	},
	{
		display: "Underdog",
		type: "display",
	},
	{
		display: "Tourney",
		type: "display",
	},
	{
		display: "Rubik Dirt",
		type: "display",
	},
	{
		display: "Vampiro One",
		type: "display",
	},
	{
		display: "Offside",
		type: "display",
	},
	{
		display: "Averia Gruesa Libre",
		type: "display",
	},
	{
		display: "Margarine",
		type: "display",
	},{
		display: "Griffy",
		type: "display",
	},
	{
		display: "Kavoon",
		type: "display",
	},
	{
		display: "Joti One",
		type: "display",
	},{
		display: "Maiden Orange",
		type: "display",
	},
	{
		display: "Keania One",
		type: "display",
	},
	{
		display: "Unlock",
		type: "display",
	},{
		display: "Fascinate",
		type: "display",
	},
	{
		display: "Spirax",
		type: "display",
	},
	{
		display: "Aboreto",
		type: "caps",
	},
	{
		display: "Jacques Francois Shadow",
		type: "display",
	},
	{
		display: "Smokum",
		type: "display",
	},
	{
		display: "Srisakdi",
		type: "display",
	},
	{
		display: "Lancelot",
		type: "display",
	},
	{
		display: "Ribeye Marrow",
		type: "display",
	},
	{
		display: "Caesar Dressing",
		type: "caps",
	},
	{
		display: "Galindo",
		type: "display",
	},
	{
		display: "Diplomata SC",
		type: "Small caps",
	},
	{
		display: "Risque",
		type: "display",
	},
	{
		display: "Bigelow Rules",
		type: "display",
	},
	{
		display: "Combo",
		type: "display",
	},
	{
		display: "Mogra",
		type: "display",
	},
	{
		display: "Emblema One",
		type: "display",
	},
	{
		display: "Libre Barcode 128 Text",
		type: "display",
	},
	{
		display: "Oldenburg",
		type: "display",
	},
	{
		display: "Zen Dots",
		type: "display",
	},
	{
		display: "Girassol",
		type: "display",
	},
	{
		display: "Kirang Haerang",
		type: "display",
	},
	{
		display: "Bakbak One",
		type: "display",
	},
	{
		display: "Ravalia",
		type: "display",
	},
	{
		display: "Barriecito",
		type: "display",
	},
	{
		display: "Freehand",
		type: "display",
	},
	{
		display: "Poor Story",
		type: "display",
	},
	{
		display: "Nova Slim",
		type: "display",
	},
	{
		display: "Plaster",
		type: "display",
	},
	{
		display: "Atomic Age",
		type: "display",
	},
	{
		display: "Smythe",
		type: "display",
	},
	{
		display: "Fasinate Inline",
		type: "display",
	},
	{
		display: "Arima",
		type: "display",
	},
	{
		display: "Moulpali",
		type: "display",
	},
	{
		display: "Glass Antiqua",
		type: "display",
	},
	{
		display: "Chela One",
		type: "display",
	},
	{
		display: "Bungee Outline",
		type: "display",
	},
	{
		display: "Asset",
		type: "display",
	},
	{
		display: "Bokor",
		type: "display",
	},
	{
		display: "Gluten",
		type: "display",
	},
	{
		display: "Almendra Display",
		type: "display",
	},
	{
		display: "Metal",
		type: "display",
	},
	{
		display: "Nova Oval",
		type: "display",
	},
	{
		display: "Zen loop",
		type: "display",
	},
	{
		display: "Passero One",
		type: "display",
	},
	{
		display: "Vibes",
		type: "display",
	},
	{
		display: "Kumar One Outline",
		type: "display",
	},
	{
		display: "Purple Purse",
		type: "display",
	},
	{
		display: "Erica One",
		type: "display",
	},
	{
		display: "Bungee Hairline",
		type: "display",
	},
	{
		display: "Anybody",
		type: "display",
	},
	{
		display: "Fruktur",
		type: "display",
	},
	{
		display: "Astloch",
		type: "display",
	},
	{
		display: "Rubik Marker Hatch",
		type: "display",
	},
	{
		display: "Trochut",
		type: "display",
	},
	{
		display: "DynaPuff",
		type: "display",
	},
	{
		display: "Langar",
		type: "display",
	},
	{
		display: "Silkscreen",
		type: "caps",
	},
	{
		display: "Federant",
		type: "display",
	},
	{
		display: "Sofadi One",
		type: "display",
	},
	{
		display: "Rubik Distressed",
		type: "display",
	},
	{
		display: "Aubrey",
		type: "display",
	},
	{
		display: "Miltonian",
		type: "display",
	},
	{
		display: "Nova Script",
		type: "display",
	},
	{
		display: "Nova Cut",
		type: "display",
	},
	{
		display: "Rubik Microbe",
		type: "display",
	},
	{
		display: "Miltonian Tattoo",
		type: "display",
	},
	{
		display: "Lacquer",
		type: "caps",
	},
	{
		display: "Taprom",
		type: "display",
	},
	{
		display: "Big Shoulders Inline Text",
		type: "display",
	},
	{
		display: "Rubik Glitch",
		type: "display",
	},
	{
		display: "Zen Tokyo Zoo",
		type: "display",
	},
	{
		display: "Single Day",
		type: "display",
	},
	{
		display: "Syne Tactile",
		type: "display",
	},
	{
		display: "Sevillana",
		type: "display",
	},
	{
		display: "BhuTuka Expanded One",
		type: "display",
	},
	{
		display: "Kenia",
		type: "display",
	},
	{
		display: "Hubballi",
		type: "display",
	},
	{
		display: "Fasthand",
		type: "display",
	},
	{
		display: "Gideon Roman",
		type: "display",
	},
	{
		display: "Alumni Sans Inline One",
		type: "display",
	},
	{
		display: "Flow Circular",
		type: "redacted",
	},
	{
		display: "Big Shoulds Inline Display",
		type: "condensed",
	},
	{
		display: "Koh Santepheap",
		type: "display",
	},
	{
		display: "Warnes",
		type: "display",
	},
	{
		display: "Luxurious Roman",
		type: "display",
	},
	{
		display: "Holtwood One SC",
		type: "small caps",
	},
	{
		display: "Blaka Hollow",
		type: "display",
	},
	{
		display: "Redacted Script",
		type: "redacted",
	},
	{
		display: "Blaka",
		type: "display",
	},
	{
		display: "Redacted",
		type: "redacted",
	},
	{
		display: "Flow Block",
		type: "redacted",
	},
	{
		display: "Flow Rounded",
		type: "redacted",
	},
	{
		display: "Staatliches",
		type: "caps",
	},
	{
		display: "Uncial Antiqua",
		type: "small caps",
	},
	{
		display: "Bahiana",
		type: "caps",
	},
	{
		display: "Roboto Mono",
		type: "monospace",
	},
	{
		display: "Inconsolata",
		type: "monospace",
	},
	{
		display: "Source Code Pro",
		type: "monospace",
	},
	{
		display: "IBM Plex Mono",
		type: "monospace",
	},
	{
		display: "Space Mono",
		type: "monospace",
	},
	{
		display: "PT Mono",
		type: "monospace",
	},
	{
		display: "Ubuntu Mono",
		type: "monospace",
	},
	{
		display: "Nanum Gothic Coding",
		type: "monospace",
	},
	{
		display: "Cousine",
		type: "monospace",
	},
	{
		display: "Share Tech Mono",
		type: "monospace",
	},
	{
		display: "Courier Prime",
		type: "monospace",
	},
	{
		display: "Fira Mono",
		type: "monospace",
	},
	{
		display: "Anonymous Pro",
		type: "monospace",
	},
	{
		display: "Cutive Mono",
		type: "monospace",
	},
	{
		display: "VT323",
		type: "monospace",
	},
	{
		display: "Overpass Mono",
		type: "monospace",
	},
	{
		display: "Fira Code",
		type: "monospace",
	},
	{
		display: "JetBrains Mono",
		type: "monospace",
	},
	{
		display: "DM Mono",
		type: "monospace",
	},
	{
		display: "Oxygen Mono",
		type: "monospace",
	},
	{
		display: "Noto Sans Mono",
		type: "monospace",
	},
	{
		display: "Nova Mono",
		type: "monospace",
	},
	{
		display: "B612 Mono",
		type: "monospace",
	},
	{
		display: "Major Mono Display",
		type: "monospace",
	},
	{
		display: "Azeret Mono",
		type: "monospace",
	},
	{
		display: "Syne Mono",
		type: "monospace",
	},
	{
		display: "Spine Sans Mono",
		type: "monospace",
	},
	{
		display: "Xanh Mono",
		type: "monospace",
	},
	{
		display: "Teko",
		type: "condensed",
	},
	{
		display: "Six Caps",
		type: "condensed",
	},
	{
		display: "BenchNine",
		type: "condensed",
	},
	{
		display: "Wire One",
		type: "condensed",
	},
	{
		display: "Dorsa",
		type: "condensed",
	},
	
	{
		display: "Playfair Display SC",
		type: "small caps",
	},
	
	{
		display: "Rubik Mono One",
		type: "caps",
	},
	
]





//---------JUMP TO EVENTS AND FUNCTIONS-----------//

const linkGFonts = document.querySelectorAll("link")
const headerFontSheet = linkGFonts[2]
const bodyFontSheet = linkGFonts[3]


// When I click on a dropdown option and then "randomize",
// A random font will be chosen for me by the dropdown category,
// and applied directly to all the Headers.
let x = 0 // user's choice



btnHFontRandomize.addEventListener('click', function () {
	
	/* note: whenever there's an error with "display" usually it means it's drawing from the wrong fonts array */
	
	

	if (selectHFontCategory.value == "any") {

		x = Math.floor(Math.random()*fonts.length)
		
		const fontDisplay = fonts[x].display
		const fontType = fonts[x].type
		
		//append fontDisplay to link href

		headerFontSheet.setAttribute("href", `https://fonts.googleapis.com/css?family=${fontDisplay}`);

		//apply styles to CSS

		allHs.forEach(HTag => {
			HTag.style.fontFamily = fontDisplay
		})

		//update little dropdown

		dropdownCurrentHFont.value = fontDisplay

		

	} else {

		const filteredFonts = fonts.filter(obj => {
			return obj.type === selectHFontCategory.value
		})
		
		x = Math.floor(Math.random()*filteredFonts.length)

		const fontDisplay = filteredFonts[x].display
		const fontType = filteredFonts[x].type
		
		//append fontDisplay to link href

		headerFontSheet.setAttribute("href", `https://fonts.googleapis.com/css?family=${fontDisplay}`);

		//apply styles to CSS

		allHs.forEach(HTag => {
			HTag.style.fontFamily = fontDisplay
		})

		//update little dropdown

		dropdownCurrentHFont.value = fontDisplay

		
	}
})

//-----------------Update Body Font---------------------//
btnBFontRandomize.addEventListener('click', function () {

	if (selectBFontCategory.value == "any") {
		
		x = Math.floor(Math.random()*fonts.length)
		
		const fontDisplay = fonts[x].display
		const fontType = fonts[x].type
		
		//append fontDisplay to link href

		bodyFontSheet.setAttribute("href", `https://fonts.googleapis.com/css?family=${fontDisplay}`);

		//apply styles to CSS

		paperPs.forEach(paperP => {
			paperP.style.fontFamily = fontDisplay
		})

		//update little dropdown

		dropdownCurrentBFont.value = fontDisplay

	} else {
		
		const filteredFonts = fonts.filter(obj => {
			return obj.type === selectBFontCategory.value
		})
		
		x = Math.floor(Math.random()*filteredFonts.length)

		const fontDisplay = filteredFonts[x].display
		const fontType = filteredFonts[x].type
		
		//append fontDisplay to link href

		bodyFontSheet.setAttribute("href", `https://fonts.googleapis.com/css?family=${fontDisplay}`);

		//apply styles to CSS

		paperPs.forEach(paperP => {
			paperP.style.fontFamily = fontDisplay
		})

		//update little dropdown

		dropdownCurrentBFont.value = fontDisplay

		
	}
})


//load all fonts options into the small menu

//header

const fontDisplays = fonts.map(font => [font.display]).sort() /*array*/


for (let i = 0; i < fontDisplays.length; i++) {
	let opt = fontDisplays[i];
	let el = document.createElement("option");
	el.textContent = opt;
	el.value = fontDisplays[i];
	dropdownCurrentHFont.appendChild(el);
	dropdownCurrentHFont.setAttribute;
}

dropdownCurrentHFont.addEventListener("input", function () {
	
	headerFontSheet.setAttribute("href", `https://fonts.googleapis.com/css?family=${dropdownCurrentHFont.value}`);
	
	allHs.forEach(HTag => {
		HTag.style.fontFamily = dropdownCurrentHFont.value
		
	})
})

//body

for (let i = 0; i < fontDisplays.length; i++) {
	let opt = fontDisplays[i];
	let el = document.createElement("option");
	el.textContent = opt;
	el.value = fontDisplays[i];
	dropdownCurrentBFont.appendChild(el);
}

dropdownCurrentBFont.addEventListener("input", function () {
	
	bodyFontSheet.setAttribute("href", `https://fonts.googleapis.com/css?family=${dropdownCurrentBFont.value}`);
	
	paperPs.forEach(paperP => {
		paperP.style.fontFamily = dropdownCurrentBFont.value
		
	})
})