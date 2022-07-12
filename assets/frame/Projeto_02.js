const prompt = require("prompt-sync")();

//console.log("Hello world!");

//Projeto Jokenpô

// 1 - Receber o elemento escolhido pelo usuário;
// 2 - Escolher um elemento aleatório para o computador;
// 3 - Comparar os dois elementos e declarar um vencedor.

const ferramentas = ['pedra', 'papel', 'tesoura'];
const win = [];
const lose = [];
const tie = [];

console.clear();
console.log();
console.log('Bem-vindo ao Jokenpô:')
console.log();


let again = 'sim';

while(again == 'sim'){
console.log();        
let rodadas = +prompt('Quantas rodadas você gostaria de realizar? ');
console.clear();
                
        for(i=0; i < rodadas; i++){
        console.log();        
        var elementos = prompt('Escolha entre "Pedra", "Papel" ou "Tesoura": ').toLowerCase();
                
                while(true){
                        if(elementos == 'pedra' || elementos == 'papel' || elementos == 'tesoura'){
                        break;
                        }else{
                        console.log();
                        console.log('Digite apenas uma das opções válidas!');                
                        console.log();
                        elementos = prompt('Escolha entre "Pedra", "Papel" ou "Tesoura": ').toLowerCase();
                        console.clear();
                };            
        };

        let maquina = ferramentas[Math.floor(Math.random() * ferramentas.length)];
        let player = elementos

        console.log();
        console.log(`Player 1 - ${player} X ${maquina} - Computador`);
        console.log();

                if(player == 'pedra' && maquina == 'pedra'){
                        console.log('O jogo resultou em um empate');
                        tie.push('tie');
                } else if(player == 'pedra' && maquina == 'papel'){
                        console.log('A máquina venceu essa!');
                        lose.push('lose');
                } else if(player == 'pedra' && maquina == 'tesoura'){
                        console.log('Você venceu essa, Parabéns!');
                        win.push('win');
                } else if(player == 'papel' && maquina == 'pedra'){
                        console.log('Você venceu essa, Parabéns!');
                        win.push('win');
                } else if(player == 'papel' && maquina == 'papel'){
                        console.log('O jogo resultou em um empate');
                        tie.push('tie');
                } else if(player == 'papel' && maquina == 'tesoura'){
                        console.log('A máquina venceu essa!');
                        lose.push('lose')
                } else if(player == 'tesoura' && maquina == 'pedra'){
                        console.log('A máquina venceu essa!');
                        lose.push('lose');
                } else if(player == 'tesoura' && maquina == 'papel'){
                        console.log('Você venceu essa, Parabéns!');
                        win.push('win');
                }else if(player == 'tesoura' && maquina == 'tesoura'){
                        console.log('O jogo resultou em um empate');
                        tie.push('tie');
                };
        };
        
        console.log();        
        again = prompt('Gostaria de jogar novamente? ').toLowerCase();
                while(true){
                        if(again == 'sim' || again == 'nao'){
                        console.clear();
                        break;
                        }else{
                        console.log();
                        console.log('Digite apenas "sim" ou "nao"!');
                        console.log();
                        again = prompt('Gostaria de jogar novamente? ').toLowerCase();
                };
        };        
};


console.log();
console.log('O resultado do jogo foi de: ')
console.log();
console.log(`Vitórias: ${win.length}
Empates: ${tie.length}
Derrotas: ${lose.length}`);

console.log();
console.log('Obrigado por jogar com a gente, até a próxima!');
prompt();