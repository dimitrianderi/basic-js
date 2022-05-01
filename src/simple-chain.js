const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push(`( )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (position === null || position % 1 !== 0 || position === undefined || isNaN(+position) === true || (position <= 0 || position > this.chain.length)) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain.length = 0;
    return res;
  }
};

module.exports = {
  chainMaker
};
