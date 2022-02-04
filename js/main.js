// MILESTONE 1
// Partendo dalla struttura dati fornita, 
// visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa. 

// MILESTONE 2
// Ciascuna icona ha una proprietà “color”: 
// utilizzare questa proprietà per visualizzare le icone del colore corrispondente. 

// MILESTONE 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
// Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti. 


// ARRAY DI ICONE
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	}
];

// contenitore icone
const contenitore = document.getElementById('icons-container');


// MILESTONE 2 

// let contenutoIcone = '';

// RENDO VISIBILI TUTTE LE ICONE DELL'ARRAY + IL LORO COLORE
// ciclare tutti gli elementi di icone
// richiamo la funzione che definiamo noi
// richiamare il valore di ogni singolo oggetto contenuto
// icons.forEach(oggetto => {
//     contenutoIcone += `<div class="icon">
//                             <i style="color:${oggetto.color};" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
//                             <div class="icon-text">${oggetto.name}</div>
//                         </div>`;
// });

// contenitore.innerHTML = contenutoIcone;
// FINE MILESTONE 2 


// MILESTONE 3
// invoco funzione per farla funzionare
disegnaIcone(contenitore, icons);

const selezionato = document.getElementById('type-filter');

// elemento selezionato al click cambia visualizzazione icone
selezionato.addEventListener('change', function() {
    
    let selezione = this.value;

    if (selezione == "") {
        disegnaIcone(contenitore, icons);
    } else {
        // dentro questo array voglio ci finiscano icons solo di un certo valore
        // elenco di tutti gli elementi filtrati
        const elementiFiltrati = icons.filter(icon => {

        // se è vero, allora entro all'interno dell'elemento che ho selezionato altrimenti ritorno false, non fa nulla
        if(icon.type == selezione) {
            return true;
        }

        return false;
    });

    // il programma ci mostra icona selezionate
    disegnaIcone(contenitore, elementiFiltrati);

    }

});


// funzione per disegnare le icone
function disegnaIcone(contenitore, icons) {

    let contenutoIcone = '';

    icons.forEach(oggetto => {
        contenutoIcone += `<div class="icon">
                        <i style="color:${oggetto.color};" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
                        <div class="icon-text">${oggetto.name}</div>
                    </div>`;
    });

    contenitore.innerHTML = contenutoIcone;

}