const numbersArr = [...document.querySelectorAll('.section-two-amount-num')]
const slider = document.querySelector('.section-two-amount-slider-range')
const numberPandaFoodArr = [20, 8, 4, 2, 1, 1, 1, 1]
const dotsNumberElemArr = [...document.querySelectorAll('.section-two-amount-num')]
const dotsNumberArr = dotsNumberElemArr.map(el => Number(el.textContent))
const inputField = document.querySelector('.donate-another-amount-input')

inputField.value = dotsNumberArr[5]

const changeNumberActiveState = () => {
    numbersArr.map(el => el.classList.remove('active-num'))
    numbersArr[slider.value].classList.add('active-num')
    document.querySelector(':root').style.setProperty('--sliderThumbVisible', '1');
}
const removeNumberActiveState = () => {
    numbersArr.map(el => el.classList.remove('active-num'))
    document.querySelector(':root').style.setProperty('--sliderThumbVisible', '0');
}
const updateFoodNumber = () => {
    document.querySelector('.number-of-pandas-text').textContent = 'Panda diet for the day.'
    document.querySelector('.number-of-pandas-num').textContent = numberPandaFoodArr[slider.value]
    if (Number(slider.value) === 5) {
        document.querySelector('.number-of-pandas-text').textContent = 'Panda diet for 3 meal.'
    }
    if (Number(slider.value) === 6) {
        document.querySelector('.number-of-pandas-text').textContent = 'Panda diet for 2 meal.'
    }
    if (Number(slider.value) === 7) {
        document.querySelector('.number-of-pandas-text').textContent = 'Panda diet for 1 meal.'
    }
}
const updateInputValOnSliderInput = () => {
    inputField.value = dotsNumberElemArr[slider.value].textContent
}

if (window.innerWidth < 1000) {
    slider.min = 3
    changeNumberActiveState()
}
if (window.innerWidth < 1220 && window.innerWidth >= 1000) {
    slider.min = 1
    changeNumberActiveState()
}
window.addEventListener('resize', () => {
    if (window.innerWidth < 1000) {
        slider.min = 3
        updateFoodNumber()
        changeNumberActiveState()
    }
    if (window.innerWidth < 1220 && window.innerWidth >= 1000) {
        slider.min = 1
        updateFoodNumber()
        changeNumberActiveState()
    }
    if (window.innerWidth >= 1220) {
        slider.min = 0        
    }
})

slider.addEventListener('input', (e) => {
    changeNumberActiveState()
    updateFoodNumber()
    updateInputValOnSliderInput()
})

inputField.addEventListener('input', () => {
    if (inputField.value.length > inputField.maxLength) {
        inputField.value = inputField.value.slice(0, inputField.maxLength)
    };
    if (dotsNumberArr.includes(Number(inputField.value))) {
        const indexOfInputField = dotsNumberArr.indexOf(Number(inputField.value))
        if (slider.min <= indexOfInputField) {
            slider.value = indexOfInputField
            changeNumberActiveState()
            updateFoodNumber()
        }
    } 
    if (!dotsNumberArr.includes(Number(inputField.value)) && inputField.value != "") {
        removeNumberActiveState()
    }
})