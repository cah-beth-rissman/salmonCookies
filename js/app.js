'use strict';
console.log('js file loaded.');


let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


// cookiePurchased = eachHour x average cookies purchased x randomNumber of customers.

// Use a method of that object to generate a random number of customers per hour.

// perhaps as a property of the object representing that location.
// Store the min/max hourly customers,
// and the average cookies per customer, in object properties.

let locSeattle = {
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerSale: 6.3,
  hourlyArray : [],
  numCust: function(){
    // return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
    return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
  },
  cookiePurchased: function(){
    for(let i = 0; i < hours.length; i++){
      // console.log(i);
      //store hourly cookie totals based on num customers per hour
      this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
    }
  }
};


let locTokyo = {
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerSale: 1.2,
  hourlyArray : [],
  numCust: function(){
    // return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
    return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
  },
  cookiePurchased: function(){
    for(let i = 0; i < hours.length; i++){
      // console.log(i);
      //store hourly cookie totals based on num customers per hour
      this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
    }
  }

};

let locDubai = {
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesPerSale: 3.7,
  hourlyArray : [],
  numCust: function(){
    // return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
    return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
  },
  cookiePurchased: function(){
    for(let i = 0; i < hours.length; i++){
      // console.log(i);
      //store hourly cookie totals based on num customers per hour
      this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
    }
  }

};

let locParis = {
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesPerSale: 2.3,
  hourlyArray : [],
  numCust: function(){
    // return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
    return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
  },
  cookiePurchased: function(){
    for(let i = 0; i < hours.length; i++){
      // console.log(i);
      //store hourly cookie totals based on num customers per hour
      this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
    }
  }

};

let locLima = {
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesPerSale: 4.6,
  hourlyArray : [],
  numCust: function(){
    // return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
    return Math.ceil(Math.random()* (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour);
  },
  cookiePurchased: function(){
    for(let i = 0; i < hours.length; i++){
      // console.log(i);
      //store hourly cookie totals based on num customers per hour
      this.hourlyArray[i] = Math.floor(this.numCust() * this.avgCookiesPerSale);
    }
  }
};







// console.log(locSeattle, locTokyo, locDubai, locParis, locLima);



//  generating sales data and providing output on an html document.
// Display the values of each array as unordered lists in the browser.
function displayData(location, id){
  location.cookiePurchased();
  // console.log('location: ',location, 'store id: ',id);
  //we are populating hourly cookie data in each of our store objects


  //grab parent element = the <ul>
  let parentElement = document.getElementById(id);
  console.log(parentElement);

  let cookieTotal = 0;

  // create the li's for each hour the store is open
  for(let i = 0; i < location.hourlyArray.length; i++){
    //create element / add the text content / append to the ul
    //hourly
    let cookieForThisHour = location.hourlyArray[i];
    //daily
    cookieTotal = cookieTotal + cookieForThisHour;

    // console.log({cookieForThisHour, cookieTotal});
    let listString = hours[i] + ': ' + cookieForThisHour + ' cookies';
    // console.log(listString);
    //li to append to our uls
    let li = document.createElement('li');
    li.textContent = listString;
    parentElement.appendChild(li);
  }//closes for loop

  let totalLi = document.createElement('li');
  totalLi.textContent = ' Total Cookies: ' + cookieTotal;
  parentElement.appendChild(totalLi);

}//closes our function



//call display function on each of my objects.
displayData(locSeattle, 'seattle');
displayData(locTokyo, 'tokyo');
displayData(locDubai, 'dubai');
displayData(locParis, 'paris');
displayData(locLima, 'lima');

