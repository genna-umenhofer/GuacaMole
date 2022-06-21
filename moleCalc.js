function clearMoleCalc() {
  document.getElementById("molar-mass1").value = '';
  document.getElementById("grams1").value = '';
  document.getElementById("moles1").value = '';
  document.getElementById("particles").value = '';
};

function gramsToMole() {
  var molarMass = document.getElementById("molar-mass1").value;
  var grams = document.getElementById("grams1").value;
  var moles = document.getElementById("moles1").value;
  var particles = document.getElementById("particles").value;

  if (grams > 0 && molarMass > 0) {
    if (!moles) {
      moles = grams / molarMass;
      document.getElementById("moles1").value = moles;
    };
    if (!particles) {
      particles = moles *  6.022e23;
      document.getElementById("particles").value = particles;
    };
  };

  if (moles > 0 && molarMass > 0) {
    if (!particles) {
      particles = moles *  6.022e23;
      document.getElementById("particles").value = particles;
    };
    if (!grams) {
      grams = moles * molarMass;
      document.getElementById("grams1").value = grams;
    };
  };

  if (particles > 0 && molarMass > 0) {
    if (!moles) {
      moles = particles / 6.022e23;
      document.getElementById("moles1").value = moles;
    };
    if (!grams) {
      grams = moles / molarMass;
      document.getElementById("grams1").value = grams;
    };
  };
};

document.addEventListener('keypress', function(e) {
  if (e.key === 'r') {
    clearMoleCalc();
  };

  if (e.key === "Enter") {
    gramsToMole();
  };
});