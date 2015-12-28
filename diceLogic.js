window.onload = function(e) {
  document.querySelector('#infantryInput').onchange = function(e) {
    document.querySelector('.infantryValue').innerHTML = e.target.value;
  }
  document.querySelector('#artillaryInput').onchange = function(e) {
    document.querySelector('.artillaryValue').innerHTML = e.target.value;
  }
  document.querySelector('#tankInput').onchange = function(e) {
    document.querySelector('.tankValue').innerHTML = e.target.value;
  }


}
