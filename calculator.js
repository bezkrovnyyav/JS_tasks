export default function calculator(number1, number2, operation) {
    let operations = ["+", "-", "*", "/"];
  
    try {
      // check the number
      if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new TypeError("Passed to calcutator data are not numbers");
      }
  
      // check the type of operation
      if (!operations.includes(operation)) {
        throw new RangeError(
          "Passed operation is not supported or does not exist"
        );
      }
  
      // The operations of calculator
      switch (operation) {
        case "+":
          return number1 + number2;
        case "-":
          return number1 - number2;
        case "*":
          return number1 * number2;
        case "/":
          if (number2 === 0) {
            throw new Error("Divition by Zero is not allowed");
          } else{
          return number1 / number2;
            } 
      }
    } catch (err) {
      return err.message;
    }
  }
  