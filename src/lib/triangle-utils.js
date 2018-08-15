import types from "../constants/triangle-types";

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

export const compareSides = ({ a = 1, b = 2, c = 3 }) => {
  validate(a, b, c);
  // all sides are equal length - equilateral triangle
  if (a === b && a === c) {
    return types.EQUILATERAL;
  }

  // no sides are equal - scalene triangle
  if (a !== b && b !== c && a !== c) {
    return types.SCALENE;
  }

  // otherwise two sides must be equal - isocale triangle
  return types.ISOSCELES;
};

export const bordersToSides = ({ left, height, right }) => {
  // Pythagoras to calculate a & c
  const a = Math.sqrt(Math.pow(left, 2) + Math.pow(height, 2));
  const c = Math.sqrt(Math.pow(height, 2) + Math.pow(right, 2));
  const b = left + right;

  return { a, b, c };
};
export const sidesToBorders = ({ a = 1, b = 2, c = 3 }) => {
  // Heron's formula to calc area of triangle
  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  const height = 2 * (area / b);
  // Pythagoras to calculate left & right
  const left = Math.sqrt(Math.pow(a, 2) - Math.pow(height, 2));
  const right = Math.sqrt(Math.pow(c, 2) - Math.pow(height, 2));

  return {
    left: isNaN(left) ? 0 : Math.round(left),
    right: isNaN(right) ? 0 : Math.round(right),
    height: isNaN(height) ? 0 : Math.round(height)
  };
};
