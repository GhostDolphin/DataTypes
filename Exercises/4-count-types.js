'use strict';

const countTypesInArray = (arr) => {
  const counted = {};
  for (const element of arr) {
    const type = typeof element;
    if (counted[type] === undefined) counted[type] = 0;
    counted[type]++;
  }
  return counted;
};

module.exports = { countTypesInArray };
