var lght;
var lgr;
var lght2;
var lgr2;
var lght3;
var lgr3;

document.getElementById("button1").addEventListener("click", () => {
  lght = document.getElementById("nom").value;
  lgr = lght.length;
  console.log(lgr);
  if (lgr < 2) {
    alert("Attention !! Votre nom possède moins de 2 caractères");
  }

  lght2 = document.getElementById("prenom").value;
  lgr2 = lght2.length;
  console.log(lgr);
  if (lgr2 < 2) {
    alert("Attention !! Votre prénom possède moins de 2 caractères");
  }

  lght3 = document.getElementById("mail").value;
  lgr3 = lght3.length;
  console.log(lgr);
  if (lgr3 < 2) {
    alert("Attention !! Votre E-mail possède moins de 2 caractères");
  }
});
