'use strict';
console.log ('Hello from the js file');




let hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// Replace all of your object literals for the salmon cookie stand with a single constructor function that,
//  when called with the ‘new’ keyword, it creates a new instance.
// Constructor function
function StoreLocation (location, min, max, avgCookies) {
  this.location = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerSale = avgCookies;
  this.hourlyArray = [];
  this.cookieTotal = 0;
}


StoreLocation.prototype.generateCookiesPerHour = function () {
  let min = this.minCustomersPerHour;
  let max = this.maxCustomersPerHour;
  let random = Math.ceil(Math.random() * (max + 1 -min)) +min;
  return random;
};


// Break each column by the hour and complete each row with a “Daily Location Total”.
StoreLocation.prototype.cookiePurchased= function (){
  for (let i = 0; i < hours.length; i++){
    // store hourly cookie totals based on num customers per hour
    this.hourlyArray[i]= Math.floor(this.generateCookiesPerHour() * this.avgCookiesPerSale);
    // daily store cookie total
    let cookieForThisHour = this.hourlyArray[i];
    this.cookieTotal = this.cookieTotal + cookieForThisHour;
    //console.log(this.hourlyArray);
  }
};





StoreLocation.prototype.renderTableData = function () {
  let table = document.getElementById('salesData');
  let row = document.createElement('tr');

  // city name cell
  let cityNameCell = document.createElement('th');
  cityNameCell.textContent = this.location;
  row.appendChild(cityNameCell);

  let tableDataCell;
  // cookie data x 14
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


// Display each stores data in a table format similar to what is below.
//Create Table head
function renderTableHeaders(){
  let table =document.getElementById('salesData');
  let row=document.createElement('tr');
  let tableHeadCell=document.createElement('th');
  row.appendChild(tableHeadCell);

  //hour of the day headers
  for (let i=0; i<hours.length; i++){
    tableHeadCell=document.createElement('th');
    tableHeadCell.textContent=hours[i];
    row.appendChild(tableHeadCell);
  }
  // total header
  tableHeadCell = document.createElement('th');
  tableHeadCell.textContent= 'Daily Location Total';
  row.appendChild(tableHeadCell);

  table.appendChild(row);
}
renderTableHeaders();


function renderTableFooter () {
  let table = document.getElementById('salesData');
  let row = document.createElement('tr');
  let tableFootCell = document.createElement('th');
  let hoursOfDay = hours.length;
  tableFootCell.textContent = 'Totals';
  row.appendChild(tableFootCell);

  // to look at 14 hours of the day for 14 totals cells
  for (let i = 0; i < hoursOfDay; i++) {
    let cookieRowTotal = 0;
    // add up each index from all locations
    for (let j = 0; j < locationInfo.length; j++) {i'm n
      cookieRowTotal = cookieRowTotal + locationInfo[j].hourlyArray[i];
    }

    tableFootCell = document.createElement('td');
    tableFootCell.textContent = cookieRowTotal;
    row.appendChild(tableFootCell);
  }

  let superTotal = 0;
  for (let i = 0; i < locationInfo.length; i++) {
    superTotal = superTotal + locationInfo[i].cookieTotal;
    //console.log(locationInfo[i].cookieTotal);
  }
  tableFootCell = document.createElement('td');
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

for (let i=0; i<locationInfo.length; i++){
  locationInfo[i].generateCookiesPerHour();
  locationInfo[i].cookiePurchased();
  locationInfo[i].renderTableData();

}
renderTableFooter();

