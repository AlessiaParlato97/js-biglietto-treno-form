console.log("calcola prezzo del biglietto");



const formElement = document.getElementById('form-prezzo');
console.log(formElement);



const inputKmElement = document.getElementById('km');
const inputEtaElement = document.getElementById('eta');
const selectScontoElement = document.getElementById('sconto');
const calcoloOutputElement = document.getElementById('calcolo');

console.log(inputKmElement, inputEtaElement, calcoloOutputElement, selectScontoElement);





formElement.addEventListener('submit', function (event) {

    event.preventDefault()

    const km = parseFloat(inputKmElement.value);
    console.log(km);

    const eta = parseFloat(inputEtaElement.value);
    console.log(eta);

    console.log('submit', event);

    const euro = 0.21;
    let calcoloPrezzoTotale = km * euro;

    console.log(calcoloPrezzoTotale);
    calcoloOutputElement.innerHTML = calcoloPrezzoTotale + ' euro';

})
