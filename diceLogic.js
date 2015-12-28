window.onload = function(e) {
  // get number of units

  var infantryRolls = [];
  var artillaryRolls = [];
  var tankRolls = [];

  var infantryNum;
  var artillaryNum;
  var tankNum;

  document.querySelector('#infantryInput').onchange = function(e) {
    var num = document.querySelector('.infantryValue').innerHTML = e.target.value;
    infantryNum = num;
    console.log(infantryNum);
  }
  document.querySelector('#artillaryInput').onchange = function(e) {
    var num = document.querySelector('.artillaryValue').innerHTML = e.target.value;
    artillaryNum = num;
    console.log(artillaryNum);
  }
  document.querySelector('#tankInput').onchange = function(e) {
    var num = document.querySelector('.tankValue').innerHTML = e.target.value;
    tankNum = num;
    console.log(tankNum);
  }

  // calculate dice rolls

  // display dice number of hits

}
