/**
 * - Create a closure which has one inner function
   - Create a closure which has three inner functions
 */

//  - Create a closure which has one inner function
function firstClosure() {
  let userName = "Torjuman Rmon";

  // Inner function
  function innerFirstclosure() {
    console.log(`I am show from first Closure. And username = ${userName}`);
  }
  innerFirstclosure();
}
firstClosure();

// - Create a closure which has three inner functions
function secondClosure() {
  const person = {
    personName: "Torjuman Rimon",
    age: 26,
    profession: "Student",
  };

  // First inner function
  function nameShow() {
    console.log(
      `I am show from second Closure. And person name = ${person.personName}`
    );
  }
  nameShow();

  // Second inner function
  function ageShow() {
    console.log(
      `I am show from second Closure. And person age = ${person.age}`
    );
  }
  ageShow();

  // Third inner function
  function professionShow() {
    console.log(
      `I am show from second Closure. And person profession = ${person.profession}`
    );
  }
  professionShow();
}
secondClosure();
