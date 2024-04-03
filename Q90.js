"use strict";
// Question 90: Checking if a value is NaN: Demonstrate how to check if a variable's value is NaN(Not a number) and return a booloean result.
// Check the value of variable
function checkNaNvalue(value1) {
    return isNaN(value1);
}
console.log(checkNaNvalue("hello"));
console.log(checkNaNvalue(123));
