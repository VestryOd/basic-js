module.exports = function transform(arr) {
    
  if (!Array.isArray(arr)) throw new Error();

  if (arr.length === 0) return arr;

  let next = false, result = [];

  for (let i = 0; i < arr.length; i++) {

    if (next) {
      next = false;
      continue;
    } else {
      switch (arr[i]) {
        case '--discard-prev':
          if (result.length > 0) result.pop();          
          break;
        case '--double-prev':
          if (result.length > 0) result.push(result[result.length - 1]);
          break;
        case '--discard-next':
          next = true;
          break;
        case '--double-next':
            i >= arr.length - 1 || result.push(arr[i + 1]);
          break;
        default:
          result.push(arr[i]);
          break;
      }
    }
  }
  return result;
};
