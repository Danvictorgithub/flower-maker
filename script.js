//Selectors
const colorFloret = document.querySelector('.floretColor');
const colorPetal = document.querySelector('.petalColor')
const sliderLen = document.querySelector('.lenSlider');
const petalsNum = document.querySelector('.numPetals');
const radiusLen = document.querySelector('.lenRadius');
const statRadius = document.querySelector('.radiusStat');
const statusLen = document.querySelector('.lenStatus');
const aod = document.querySelector('.aod');
const petalInfo = document.querySelectorAll('.petal');
const floret = document.querySelector('.circle');

let petalbefore = window.getComputedStyle(floret,'::before');
//Default values
let fColor = "white";
let fRadius = 10;
let length = 1;
let pColor = "yellow";
let defX = 50;
let defY = 50;
let defZ = 50;
let angleOfDestribution = 30;
aod.textContent = "30°";
statRadius.textContent = `${fRadius}`;
statusLen.textContent = `${length}`;
petalInfo.forEach((petal) => {
    petal.style.setProperty('--trans',`skew(${length}deg,${length}deg)`);
});

//Event Listeners
colorPetal.addEventListener('input',(e) =>{
    petalInfo.forEach((petal) => {
        petal.style.setProperty('--before',`${e.target.value}`);
    });
});
colorFloret.addEventListener('input',(e) => {
    floret.style['background-color'] = `${e.target.value}`;
})
petalsNum.addEventListener('input',(e) => {
    let degree = 360/e.target.value;
    if (degree == Infinity) {
        degree = "Enter the number of Petals";
    };
    aod.textContent = `${degree}°`;
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
