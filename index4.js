var victory = 125;
var loose = 23;
ranking();

function ranking() {
    var resultado = victory - loose;
    switch (true) {
        case (victory <= 10):
            console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Ferro.");
            break;
        case (victory === 11 || victory < 20):
            console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Bronze.");
            break;
        case (victory >= 21 && victory <= 50):
            console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Prata.");
            break;
        case (victory >= 51 && victory <= 80):
            console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Ouro.");
            break;
        case (victory >= 81 && victory <= 90):
            console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Diamante.");
            break;
        case (victory >= 91 && victory <= 100):
            console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Lendário.");
            break;
        case (victory >= 101):
            console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Imortal.");
            break;
    }
}