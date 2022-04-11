
function somme() {
  console.log(arguments);
  var s = 0;
  for (let i = 0; i < arguments.length; i++) {
    s += arguments[i];

  }
  return s;
}

alert("la somme est " + somme(1, 2, 3, 4, 5, 6));