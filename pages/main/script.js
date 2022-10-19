// slider section 3
const prevBtn = document.querySelector('.prev-btn-wrapper')
const nextBtn = document.querySelector('.next-btn-wrapper')
const sectionThreeCardsWrappers = document.querySelector('.section-three-cards-block-wrappers')
const sectionThreeCardsArr = [
    `<div class="section-three-card">
        <img src="../../assets/images/panda.jpg" alt="panda" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Giant Pandas</p>
                <p class="section-three-card-text-habitat">Native to Southwest China</p>
            </div>
            <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana-bamboo_icon" 
            class="section-three-card-food-icon">
        </div>
    </div>`,
    `<div class="section-three-card">
        <img src="../../assets/images/eagle.jpg" alt="eagle" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Eagles</p>
                <p class="section-three-card-text-habitat">Native to South America</p>
            </div>
            <img src="../../assets/icons/meet-fish_icon.svg" alt="meet-fish_icon" 
            class="section-three-card-food-icon fish">
        </div>
    </div>`,
    `<div class="section-three-card">
        <img src="../../assets/images/gorilla.jpg" alt="gorilla" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Gorillas</p>
                <p class="section-three-card-text-habitat">Native to Congo</p>
            </div>
            <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana-bamboo_icon" 
            class="section-three-card-food-icon">
        </div>
    </div>`,
    `<div class="section-three-card">
        <img src="../../assets/images/sloth.jpg" alt="sloth" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Two-Toed Sloth</p>
                <p class="section-three-card-text-habitat">Mesoamerica, South America</p>
            </div>
            <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana-bamboo_icon" 
            class="section-three-card-food-icon">
        </div>
    </div>`,
    `<div class="section-three-card">
        <img src="../../assets/images/cheetah.jpg" alt="cheetah" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Cheetahs</p>
                <p class="section-three-card-text-habitat">Native to Africa</p>
            </div>
            <img src="../../assets/icons/meet-fish_icon.svg" alt="meet-fish_icon" 
            class="section-three-card-food-icon fish">
        </div>
    </div>`,
    `<div class="section-three-card">
        <img src="../../assets/images/penguins.jpg" alt="penguins" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Penguins</p>
                <p class="section-three-card-text-habitat">Native to Antarctica</p>
            </div>
            <img src="../../assets/icons/meet-fish_icon.svg" alt="meet-fish_icon" 
            class="section-three-card-food-icon fish">
        </div>
    </div>`,
    `<div class="section-three-card">
        <img src="../../assets/images/alligator.jpg" alt="alligator" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Alligators</p>
                <p class="section-three-card-text-habitat">Native to Southeastern U. S.</p>
            </div>
            <img src="../../assets/icons/meet-fish_icon.svg" alt="meet-fish_icon" 
            class="section-three-card-food-icon fish">
        </div>
    </div>`,
    `<div class="section-three-card">
        <img src="../../assets/images/lion.jpg" alt="lion" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Lions</p>
                <p class="section-three-card-text-habitat">Native to Africa</p>
            </div>
            <img src="../../assets/icons/meet-fish_icon.svg" alt="meet-fish_icon" 
            class="section-three-card-food-icon fish">
        </div>
    </div>`,
    `<div class="section-three-card">
        <img src="../../assets/images/elephants.jpg" alt="elephants" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Elephants</p>
                <p class="section-three-card-text-habitat">Sub-Saharan Africa, South Asia</p>
            </div>
            <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana-bamboo_icon" 
            class="section-three-card-food-icon">
        </div>
    </div>`,
    `<div class="section-three-card">
        <img src="../../assets/images/hippopotamus.jpg" alt="hippopotamus" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Hippopotamus</p>
                <p class="section-three-card-text-habitat">Native to sub-Saharan Africa</p>
            </div>
            <img src="../../assets/icons/meet-fish_icon.svg" alt="meet-fish_icon" 
            class="section-three-card-food-icon fish">
        </div>
    </div>`,
    `<div class="section-three-card">
        <img src="../../assets/images/capuchin-monkey.jpg" alt="capuchin-monkey" class="section-three-card-cover-img">
        <div class="section-three-card-bottom">
            <div class="section-three-card-text-block">
                <p class="section-three-card-text-title">Capuchin monkey</p>
                <p class="section-three-card-text-habitat">Central America, South America</p>
            </div>
            <img src="../../assets/icons/banana-bamboo_icon.svg" alt="banana-bamboo_icon" 
            class="section-three-card-food-icon">
        </div>
    </div>`
]
let numberOfCards = 6
let transitionTime = 1
let timeoutTime = 1000

if (window.innerWidth < 640) {
    transitionTime = 0.5
    timeoutTime = 500
}
window.addEventListener('resize', () => {
    if (window.innerWidth < 640) {
        transitionTime = 0.5
        timeoutTime = 500
    } 
    if (window.innerWidth >= 640) {
        transitionTime = 1
        timeoutTime = 1000
    }
})

// slider section 3 
const randomNums = (numOfCards) => {
    const nums = new Set();
    while(nums.size !== numOfCards) {
        nums.add(Math.floor(Math.random() * 11));
    }
    return [...nums]
}
const createRandomCardsWrapper = () => {
    const wrapper = document.createElement('div')
    const randNumsArr = randomNums(numberOfCards)
    wrapper.className = 'section-three-cards-block-wrapper'
    randNumsArr.map(el => wrapper.innerHTML += sectionThreeCardsArr[el])
    return wrapper
}
const createDefaultCardsWrapper = () => {
    const wrapper = document.createElement('div')
    const numsArr = [...Array(numberOfCards).keys()]
    wrapper.className = 'section-three-cards-block-wrapper'
    numsArr.map(el => wrapper.innerHTML += sectionThreeCardsArr[el])
    return wrapper
}
const nextBtnAppendRemove = () => {
    sectionThreeCardsWrappers.removeChild(sectionThreeCardsWrappers.firstElementChild)
    sectionThreeCardsWrappers.append(createRandomCardsWrapper())
    sectionThreeCardsWrappers.removeChild(sectionThreeCardsWrappers.firstElementChild)
    sectionThreeCardsWrappers.prepend(createRandomCardsWrapper())
}
const prevBtnAppendRemove = () => {
    sectionThreeCardsWrappers.removeChild(sectionThreeCardsWrappers.lastElementChild)
    sectionThreeCardsWrappers.prepend(createRandomCardsWrapper())
    sectionThreeCardsWrappers.removeChild(sectionThreeCardsWrappers.lastElementChild)
    sectionThreeCardsWrappers.append(createRandomCardsWrapper())
}
const turnOffBtns = () => {
    nextBtn.style.pointerEvents = 'none'
    prevBtn.style.pointerEvents = 'none'
}
const turnOnBtns = () => {
    nextBtn.style.pointerEvents = 'all'
    prevBtn.style.pointerEvents = 'all'
}

sectionThreeCardsWrappers.append(createRandomCardsWrapper())
sectionThreeCardsWrappers.append(createDefaultCardsWrapper())
sectionThreeCardsWrappers.append(createRandomCardsWrapper())

nextBtn.addEventListener('click', () => {
    turnOffBtns()
    sectionThreeCardsWrappers.style.transform = `translateX(-${document.querySelector('.section-three-cards-block-wrapper').clientWidth}px)`
    setTimeout(() => {
        nextBtnAppendRemove()
        sectionThreeCardsWrappers.style.transition = 'none'
        sectionThreeCardsWrappers.style.transform = `translateX(0)`
        turnOnBtns()
    }, 1000)
    sectionThreeCardsWrappers.style.transition = 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
    
})
prevBtn.addEventListener('click', () => {
    turnOffBtns()
    sectionThreeCardsWrappers.style.transform = `translateX(${document.querySelector('.section-three-cards-block-wrapper').clientWidth}px)`
    setTimeout(() => {
        prevBtnAppendRemove()
        sectionThreeCardsWrappers.style.transition = 'none'
        sectionThreeCardsWrappers.style.transform = `translateX(0)`
        turnOnBtns()
    }, 1000)
    sectionThreeCardsWrappers.style.transition = 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
})

// slider section 3 swipe
let xDown = null;                                                        
let yDown = null;

const getTouches = (e) => {
  return e.touches
}                                                     
                                                                         
const handleTouchStart = (e) => {
    const firstTouch = getTouches(e)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
const handleTouchMove = (e) => {
    if ( ! xDown || ! yDown ) {return}

    let xUp = e.touches[0].clientX;                                    
    let yUp = e.touches[0].clientY;
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            sectionThreeCardsWrappers.style.pointerEvents = 'none'
            sectionThreeCardsWrappers.style.transform = `translateX(-${document.querySelector('.section-three-cards-block-wrapper').clientWidth}px)`
            setTimeout(() => {
                nextBtnAppendRemove()
                sectionThreeCardsWrappers.style.transition = 'none'
                sectionThreeCardsWrappers.style.transform = `translateX(0)`
                sectionThreeCardsWrappers.style.pointerEvents = 'all'
            }, timeoutTime)
            sectionThreeCardsWrappers.style.transition = `transform ${transitionTime}s cubic-bezier(0.645, 0.045, 0.355, 1) 0s`
        } else {
            sectionThreeCardsWrappers.style.pointerEvents = 'none'
            sectionThreeCardsWrappers.style.transform = `translateX(${document.querySelector('.section-three-cards-block-wrapper').clientWidth}px)`
            setTimeout(() => {
                prevBtnAppendRemove()
                sectionThreeCardsWrappers.style.transition = 'none'
                sectionThreeCardsWrappers.style.transform = `translateX(0)`
                sectionThreeCardsWrappers.style.pointerEvents = 'all'
            }, timeoutTime)
            sectionThreeCardsWrappers.style.transition = `transform ${transitionTime}s cubic-bezier(0.645, 0.045, 0.355, 1) 0s`
        }                       
    }
    xDown = null;
    yDown = null;                                             
};
sectionThreeCardsWrappers.addEventListener('touchstart', handleTouchStart, false);        
sectionThreeCardsWrappers.addEventListener('touchmove', handleTouchMove, false);
// slider section 3 end

// slider section 5 slider
const closeTestimonalsPopUp = () => {
    document.querySelector('.blur').classList.remove('blur-visible')
    document.querySelector('.section-five-testimonal-popup').classList.remove('active-testimonals-popup')
    document.body.classList.remove('body-testimonal-popup-open')
}

const sectionFiveSlider = document.querySelector('.section-five-slider-range')
const sectionFiveTestimonalsArr = [...document.querySelectorAll('.section-five-testimonal')]

if (window.innerWidth < 1220) {
    sectionFiveSlider.max = 8
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        closeTestimonalsPopUp()
    }
    if (window.innerWidth < 1000) {
        document.querySelector('.section-five-testimonals').style.transition = 'none'
        document.querySelector('.section-five-testimonals').style.transform = `translate(0px)`
    }
    if (window.innerWidth >= 1000 && window.innerWidth < 1220) {
        sectionFiveSlider.max = 8
        document.querySelector('.section-five-testimonals').style.transition = 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
        document.querySelector('.section-five-testimonals').style.transform = `translate(-${sectionFiveSlider.value * (document.querySelector('.section-five-testimonal').clientWidth + 29.3)}px)`
    } 
    if (window.innerWidth >= 1220) {
        sectionFiveSlider.max = 7
        document.querySelector('.section-five-testimonals').style.transition = 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s'
        document.querySelector('.section-five-testimonals').style.transform = `translate(-${sectionFiveSlider.value * (document.querySelector('.section-five-testimonal').clientWidth + 29.3)}px)`
    }
})

sectionFiveSlider.addEventListener('input', () => {
    document.querySelector('.section-five-testimonals').style.transform = `translate(-${sectionFiveSlider.value * (document.querySelector('.section-five-testimonal').clientWidth + 29.3)}px)`
})

sectionFiveTestimonalsArr.map(el => {
    el.addEventListener('click', (e) => {
        if (window.innerWidth <= 640) {
            document.querySelector('.section-five-testimonal-popup-block').innerHTML = ''
            const testimonalCopy = e.target.closest('.section-five-testimonal-wrapper').cloneNode(true)
            document.querySelector('.section-five-testimonal-popup-block').appendChild(testimonalCopy)
            document.querySelector('.blur').classList.add('blur-visible')
            document.querySelector('.section-five-testimonal-popup').classList.add('active-testimonals-popup')
            document.body.classList.add('body-testimonal-popup-open')
        }
    })
})
document.querySelector('.section-five-testimonal-popup-close-btn').addEventListener('click', () => {
    closeTestimonalsPopUp()
})
document.querySelector('.blur').addEventListener('click', ()=>{
    closeTestimonalsPopUp()
})

const openInNewTab = (url) => {
    window.open(url, '_blank').focus();
}
