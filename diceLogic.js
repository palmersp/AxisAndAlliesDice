window.onload = function(e) {

  var infantryRolls = [];
  var artillaryRolls = [];
  var tankRolls = [];

  var infantryNum = 0;
  var artillaryNum = 0;
  var tankNum = 0;

  // get number of units
  document.querySelector('#infantryInput').onchange = function(e) {
    document.querySelector('.infantryValue').innerHTML = e.target.value;
    infantryNum = parseInt(e.target.value);
  }
  document.querySelector('#artillaryInput').onchange = function(e) {
    document.querySelector('.artillaryValue').innerHTML = e.target.value;
    artillaryNum = parseInt(e.target.value);
  }
  document.querySelector('#tankInput').onchange = function(e) {
    document.querySelector('.tankValue').innerHTML = e.target.value;
    tankNum = parseInt(e.target.value);
  }


  // calculate dice rolls

  document.querySelector('#calculate').onclick = function(e) {

    var rollCount = infantryNum + artillaryNum + tankNum;
    var dieRolls = [];

    // roll the dice
    for (var i = 0; i < rollCount; i++) {
      // store it
      dieRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    // determine which unit rolled what

    var unitRolls = [infantryRolls, artillaryRolls, tankRolls];
    var unitNum = [infantryNum, artillaryNum, tankNum];

    console.log(dieRolls);
    for (var i = 0; i < 3; i++) {
      unitRolls[i][i] = dieRolls.slice(0, unitNum[i]);
      dieRolls.splice(0, unitNum[i]);
      console.log(unitRolls[i][i]);
    }
    console.log(infantryRolls);
    console.log(unitRolls);
    console.log(unitRolls[0]);

    // determine hits
    var hits = 0
    for (var i = 0; i < infantryRolls[0].length; i++) {
      if (infantryRolls[0][i] <= 1) {
        hits++;
      }
    }

    for (var i = 0; i < artillaryRolls[1].length; i++) {
      if (artillaryRolls[1][i] <= 2) {
        hits++;
      }
    }

    for (var i = 0; i < tankRolls[2].length; i++) {
      if (tankRolls[2][i] <= 3) {
        hits++;
      }
    }


    // for (var i = 0; i < unitRolls[i][i][i].length; i++) {
    //   if (unitRolls[i][i][0][i] <= 1) {
    //     hits++;
    //   }
    // }


    // display dice number of hits

    console.log(hits);
  }
}
