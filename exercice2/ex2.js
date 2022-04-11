var myForm = document.getElementById("myForm");
myForm.innerHTML = ` <textarea class="form-control" placeholder="vous avez réussi votre exercice" id="textareamessage" required></textarea>`;
var message = document.getElementById("textareamessage");
message.value = "vous avez réussi votre exercice";