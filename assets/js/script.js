/*
chiedere all'utente il nome, l'anno di nascita, e l'età. Il programma restituisce l'anno attuale

1) chiedere e salvare il nome
2) chiedere e salvare il cognome
3) chiedere e salvare l'animale preferito
4) chiedere e salvare il colore preferito
5) chiedere e salvare un numero compreso tra 10 e 99
4) salvare l'unione degli ultimi tre elementi
5) stampare in pagina l'output

*/

const name = prompt('Inserisci il tuo nome');
const surname = prompt('Inserisci il tuo cognome');
const pet = prompt('Inserisci il tuo animale preferito');
const color = prompt('Inserisci il tuo colore preferito');
const number = parseInt(prompt('Scegli un numero compreso tra 10 e 99'));
    console.log(name, surname, pet, color, number);


const outputPw = pet + color + number;
    console.log(outputPw);