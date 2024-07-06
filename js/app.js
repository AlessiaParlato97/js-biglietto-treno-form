console.log("calcola prezzo del biglietto");



const formElement = document.getElementById('form-prezzo');
console.log(formElement);



const inputKmElement = document.getElementById('inputKm');
const selectScontoElement = document.getElementById('sconto');
const calcoloOutputElement = document.getElementById('calcolo');

console.log(inputKmElement, calcoloOutputElement, selectScontoElement);





formElement.addEventListener('submit', function (event) {

    event.preventDefault()

    const km = parseFloat(inputKmElement.value);
    console.log(km);


    console.log('submit', event);

    const selectSconto = selectScontoElement.value;
    console.log(selectSconto);

    const euro = 0.21;
    const prezzoPerKm = km * euro;

    if (selectSconto === '1') {
        let calcoloSconto18 = (prezzoPerKm * 20) / 100;
        console.log('Lo sconto applicato per i minori è di ' + calcoloSconto18 + ' euro');

        let prezzoScontato18 = (prezzoPerKm - calcoloSconto18);
        risultato = prezzoScontato18.toFixed(2);
        console.log('Il prezzo scontato del biglietto è di ' + risultato + ' euro');
    } else if (selectSconto === '2') {
        let calcoloSconto65 = (prezzoPerKm * 40) / 100;
        console.log('Lo sconto applicato per gli over 65 è di ' + calcoloSconto65 + ' euro');

        let prezzoScontato65 = (prezzoPerKm - calcoloSconto65);
        risultato = prezzoScontato65.toFixed(2);
        console.log('Il prezzo scontato del biglietto è di ' + risultato + ' euro');

    }


    console.log(calcoloPrezzoTotale);
    calcoloOutputElement.innerHTML = calcoloPrezzoTotale + ' euro';

})
