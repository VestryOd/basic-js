module.exports = function getSeason(/* date */) {
  let param = Array.from(arguments)[0];

  if (param === undefined) {
    return "Unable to determine the time of year!";
  }

  if (!(param instanceof Date)) {
    throw new Error();
  }
  
  if (!(Object.prototype.toString.call(param) === '[object Date]')) {
    throw new Error();
  }

  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

  return seasons[param.getMonth()];
};
