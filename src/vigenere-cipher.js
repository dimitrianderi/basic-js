const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  resultString = '';
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  isTrue = true;

  constructor(x) {
    if (x === false) {
      this.isTrue = false;
    }
  }
  encrypt(message, key) {
    if (arguments.length !== 2 || message == undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    
    while (key.length < message.length) {
      key = key.repeat(2);
    }
    
    key = key.substr(0, message.length);

    this.resultString = message.split('').map((el, ind) => {
      let indEl = this.alphabet.indexOf(el.toLowerCase());;
      let indKey = this.alphabet.indexOf(key[ind].toLowerCase());
      let res = indEl + indKey;
    
      let indRes = (res >= 26) ? Math.abs(26 - res) : res;

      if (!(this.alphabet.split('').includes(el.toLowerCase()))) {
        el = el;
        key = key.split('');
        key.splice(ind, 0, key[ind]);
        key = key.join('');
      } else {
        el = this.alphabet[indRes];
      }

      return el;

    }).join('').toUpperCase();

    if (!this.isTrue) this.resultString = this.resultString.split('').reverse().join('');

    return this.resultString;
  }
  decrypt(message, key) {
    if (arguments.length !== 2 || message == undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    while (key.length < message.length) {
      key = key.repeat(2);
    }
    
    key = key.substr(0, message.length);

    this.resultString = message.split('').map((el, ind) => {
      let indEl = this.alphabet.indexOf(el.toLowerCase());;
      let indKey = this.alphabet.indexOf(key[ind].toLowerCase());
      let res = indEl - indKey;
    
      let indRes = (res >= 0) ? res : Math.abs(26 + res);
    
      if (!(this.alphabet.split('').includes(el.toLowerCase()))) {
        el = el;
        key = key.split('');
        key.splice(ind, 0, key[ind]);
        key = key.join('');
      } else {
        el = this.alphabet[indRes];
      }

      return el;

    }).join('').toUpperCase();

    if (!this.isTrue) this.resultString = this.resultString.split('').reverse().join('');

    return this.resultString;
    
  }
}

module.exports = {
  VigenereCipheringMachine
};
