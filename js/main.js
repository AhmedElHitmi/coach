//1. dans formulaire conseils quand click sur bouton réservez votre séance je recupere la photo et le nom du coach
$(document).ready(function(test){

$(".btn").click(function(){
//2. je met dans le formulaire resa la photo et le nom
  var $photo = $(this).prevUntil("div").attr("src");
  var $nom = $(this).prevUntil(".nomcoach").text();

  console.log($photo);
  console.log($nom);




})
// $("resa.html").val("#photo_coach.src",$photo);
// $("resa.html").val("nom_coach.text",$nom);
//

//3. j affiche le formulaire resa.
// $("resa.html").show;
});
