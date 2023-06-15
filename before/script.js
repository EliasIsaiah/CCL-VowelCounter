let counter = 0;
let inputString = "";
let numberOfVowels = 0;
let vowels = ["a", "e", "i", "o", "u"];

inputString = "cafeteria";

for (letter of inputString) {
    console.log(`current letter: ${letter}`);
    if(letter === "a") {
        console.log("you've got an \"a\"!");
        counter++;
        console.log(`counter: ${counter}`);
    }
}

getNumberOfVowels();

function getNumberOfVowels() {
    
}

function cleanString() {

}