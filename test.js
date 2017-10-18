// Find a <table> element with id="myTable":
var table = document.getElementById("cookieshopbuild");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(allLocations.length + 1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
for (var i = 0; i < hours.length; i++) {
var cell = row.insertCell(i);
cell.innerHTML = totalCookiesByHour[i];
}


// Add some text to the new cells:
