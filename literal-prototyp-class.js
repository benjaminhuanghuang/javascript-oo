/*
  Literial
*/
newItem = {
  type: "floral",
  storage: "warm",
  name: dataObject.itemname,
  pot: dataObject.pottype,
  quantity: dataObject.qty,
  logItem: function () {
    console.log("%c" + this.name, "font-weight: bold");
    for (let prop in this) {
      console.log(" ", prop, ": ", this[prop]);
    }
  },
};

/*
  Consturctor
*/
function Live(name, pot, quantity = 1) {
  this.type = 'floral';
  this.storage = 'warm';
  this.name = name;
  this.pot = pot;
  this.quantity = quantity;
  this.logItem = function() {
    console.log('%c' + this.name,'font-weight: bold');
    for (let prop in this) {
      console.log(' ', prop, ': ', this[prop])
    }
  };
}

/*
  Prototype
*/
function Item() {}
Item.prototype.type = "goods";
Item.prototype.logItem = function () {
  console.log("%c" + this.name, "font-weight: bold");
  for (let prop in this) {
    console.log(" ", prop, ": ", this[prop]);
  }
};

function Live(name, pot, quantity = 1) {
  this.name = name;
  this.pot = pot;
  this.quantity = quantity;
}
Live.prototype = new Item();     // inheritance
Live.prototype.storage = "warm";


/*
  Class
*/

class Cut extends Itme {
  constructor(name, vast){
    super();
  }
}
