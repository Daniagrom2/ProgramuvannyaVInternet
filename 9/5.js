function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntArray(length, max) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(getRandomInt(max));
  }
  return result;
}

function getRandomText(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export { getRandomInt };
export { getRandomIntArray };
export { getRandomText as default };
