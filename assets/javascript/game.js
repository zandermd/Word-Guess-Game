// create an array of words
const word = ['california','utah','colorado'];
// choose words randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let underScore = [];
console.log(choosenWord);
// create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());
// get users guess
document.addEventListener('keypress', (event) => {
let keycode = event.keyCode;
console.log(keyCode);
});
// check if guess is right
// if right push to right array 
// if wrong push to wrong array 
