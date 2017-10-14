'use strict';
console.log('testing js file');
//GLOBAL Store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstAndPike = {
  name: '1st and Pike',
  minCPH: 23,
  maxCPH: 65,
  avgCSPH: 6.3,
  ranCBH: [],
  cookieSBH: [],
  totalCookies: 0,

  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.ranCBH.push(Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH);
      console.log('Random Number of Customers This Hour: ' + this.ranCBH[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookieSBH.push(Math.round(this.avgCSPH * this.ranCBH[j]));
      console.log('Number of Cookies Sold This Hour: ' + this.cookieSBH[j]);
    }
  },

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookieSBH[k];
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
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for(var l = 0; l < hours.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookieSBH[l] + ' cookies';
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
  minCPH: 3,
  maxCPH: 24,
  avgCSPH: 1.2,
  ranCBH: [],
  cookieSBH: [],
  totalCookies: 0,

  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.ranCBH.push(Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH);
      console.log('Random Number of Customers This Hour: ' + this.ranCBH[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookieSBH.push(Math.round(this.avgCSPH * this.ranCBH[j]));
      console.log('Number of Cookies Sold This Hour: ' + this.cookieSBH[j]);
    }
  },

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookieSBH[k];
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
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seatac.appendChild(h3El);
    for(var l = 0; l < hours.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookieSBH[l] + ' cookies';
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
  minCPH: 11,
  maxCPH: 38,
  avgCSPH: 3.7,
  ranCBH: [],
  cookieSBH: [],
  totalCookies: 0,

  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.ranCBH.push(Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH);
      console.log('Random Number of Customers This Hour: ' + this.ranCBH[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookieSBH.push(Math.round(this.avgCSPH * this.ranCBH[j]));
      console.log('Number of Cookies Sold This Hour: ' + this.cookieSBH[j]);
    }
  },

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookieSBH[k];
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
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    center.appendChild(h3El);
    for(var l = 0; l < hours.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookieSBH[l] + ' cookies';
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
  minCPH: 20,
  maxCPH: 38,
  avgCSPH: 2.3,
  ranCBH: [],
  cookieSBH: [],
  totalCookies: 0,

  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.ranCBH.push(Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH);
      console.log('Random Number of Customers This Hour: ' + this.ranCBH[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookieSBH.push(Math.round(this.avgCSPH * this.ranCBH[j]));
      console.log('Number of Cookies Sold This Hour: ' + this.cookieSBH[j]);
    }
  },

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookieSBH[k];
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
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    ch.appendChild(h3El);
    for(var l = 0; l < hours.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookieSBH[l] + ' cookies';
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
  minCPH: 2,
  maxCPH: 16,
  avgCSPH: 4.6,
  ranCBH: [],
  cookieSBH: [],
  totalCookies: 0,

  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.ranCBH.push(Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH);
      console.log('Random Number of Customers This Hour: ' + this.ranCBH[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookieSBH.push(Math.round(this.avgCSPH * this.ranCBH[j]));
      console.log('Number of Cookies Sold This Hour: ' + this.cookieSBH[j]);
    }
  },

  calcTotalCookies: function(){
    var total = 0;
    for (var k = 0; k < hours.length; k++){
    total += this.cookieSBH[k];
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
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    ai.appendChild(h3El);
    for(var l = 0; l < hours.length; l++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[l] + ': ' + this.cookieSBH[l] + ' cookies';
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
