let table = Number(prompt("choisissez une table de multiplication"));
let h1 = document.createElement("h1");
document.body.appendChild(h1);
document.querySelector("h1").textContent = "Table de multiplication de "+ table;
for(let i = 0;i<11;i++)
{
    let res = table * i;
    let div = document.createElement("div" );
    div.classList.add(i);
    document.body.appendChild(div);
    document.getElementsByClassName(i)[0].textContent = table+" * "+i+" = "+res;
}