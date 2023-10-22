
import {getMenu, getName, getPrice, getSwappable, hasItem} from './menuItems.mjs';


// Define an array to store the selected food items


// Define a Map to store item prices

// Function to add an item to the list
function addItemToOrder(selectedItems, item) {
  selectedItems.push(item);
}

// Function to remove an item from the list
function removeItemFromOrder(item) {
  const index = selectedItems.indexOf(item);
  if (index !== -1) {
    selectedItems.splice(index, 1);
  }
}

// Function to calculate the total price
function calculateTotalPrice() {
  let highestPrice = 0.0;
  let total = 0;
  
  for (let i = 0; i < selectedItems.length; i++) {
    
    if (hasItem(selectedItems[i])) {
        let currentItem = selectedItems[i];
        total += getPrice(currentItem);
      
      if(getPrice(currentItem) > highestPrice && getSwappable(currentItem) === true) {
        highestPrice = getPrice(currentItem);
      
    }
  }
}
  return ([total.toFixed(2), (total - highestPrice).toFixed(2)]);// Round to two decimal places, return a touple of (balance with no swap, balance with swap)
};

function currentOrderText() {
    let currentOrder = '';
    selectedItems.forEach((item) => {
      currentOrder += getName(item) + ':' + getPrice(item) + ', ';
    });
    return currentOrder.slice(0, -2);
  }

// Example usage:

addItemToOrder(1);
addItemToOrder(1);
addItemToOrder(2);
addItemToOrder(0);


const totalPrice = calculateTotalPrice()[0];
const totalPriceWithSwap = calculateTotalPrice()[1];

console.log('\n' + currentOrderText());
console.log(`Total Price: $${totalPrice}`);
console.log(`Total Price Using One Swap: $${totalPriceWithSwap}`);