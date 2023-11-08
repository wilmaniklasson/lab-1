// FIGUR 1
function figur1(){
    for (let i = 1; i <= 6; i++) {

       let text = '';

    for (let j = 1; j <= 8; j++) {
      if (j === 1) {
        text += '#';
      } 

      else {
        text += '.';
      }
    }
    console.log(text);
  }
}
//  FIGUR 2
function figur2(){
    for ( let i = 1;  i <= 6; i++) {
        let text = ""
        for (let j = 1; j <=8; j++){ 
            let k = i + j
            if (j === i){
            text = text + "#"
            }
         
            else {
            text = text + "."
            }
        
        }
        console.log(text)
    }
}

// FIGUR 3 
function figur3(){
for ( let i = 1;  i <= 6; i++) {
    let text = ""
    for (let j = 1; j <=8; j++){ 
        let k = i + j
        if (j === 3 || j === 4 || j === 5){
            text = text + "#"
        }
        else {
            text = text + "."
        }
    }
    console.log(text)
}
}
// Figur 4
function figur4() {
    for ( let i = 1;  i <= 6; i++) {
        let text = ""
        for (let j = 1; j <=8; j++){ 
            let k = i + j
            if (j === 3){
                text = text + "#"
            }
            else if (i === 3) {
                text = text + "#"
            }
            else {
                text = text + "."
            }
            
        }
        console.log(text)
    }
    
}
// FIGUR 5
function figur5(){
for ( let i = 1;  i <= 6; i++) {
    let text = ""
    for (let j = 1; j <=8; j++){ 
        if (j === 5){
            text = text + "#"
        }
        else if(j === 7 -i){
            text = text + "#"
        }
        else {
            text = text + "."
        }
        
    }
    console.log(text)
}
}
// FIGUR 6 
function figur6(){
    for (let i = 0; i < 6; i++) {
        let text = '';
        for (let j = 0; j < 8; j++) {
          if (j === i || j === 8 - i - 3) {
            text += "#";
          } else {
            text += ".";
          }
        }
        console.log(text);
      }
}
// FIGUR 7
function figur7(){
for (let i = 1; i <= 6; i++) {
    let text = "";
    
    for (let j = 1; j <= 8; j++) {
        if (j % 2 === 1) {
            text = text + "#";
        } else {
            text = text + ".";
        }
    }
    
    console.log(text);
}
}


export{figur1, figur2, figur3, figur4, figur5, figur6, figur7}

