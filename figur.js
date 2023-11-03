function figur1() {
    console.log('Visar figur 1...');
    console.log();

    // FIGUR 1
    for (let i = 1; i <= 6; i++) {
        let text = '';
        for (let j = 1; j <= 7; j++) {
            if (j === 1) {
                text += '#';
            } else {
                text += '. ';
            }
        }
        console.log(text);
    }
    /* 
    # . . . . . . 
    # . . . . . . 
    # . . . . . . 
    # . . . . . . 
    # . . . . . . 
    # . . . . . . 
    */
}

function figur2() {
    console.log('Visar figur 2...');
    console.log();

    // FIGUR 2
    for (let i = 1; i < 7; i++) {
        let text = '';
        for (let j = 1; j < 9; j++) {
            if (i === j) {
                text += '#';
            } else {
                text += '. ';
            }
        }
        console.log(text);
    }
    /*
    # . . . . . . . 
    . # . . . . . . 
    . . # . . . . . 
    . . . # . . . . 
    . . . . # . . . 
    . . . . . # . . 
    */
}

function figur3() {
    console.log('Visar figur 3...');
    console.log();

    // FIGUR 3
    for (let i = 1; i <= 6; i++) {
        let text = '';
        for (let j = 1; j <= 8; j++) {
            if (j >= 3 && j <= 5) {
                text += '#';
            } else {
                text += '. ';
            }
        }
        console.log(text);
    }
    /* 
    . . ### . . . . 
    . . ### . . . . 
    . . ### . . . . 
    . . ### . . . . 
    . . ### . . . . 
    . . ### . . . . 
    */
}

function figur4() {
    console.log('Visar figur 4...');
    console.log();

    // FIGUR 4
    for (let i = 1; i <= 6; i++) {
        let text = '';
        for (let j = 1; j <= 8; j++) {
            if (j === 3 || i === 3) {
                text += '# ';
            } else {
                text += '. ';
            }
        }
        console.log(text);
    }
    /*
    . . # . . . . . 
    . . # . . . . . 
    # # # # # # # # 
    . . # . . . . . 
    . . # . . . . . 
    . . # . . . . . 
    */
}

function figur5() {
    console.log('Visar figur 5...');
    console.log();

    // FIGUR 5
    for (let i = 1; i <= 6; i++) {
        let text = '';
        for (let j = 1; j <= 8; j++) {
            if (j === 5 || j === 7 - i) {
                text += '# ';
            } else {
                text += '. ';
            }
        }
        console.log(text);
    }
    /* 
    . . . . # # . . 
    . . . . # . . . 
    . . . # # . . . 
    . . # . # . . . 
    . # . . # . . . 
    # . . . # . . . 
    */
}

function figur6() {
    console.log('Visar figur 6...');
    console.log();

    // FIGUR 6
    for (let i = 0; i < 6; i++) {
        let text = '';
        for (let j = 0; j < 8; j++) {
            if (j === i || j === 8 - i - 3) {
                text += '#';
            } else {
                text += '.';
            }
        }
        console.log(text);
    }
    /*
    #....#..
    .#..#...
    ..##....
    ..##....
    .#..#...
    #....#..
    */
}

function figur7() {
    console.log('Visar figur 7...');
    console.log();

    // FIGUR 7
    for (let i = 1; i <= 6; i++) {
        let text = '';
        for (let j = 1; j <= 8; j++) {
            if (j % 2 === 1) {
                text += '#';
            } else {
                text += '.';
            }
        }
        console.log(text);
    }
    /*
    #.#.#.#.
    #.#.#.#.
    #.#.#.#.
    #.#.#.#.
    #.#.#.#.
    #.#.#.#.
    */
}

function figur8() {
    console.log('Visar figur 8...');
    console.log();

    // FIGUR 8
    for (let i = 1; i <= 6; i++) {
        let text = '';
        for (let j = 1; j <= 8; j++) {
            if (j % 3 === 1) {
                text += '.';
            } else if (j % 3 === 2) {
                text += '#';
            } else {
                text += '0';
            }
        }
        console.log(text);
    }
    /* 
    .#0.#0.#
    .#0.#0.#
    .#0.#0.#
    .#0.#0.#
    .#0.#0.#
    .#0.#0.#
    */
}

function figur9() {
    console.log('Visar figur 9...');
    console.log();

    // FIGUR 9
    for (let i = 0; i < 6; i++) {
        let text = '';
        for (let j = 0; j < 6; j++) {
            if (j === i || j === 8 - i - 3) {
                text += '# ';
            } else {
                text += '. ';
            }
        }
        console.log(text);
    }
    /*
    # . . . . # 
    . # . . # . 
    . . # # . . 
    . . # # . . 
    . # . . # . 
    # . . . . # 
    */
}

export { figur1, figur2, figur3, figur4, figur5, figur6, figur7, figur8, figur9 };
