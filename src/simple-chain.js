const chainMaker = {
  "_chain": [],
  getLength() {
    return this._chain.length;
  },
  addLink(value) {
    this._chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (Number.isNaN(position) || typeof (position) === 'string' || String(position).includes('.') || position <= 0 || position > this.getLength()) {
      this._chain = [];
      throw new Error();
    }

    this._chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this._chain.reverse();
    return this;
  },
  finishChain() {
    let result = this._chain.join('~~');
    this._chain = [];
    return result;
  }
};

module.exports = chainMaker;
