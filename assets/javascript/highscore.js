

var myStorage = window.localStorage
var hsString = 0;
for (let j = 0; j < window.localStorage.length; j++) {
  if (j === 0) hsString = myStorage.key(j) + " : " + localStorage.getItem(myStorage.key(j)) + "</br>";
  else hsString += myStorage.key(j) + " : " + localStorage.getItem(myStorage.key(j)) + "</br>";

}

document.getElementById("scores").innerHTML = hsString;
