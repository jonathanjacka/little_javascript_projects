const jokeElement = document.getElementById('joke');
const jokeButton = document.getElementById('joke-btn');

const generateJoke = async () => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();
    jokeElement.innerHTML = data.joke;

}


/**
*Below is method using promises .then method
*/
// const generateJoke = () => {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//         jokeElement.innerHTML = data.joke;
//     });
// }

//Initial call
generateJoke();

//Call whenever button is pressed
jokeButton.addEventListener('click', generateJoke);