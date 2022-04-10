var tab = [];
for (i = 0; i < 6; i++) {
  tab[i] = parseInt(prompt("entrez un nombre"));
}
function somme(tab) {
  var s = 0;
  for (let i = 0; i < tab.length; i++) {
    s += tab[i];

  }
  return s;
}
var t = [1, 2, 3, 4, 5, 6]
alert("mon tableau est " + tab +
  "\nla somme est " + somme(t));