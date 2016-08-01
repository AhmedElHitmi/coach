//1. dans formulaire conseils quand click sur bouton réservez votre séance je recupere la photo et le nom du coach
$(document).ready(function(test){
//je recupere la photo et le nom du coach
$(".btn").click(function(){

  var $photo = $(this).prevAll(".imgcoach").attr("src");
  var $nom = $(this).prevAll(".nomcoach").text();
  sessionStorage.setItem("photo",$photo);
  sessionStorage.setItem("nom",$nom);
})
//2. je met dans le formulaire resa la photo et le nom

if ($("body").attr("class") === "resa") {
  $("img").attr("src",sessionStorage.getItem("photo"));
  $("#nom_coach").text(sessionStorage.getItem("nom"));
};


// $("resa.html").val("#photo_coach.src",$photo);


// $("resa.html").val("nom_coach.text",$nom);
//

//3. j affiche le formulaire resa.
// $("resa.html").show;
});
