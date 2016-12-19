var app = angular.module('ShoppingListCheckOff', []);
app
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemToBuy = this;
  itemToBuy.itemList = ShoppingListCheckOffService.getToBuyItems();

  itemToBuy.markItemBought = function(itemIndex) {
    ShoppingListCheckOffService.markItemBought(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
   var itemBought = this;
   itemBought.itemList = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var to_buy_items = [];

  var bought_items = [];

  function addInitialItem(itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    to_buy_items.push(item);
  };

  addInitialItem("Cookies", 10);
  addInitialItem("Cupcake", 2);
  addInitialItem("Sugar", 2);
  addInitialItem("Eggs", 5);
  addInitialItem("Watermelon", 6);

  service.markItemBought = function(itemIndex) {
    var item = to_buy_items.splice(itemIndex, 1);
    bought_items.push(item[0]);
  }

  service.getToBuyItems = function() {
    return to_buy_items;
  }

  service.getBoughtItems = function() {
    return bought_items;
  }

}
