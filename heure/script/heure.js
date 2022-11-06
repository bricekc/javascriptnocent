function displayDate()
{
    let date = new Date();
    let heure = "Il est : "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    let jour = "Nous sommes le : "+String(date.getDate())+"/"+String(date.getMonth())+"/"+String(date.getFullYear());
    let h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.classList.add("jour");
    document.getElementsByClassName("jour")[0].textContent = jour;
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.classList.add("heure");
    document.getElementsByClassName("heure")[0].textContent = heure;
}
window.setInterval(displayDate, 1000);
