function clearUnitsCalc() {
  document.getElementById("mega").value = '';
  document.getElementById("kilo").value = '';
  document.getElementById("hecto").value = '';
  document.getElementById("deca").value = '';
  document.getElementById("unit").value = '';
  document.getElementById("deci").value = '';
  document.getElementById("centi").value = '';
  document.getElementById("milli").value = '';
  document.getElementById("micro").value = '';
};

function unitsCalc() {
  var mega = document.getElementById("mega").value;
  var kilo = document.getElementById("kilo").value;
  var hecto = document.getElementById("hecto").value;
  var deca = document.getElementById("deca").value;
  var unit = document.getElementById("unit").value;
  var deci = document.getElementById("deci").value;
  var centi = document.getElementById("centi").value;
  var milli = document.getElementById("milli").value;
  var micro = document.getElementById("micro").value;

  if (mega) {
    kilo = mega * 10e-2;
    kilo.toPrecision(8);
    document.getElementById("kilo").value = kilo;

    hecto = mega * 10e-3;
    hecto.toPrecision(8);
    document.getElementById("hecto").value = hecto;

    deca = mega * 10e-4;
    deca.toPrecision(8);
    document.getElementById("deca").value = deca;

    unit = mega * 10e-5;
    unit.toPrecision(8);
    document.getElementById("unit").value = unit;

    deci = mega * 10e-6;
    deci.toPrecision(8);
    document.getElementById("deci").value = deci;

    centi = mega * 10e-7;
    centi.toExponential(8);
    document.getElementById("centi").value = centi;

    milli = mega * 10e-8;
    milli.toExponential(3);
    document.getElementById("milli").value = milli;

    micro = mega * 10e-9;
    micro.toExponential(3);
    document.getElementById("micro").value = micro;
  };
};

document.addEventListener('keypress', function(e) {
  if (e.key === 'r') {
    clearUnitsCalc();
  };

  if (e.key === "Enter") {
    unitsCalc();
  };
});