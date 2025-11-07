// Typescales



const typescales = [
	{
		name: "minor second",
		factor: 1.067
	},
	{
		name: "major second",
		factor: 1.125
	},
	{
		name: "minor third",
		factor: 1.200
	},
	{
		name: "major third",
		factor: 1.250
	},
	{
		name: "perfect fourth",
		factor: 1.333
	},
	{
		name: "augmented fourth",
		factor: 1.414
	},
	{
		name: "perfect fifth",
		factor: 1.500
	},
	{
		name: "golden ratio",
		factor: 1.618
	},
]


// the sliders
const sliderTypeScale = document.querySelector(`input[name=type-scale]`)

//
const dropdownCurrentTScale = document.querySelector(`select[name=type-scale]`)

const minorSecond = 1.067
const majorSecond = 1.125
const minorThird = 1.200
const majorThird = 1.250
const perfectFourth = 1.333
const AugmentedFourth = 1.414
const PerfectFifth = 1.500
const GoldenRatio = 1.618

// place all the typescale options in to the menu

const TSNames = typescales.map(typescale => typescale.name)


// if user chooses an option from the dropdown,
// use that value to selector the multiplier factor
// and then adjust the font sizes accordingly

for (let i = 0; i < TSNames.length; i++) {
	let opt = TSNames[i];
	let el = document.createElement("option");
	el.textContent = opt;
	el.value = TSNames[i];
	dropdownCurrentTScale.appendChild(el);
}



//--------EVENT FUNCTION ----------//


dropdownCurrentTScale.addEventListener("input", function () {

	// gets the index number of the typescale that the user selected in dropdown
	
		if (sliderTypeScale.value > 1.000 && sliderTypeScale.value < typescales[0].factor) {
		dropdownCurrentTScale.value = typescales[0].name
	} else if (sliderTypeScale.value >= typescales[0].factor && sliderTypeScale.value < typescales[1].factor) {
		dropdownCurrentTScale.value = typescales[1].name
	} else if (sliderTypeScale.value >= typescales[1].factor && sliderTypeScale.value < typescales[2].factor) {
		dropdownCurrentTScale.value = typescales[2].name
	} else if (sliderTypeScale.value >= typescales[2].factor && sliderTypeScale.value < typescales[3].factor) {
		dropdownCurrentTScale.value = typescales[3].name
	} else if (sliderTypeScale.value >= typescales[3].factor && sliderTypeScale.value < typescales[4].factor) {
		dropdownCurrentTScale.value = typescales[4].name
	} else if (sliderTypeScale.value >= typescales[4].factor && sliderTypeScale.value < typescales[5].factor) {
		dropdownCurrentTScale.value = typescales[5].name
	} else if (sliderTypeScale.value >= typescales[5].factor && sliderTypeScale.value < typescales[6].factor) {
		dropdownCurrentTScale.value = typescales[6].name
	} else if (sliderTypeScale.value >= typescales[6].factor && sliderTypeScale.value < typescales[7].factor) {
		dropdownCurrentTScale.value = typescales[7].name
	}
	
	

	//--------DECLARE VARIABLES OF PAPER AREA ----------//
	const paper = document.querySelector("main .paper")
	const paperH1s = document.querySelectorAll(".paper h1")
	const paperH2s = document.querySelectorAll(".paper h2")
	const paperH3s = document.querySelectorAll(".paper h3")
	const paperH4s = document.querySelectorAll(".paper h4")
	const allHs = document.querySelectorAll(".paper h1, .paper h2, .paper h3, .paper h4")
	const paperPs = document.querySelectorAll(".paper p")
	//--------END OF VARIABLES ----------//
	
	paperH4s.forEach(paperH4 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH4.style.fontSize = sliderBaseFontSize.value * typescales[index].factor
	})
	
	paperH3s.forEach(paperH3 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH3.style.fontSize = paperH4s[0].style.fontSize.replace('px', '') * typescales[index].factor
	})
	
	paperH2s.forEach(paperH2 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH2.style.fontSize = paperH3s[0].style.fontSize.replace('px', '') * typescales[index].factor
	})
	
	paperH1s.forEach(paperH1 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH1.style.fontSize = paperH3s[0].style.fontSize.replace('px', '') * typescales[index].factor
	})
	
	

})


// p = current font size
// H4 = p * minorSecond
// H3 = H4 * minorSecond
// H2 = H3 * minorSecond


// have the typescale slider correspond with the factor scale
// as the user slides, adjust the font sizes accordingly.

else if (dropdownCurrentTScale.value = 'minor second') {
		sliderTypeScale.value = 1.111
	} else if (dropdownCurrentTScale.value = 'major second') {
		sliderTypeScale.value = 1.125
	} else if (dropdownCurrentTScale.value = 'minor third') {
		sliderTypeScale.value = 1.200
	} else if (dropdownCurrentTScale.value = 'major third') {
		sliderTypeScale.value = 1.250
	} else if (dropdownCurrentTScale.value = 'perfect fourth') {
		sliderTypeScale.value = 1.125
	} else if (dropdownCurrentTScale.value = 'augmented fourth') {
		sliderTypeScale.value = 1.333
	} else if (dropdownCurrentTScale.value = 'minor fifth') {
		sliderTypeScale.value = 1.414
	} else if (dropdownCurrentTScale.value = 'major fifth') {
		sliderTypeScale.value = 1.500
	} else {
		sliderTypeScale.value = 1.618
	}
