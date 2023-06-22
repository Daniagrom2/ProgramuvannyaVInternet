function isJsFile(filename) {
  return filename.endsWith('.js');
}

console.log(isJsFile('script.js')); // true
console.log(isJsFile('app.css')); // false
