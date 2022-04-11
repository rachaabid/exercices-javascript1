function change(){
  var champ = document.getElementById("inputmessage");
  if (champ.value == "") {
    champ.classList.add("is-invalid");
    champ.classList.remove("is-valid");
  }
  else {
    champ.classList.add("is-valid");
    champ.classList.remove("is-invalid");
  }
  console.log(champ.classList);
}