/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const biciclette = [
    {
        nome : 'mountain bike',
        peso : 10,
    },
    {
        nome : 'bmx',
        peso : 15,
    },
    {
        nome : 'graziella',
        peso : 20,
    },
    {
        nome : 'tandem',
        peso : 30,
    }
]

// let myPeso = biciclette[0].peso;
// let myName = biciclette[0].nome;

// function printBike() {
//     biciclette.forEach((element) => { 
//         const {nome, peso} = element;
        
//         if (peso <= myPeso) {
//             myPeso = peso;
//             myName = nome;
//         }
//     });

//     return document.writeln(myName, myPeso)
// }

// printBike();


let myPeso = biciclette[0].peso;

biciclette.forEach((element) => {
    if ( element.peso <= myPeso) {
        myPeso = element
    }
});

const {nome, peso} = myPeso;
document.getElementById('snack-1').innerHTML = `
    <h2>la bici di tipo ${nome} pesa ${peso}kg ed è la più leggera</h2>
`

//------------------------------------------ SNACK 2 -------------------------------------------------------
/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/



const squadre = [
    {
        name: 'napoli',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'roma',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'fiorentina',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'milan',
        puntiFatti: 0,
        falliSubiti: 0,
    }
]

squadre.forEach((element) => {
    element.puntiFatti = Math.floor(Math.random() * 10 ) + 1;
    element.falliSubiti = Math.floor(Math.random() * 10 ) +1;
});

const nomeFalli = squadre.map(({ name, falliSubiti }) => ({ name, falliSubiti }));
console.log(nomeFalli);


//------------------------------------------ snack 3 ----------------------------------------

/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

let names = ['alberto', 'michele','angelo','simone','giorgio'];

