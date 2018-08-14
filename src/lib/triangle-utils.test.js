import { compareSides, bordersToSides, sidesToBorders } from "./triangle-utils";
import types from "../constants/triangle-types";

describe("compareSides - Unit Tests", () => {
  describe("When given 3 positive numbers", () => {
    it("should return equilateral", () => {
      const type = types.EQUILATERAL;
      expect(compareSides(4, 4, 4)).toBe(type);
      expect(compareSides(1000, 1000, 1000)).toBe(type);
      expect(compareSides(1.555, 1.555, 1.555)).toBe(type);
    });
    it("should return isosceles", () => {
      const type = types.ISOSCELES;
      expect(compareSides(4, 4, 3)).toBe(type);
      expect(compareSides(1000, 2000, 1000)).toBe(type);
      expect(compareSides(0.00005, 0.00001, 0.00005)).toBe(type);
    });
    it("should return scalene", () => {
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
});

describe("borderToSides & sidesToBorders – Unit Tests", () => {
  it("should return correct values", () => {
    const borders = [1, 1, 1];
    const sides = bordersToSides(...borders);
    expect(sides.a).toBeCloseTo(1.414);
    expect(sides.c).toBeCloseTo(1.414);
    expect(sides.b).toBe(2);

    const _borders = sidesToBorders(...Object.values(sides));
    expect(_borders.left).toBe(borders[0]);
    expect(_borders.height).toBe(borders[1]);
    expect(_borders.right).toBe(borders[2]);
  });
  it("should return correct values", () => {
    const borders = [3, 2, 1];
    const sides = bordersToSides(...borders);
    expect(sides.a).toBeCloseTo(3.605);
    expect(sides.c).toBeCloseTo(2.236);
    expect(sides.b).toBeCloseTo(4);

    const _borders = sidesToBorders(...Object.values(sides));
    expect(_borders.left).toBe(borders[0]);
    expect(_borders.height).toBe(borders[1]);
    expect(_borders.right).toBe(borders[2]);
  });
});
