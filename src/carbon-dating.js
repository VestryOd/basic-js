const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  if (Array.isArray(arguments[0]) || arguments[0] instanceof Object || arguments[0] === false || typeof (arguments[0]) === 'number' || arguments.length === 0) {
    return false;
  }

  let parsed = parseFloat(arguments[0]);

  if (Number.isNaN(parsed) || parsed <= 0 || parsed >= 15) {
    return false;
  }

  return Math.ceil(Math.log(15 / parsed) / (0.693 / 5730));
};
