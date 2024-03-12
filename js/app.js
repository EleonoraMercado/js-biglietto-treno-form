//ascoltare evento submit senza che il form si comporti da default

document.getElementById('formBiglietto').addEventListener('submit', function(event){
    event.preventDefault();

    //recupero i valori dal form
    let kmElement = parseFloat(document.getElementById('km').value);
    let etaElement = document.getElementById('eta').value;

    //dichiaro prezzo base
    const prezzoBase = kmElement * 0.21;

    //calcolo dello sconto in base alla scelta dell'età
    let scontoPercentuale = 0;
    if (etaElement ==='minore') {
        scontoPercentuale = 20;
    } else if (etaElement === 'over65') {
        scontoPercentuale = 40;
    }

    //calcolare importo sconto da sottrarre al prezzo totale
    let importoSconto = (prezzoBase * scontoPercentuale) / 100;

    //calcolare prezzo totale
    let prezzoTotale = prezzoBase - importoSconto;

    //stampa del biglietto a schermo
    let bigliettoElement = `
        <div class="card col-sm-12 col-lg-8 text-bg-primary text-center mb-3 mx-auto">
            <div class="card-header text-center text-uppercase mb-3">Biglietto treno</div>
                <table class="table-stampa-biglietto mb-3">
                    <thead>
                        <tr>
                            <th>Km del viaggio</th>
                            <th>Prezzo base</th>
                            <th>Sconto applicato</th>
                            <th>Prezzo totale</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>${kmElement}</th>
                            <th>${prezzoBase.toFixed(2)}</th>
                            <th>${importoSconto.toFixed(2)}€</th>
                            <th>${prezzoTotale.toFixed(2)}€</th>
                        </tr>
                    </tbody>
                </table>

        </div>
    `;

    //stampare nella pagina html
    document.getElementById('stampaBiglietto').innerHTML = bigliettoElement;

    //nascondere il form dopo invia
    document.getElementById('formBiglietto').style.display = 'none';
    

} )










//applicare condizioni if/else nel select per applicare sconti


// })
//stampare biglietto in una card 