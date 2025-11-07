// RADIO SELECTION
const radioBtns = document.querySelector("form.letter-casing")
const radioItemCasing = document.querySelectorAll(".letter-casing div.radio-item")
const radioSentenceCase = document.querySelector(`input[id=sentence-case]`)
const radioTitleCase = document.querySelector(`input[id=title-case]`)
const radioUpperCase = document.querySelector(`input[id=upper-case]`)


const radioItemUnits = document.querySelectorAll(".units div.radio-item")
const radioPixels = document.querySelector(`input[id=px]`)
const radioRem = document.querySelector(`input[id=rem]`)
const radioPercentage = document.querySelector(`input[id=percentage]`)



// SLIDERS

const sliderHeaderFontWeight = document.querySelector(`input[name=header-font-weight]`)
const outputHeaderFontWeight = document.querySelector(`label[for=header-font-weight]`)

const sliderBodyFontWeight = document.querySelector(`input[name=body-font-weight]`)
const outputBodyFontWeight = document.querySelector(`label[for=body-font-weight]`)

const sliderBaseFontSize = document.querySelector(`input[name=base-font-size]`)
const outputBaseFontSize = document.querySelector(`label[for=base-font-size]`)

const sliderLineHeight = document.querySelector(`input[name=line-height]`)
const outputLineHeight = document.querySelector(`label[for=line-height]`)

const sliderLineWidth = document.querySelector(`input[name=line-width]`)
const outputLineWidth = document.querySelector(`label[for=line-width]`)

const sliderPSpacing = document.querySelector(`input[name=p-spacing]`)
const outputPSpacing = document.querySelector(`label[for=p-spacing]`)

const sliderPageMargins = document.querySelector(`input[name=page-margins]`)
const outputPageMargins = document.querySelector(`label[for=page-margins]`)

//--------FUNCTIONS FOR RADIOS----------//

radioBtns.addEventListener("change", function () {
	const allHs = document.querySelectorAll(".paper h1, .paper h2, .paper h3, .paper h4")

	if (radioTitleCase.checked) {
		allHs.forEach(HTag => {
			HTag.style.textTransform = "capitalize"
		})
	} else if (radioUpperCase.checked) {
		allHs.forEach(HTag => {
			HTag.style.textTransform = "uppercase"
		})
	} else if (radioSentenceCase.checked) {
		allHs.forEach(HTag => {
			HTag.style.textTransform = "initial"
		})
	}

})


//--------FUNCTIONS FOR SLIDER FEEDBACK----------//

//-update header font weight


sliderHeaderFontWeight.addEventListener("input", function () {
	outputHeaderFontWeight.innerHTML = sliderHeaderFontWeight.value

	allHs.forEach(HTag => {
		HTag.style.fontWeight = outputHeaderFontWeight.innerHTML
	})

})

//-update body font weight


sliderBodyFontWeight.addEventListener("input", function () {
	outputBodyFontWeight.innerHTML = sliderBodyFontWeight.value

	paperPs.forEach(PTag => {
		PTag.style.fontWeight = outputBodyFontWeight.innerHTML
	})
})

//-update font size



sliderBaseFontSize.addEventListener("input", function () {
	outputBaseFontSize.innerHTML = sliderBaseFontSize.value + "px"
	
	
	paperPs.forEach(paperP => {
		paperP.style.fontSize = outputBaseFontSize.innerHTML
	})

	paperH4s.forEach(paperH4 => {
		paperH4.style.fontSize = sliderBaseFontSize.value * sliderTypeScale.value + "px"
	})

	paperH3s.forEach(paperH3 => {
		paperH3.style.fontSize = paperH4s[0].style.fontSize.replace('px', '') * sliderTypeScale.value + "px"
	})

	paperH2s.forEach(paperH2 => {
		paperH2.style.fontSize = paperH3s[0].style.fontSize.replace('px', '') * sliderTypeScale.value + "px"
	})

	paperH1s.forEach(paperH1 => {
		paperH1.style.fontSize = paperH2s[0].style.fontSize.replace('px', '') * sliderTypeScale.value + "px"
	})


})


//-update line height

const updateLineHeight = function () {
	outputLineHeight.innerHTML = sliderLineHeight.value
	paperPs.forEach(paperP => {
		paperP.style.lineHeight = sliderLineHeight.value
	})
}

sliderLineHeight.addEventListener("input", function () {
	updateLineHeight()
})

document.addEventListener("resize", function () {
	updateLineHeight()
})

//-update line width



const updateLineWidth = function () {
	sliderLineWidth.setAttribute("max", paperH1s[0].offsetWidth - 30)

	paperPs.forEach(paperP => {
		const lineCurrentWidth = paperH1s[0].offsetWidth

		if (sliderLineWidth.value < lineCurrentWidth) {
			paperP.style.width = sliderLineWidth.value + "px"
			outputLineWidth.innerHTML = sliderLineWidth.value + "px"
		} else {
			outputLineWidth.innerHTML = paperH1s[0].offsetWidth + "px"
			outputLineWidth.innerHTML = "N/A"
		}
	})
}

sliderLineWidth.addEventListener("input", function () {
	updateLineWidth()
})

document.addEventListener("resize", function () {
	updateLineWidth()
})

//-update p spacing

const updatePSpacing = function () {
	outputPSpacing.innerHTML = sliderPSpacing.value + "px"
	paperPs.forEach(paperP => {
		paperP.style.marginBottom = sliderPSpacing.value + "px"
	})
	paperH1s.forEach(paperH1 => {
		paperH1.style.marginBottom = sliderPSpacing.value * 1.5 + "px"
	})
}

sliderPSpacing.addEventListener("input", function () {
	updatePSpacing()
})

document.addEventListener("resize", function () {
	updatePSpacing()
})


//-Update page margins

const updatePageMargins = function () {
	//paperPs.forEach(paperP => {
	//	paperP.style.width = ""
	//})

	outputPageMargins.innerHTML = sliderPageMargins.value + "px"
	outputLineWidth.innerHTML = "N/A"
	paper.style.padding = sliderPageMargins.value + "px"
}

sliderPageMargins.addEventListener("input", function () {
	paper.style.width = paper.offsetWidth
	updatePageMargins()
})
