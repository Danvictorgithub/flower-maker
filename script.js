//Selectors
const colorFloret = document.querySelector('.floretColor');
const colorPetal = document.querySelector('.petalColor')
const sliderLen = document.querySelector('.lenSlider');
const petalsNum = document.querySelector('.numPetals');
const radiusLen = document.querySelector('.lenRadius');
const statRadius = document.querySelector('.radiusStat');
const statusLen = document.querySelector('.lenStatus');
const aod = document.querySelector('.aod');
let petalInfo = document.querySelectorAll('.petal');
let petals = document.querySelector('.petals');
const floret = document.querySelector('.circle');

const xPetal = document.querySelector('.petalX');
const yPetal = document.querySelector('.petalY');
const zPetal = document.querySelector('.petalZ');
let petalbefore = window.getComputedStyle(floret,'::before');
//Default values
let fRadius = 10;
let length = 1;
let defX = 50;
let defY = 50;
let defZ = 50;
let angleOfDestribution = 30;
let degree = 0;
let currentColor = 'yellow'
aod.textContent = "30°";
statRadius.textContent = `${fRadius}`;
statusLen.textContent = `${length}`;
petalInfo.forEach((petalz) => {
    petalz.style.setProperty('--trans',`skew(${length}deg,${length}deg)`);
});
//Event Listeners
colorPetal.addEventListener('input',(e) =>{
    currentColor = `${e.target.value}`
    petalInfo = document.querySelectorAll('.petal');
    petals = document.querySelector('.petals');
    petalInfo.forEach((petal) => {
        petal.style.setProperty('--before',`${currentColor}`);
    });
});
colorFloret.addEventListener('input',(e) => {
    floret.style['background-color'] = e.target.value;
});
petalsNum.addEventListener('input',(e) => {
    while (petals.firstElementChild != floret) {
        petals.removeChild(petals.firstElementChild);
    }
    degree = 360/e.target.value;
    if (degree == Infinity) {
        degree = "Enter the number of Petals";
        while (petals.firstElementChild != floret) {
            petals.removeChild(petals.firstElementChild);
        }
    } else {
        for (let i=0; i!= e.target.value;i++) {
            const countpetal = document.createElement('div');
            countpetal.classList.add('petal');
            countpetal.style['transform'] = `rotateZ(${degree*i}deg)`;
            petals.insertBefore(countpetal,floret);
        }
    }
    aod.textContent = `${degree}°`;
    petalInfo = document.querySelectorAll('.petal');
    petals = document.querySelector('.petals');
    petalInfo.forEach((petal) => {
        petal.style.setProperty('--before',`${currentColor}`);
    });
});
radiusLen.addEventListener('input', (e) => {
    statRadius.textContent = `${e.target.value}`;
    floret.style['width'] = `${e.target.value}rem`;
    floret.style['height'] = `${e.target.value}rem`;
});

sliderLen.addEventListener('input', (e) => {
    statusLen.textContent = `${e.target.value}`;
    petalInfo.forEach((petal) => {
        petal.style.setProperty('--trans',`skew(${e.target.value}deg,${e.target.value}deg)`);
    });
});

xPetal.addEventListener('input',(e) => {
    defX = e.target.value;
    petalInfo.forEach((petal) => {
        petal.style.setProperty('--rad', `${defX}% ${defY}% 0 ${defZ}%`);
    });
    
});

yPetal.addEventListener('input',(e) => {
    defY = e.target.value;
    petalInfo.forEach((petal) => {
        petal.style.setProperty('--rad', `${defX}% ${defY}% 0 ${defZ}%`);
    });
});

zPetal.addEventListener('input',(e) => {
    defZ = e.target.value;
    petalInfo.forEach((petal) => {
        petal.style.setProperty('--rad', `${defX}% ${defY}% 0 ${defZ}%`);
    });
});
