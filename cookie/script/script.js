// Booléen indiquant si la partie est en cours
let playing = false;
// Temps restant
let remainingTime;
// Nombre de clics sur le cookie
let clickCount = 0;
// Zone d'affichage du score
let score = document.querySelector("figure > span");
// Paragraphe pour l'affichage du temps restant
let timeDisplay = document.querySelector("p");
// Zone d'affichage des secondes restantes
let time = document.querySelector("p > span");
// Bouton de démarrage
let startButton = document.querySelector("button");
 // Image du cookie
let cookieImage = document.querySelector("figure > img");
function reset()
{
  //met le score de l'utilisateur à 0
  score.textContent = 0;
  clickCount = 0;
  let boutton = document.querySelector("button");
  //ajoute la propriété hidden au bouton pour le caché
  boutton.classList.toggle("hidden");
  //supprime la propriété hidden au temps restant
  timeDisplay.classList.toggle("hidden");
  //réinitialise le temps à 15 sec
  remainingTime = 15;
}
function countdown()
  {
  //vérifié si il y a encore du temps pour le joueur
  if (remainingTime==0)
    {
      //met la partie à faux
      playing=false;
      //réaffiche le bouton start sur la page
      startButton.classList.toggle("hidden");
      //cache le temps restant
      timeDisplay.classList.toggle("hidden");
    }
    //si la partie est en cours
    else
      {
        //mise à jour du temps restant
        time.textContent = remainingTime + " seconds left!";
        //si il reste 5 secondes ou moins
        if (remainingTime<=5)
          {
            //met la couleur du timer en rouge
            time.style.color = "red";
          }
        //si il reste 10 secondes ou moins
        else if (remainingTime<=10)
          {
            //met la couleur du timer en orange
            time.style.color = "orange";
          }
        else
          {
            //sinon met la couleur du timer en noir
            time.style.color = "black";
          }
  //réduit le temps restant de 1
  remainingTime--;
  //relance la fonction countdown 1 seconde après
  window.setTimeout(countdown, 1000);
  }
}

cookieImage.addEventListener("click", (event) =>
{
  if (playing)
  {
    clickCount++;
    score.textContent = clickCount;
  }
})

