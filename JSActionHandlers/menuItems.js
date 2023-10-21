const itemPrices = new Map();
itemPrices.set(0, ['Burger', 5.99, true]);
itemPrices.set(1, ['Pizza', 8.99, true]);
itemPrices.set(2, ['Fries', 2.49, true]);
itemPrices.set(3, ['Soda', 1.49, true]);

function hasItem(item) {
    return itemPrices.has(item);
}
function getMenu() {
    return menuItems;
}

function getName(item) {
    if (itemPrices.has(item)) {
        return itemPrices.get(item)[0];
    }
}

function getPrice(item) {
    if (itemPrices.has(item)) {
        return itemPrices.get(item)[1];
    }
}

function getSwappable(item) {
    if (itemPrices.has(item)) {
        return itemPrices.get(item)[2];
    }
}


export {getMenu, getName, getPrice, getSwappable, hasItem};