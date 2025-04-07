//Display the Joke

function generateJoke(response) {
    new Typewriter('#joke', {
        strings: response.data.answer,
        autoStart: true,
        cursor: ""
    });
}

//Generate a Joke
function joke() {
    let apiKey = 'ftaa3453eobcf48074d1b4a7fb00d483';
    let context = 'Be polite and give concise answers';
    let prompt = 'Tell me a joke';
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let jokeElement = document.querySelector("#joke");
    jokeElement.innerHTML = "Generating a joke... Please wait!";
    axios.get(apiUrl).then(generateJoke)
}

//Call the Joke function
let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", joke);

