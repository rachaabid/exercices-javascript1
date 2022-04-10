var x = Math.random()*100;
var z = Math.floor(x);
alert(z);
var i = 0;
do {
  var y = prompt("entrez un nombre");
  if (y<z) {
    alert("le nombre y est plus petit");
  }
  else if (y>z) {
    alert("le nombre y est plus grand");}
  else {
    alert("le nombre est trouvé en " + i +  " coups");
  }
  i++;
}
while (z != y)
