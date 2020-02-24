module.exports = function repeater(str, options) {
    if (typeof (str) === 'undefined') throw new Error();

    str = String(str);
    let addition = options.addition !== undefined ? String(options.addition) : '';
    let repeatTimes = options.repeatTimes ? parseInt(options.repeatTimes) : 1;
    let additionRepeatTimes = options.additionRepeatTimes ? parseInt(options.additionRepeatTimes) : 1;
    let separator = options.separator ? String(options.separator) : '+';
    let additionSeparator = options.additionSeparator ? String(options.additionSeparator) : '|';

    let substring = String(addition + '#').repeat(additionRepeatTimes).split('#').slice(0, -1).join(additionSeparator);

    return `${str}${substring}#`.repeat(repeatTimes).split('#').slice(0, -1).join(separator);
};
  