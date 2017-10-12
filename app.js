'use strict';

var firstAndPike = {
  locationName: '1st and Pike',
  locationNum: 1,
  minCust: 23,
  maxCust: 65,
  cookiesPerCust: 6.3,
  time: [],
  hourlyTotal: [],
  randomAvg: function(){
    var avgCust = Math.floor(Math.random() * (this.maxCust - this. minCust + 1)) + this.minCust;
    return avgCust;
  },
  cookiesPerHour: function(){
    for (var i = 0; i < 15; i++) {
      var time = i + 6;
      this.hourlyTotal.push(Math.round(this.randomAvg() * this.cookiesPerCust));
    }
  },
  totalCookies: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyTotal.length; i++){
      total += this.hourlyTotal[i];
    }
    return total;
  },
};
