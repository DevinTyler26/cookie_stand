'use strict';
var stuffForFistRow = ['coffee', 2, 4, 6, 8, 10];
var stuffForSecondRow = ['table', 3, 5, 7, 9, 1];

var tableEl = document.getElementById('coffeeTable');

function tableRowMaker(inputArray){
  var trEl = document.createElement('tr');
  for (var i = 0; i < inputArray.length; i++){
    var tdEl = document.createElement('td');//creating
    tdEl.textContent = inputArray[i]; //content
    trEl.appendChild(tdEl);//add cell to the row
  }
  tableEl.appendChild(trEl);//add rows to table
};
tableRowMaker(stuffForFistRow);
tableRowMaker(stuffForSecondRow);
