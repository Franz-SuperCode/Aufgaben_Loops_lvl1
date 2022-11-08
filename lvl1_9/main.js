let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

//Nur die Wörter aus dem Array ins HTML schreiben, bei denen die Zahl des Inputfeldes übereinstimmt
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let button = document.querySelector("#print");
let newInput = document.querySelector("#new");

button.addEventListener("click", () => {
    console.log(Number(input.value));
    words.forEach(word => {
        if (Number(input.value) === word.length) {
            document.querySelector("#output").innerHTML += `${word} <br>`;

        }
    });

    document.querySelector("#output").innerHTML += newInput.value;

})

