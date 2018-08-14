import { compareSides } from "./triangle-utils";
import types from "../constants/triangle-types";

describe("When given 3 positive numbers", () => {
  it("should return 3 equal sides", () => {
    const type = types.EQUILATERAL;
    expect(compareSides(4, 4, 4)).toBe(type);
    expect(compareSides(1000, 1000, 1000)).toBe(type);
    expect(compareSides(1.555, 1.555, 1.555)).toBe(type);
  });
  it("should return 2 equal sides", () => {
    const type = types.ISOSCELES;
    expect(compareSides(4, 4, 3)).toBe(type);
    expect(compareSides(1000, 2000, 1000)).toBe(type);
    expect(compareSides(0.00005, 0.00001, 0.00005)).toBe(type);
  });
  it("should return 0 equal sides", () => {
    const type = types.SCALENE;
    expect(compareSides(1, 2, 3)).toBe(type);
    expect(compareSides(1000, 2000, 3000)).toBe(type);
    expect(compareSides(1.9999, 2.8888, 3)).toBe(type);
  });
});

describe("When given invalid values", () => {
  it("should return Error message for values less than zero", () => {
    const error = new Error("Triangle sides length can't be < 0");
    expect(() => compareSides(-1, 2, 3)).toThrow(error);
    expect(() => compareSides(1000, -200, 3)).toThrow(error);
    expect(() => compareSides(-0.0001, 1.2, 3)).toThrow(error);
  });
  it("should return Error message for non-numbers", () => {
    const error = new Error("Triangle sides length has to be a number");
    expect(() => compareSides("4", 2, 3)).toThrow(error);
    expect(() => compareSides({}, 2, 3)).toThrow(error);
    expect(() => compareSides([], 2, 3)).toThrow(error);
  });
});
