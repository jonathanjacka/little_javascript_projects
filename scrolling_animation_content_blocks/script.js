const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
    const triggerPoint = window.innerHeight / 5 * 4;
    console.log(triggerPoint);

    boxes.forEach(box => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect - find the top of the box
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerPoint){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkBoxes);