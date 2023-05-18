const readline = require('readline-sync');

var nome= 0
var idade= 0
var sobrenome= 0
var assento= 0
var origem= 0
var destino= 0
var valor= 0

var mapaAssentos=[]
 var assentosocupados=0

 const TOTAL_ASSENTOS = 24;

 function Menu() {

    console.log("                                     ");
    console.log('+____ MENU____+');
    console.log("1 - Comprar Passagem");
    console.log("2 - Consultar Voos");
    console.log("3 - Exibir Mapa de Assentos");
    console.log('4 - Emitir Ticket');
    console.log('0 - Encerrar Programa');
    console.log("                                       ");
}

function comprarPassagem() {

    console.log("+____Comprar Passagem____=");
    nome = readline.question("Nome: ");
    sobrenome = readline.question("Sobrenome: ");
    idade = parseInt(readline.question("Idade: "));
    assento = readline.question("Assento: ").toUpperCase();
    origem = readline.question("Origem: ").toUpperCase();
    destino = readline.question("Destino: ").toUpperCase();


    if (!mapaAssentos[assento] && assento.match(/^[AB][1-9]|1[0-2]$/)) {

        mapaAssentos[assento] = 'X';
        assentosocupados++;

        console.log( "+____Resumo da Compra____+");

        console.log(`Nome: ${nome} ${sobrenome}`);

        console.log(`Idade: ${idade}`);

        console.log(`Assento: ${assento}`);

        console.log(`Origem: ${origem}`);

        console.log(`Destino: ${destino}`);

        console.log(`Valor: R$ ${valor.toFixed(2)}`);
        
        if (idade < 18) {

            valor = 50;

        } else if (idade >= 60) {

            valor = 100;

        } else {

            valor = 75;

        }
    } else {

        console.log('\nAssento inválido ou ocupado!');

    }

}

function consultarVoos() {

    console.log("+____Consultar Voos____+");

    console.log('Voos disponíveis:');

    console.log('1. São Paulo (GRU) -> Rio de Janeiro (GIG) ');

    console.log('2. Presidente Prudente (PP) -> China (GRU)');
}

function exibirMapaAssentos() {

    console.log("+____ Mapa de Assentos____+");

    for (let i = 1; i <= 12; i++) {

        let linhaA = `A${i}: ${mapaAssentos['A' + i] || '-'}`;

        let linhaB = `B${i}: ${mapaAssentos['B' + i] || '-'}`;

        console.log(`${linhaA}\t\t${linhaB}`);

    }

    console.log(`\nAssentos Disponíveis: ${TOTAL_ASSENTOS - assentosocupados}`);

    console.log(`Assentos Ocupados: ${assentosocupados}`);

}
function emitirTicket() {

    console.log('+____ Emitir Ticket____+');

    if (!nome) {

        console.log('Nenhuma passagem vendida!');

        return;

    }
    console.log('--------------------------------');
    console.log('Companhia Aérea XYZ ');
    console.log('--------------------------------');
    console.log(`Nome: ${nome} ${sobrenome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Assento: ${assento}`);
    console.log(`Origem: ${origem}`);
    console.log(`Destino: ${destino}`);
    console.log(`Valor: R$ ${valor.toFixed(2)}`);
    console.log('--------------------------------');

}
let opcao;

do {

    Menu();

    opcao = parseInt(readline.question('Opcao: '));

    switch (opcao) {

        case 1:

            comprarPassagem();

            break;

        case 2:

            consultarVoos();

            break;

        case 3:

            exibirMapaAssentos();

            break;

        case 4:

            emitirTicket();

            break;

        case 0:

            console.log('\nPrograma encerrado!');

            break;

        default:

            console.log('\nOpcao inválida!');

    }

} while (opcao !== 0);




   

