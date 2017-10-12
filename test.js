'use strict';
console.log('testing js file');
//Store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var totalCookiesByHour = 0;
var netTotal = 0;

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour){
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randomCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  allLocations.push(this);

  this.calcRandCustByHour = function(){
    for(var i = 0; i < hours.length; i++){
      this.randomCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randomCustByHour[i]);
    }
  };

  this.calcCookiesSoldByHour = function(){
    for(var j = 0; j < hours.length; j++){
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randomCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  };

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  };

  this.render = function(){
    var firstAndPike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    //create New h3 Element
    var h3El = document.createElement('h3');
    //give text to new element
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for(var l = 0; l < hours.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookiesSoldByHour[l] + ' cookies';
      console.log(liEl);
      firstandpike.appendChild(liEl);
    };
    this.render();
  };
};
function makeStands(){
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11,38,	3.7);
  new MakeLocation('Capitol Hill',	20,	38,	2.3);
  new MakeLocation('Alki', 2, 16,	4.6);
};
makeStands();

function makeHeaderRow(){
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
};
makeHeaderRow();

//consider a for loop for the hours
//create a th element
//give the th element some text content like hour[i]
//appendChild
//create a th element
//give the th element some text content 'Daily Location Total'
//appendChild
