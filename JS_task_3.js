// 1. Write a JavaScript function to get the last element of an array

const lastElement = (arr) => arr ? arr.slice(-1)[0] :"This array is empty";
console.log(`Last element of this array is ${lastElement([3, 55, -4, 21])}`);

// 2. Write a simple JavaScript program to join all elements of the
// following array into a string

const arr = [ "This", "program", "create", "a string", "from", "array's", "elements"];
const str_from_arr = arr.join(" ");
console.log(str_from_arr);
