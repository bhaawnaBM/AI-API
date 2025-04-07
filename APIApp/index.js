function showAnswer(response) {
    alert(response.data.answer);
}

let apiKey = 'ftaa3453eobcf48074d1b4a7fb00d483';
let context = 'Be polite and provide concise anwsers';
let prompt = 'Who was the first female president in the world?';
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiUrl).then(showAnswer)

