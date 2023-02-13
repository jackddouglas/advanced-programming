let countDisplay = document.getElementById("numVisits");
var numVisits = +localStorage.getItem("numVisits");

if (numVisits != undefined) count = numVisits++;

countDisplay.innerHTML = numVisits;
localStorage.setItem("numVisits", numVisits++);
