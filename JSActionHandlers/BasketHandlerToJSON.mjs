import {getMenu, getName, getPrice, getSwappable, hasItem} from './menuItems.mjs';

import fs from 'fs';

function createBasket(customer) {
    const jsonContent = JSON.stringify([]);
    fs.writeFileSync(`./${customer}basket.json`, "hi", 'utf8', error => {});
    fs.writeFileSync(`./${customer}basket.json`, jsonContent, 'utf8' , error => {});
    console.log(`\n${customer}'s basket has been created!`);
    let test = JSON.parse(fs.readFileSync(`./${customer}basket.json`, { encoding: 'utf8' }));
    console.log(test);
}

function addItemToOrder(customer, item) {
    if(!fs.existsSync(`./${customer}basket.json`)) {
        createBasket(customer);
    }
    
    const basket = JSON.parse(fs.readFileSync(`./${customer}basket.json`, { encoding: 'utf8' }));
    basket.push(item);
    console.log(`\n${customer}'s basket has been updated!`);
    fs.writeFileSync(`./${customer}basket`, JSON.stringify(basket), { encoding: 'utf8' });
    console.log(`\n${customer}'s basket has been updated!`);
  
}

function removeItemFromOrder(customer, item) {
    if(fs.existsSync(`./${customer}basket`)) {
    const basket = JSON.parse(fs.readFileSync(`./${customer}basket.json`, { encoding: 'utf8' }));
    const index = basket.indexOf(item);
    basket.splice(index, 1);
    fs.writeFileSync(`./${customer}basket`, JSON.stringify(basket), { encoding: 'utf8' });
    console.log(`\n${customer}'s basket has been updated!`);
  }
  else {
    console.log(`\n${customer}'s basket does not exist!`);
  }
}

function calculateTotalPrice(customer) {
    if(fs.existsSync(`./${customer}basket`)) {
    const basket = JSON.parse(fs.readFileSync(`./${customer}basket`, { encoding: 'utf8' }));
    let highestPrice = 0.0;
    let total = 0;
    
    for (let i = 0; i < basket.length; i++) {
        
        if (hasItem(basket[i])) {
            let currentItem = basket[i];
            total += getPrice(currentItem);
          
          if(getPrice(currentItem) > highestPrice && getSwappable(currentItem) === true) {
            highestPrice = getPrice(currentItem);
          
        }
      }
    }
    return ([total.toFixed(2), (total - highestPrice).toFixed(2)]);// Round to two decimal places, return a touple of (balance with no swap, balance with swap)
  }
}

function currentOrderText(customer) {
  if(fs.existsSync(`./${customer}basket`)) {
    const basket = JSON.parse(fs.readFileSync(`./${customer}basket`, { encoding: 'utf8' }));
    let currentOrder = '';
    basket.forEach((item) => {
      currentOrder += getName(item) + ':' + getPrice(item) + ', ';
    });
    return currentOrder.slice(0, -2);
  }
}

function finishOrderText(customer) {
  if(fs.existsSync(`./${customer}basket`)) {
    const basket = JSON.parse(fs.readFileSync(`./${customer}basket`, { encoding: 'utf8' }));
    let currentOrder = '';
    basket.forEach((item) => {
      currentOrder += getName(item) + ':' + getPrice(item) + ', ';
    });
    let empty = JSON.stringify([]);
    fs.writeFileSync(`./${customer}currentOrder.txt`, empty , { encoding: 'utf8' });
    return currentOrder.slice(0, -2);
  }
  else {
    console.log(`\n${customer}'s basket does not exist!`);
  }
}

// Example usage:
createBasket('customer1');

addItemToOrder('customer1', 1);

const totalPrice = calculateTotalPrice('customer1')[0];

console.log('\n' + currentOrderText('customer1'));

console.log(`Total Price: $${totalPrice}`);

console.log('Total Price with a swap: $' + calculateTotalPrice('customer1')[1]);

console.log('\n' + finishOrderText('customer1') + '\n' + "Order completed. JSON array has beeen cleared.");

export {addItemToOrder, removeItemFromOrder, calculateTotalPrice, currentOrderText, finishOrderText};