var alki = {
  name: 'Capital Hill',
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
