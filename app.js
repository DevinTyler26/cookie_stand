'use strict';
console.log('testing js file');
//Store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//1st and Pike Location

var firstAndPike = {
  name: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randomCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.randomCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log('Random Number of Customers This Hour: ' + this.randomCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randomCustByHour[j]));
      console.log('Number of Cokies Sold This Hour: ' + this.cookiesSoldByHour[j]);
    }
  },

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  },

  render: function(){
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
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl);
    firstandpike.appendChild(liEl);
  }
};
firstAndPike.render();

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSoldPerHour: 1.2,
  randomCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.randomCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log('Random Number of Customers This Hour: ' + this.randomCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randomCustByHour[j]));
      console.log('Number of Cokies Sold This Hour: ' + this.cookiesSoldByHour[j]);
    }
  },

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  },

  render: function(){
    var seaTacAirport = document.getElementById('seaTacAirport');
    var seatac = document.getElementById('seatac');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    //create New h3 Element
    var h3El = document.createElement('h3');
    //give text to new element
    h3El.textContent = this.name;
    seatac.appendChild(h3El);
    for(var l = 0; l < hours.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookiesSoldByHour[l] + ' cookies';
      console.log(liEl);
      seaTacAirport.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl);
    seaTacAirport.appendChild(liEl);
  }
};
seaTacAirport.render();

var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 3.7,
  randomCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.randomCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log('Random Number of Customers This Hour: ' + this.randomCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randomCustByHour[j]));
      console.log('Number of Cokies Sold This Hour: ' + this.cookiesSoldByHour[j]);
    }
  },

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  },

  render: function(){
    var seattleCenter = document.getElementById('seattleCenter');
    var center = document.getElementById('center');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    //create New h3 Element
    var h3El = document.createElement('h3');
    //give text to new element
    h3El.textContent = this.name;
    center.appendChild(h3El);
    for(var l = 0; l < hours.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookiesSoldByHour[l] + ' cookies';
      console.log(liEl);
      seattleCenter.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl);
    seattleCenter.appendChild(liEl);
  }
};
seattleCenter.render();

var caphill = {
  name: 'Capital Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randomCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.randomCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log('Random Number of Customers This Hour: ' + this.randomCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randomCustByHour[j]));
      console.log('Number of Cokies Sold This Hour: ' + this.cookiesSoldByHour[j]);
    }
  },

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  },

  render: function(){
    var caphill = document.getElementById('caphill');
    var ch = document.getElementById('ch');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    //create New h3 Element
    var h3El = document.createElement('h3');
    //give text to new element
    h3El.textContent = this.name;
    ch.appendChild(h3El);
    for(var l = 0; l < hours.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookiesSoldByHour[l] + ' cookies';
      console.log(liEl);
      caphill.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl);
    caphill.appendChild(liEl);
  }
};
caphill.render();

var alki = {
  name: 'Alki',
  minCustPerHour: 3,
  maxCustPerHour: 624,
  avgCookieSoldPerHour: 1.2,
  randomCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.randomCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log('Random Number of Customers This Hour: ' + this.randomCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randomCustByHour[j]));
      console.log('Number of Cokies Sold This Hour: ' + this.cookiesSoldByHour[j]);
    }
  },

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookiesSoldByHour[k];
    }
    this.totalCookies = total;
    console.log('Total: ' + total + ' cookies');
  },

  render: function(){
    var alki = document.getElementById('alki');
    var ai = document.getElementById('ai');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    //create New h3 Element
    var h3El = document.createElement('h3');
    //give text to new element
    h3El.textContent = this.name;
    ai.appendChild(h3El);
    for(var l = 0; l < hours.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookiesSoldByHour[l] + ' cookies';
      console.log(liEl);
      alki.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log(liEl);
    alki.appendChild(liEl);
  }
};
alki.render();
