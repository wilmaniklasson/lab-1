// Mål: visa en textbaserad meny för användaren, där man kan välja olika alternativ
import { getQuestion } from './readline.js'

const [question, close] = getQuestion()
// getQuestion returnerar två funktioner: question och close
// Använd funktionen question för att ställa en fråga till användaren
// Använd close sist i programmet


// let name = await question('Vad heter du?')
// console.log('Namn: ' + name);


// visa info för användaren
// vänta på input
// if-sats för vad man har skrivit
// upprepa
// &&  <- x och y
// ||  <- x eller y
let input = ''
while( input !== 'q' ) {
	console.log();
	console.log('Huvudmeny. Välj ett alternativ:');
	console.log('1. Figur a');
	console.log('Q. Avsluta');
	input = await question('> ')
	input = input.toLowerCase()

	if( input == 'q' ) {
		console.log('Avslutar...');
	}
	else if( input === '1' ) {
		figurA()
	}
}

function figurA() {
	console.log('Visar figur A...');
	console.log();
}

// Close behövs för att programmet ska sluta när det är färdigt
close()
