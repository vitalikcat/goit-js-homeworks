const inventory = {
  items: ["Монорельса", "Фильтр"],

  add(itemName) {
    inventory.items.push(itemName);
  },

  remove(itemName) {
    inventory.items = inventory.items.filter(item => item !== itemName);
  }
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking ${action.name} opeartion on ${itemName}`);
  action(itemName);
};

invokeInventoryAction("Аптечка", inventory.add);
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction("Фильтр", inventory.remove);
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']
