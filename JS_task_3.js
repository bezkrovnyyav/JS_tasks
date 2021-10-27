// 1. Write a JavaScript function to get the last element of an array

const lastElement = (arr) => arr ? arr.slice(-1)[0] :"This array is empty";
console.log(`Last element of this array is ${lastElement([3, 55, -4, 21])}`);

// 2. Write a simple JavaScript program to join all elements of the
// following array into a string

const arr = [ "This", "program", "create", "a string", "from", "array's", "elements"];
const strFromArr = arr.join(" ");
console.log(strFromArr);

/* 
3. There are two arrays with individual values, write a
JavaScript program to compute the sum of each individual
index value from the given arrays and save them to third
array
*/

const array1 = [1, 0, 2, 8, 4];
const array2 = [3, 5, 6, 7];

sumOfTwoArrays = (array1, array2) => {
      let finalArray = [];
      for (let elem = 0; elem < array1.length || elem < array2.length; elem ++) {
          finalArray.push((array1[elem] || 0) + (array2[elem] || 0));
      }
      return finalArray
  };

let array3 = sumOfTwoArrays(array1, array2)
console.log(`New array is ${array3}`);


/*
4. Write a JavaScript program to calculate the area and
perimeter of a rectangle. Rectangle should be an object with
properties width and height and methods getArea() and
getPerimeter();
*/

let rectangle = {
  width: 3,
  height: 5,
  getArea: function () {
      return this.width * this.height;
  },
  getPerimeter: function () {
      return (this.width * this.height) * 2;
  }
};
console.log(`The area of a rectangle is ${rectangle.getArea()}`);
console.log(`The perimeter of a rectangle is ${rectangle.getPerimeter()}`);
