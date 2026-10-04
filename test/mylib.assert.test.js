const assert = require("chai").assert;
const mylib = require("../src/mylib");

describe("mylib arithmetic functions", () => {

  before(() => {
    console.log("Starting mylib tests...");
  });

  after(() => {
    console.log("Finished mylib tests.");
  });

  describe("add()", () => {
    it("should add two numbers correctly", () => {
      assert.equal(mylib.add(8, 2), 10);
    });
  });

  describe("subtract()", () => {
    it("should subtract two numbers correctly", () => {
      assert.equal(mylib.subtract(7, 3), 4);
    });
  });

  describe("multiply()", () => {
    it("should multiply two numbers correctly", () => {
      assert.equal(mylib.multiply(4, 1), 4);
    });
  });

  describe("divide()", () => {
    it("should divide two numbers correctly", () => {
      assert.equal(mylib.divide(12, 4), 3);
    });

    it("should throw an error when dividing by zero", () => {
      assert.throws(
        () => mylib.divide(12, 0),
        "Cannot divide by zero"
      );
    });
  });
});