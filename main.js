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
    if(lin < 0 || lin > 2 || col < 0 || col > 2) {
        console.log("Digite uma coordenada que seja válida!");
    } else {
        if(tab[lin][col] !== ' ') {
            console.log("Coordenada já preenchida! Digite outra coordenada.");
        } else {
            tab[lin][col] = jogador;
            jogadas++;

            for (i = 0; i < 3; i++) {
                if (tab[i][0] !== ' ' && tab[i][0] === tab[i][1] && tab[i][1] === tab[i][2]) {
                    fimJogo = true;
                    vencedor = tab[i][0];
                    break;
                }
            }

            for (i = 0; i < 3; i++) {
                if (tab[0][i] !== ' ' && tab[0][i] === tab[1][i] && tab[1][i] === tab[2][i]) {
                    fimJogo = true;
                    vencedor = tab[0][i];
                    break;
                }
            }

            if (tab[0][0] !== ' ' && tab[0][0] === tab[1][1] && tab[1][1] === tab[2][2]) {
                fimJogo = true;
                vencedor = tab[0][0];
                break;
            }

            if (tab[0][2] !== ' ' && tab[0][2] === tab[1][1] && tab[1][1] === tab[2][0]) {
                fimJogo = true;
                vencedor = tab[0][2];
                break;
            }
            jogador = (jogador === 'o') ? 'x' : 'o';
        }
    }
}
// (d)
for (i = 0; i < 3; i++) {
    console.log(`[${tab[i][j]}] [${tab[i][j+1]}] [${tab[i][j+2]}]`);
}

if(vencedor == ' ') {
    console.log("empate\n");
} else {
    console.log(`${vencedor} venceu`);
}