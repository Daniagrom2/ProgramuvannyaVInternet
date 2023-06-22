import Logger from './logger.js';

const CaesarCipher = {
  encrypt: function (message, shift) {
    Logger.log(Logger.LOG_LEVELS.INFO, `Encrypting message "${message}" with shift ${shift}`);
    let result = '';
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        charCode = ((charCode - 65 + shift) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        charCode = ((charCode - 97 + shift) % 26) + 97;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  },

  decrypt: function (message, shift) {
    Logger.log(Logger.LOG_LEVELS.INFO, `Decrypting message "${message}" with shift ${shift}`);
    return this.encrypt(message, 26 - shift);
  }
};

export default CaesarCipher;
