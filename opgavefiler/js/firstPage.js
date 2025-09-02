/* Opgave 1*/


// din kode her
const navn = "Peter";
const virksomhedsår = 2;
const besked = `Hej ${navn}, du har været i virksomheden i ${virksomhedsår} år.`;
console.log(besked);

document.getElementById("message").innerHTML = besked;

/* Opgave 2*/


// din kode her
const myData = [
{
   "name": "Tshirt",
    "price": 99.95,
    "description": "A nice fucking t-shirt"
},
{
    "name": "Jeans",
    "price": 249.95,
    "description": "A nice fucking pair of jeans"
},
{
    "name": "Socks",
    "price": 49.95,
    "description": "A nice fucking pair of socks"
}
]
let productHTML = "";
myData.forEach(product => {
    productHTML += `
    <article class="produkt">
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
    </article>
    `;
   const produktListe = document.getElementById("produktListe"); 
   produktListe.innerHTML = productHTML;
});
console.log(myData);

/* Opgave 3 - skriv videre på koden her: */

   // array med person data
        const myPersons = [];

        // find form elementer
        const myForm = document.getElementById('formular');
        const submitButton = document.getElementById('indsend-knap');
        const personList = document.getElementById('person-liste');

        submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const myForm = myForm.querySelectorAll('input');

        myPersons.push({
        navn: myForm[0].value,
        alder: myForm[1].value,
        });
        
        const sort = sorterEfterAlder(myPersons);
        showList(sort);
        });

        function showList(sort) {
        let html = '';
        sort.map((person) => {

        html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
        });
        personList.innerHTML = html;
        }

        function sorterEfterAlder(myPersons) {
        return myPersons.sort((a, b) => a.alder - b.alder);
        }
    