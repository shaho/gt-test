import { Link } from "react-router-dom";
import * as utils from ".";

describe("Utils", () => {
  describe("CalculateTotalAmount()", () => {
    test("should return total amount in basket", () => {
      const array = [
        {
          count: 2,
          price: 10.03,
        },
        {
          count: 3,
          price: 7.97,
        },
        {
          count: 8,
          price: 2.99,
        },
      ];
      expect(utils.CalculateTotalAmount(array)).toEqual("67.89");
    });
    test("should return zero", () => {
      const array = [];
      expect(utils.CalculateTotalAmount(array)).toEqual("0.00");
    });
  });

  describe("addItem()", () => {
    test("should add item to the basket", () => {
      const basket = [];
      const item = { name: "name", price: 2.76, slug: "name" };
      expect(utils.addItem(basket, item)).toContainEqual({
        ...item,
        ...{ count: 1 },
      });
    });
    test("should increase count of the existing item in the basket", () => {
      const basket = [{ name: "name", price: 2.76, slug: "name", count: 15 }];
      const item = { name: "name", price: 2.76, slug: "name" };
      expect(utils.addItem(basket, item)).toContainEqual({
        name: "name",
        price: 2.76,
        slug: "name",
        count: 16,
      });
    });
  });

  describe("removeItem()", () => {
    test("should remove item from the basket", () => {
      const basket = [{ name: "name", price: 2.76, slug: "name", count: 1 }];
      const item = { name: "name", price: 2.76, slug: "name" };
      expect(utils.removeItem(basket, item)).not.toContainEqual({
        name: "name",
        price: 2.76,
        slug: "name",
        count: 1,
      });
    });
    test("should dencrease count of the existing item in the basket", () => {
      const basket = [{ name: "name", price: 2.76, slug: "name", count: 15 }];
      const item = { name: "name", price: 2.76, slug: "name" };
      expect(utils.removeItem(basket, item)).toContainEqual({
        name: "name",
        price: 2.76,
        slug: "name",
        count: 14,
      });
    });
  });

  describe("toggleToArray()", () => {
    test("should add item to the array if not exist", () => {
      const arr = [];
      const item = "name";
      expect(utils.toggleToArray(arr, item)).toContainEqual("name");
    });
    test("should remove item from the array if exist", () => {
      const arr = ["name"];
      const item = "name";
      expect(utils.toggleToArray(arr, item)).not.toContainEqual("name");
    });
  });

  describe("addSelectedProp()", () => {
    test("should compare the base array vs selected array and add set selected property ", () => {
      const array = [
        { name: "one", slug: "one" },
        { name: "two", slug: "two" },
        { name: "three", slug: "three" },
      ];
      const selectedArray = ["two"];
      const expected = [
        { name: "one", selected: false, slug: "one" },
        { name: "two", selected: true, slug: "two" },
        { name: "three", selected: false, slug: "three" },
      ];
      expect(utils.addSelectedProp(array, selectedArray)).toContainEqual(
        expected[0]
      );
      expect(utils.addSelectedProp(array, selectedArray)).toContainEqual(
        expected[1]
      );
      expect(utils.addSelectedProp(array, selectedArray)).toContainEqual(
        expected[2]
      );
    });
  });

  describe("CalculateFromNTo()", () => {
    test("should return from, to and the totalPageCount for pagination ", () => {
      expect(utils.CalculateFromNTo(3, 1300).from).toEqual(32);
      expect(utils.CalculateFromNTo(3, 1300).to).toEqual(48);
      expect(utils.CalculateFromNTo(3, 1300).totalPageCount).toEqual(82);
    });
    test("should return from, to and the totalPageCount for pagination, 20 item per page ", () => {
      expect(utils.CalculateFromNTo(3, 1300, 20).from).toEqual(40);
      expect(utils.CalculateFromNTo(3, 1300, 20).to).toEqual(60);
      expect(utils.CalculateFromNTo(3, 1300, 20).totalPageCount).toEqual(65);
    });
  });

  describe("getPagePath()", () => {
    test("should return PagePath for pagination ", () => {
      expect(utils.getPagePath(3, "/")).toEqual("/page/3");
      expect(utils.getPagePath(1, "/products/")).toEqual("/products/");
      expect(utils.getPagePath(2, "/products/")).toEqual("/products/page/2");
    });
  });
});
