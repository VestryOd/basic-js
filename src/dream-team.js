module.exports = function createDreamTeam() {
  let arr = Array.from(arguments)[0];
  if (!Array.isArray(arr) || arr.length === 0 || arr === null || arr === undefined || arr === false) {
    return false;
  }

  let result = [];

  arr.forEach(el => {
    if (typeof (el) === 'string') {
      el.includes(' ') ? result.push(el.match(/\w/)[0].toUpperCase()) : result.push(el[0].toUpperCase());
    }
  });
  return result.sort().join('');
};