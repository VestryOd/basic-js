module.exports = function countCats(/* matrix */) {
  let cats = 0;
  Array.from(...arguments).forEach(el => {
    if (el.includes("^^", 0)) {
      el.forEach(item => {
        item === "^^" ? cats++ : false;
      });
    }
  });
  return cats;
};
