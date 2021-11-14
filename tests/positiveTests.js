import assert from "assert";
import calculator from "../calculator.js";

describe("Positive tests of Calculator", function () {
  //correct math calc
  it("Addition", function () {
    assert.equal(calculator(6, 4, "+"), 10);
  });

  it("Substraction", function () {
    assert.equal(calculator(-3, 1, "-"), -4);
  });

  it("Multiplication", function () {
    assert.equal(calculator(3, 5, "*"), 15);
  });

  it("Division", function () {
    assert.equal(calculator(35, -5, "/"), -7);
  });
});
