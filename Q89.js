"use strict";
// Question89:Converting string into number: Create a function that takes a string representing a number (like"123")and convert it into actual number type.
function strIntoNumber(str) {
    let convinteger = parseInt(str);
    let convfloat = parseFloat(str);
    console.log("integer:", convinteger, "Float:", convfloat);
}
console.log(strIntoNumber("123.67"));
