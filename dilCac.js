function clearDilCalc() {
  document.getElementById("initialMol").value = '';
  document.getElementById("initialVol").value = '';
  document.getElementById("finalMol").value = '';
  document.getElementById("finalVol").value = '';
};

function dilCalc() {
  var initialMol = document.getElementById("initialMol").value;
  var initialVol = document.getElementById("initialVol").value;
  var finalMol = document.getElementById("finalMol").value;
  var finalVol = document.getElementById("finalVol").value;

  if (!initialMol) {
    initialMol = finalMol * finalVol / initialVol;
    document.getElementById("initialMol").value = initialMol;
  };

  if (!initialVol) {
    initialVol = finalMol * finalVol / initialMol;
    document.getElementById("initialVol").value = initialVol;
  };

  if (!finalMol) {
    finalMol = initialMol * initialVol / finalVol;
    document.getElementById("finalMol").value = finalMol;
  };

  if (!finalVol) {
    finalVol = initialMol * initialVol / finalMol;
    document.getElementById("finalVol").value = finalVol;
  };
};

document.addEventListener('keypress', function(e) {
  if (e.key === 'r') {
    clearDilCalc();
  };

  if (e.key === 'Enter') {
    dilCalc();
  };
});