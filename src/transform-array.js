module.exports = function transform(arr) {
    
  if (!Array.isArray(arr)) throw new Error();

  if (arr.length === 0) return arr;

  let result = [], next = false;
  let sequences = ['--discard-prev', '--double-prev', '--discard-next', '--double-next'];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-prev' && i !== 0) {
      result.push(arr[i - 1]);
    } else if (arr[i] === '--discard-prev' && i !== 0) {
      result.pop();
    } else if (arr[i] === '--double-next' && i !== arr.length - 1) {
      result.push(arr[i + 1]);
    } else if (arr[i] === '--discard-next' && i !== arr.length - 1) {
      next = true;
    } else if (next) {
      next = false;
      continue;
    } else if (!sequences.includes(arr[i])) {
      result.push(arr[i]);
    } else {
      continue;
    }
  }
  return result;
};
