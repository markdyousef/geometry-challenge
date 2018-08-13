const { compareSides } = require("./lib/triangle-utils");

function main() {
  const sides = process.argv.slice(2).map(arg => Number(arg));
  try {
    const inputs = sides.map(inp => Number(inp));
    const triangleType = compareSides(...inputs);
    switch (triangleType) {
      case 3:
        return `${inputs} => equilateral`;
      case 2:
        return `${inputs} => isosceles`;
      case 0:
        return `${inputs} => scalene`;
      default:
        return null;
    }
  } catch (error) {
    console.log(error);
  }
}

console.log(main());
