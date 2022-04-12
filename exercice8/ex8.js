var inputsalaire = document.getElementById('inputsalaire');
var resultat = document.getElementById('resultat');
var bonus = document.getElementById('bonus');
var allocation = document.getElementById('allocation');
var f = document.getElementById('femme');
var p = document.getElementById('personne');
var r2 = document.getElementById('resultat2');

function myFunction() {
var s = inputsalaire.value;
var r = s * 0.7;
// console.log(s);
// console.log(r);
if (bonus.checked) {r += 100}
if (allocation.checked){r += 150}
if (f.checked){r += s*0.2}
if (p.value == '3') {r += s*0.1}
if (p.value == '4') {r += s*0.2}
resultat.innerHTML=`votre salaire net est : ${r}`;
// r2.value=`votre salaire net est : ${r}`;
r2.value=r;
}
// function up(){
//   var s = inputsalaire.value;
//   var r = s * 0.7; 
//   r2.value=`votre salaire net est : ${r}`;
// }

