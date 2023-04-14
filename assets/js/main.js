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

let myPeso = biciclette[0].peso;
let myName = biciclette[0].nome;

function printBike() {
    biciclette.forEach((element) => { 
        const {nome, peso} = element;
        
        if (peso <= myPeso) {
            myPeso = peso;
            myName = nome;
        }
    });

    return document.writeln(myName, myPeso)
}

printBike();