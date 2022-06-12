document.addEventListener('keydown', gramsToMole()); //how do I make this run when someone presses enter?

function gramsToMole() {
  var grams = document.getElementById("grams1").value;
  var molarMass = document.getElementById("molar-mass1").value;
  var moles = document.getElementById("moles1").value;
  var particles = document.getElementById("particles").value;

  if (grams > 0 && molarMass > 0) {
    moles = grams / molarMass;
    particles = moles *  6.022e23;
    document.getElementById("moles1").value = moles;
    document.getElementById("particles").value = particles;
  } 

  if (moles > 0 && molarMass > 0) {
    grams = moles * molarMass;
    particles = moles *  6.022e23;
    document.getElementById("grams1").value = grams;
    document.getElementById("particles").value = particles;
  }

  if (particles > 0 && molarMass > 0) {
    moles = particles / 6.022e23;
    grams = moles / molarMass;
    document.getElementById("moles1").value = moles;
    document.getElementById("grams1").value = grams;
  }
}