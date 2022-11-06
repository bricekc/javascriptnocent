//récupère les champs du formulaires
let form = document.forms.namedItem("signin");
//permet d'ajouter desévènements pendant la validation du formulaire
form.addEventListener("submit", (event) =>
{
    //récupère la valeur de l'élément pswd
    let pswd1 = form.elements.namedItem("pswd1").value;
    let pswd2 = form.elements.namedItem("pswd2").value;
    if (pswd1 != pswd2)
    {
        //lance l'exeption si les deux mots de passes sont différents
        event.preventDefault();
        document.querySelector("#alert").style.display = "block";
    }
});