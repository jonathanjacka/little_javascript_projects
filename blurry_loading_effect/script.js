const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

const blurring = () => {
    load++;
    
    if(load > 99){
        clearInterval(count);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

let count = setInterval(blurring, 30);

//maps set of numbers to a second set of numbers -> used to map load increase to opacity to get fade out effect
const scale = (number, inMin, inMax, outMin, outMax) => (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;



