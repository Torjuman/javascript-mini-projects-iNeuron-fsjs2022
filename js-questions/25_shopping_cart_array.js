/**
 * 25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
 */

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Make alternative method of includes
function hasValueArray(str, arr) {
  let checkedValue = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == str) {
      checkedValue = true;
    }
  }
  return checkedValue;
}

// ----- Meat check -----
if (!hasValueArray("Meat", shoppingCart)) {
  shoppingCart.unshift("Meat");
  console.log(shoppingCart); // output: [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey'
}

// ----- Sugar check -----
if (!hasValueArray("Sugar", shoppingCart)) {
  shoppingCart.push("Sugar");
  console.log(shoppingCart); // output: [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
}

// ----- Honey check -----
let javedAllergic = true;

if (javedAllergic) {
  if (hasValueArray("Honey", shoppingCart)) {
    let indNum = shoppingCart.indexOf("Honey");
    shoppingCart.splice(indNum, 1);
    console.log(shoppingCart); // output: [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]
  }
}

// ----- Green Tea modify -----
if (hasValueArray("Tea", shoppingCart)) {
  let indNum = shoppingCart.indexOf("Tea");
  shoppingCart.splice(indNum, 1, "Green Tea");
  console.log(shoppingCart); // output: [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]
}
