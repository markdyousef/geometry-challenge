const { compareSides } = require("./lib/triangle-utils");

const sides = process.argv.slice(2).map(arg => Number(arg));
console.log(compareSides(...sides));
