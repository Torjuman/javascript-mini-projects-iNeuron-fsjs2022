/**
 * 10. Boolean value is either true or false.
    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.
 */

/**
 * Truthy value
 *  - all value are truthy in js eccept it is defined as false or some special falsy value.
 *  -- such as true, {}, [], 45, "string", -1, -30
 *  - falsy value: false, null, undefined, NaN, "", 0, -0
 */

let str = "string";
let strEmpty = "";
let obj = {};
let arr = [];
let num = 7;
let numNeg = -7;
let zero = 0;
let zeroNeg = -0;
let fal = false;
let inf = Infinity;
let infNeg = -Infinity;
let und = undefined;
let nan = NaN;

function truthyFalsyCheck(value) {
  if (value) {
    console.log(`${value} is a truthy value.`);
  } else {
    console.log(`${value} is a falsy value.`);
  }
}

truthyFalsyCheck(str); // string is a truthy value.
truthyFalsyCheck(strEmpty); // empty string is a falsy value.
truthyFalsyCheck(obj); // [object Object] is a truthy value.
truthyFalsyCheck(arr); // [] is a truthy value.
truthyFalsyCheck(num); // 7 is a truthy value.
truthyFalsyCheck(numNeg); // -7 is a truthy value.
truthyFalsyCheck(zero); // 0 is a falsy value.
truthyFalsyCheck(zeroNeg); // -0 is a falsy value.
truthyFalsyCheck(fal); // false is a falsy value.
truthyFalsyCheck(inf); // Infinity is a truthy value.
truthyFalsyCheck(infNeg); // -Infinity is a truthy value.
truthyFalsyCheck(und); // undefined is a falsy value.
truthyFalsyCheck(nan); // NaN is a falsy value.
