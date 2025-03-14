const prompt = require("prompt-sync")();

var i, j, lin, col = 0;
var jogadas = 0;
var jogador = 'o';
var vencedor = ' ';
var fimJogo = false;
var tab = [];

// (a)
for (i = 0; i < 3; i++) {
    tab[i] = [];
    for (j = 0; j < 3; j++) {
        tab[i][j] = ' ';
    }
}

while ((jogadas < 9) && (fimJogo == false)) {
    // (b)
    j = 0;
    for (i = 0; i < 3; i++) {
        console.log(`[${tab[i][j]}] [${tab[i][j+1]}] [${tab[i][j+2]}]`);
    }
    lin = parseInt(prompt(`${jogador} em [linha]: `));
    col = parseInt(prompt(`${jogador} em [coluna]: `));
    // (c)
}
// (d)
if(vencedor == ' ') {
    console.log("empate\n");
} else {
    console.log(`${vencedor} venceu`);
}