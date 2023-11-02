// for ( let i = 1;  i <= 6; i++) {
// 	let text = ""
// 	for (let j = 1; j <=8; j++){ 
// 		let k = i + j
// 		if (k < 8){
// 			text = text + "#"
// 		}
// 		else {
// 			text = text + "."
// 		}
// 	}
// 	console.log(text)	
// }


import { getQuestion } from './readline.js'

const [question, close] = getQuestion()


import{figur1, figur2, figur3, figur4, figur5, figur6, figur7} from './functions.js'

// figur1()
// figur2()
// figur3()
// figur4()
// figur5()
// figur6()
// figur7()


let input = ''
while( input !== 'q') {
	console.log();
	console.log('Huvudmeny. Välj ett alternativ:');
	console.log('För figur a skriv 1');
	console.log('För figur b skriv 2');
	console.log('För figur c skriv 3');
	console.log('För figur d skriv 4');
	console.log('För figur a skriv 5');
	console.log('För figur a skriv 6');
	console.log('För figur a skriv 7');
	console.log('För att avsluta skriv Q');
	input = await question('> ')
	input = input.toLowerCase()

	if( input == 'q') {
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
		figur5()
	}

	else if( input === '6' ) {
		figur6()
	}

	else if( input === '7' ) {
		figur7()
	}
	
}


close()