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
      console.log(this.randomCustByHour[i]);
    }
  },

  calcCookiesSoldByHour: function(){
    for(var j = 0; j < hours.length; j++){
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randomCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },

  calcTotalCookies: function() {
    var total = 0;
    for (var k = 0; k < this.hours.length; k++){
      totalCookies.push(total += this.cookiesSoldByHour[k]);
    }
  },

  render: function(){
    var firstAndPike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
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
  }
};
firstAndPike.render();
