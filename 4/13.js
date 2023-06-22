let text = "The quick brown fox jumps over the lazy dog";
let wordToReplace = "fox";
let newWord = "cat";

// Розбиваємо текстовий фрагмент на масив слів
let wordsArray = text.split(" ");

// Знаходимо індекси слів, які треба замінити
let indexes = [];
for(let i = 0; i < wordsArray.length; i++) {
  if(wordsArray[i] === wordToReplace) {
    indexes.push(i);
  }
}

// Замінюємо слова за індексами
for(let i = 0; i < indexes.length; i++) {
  wordsArray[indexes[i]] = newWord;
}

// Зібрання масиву слів знову в текстовий фрагмент
let newText = wordsArray.join(" ");
console.log(newText);
