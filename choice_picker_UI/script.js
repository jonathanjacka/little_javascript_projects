const tagsElement = document.querySelector('.tags');
const textArea = document.querySelector('.textArea');

//starts cursor in textbox on window load
textArea.focus();

//creates a tag from each of the string inputs separated by comma
const createTags = input => {
    //remove white space and any empty strings
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    
    tagsElement.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsElement.appendChild(tagEl);
    });
}

/* Random Selector functions below */

//add highlight to random tag for randomSelect()
const highlightTag = tag => tag.classList.add('highlight');

//remove highlight to random tag for randomSelect()
const removeHighlightTag = tag => tag.classList.remove('highlight');

//picks random tag from list of tags for use in randomSelect()
const pickRandomTag = () => {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

const randomSelect = () => {
    const times = 30;

    const interval = setInterval(() => {
        const randTag = pickRandomTag();
        
        highlightTag(randTag);

        setTimeout(() => {
            removeHighlightTag(randTag)
        }, 100);

    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const finalRandTag = pickRandomTag();
            highlightTag(finalRandTag);
        }, 100);

    }, times * 100);

};


//Event listener to respond to inputs
textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    if(event.key === 'Enter') {
        //clear input
        setTimeout(() => {event.target.value = ''}, 10);
        randomSelect();
    }
});