// Mål: visa en textbaserad meny för användaren, där man kan välja olika alternativ

import { getQuestion } from './readline.js'

const [question, close] = getQuestion()

import { figur1,figur2, figur3, figur4, figur5, figur6, figur7} from './figur.js';


let input = ''
while( input !== 'q' ) {
	console.log(' ');
	console.log('Välkommen till Figurprogrammet!');
	console.log(' ');
	console.log('Detta program låter dig utforska olika mönsterfigurer.');
	console.log('Välj en figur genom att ange dess nummer');
	console.log(' ');
	console.log('1. Figur: Mönsterruta');
	console.log('2. Figur: Pilar');
	console.log('3. Figur: Rutnät');
	console.log('4. Figur: Triangelmönster');
	console.log('5. Figur: Diagonalstreck');
	console.log('6. Figur: Diagonala kryss');
	console.log('7. Figur: Vågräta linjer');
	console.log(' ');
	console.log('Q. Avsluta');
	console.log(' ');
	input = await question('> ')
	input = input.toLowerCase()

	if( input == 'q' ) {
		console.log('Avslutar...');
	}
	else if( input === '1' ) {
		figur1()
	}
	else if( input === '2' ) {
		figur2()
	}
	else if( input === '3' ) {
		figur3()
	}
	else if( input === '4' ) {
		figur4()
	}
	else if( input === '5' ) {
		figur4()
	}
	else if( input === '6' ) {
		figur6()
	}
	else if( input === '7' ) {
		figur7()
	}
	else {
		console.log('Ogiltigt alternativ.Programmet avslutas.');
		input = 'q'
	}
}

	
close()
