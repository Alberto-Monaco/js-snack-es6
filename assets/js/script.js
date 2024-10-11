//*Snack 1
/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const bici = [
	{
		nome: 'bici1',
		peso: 10
	},
	{
		nome: 'bici2',
		peso: 7
	},
	{
		nome: 'bici3',
		peso: 18
	},
	{
		nome: 'bici4',
		peso: 5
	},
	{
		nome: 'bici5',
		peso: 12
	}
]
let weight_minor = bici[0].peso
let bici_minor = bici[0].nome
for (let i = 0; i < bici.length; i++) {
	let peso = bici[i].peso
	let name = bici[i].nome
	if (peso < weight_minor) {
		bici_minor = name
		weight_minor = peso
	}
}
console.log(`la bici meno pesante è ${bici_minor} con il peso di ${weight_minor}`)

//*Snack2
/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

//*Snack 3 (Bonus)
/*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.*/
