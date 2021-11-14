import calculator from "../calculator.js";
import chai from "chai";

describe("Negative tests of Calculator", function () {
  it("Operand is not  a number", function () {
    chai.expect(() =>
      calculator(2, "1", "+").to.throw(
        "Passed to calcutator data is not a number"
      )
    );
  });

  it("Wrong operation", function () {
    chai.expect(() =>
      calculator(2, 2, "**").to.throw(
        "Passed operation is not supported or does not exist"
      )
    );
  });

  it("Second operand equals zero", function () {
    chai.expect(() =>
      calculator(100, 0, "/").to.throw("Divition by Zero is not allowed")
    );
  });
});
