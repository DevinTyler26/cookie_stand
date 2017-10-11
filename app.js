'use strict';

var firstAndPike = {
  locationNum: 1,
  minCust: 23,
  maxCust: 65,
  cpc: 6.3,
  time: [],
  hourlyTotal: [],
  randomAvg: function(){
    var avgCust = Math.floor(Math.random() * (this.maxCust - this. minCust + 1)) + this.minCust;
    return avgCust;
  },
  cookiesPerHour: function(){
    for (var i = 0; i < 15; i++) {
      var time = i + 6;
      this.hourlyTotal.push(Math.round(this.randomAvg() * this.cpc));
    }
  },
  totalCookies: function() {
    var total = 0;
    for (var i = 0; i < hourlyTotal.length; i++){
      total += this.hourlyTotal[i];
      return total;
    }
  }
};
