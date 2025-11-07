const typescales = [
	{
		name: "Minor Second",
		factor: 1.067
	},
	{
		name: "Major Second",
		factor: 1.125
	},
	{
		name: "Minor Third",
		factor: 1.200
	},
	{
		name: "Major Third",
		factor: 1.250
	},
	{
		name: "Perfect Fourth",
		factor: 1.333
	},
	{
		name: "Augmented Fourth",
		factor: 1.414
	},
	{
		name: "Perfect Fifth",
		factor: 1.500
	},
	{
		name: "Golden Ratio",
		factor: 1.618
	},
]


// the sliders
const sliderTypeScale = document.querySelector(`input[name=type-scale]`)

//
const dropdownCurrentTScale = document.querySelector(`select[name=type-scale]`)


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



//--------EVENT FUNCTION ----------/


dropdownCurrentTScale.addEventListener("change", function () {

	//--------DECLARE VARIABLES OF PAPER AREA ----------//
	const paper = document.querySelector("main .paper")
	const paperH1s = document.querySelectorAll(".paper h1")
	const paperH2s = document.querySelectorAll(".paper h2")
	const paperH3s = document.querySelectorAll(".paper h3")
	const paperH4s = document.querySelectorAll(".paper h4")
	const allHs = document.querySelectorAll(".paper h1, .paper h2, .paper h3, .paper h4")
	const paperPs = document.querySelectorAll(".paper p")
	//--------END OF VARIABLES ----------//
	
	const index = TSNames.indexOf(dropdownCurrentTScale.value)


	paperH4s.forEach(paperH4 => {
		// gets the index number of the typescale that the user selected in dropdown
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH4.style.fontSize = sliderBaseFontSize.value * typescales[index].factor + "px"
	})

	paperH3s.forEach(paperH3 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH3.style.fontSize = paperH4s[0].style.fontSize.replace('px', '') * typescales[index].factor + "px"
	})

	paperH2s.forEach(paperH2 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH2.style.fontSize = paperH3s[0].style.fontSize.replace('px', '') * typescales[index].factor + "px"
	})

	paperH1s.forEach(paperH1 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH1.style.fontSize = paperH2s[0].style.fontSize.replace('px', '') * typescales[index].factor + "px"
	})
	
	if (dropdownCurrentTScale.value = this.value) {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		sliderTypeScale.value = typescales[index].factor
	}
	
})



sliderTypeScale.addEventListener("input", function () {

	if (sliderTypeScale.value > 1.000 && sliderTypeScale.value < 1.060) {
		dropdownCurrentTScale.value = typescales[0].name
	} else if (sliderTypeScale.value >= 1.060 && sliderTypeScale.value < 1.118) {
		dropdownCurrentTScale.value = typescales[1].name
	} else if (sliderTypeScale.value >= 1.118 && sliderTypeScale.value < 1.163) {
		dropdownCurrentTScale.value = typescales[2].name
	} else if (sliderTypeScale.value >= 1.163 && sliderTypeScale.value < 1.225) {
		dropdownCurrentTScale.value = typescales[3].name
	} else if (sliderTypeScale.value >= 1.225 && sliderTypeScale.value < 1.290) {
		dropdownCurrentTScale.value = typescales[4].name
	} else if (sliderTypeScale.value >= 1.290 && sliderTypeScale.value < 1.374) {
		dropdownCurrentTScale.value = typescales[5].name
	} else if (sliderTypeScale.value >= 1.374 && sliderTypeScale.value < 1.457) {
		dropdownCurrentTScale.value = typescales[6].name
	} else if (sliderTypeScale.value >= 1.457 && sliderTypeScale.value < 1.618) {
		dropdownCurrentTScale.value = typescales[7].name
	}

	// as the user slides, adjust the font sizes accordingly.


	paperH4s.forEach(paperH4 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH4.style.fontSize = sliderBaseFontSize.value * sliderTypeScale.value + "px"
	})

	paperH3s.forEach(paperH3 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH3.style.fontSize = paperH4s[0].style.fontSize.replace('px', '') * sliderTypeScale.value + "px"
	})

	paperH2s.forEach(paperH2 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH2.style.fontSize = paperH3s[0].style.fontSize.replace('px', '') * sliderTypeScale.value + "px"
	})

	paperH1s.forEach(paperH1 => {
		const index = TSNames.indexOf(dropdownCurrentTScale.value)
		paperH1.style.fontSize = paperH2s[0].style.fontSize.replace('px', '') * sliderTypeScale.value + "px"
	})
})
