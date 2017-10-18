'use strict';
console.log('testing js file');
//Store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var totalCookiesByHour = 0;
var hourlyTotal = [];
var tableEl = document.getElementById('salmoncookiestable');

function MakeLocation(name, minCPH, maxCPH, avgCSPH){
  this.name = name;
  this.minCPH = minCPH;
  this.maxCPH = maxCPH;
  this.avgCSPH = avgCSPH;
  this.randomCBH = [];
  this.cookiesSBH = [];
  this.totalCookies = 0;
  allLocations.push(this);

  this.calcRandCustByHour = function(){
    for(var i = 0; i < hours.length; i++){
      this.randomCBH.push(Math.floor(Math.random() * (this.maxCPH - this.minCPH + 1)) + this.minCPH);
      console.log('Random Number of Customers This Hour: ' + this.randomCBH[i]);
    }
  };

  this.calcCookiesSoldByHour = function(){
    for(var j = 0; j < hours.length; j++){
    this.cookiesSBH.push(Math.round(this.avgCSPH * this.randomCBH[j]));
      console.log(this.cookiesSBH[j]);
    }
  };

  this.calcTotalCookies = function(){
    for (var k = 0; k < hours.length; k++){
    this.totalCookies += this.cookiesSBH[k];
    }
    return this.totalCookies;
    console.log('Total: ' + totalCookies + ' cookies');
  };

  this.tableRowMaker = function(){
      var trEl = document.createElement('tr');
      var thEl = document.createElement('th');
      thEl.textContent = name;
      thEl.className ="location";
      trEl.appendChild(thEl);
      for (var m = 0; m < hours.length; m++){
        var tdEl = document.createElement('td');
        tdEl.textContent = this.cookiesSBH[m];
        trEl.appendChild(tdEl);
      }
      var totalForDay =  document.createElement('td');
      totalForDay.textContent = this.totalCookies;
      trEl.appendChild(totalForDay);
      tableEl.appendChild(trEl);
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


function tableHeaderRowMaker(hours){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = " ";
  trEl.appendChild(thEl);
  for (var l = 0; l < hours.length; l++){
    var thEl = document.createElement('th');//creating
    thEl.textContent = hours[l]; //content
    trEl.appendChild(thEl);//add cell to the row
  }
  tableEl.appendChild(trEl);//add rows to table
  var thEl = document.createElement('th');
  thEl.textContent = "Daily Location Total";
  trEl.appendChild(thEl);
};
tableHeaderRowMaker(hours);

function makeTable(){
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].calcRandCustByHour();
    allLocations[i].calcCookiesSoldByHour();
    allLocations[i].calcTotalCookies();
    allLocations[i].tableRowMaker();
    }
};
makeTable();

function calcTotalCookiesPerHour(hours){
var trEl = document.createElement('tr');
var thEl = document.createElement('th');
thEl.textContent = 'Hourly Total: ';
salmoncookiestable.appendChild(trEl);
trEl.appendChild(thEl);
console.log(trEl);
console.log(thEl);
  for(var j = 0; j < hours.length; j++){
    var sum = 0;
    for(var i = 0; i < allLocations.length; i++){
      sum += allLocations[i].cookiesSBH[j];
      var tdEl = document.createElement('td');
    }
      tdEl.textContent = sum;
      trEl.appendChild(tdEl);
      console.log(tdEl);
  }
  var sum2 = 0;
  for(var i = 0; i < allLocations.length; i++){
    sum2 += allLocations[i].totalCookies;
    var tdEl = document.createElement('td');
  }
    var tdEl = document.createElement('td');
    tdEl.textContent = sum2;
    trEl.appendChild(tdEl);
    console.log(sum2 + ' LAST NUMBER');
};
calcTotalCookiesPerHour(hours);

var cookieshopbuild = document.getElementById('cookieshopbuild');

function handleShopBuild(event) {
  console.log(event);
  event.preventDefault(); //gotta have it. prevents page reload

  var name = event.target.name.value;
  console.log(event.target.name.value);
  var minCPH = parseInt(event.target.minCPH.value);
  console.log(event.target.minCPH.value);
  var maxCPH = parseInt(event.target.maxCPH.value);
  console.log(event.target.maxCPH.value);
  var avgCSPH = parseInt(event.target.avgCSPH.value);
  console.log(event.target.avgCSPH.value);

  var newShop = new MakeLocation(name, minCPH, maxCPH, avgCSPH);

  console.log('Created shop ' + event.target.name.value + ' with min cust at ' + minCPH + ' and max cust at ' + maxCPH + ' and avg cookies sold per hour at ' + avgCSPH);
  console.log(allLocations);

  event.target.name.value = null;
  event.target.minCPH.value = null;
  event.target.maxCPH.value = null;
  event.target.avgCSPH.value = null;

  document.getElementById("salmoncookiestable").deleteRow(allLocations.length);

  function makeTable(){
      allLocations[allLocations.length - 1].calcRandCustByHour();
      allLocations[allLocations.length - 1].calcCookiesSoldByHour();
      allLocations[allLocations.length - 1].calcTotalCookies();
      allLocations[allLocations.length - 1].tableRowMaker();
      }
  makeTable();
  calcTotalCookiesPerHour(hours);


};

cookieshopbuild.addEventListener('submit', handleShopBuild);
