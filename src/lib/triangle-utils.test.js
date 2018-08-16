import { compareSides, bordersToSides, sidesToBorders } from "./triangle-utils";
import types from "../constants/triangle-types";

describe("compareSides - Unit Tests", () => {
  describe("When given 3 positive numbers", () => {
    it("should return equilateral", () => {
      const type = types.EQUILATERAL;
      expect(compareSides({ a: 4, b: 4, c: 4 })).toBe(type);
      expect(compareSides({ a: 1000, b: 1000, c: 1000 })).toBe(type);
      expect(compareSides({ a: 1.555, b: 1.555, c: 1.555 })).toBe(type);
    });
    it("should return isosceles", () => {
      const type = types.ISOSCELES;
      expect(compareSides({ a: 4, b: 4, c: 3 })).toBe(type);
      expect(compareSides({ a: 400, b: 400, c: 300 })).toBe(type);
      expect(compareSides({ a: 0.00005, b: 0.00001, c: 0.00005 })).toBe(type);
    });
    it("should return scalene", () => {
      const type = types.SCALENE;
      expect(compareSides({ a: 3, b: 5, c: 4 })).toBe(type);
      expect(compareSides({ a: 3000, b: 5000, c: 4000 })).toBe(type);
      expect(compareSides({ a: 1.9999, b: 2.8888, c: 3 })).toBe(type);
    });
  });

  describe("When given invalid values", () => {
    it("should return Error message for values less than zero", () => {
      const error = new Error("Triangle sides length can't be < 0");
      expect(() => compareSides({ a: -1, b: 2, c: 3 })).toThrow(error);
      expect(() => compareSides({ a: 1000, b: -200, c: 3 })).toThrow(error);
      expect(() => compareSides({ a: -0.0001, b: 1.2, c: 3 })).toThrow(error);
    });
    it("should return Error message for non-numbers", () => {
      const error = new Error("Triangle sides length has to be a number");
      expect(() => compareSides({ a: "4", b: 2, c: 3 })).toThrow(error);
      expect(() => compareSides({ a: {}, b: 2, c: 3 })).toThrow(error);
      expect(() => compareSides({ a: [], b: 2, c: 3 })).toThrow(error);
    });
  });
});

describe("borderToSides & sidesToBorders – Unit Tests", () => {
  it("should return correct values", () => {
    const borders = { left: 1, right: 1, height: 1 };
    const sides = bordersToSides(borders);
    expect(sides.a).toBeCloseTo(1.414);
    expect(sides.c).toBeCloseTo(1.414);
    expect(sides.b).toBe(2);

    const _borders = sidesToBorders(sides);
    expect(_borders.left).toBe(borders.left);
    expect(_borders.height).toBe(borders.height);
    expect(_borders.right).toBe(borders.right);
  });
  it("should return correct values", () => {
    const borders = { left: 3, height: 2, right: 1 };
    const sides = bordersToSides(borders);
    expect(sides.a).toBeCloseTo(3.605);
    expect(sides.c).toBeCloseTo(2.236);
    expect(sides.b).toBeCloseTo(4);

    const _borders = sidesToBorders(sides);
    expect(_borders.left).toBe(borders.left);
    expect(_borders.height).toBe(borders.height);
    expect(_borders.right).toBe(borders.right);
  });
});
