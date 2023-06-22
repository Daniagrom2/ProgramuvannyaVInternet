let word = prompt("Enter a word:");
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

console.log(`The length of the word is ${word.length}.`);
console.log(`The word in reverse order is ${reversedWord}.`);
