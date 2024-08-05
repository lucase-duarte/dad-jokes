const joke = document.querySelector('.joke')
const btn = document.querySelector('.btn')
const config = {
    headers: {
        Accept: 'application/json'
    }
}

generateJoke()

btn.addEventListener('click', generateJoke)

function generateJoke() {
    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => joke.textContent = data.joke)
}