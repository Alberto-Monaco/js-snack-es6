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

const squadre = [
	{
		nome: 'juventus',
		punti_fatti: 0,
		falli_subito: 0
	},
	{
		nome: 'milan',
		punti_fatti: 0,
		falli_subito: 0
	},
	{
		nome: 'napoli',
		punti_fatti: 0,
		falli_subito: 0
	},
	{
		nome: 'bologna',
		punti_fatti: 0,
		falli_subito: 0
	},
	{
		nome: 'inter',
		punti_fatti: 0,
		falli_subito: 0
	}
]

function casuale() {
	num = Math.round(Math.random() * 100) + 1
	return num
}
console.log(casuale())
let punti_fatti = 0
for (let i = 0; i < squadre.length; i++) {
	punti_fatti = squadre[i].punti_fatti
	if (punti_fatti === 0) {
		squadre[i].punti_fatti = casuale()
	}
}

console.log(squadre)
let falli_subito = 0

for (let i = 0; i < squadre.length; i++) {
	falli_subito = squadre[i].falli_subito
	if (falli_subito === 0) {
		squadre[i].falli_subito = casuale()
	}
}
console.log(squadre)

let new_squadre = []
for (let i = 0; i < squadre.length; i++) {
	new_squadre.push(squadre[i].nome)
	new_squadre.push(squadre[i].falli_subito)
}
console.log(new_squadre)
