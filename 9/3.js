import CryptoJS from 'crypto-js';

const message = 'Hello, world!';
const secretKey = 'secret key';

// Encrypt
const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
console.log(`Encrypted message: ${encryptedMessage}`);

// Decrypt
const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, secretKey).toString(CryptoJS.enc.Utf8);
console.log(`Decrypted message: ${decryptedMessage}`);
