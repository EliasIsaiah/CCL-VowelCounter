let counter = 0;
let inputString = "";
let numberOfVowels = 0;
let vowels = ["a", "e", "i", "o", "u"];

inputString = "cafeteria";


getNumberOfVowels();
switchSolution();

function getNumberOfVowels() {
    
}

function cleanString() {
    
}

function switchSolution() {
    for (letter of inputString) {
        switch (letter) {
            case 'a':
                counter++
                break;
            case 'e':
                counter++
                break;
            case 'i':
                counter++
                break;
            case 'o':
                counter++
                break;
            case 'u':
                counter++
                break;
            default:
                // do nothing
        }
        console.log(`counter value ${counter}`);
    }
}