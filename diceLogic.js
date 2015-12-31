window.onload = function(e) {

  var infantryRolls = [];
  var artillaryRolls = [];
  var tankRolls = [];

  var infantryNum = 0;
  var artillaryNum = 0;
  var tankNum = 0;

  var rollCount;
  var dieRolls;

  var unitRolls;
  var unitNum;

  var hits;

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

    rollCount = infantryNum + artillaryNum + tankNum;
    dieRolls = [];
    console.log(rollCount);
    // roll the dice
    console.log(unitRolls);
    console.log(infantryRolls);
    for (var i = 0; i < rollCount; i++) {
      // store it
      dieRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    // determine which unit rolled what

    unitRolls = [infantryRolls, artillaryRolls, tankRolls];
    unitNum = [infantryNum, artillaryNum, tankNum];

    console.log(unitRolls);
    console.log(infantryRolls);

    console.log(dieRolls);
    for (var i = 0; i < 3; i++) {
      unitRolls[i][0] = dieRolls.slice(0, unitNum[i]);
      dieRolls.splice(0, unitNum[i]);
      console.log(unitRolls[i][i]);
    }
    console.log(infantryRolls);
    console.log(unitRolls);
    console.log(unitRolls[0]);

    // determine hits
    hits = 0
    for (var i = 0; i < infantryRolls[0].length; i++) {
      if (infantryRolls[0][i] <= 1) {
        hits++;
      }
    }

    for (var i = 0; i < artillaryRolls[0].length; i++) {
      if (artillaryRolls[0][i] <= 2) {
        hits++;
      }
    }

    for (var i = 0; i < tankRolls[0].length; i++) {
      if (tankRolls[0][i] <= 3) {
        hits++;
      }
    }


    // for (var i = 0; i < unitRolls[i][i][i].length; i++) {
    //   if (unitRolls[i][i][0][i] <= 1) {
    //     hits++;
    //   }
    // }


    // display dice number of hits

    //reset

    console.log(hits);
  }
  document.querySelector('#reset').onclick = function(e) {
    document.querySelector('#infantryInput').value = 0;
    document.querySelector('.infantryValue').innerHTML = 0;

    document.querySelector('#artillaryInput').value = 0;
    document.querySelector('.artillaryValue').innerHTML = 0;

    document.querySelector('#tankInput').value = 0;
    document.querySelector('.tankValue').innerHTML = 0;

    // reset values

    console.log("reset");

    infantryNum = 0;
    artillaryNum = 0;
    tankNum = 0;

    console.log(unitRolls);
    console.log(infantryRolls);
  }
}
