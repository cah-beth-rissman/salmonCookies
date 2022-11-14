'use strict';
console.log('js file loaded from sales');

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


let locSeattle = {
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerSale: 6.3,
  hourylyArray: [],
  numCust: function(){
    return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour)+ this.minCustomerPerHour);
  },
  cookiePurchased: function(){
    for(let i = 0; i < hours.length; i++){
      console.log(i);
      // store hourly cookies
      this.hourylyArray[i] = Math.floor(this.numCust()) * this.avgCookiesPerSale;
    }
  }
};
locSeattle.cookiePurchased();


let locTokyo = {
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerSale: 1.2
};

let locDubai = {
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesPerSale: 3.7
};

let locParis = {
  minCustomerPerHour: 20,
  maxCustomerPerHour: 28,
  avgCookiesPerSale: 3.2
};

let locLima = {
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesPerSale: 4.6
};

console.log(locSeattle, locTokyo, locDubai, locParis, locLima);

function displayData(location, id){
  console.log('location: ',location, 'store id: ',id);

}
// call display function on each of my objects.
displayData(locSeattle, 'seattle');
displayData(locTokyo, 'tokyo');
displayData(locDubai, 'dubai');
displayData(locParis, 'paris');
displayData(locLima, 'lima');


