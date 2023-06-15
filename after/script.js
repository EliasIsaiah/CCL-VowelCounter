let vowelCounter = 0;
let inputString = "";
let vowels = ["a", "e", "i", "o", "u"];

inputString = "I LIKE pizza!";


getNumberOfVowels();
switchSolution();

function optimalSolution() {
    for (letter of inputString) {
        if (vowels.includes(letter)) {
            vowelCounter++;
            console.log(`vowelCounter: ${vowelCounter}`);
        }
    }
}

function getNumberOfVowels() {

}

function cleanString() {

}

function switchSolution() {
    for (letter of inputString) {
        switch (letter) {
            case 'a':
                vowelCounter++
                break;
            case 'e':
                vowelCounter++
                break;
            case 'i':
                vowelCounter++
                break;
            case 'o':
                vowelCounter++
                break;
            case 'u':
                vowelCounter++
                break;
            default:
            // do nothing
        }
        console.log(`counter value ${vowelCounter}`);
    }
}