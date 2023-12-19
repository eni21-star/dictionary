
const eni = document.getElementById("displayB");

const audioFile = document.getElementById("audio");

const yourWord = document.getElementById("urword");

let inputTxt = document.getElementById("input");

let Means = document.getElementById("meaning");

inputTxt.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        console.log(inputTxt.value);
        Apia(inputTxt.value);

    }
})

    async function Apia(wordd) {
    try {
        eni.style.display = 'block';
        yourWord.textContent = `Your Word: ${inputTxt.value}`;
        Means.textContent = 'Fetching meaning....';
        const ApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordd}`;
        const get = await fetch(ApiUrl);
        const res = await get.json();

        if (res.title) {
            Means.textContent = "Please check your word for any spelling errors"
        }
        else {
            console.log(res[0].meanings[0].definitions[0].definition);
            console.log(res);


            Means.textContent = res[0].meanings[0].definitions[0].definition;
            audioFile.src = res[0].phonetics[0].audio;
        }
    } catch (error) {
        console.log(error);

    }
}
