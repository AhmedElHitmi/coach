//1. dans formulaire conseils quand click sur bouton réservez votre séance je recupere la photo et le nom du coach
$(document).ready(function(test){

$(".btn").click(function(){
//je recupere la photo et le nom du coach
  var $photo = $(this).prevAll(".imgcoach").attr("src");
  var $nom = $(this).prevAll(".nomcoach").text();

//je stock la photo et le nom du coach dans photo et nom dans sessionStorage.setItem
  sessionStorage.setItem("photo",$photo);
  sessionStorage.setItem("nom",$nom);
})
//je verifie si j ai charger la page resa

if ($("body").attr("class") === "resa") {
  //si ok je recupere la photo et le nom dans sessionStorage.getItem et je les met dans src et #nom_coach
  $("img").attr("src",sessionStorage.getItem("photo"));
  $("#nom_coach").text(sessionStorage.getItem("nom"));
};

});
