'use strict';
console.log('js file loaded.');

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// constructor function
function StoreLocation (location, min, max, avgCookies) {
  this.location = location;
  this.minCustomerPerHour = min;
  this.maxCustomerPerHour = max;
  this.avgCookiesPerSale = avgCookies;
  this.hourlyArray = [];
  this.cookieTotal = 0;
}

StoreLocation.prototype.generateCookiesPerHour = function () {
  let min = this.minCustomerPerHour;
  let max = this.maxCustomerPerHour;
  let random = Math.ceil(Math.random() * (max + 1 - min)) + min;
  return random;
};

// create columns by the hour and add Daily Location Total
StoreLocation.prototype.cookiePurchased = function () {
  for (let i = 0; i < hours.length; i++){
    // location hourly cookie totals based on num customers per hour
    this.hourlyArray[i] = Math.floor(this.generateCookiesPerHour() * this.avgCookiesPerSale);
    // location daily cookie total
    let cookieForThisHour = this.hourlyArray[i];
    this.cookieTotal = this.cookieTotal + cookieForThisHour;
    console.log(this.hourlyArray);
  }
};

StoreLocation.prototype.renderTableData = function () {
  let table = document.getElementById('salesData');
  let row = document.createElement('tr');

  //   city
  let cityNameCell = document.createElement('th');
  cityNameCell.textContent = this.location;
  row.appendChild(cityNameCell);

  let tableDataCell;
  for (let i = 0; i < hours.length; i++) {
    tableDataCell = document.createElement('td');
    tableDataCell.textContent = this.hourlyArray[i];
    row.appendChild(tableDataCell);
  }

  tableDataCell = document.createElement('td');
  tableDataCell.textContent = this.cookieTotal;
  row.appendChild(tableDataCell);

  table.appendChild(row);
};

// create table header
function renderTableHeaders () {
  let table = document.getElementById('salesData');
  let row = document.createElement('tr');
  let tableHeadCell = document.createElement('th');
  row.appendChild(tableHeadCell);


  // hour of day headers
  for (let i = 0; i < hours.length; i++){
    tableHeadCell = document.createElement('th');
    tableHeadCell.textContent = hours[i];
    row.appendChild(tableHeadCell);
  }

  // totals header
  tableHeadCell = document.createElement('th');
  tableHeadCell.textContent = 'Daily Location Total';
  row.appendChild(tableHeadCell);
  table.appendChild(row);
}
renderTableHeaders();

// table footers
function renderTableFooter () {
    let table = document.getElementById('salesData');
    let row = document.createElement('tr');
    let tableFootCell = document.createElement('th');
    let hoursOfDay = hours.length;
    tableFootCell.textContent = 'Totals';
    row.appendChild(tableFootCell);

// 14 hours, 14 cells
  for (let i = 0; i < hoursOfDay; i++) {
  let cookieRowTotal = 0;
//   add up each index from all locations
for (let j = 0; j < locationInfo.length; j++) {
cookieRowTotal = cookieRowTotal + locationInfo[j].hourlyArray[i];
}

tableFootCell = document.createElement('td');
tableFootCell.textContent = cookieRowTotal;
row.appendChild(tableFootCell);
}

let superTotal = ;
for (let i = 0; i < locationInfo.length; i++) {
  superTotal = superTotal = locationInfo[i].cookieTotal;
  console.log(locationInfo[i].cookieTotal);

}
tableFootCel = document.createElement('td');
tableFootCell.textContent = superTotal;
row.appendChild(tableFootCell);
row.id = 'footer';
table.appendChild(row);
}

// using an array to get info and pass them into constructor
let seattleInfo=new StoreLocation('Seattle', 23, 65, 6.3);
let tokyoInfo=new StoreLocation('Tokoyo', 3, 24, 1.2);
let dubaiInfo=new StoreLocation('Dubai', 11, 38, 3.7);
let parisInfo=new StoreLocation('Paris', 20, 38, 2.3);
let limaInfo=new StoreLocation('Lima', 2,16,4.6);

let locationInfo=[seattleInfo,tokyoInfo, dubaiInfo, parisInfo, limaInfo];

// Replace the lists of your data for each store and build a single table of data instead.

for (let i = 0; i < locationInfo.length; i++) {
  locationInfo[i].generateCookiesPerHour();
  locationInfo[i].cookiePurchased();
  locationInfo[i].renderTableData();
}
renderTableFooter();

// let locSeattle = {
//   minCustomerPerHour: 23,
//   maxCustomerPerHour: 65,
//   avgCookiesPerSale: 6.3,
//   hourlyArray : [],
//   numCust: function(){
//     // return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
//     return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
//   },
//   cookiePurchased: function(){
//     for(let i = 0; i < hours.length; i++){
//       // console.log(i);
//       //store hourly cookie totals based on num customers per hour
//       this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
//     }
//   }
// };


// let locTokyo = {
//   minCustomerPerHour: 3,
//   maxCustomerPerHour: 24,
//   avgCookiesPerSale: 1.2,
//   hourlyArray : [],
//   numCust: function(){
//     // return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
//     return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
//   },
//   cookiePurchased: function(){
//     for(let i = 0; i < hours.length; i++){
//       // console.log(i);
//       //store hourly cookie totals based on num customers per hour
//       this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
//     }
//   }

// };

// let locDubai = {
//   minCustomerPerHour: 11,
//   maxCustomerPerHour: 38,
//   avgCookiesPerSale: 3.7,
//   hourlyArray : [],
//   numCust: function(){
//     // return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
//     return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
//   },
//   cookiePurchased: function(){
//     for(let i = 0; i < hours.length; i++){
//       // console.log(i);
//       //store hourly cookie totals based on num customers per hour
//       this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
//     }
//   }

// };

// let locParis = {
//   minCustomerPerHour: 20,
//   maxCustomerPerHour: 38,
//   avgCookiesPerSale: 2.3,
//   hourlyArray : [],
//   numCust: function(){
//     // return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
//     return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
//   },
//   cookiePurchased: function(){
//     for(let i = 0; i < hours.length; i++){
//       // console.log(i);
//       //store hourly cookie totals based on num customers per hour
//       this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
//     }
//   }

// };

// let locLima = {
//   minCustomerPerHour: 2,
//   maxCustomerPerHour: 16,
//   avgCookiesPerSale: 4.6,
//   hourlyArray : [],
//   numCust: function(){
//     // return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
//     return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
//   },
//   cookiePurchased: function(){
//     for(let i = 0; i < hours.length; i++){
//       // console.log(i);
//       //store hourly cookie totals based on num customers per hour
//       this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
//     }
//   }
// };







// // console.log(locSeattle, locTokyo, locDubai, locParis, locLima);



// //  generating sales data and providing output on an html document.
// // Display the values of each array as unordered lists in the browser.
// function displayData(location, id){
//   location.cookiePurchased();
//   // console.log('location: ',location, 'store id: ',id);
//   //we are populating hourly cookie data in each of our store objects


//   //grab parent element = the <ul>
//   let parentElement = document.getElementById(id);
//   console.log(parentElement);

//   let cookieTotal = 0;

//   // create the li's for each hour the store is open
//   for(let i = 0; i < location.hourlyArray.length; i++){
//     //create element / add the text content / append to the ul
//     //hourly
//     let cookieForThisHour = location.hourlyArray[i];
//     //daily
//     cookieTotal = cookieTotal + cookieForThisHour;

//     // console.log({cookieForThisHour, cookieTotal});
//     let listString = hours[i] + ': ' + cookieForThisHour + ' cookies';
//     // console.log(listString);
//     //li to append to our uls
//     let li = document.createElement('li');
//     li.textContent = listString;
//     parentElement.appendChild(li);
//   }//closes for loop

//   let totalLi = document.createElement('li');
//   totalLi.textContent = ' Total Cookies: ' + cookieTotal;
//   parentElement.appendChild(totalLi);

// }//closes our function



// //call display function on each of my objects.
// displayData(locSeattle, 'seattle');
// displayData(locTokyo, 'tokyo');
// displayData(locDubai, 'dubai');
// displayData(locParis, 'paris');
// displayData(locLima, 'lima');

