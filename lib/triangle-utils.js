const validate = (a, b, c) => {
  const sides = [a, b, c];
  // TODO: check if 3 arguments are provided

  // check if sides are less than 0
  if (sides.find(side => side < 0)) {
    throw new Error("Triangle sides length can't be < 0");
  }
  // check if sides are other than numbers
  if (sides.find(side => !(typeof side === "number"))) {
    throw new Error("Triangle sides length has to be a number");
  }
};

exports.compareSides = (a = 1, b = 2, c = 3) => {
  validate(a, b, c);
  // all sides are equal length - equilateral triangle
  if (a === b && a === c) {
    return 3;
  }

  // no sides are equal - scalene triangle
  if (a !== b && b !== c && a !== c) {
    return 0;
  }

  // otherwise two sides must be equal - isocale triangle
  return 2;
};
