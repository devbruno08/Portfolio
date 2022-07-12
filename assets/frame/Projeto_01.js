const prompt = require("prompt-sync")();

// console.log('Hello, world!');

console.clear();

console.log();

console.log("A história a seguir fala de um mago,");
console.log();
prompt("Pressione para continuar...");
console.clear();

console.log();

console.log("Que precisava atravessar o continente para retirar da caverna de um dragão");
console.log();
prompt("Pressione para continuar...");
console.clear();

console.log();

console.log("Algumas plantas que irão curar a doença antiga que assola o seu povo.");
console.log();
prompt("Pressione para continuar...");
console.clear();

let Pergunta1;
let Pergunta2;
let Pergunta3;
let Pergunta4;
let Pergunta5;

console.log();
console.log(`Responda com 's' para: 'sim' ou 'n' para: 'não'.
Sobre a trajetória do mago: `);
prompt();
console.clear();
console.log();

while(true){
  
  Pergunta1 = prompt("O mago conseguiu chegar até a caverna? ").toLowerCase();
  if(Pergunta1 == 's' || Pergunta1 == 'n'){
    break;
  } else {
    console.log();
    console.log("'Utilize apenas 's' ou 'n'"); 
    prompt();
    console.clear();
    console.log();
  };

};

while(true){
  console.clear();
  console.log();
  Pergunta2 = prompt("Ele usou suas magias a seu favor? ").toLowerCase();
  if(Pergunta2 == 's' || Pergunta2 == 'n'){
    break;
  } else {
    console.log();
    console.log("'Utilize apenas 's' ou 'n'"); 
    prompt();
    console.clear();
    console.log();
  };

};

while(true){
  console.clear();
  console.log();
  Pergunta3 = prompt("Conseguiu despistar o dragão? ").toLowerCase();
  if(Pergunta3 == 's' || Pergunta3 == 'n'){
    break;
  } else {
    console.log();
    console.log("'Utilize apenas 's' ou 'n'"); 
    prompt();
    console.clear();
    console.log();
  };

};

while(true){
  console.clear();
  console.log();
  Pergunta4 = prompt("O mago saiu ileso? ").toLowerCase();
  if(Pergunta4 == 's' || Pergunta4 == 'n'){
    break;
  } else {
    console.log();
    console.log("'Utilize apenas 's' ou 'n'"); 
    prompt();
    console.clear();
    console.log();
  };

};

while(true){
  console.clear();
  console.log();
  Pergunta5 = prompt("As plantas foram colhidas? ").toLowerCase();
  if(Pergunta5 == 's' || Pergunta5 == 'n'){
    break;
  } else {
    console.log();
    console.log("'Utilize apenas 's' ou 'n'"); 
    prompt();
    console.clear();
    console.log();
  };

};

console.clear();
let Afirmativo = "s";
let Respostas = 0;

console.log();

if (Pergunta1 == Afirmativo) {
  Respostas++;
} else {
};

if (Pergunta2 == Afirmativo) {
  Respostas++;
} else {
};

if (Pergunta3 == Afirmativo) {
  Respostas++;
} else {
}

if (Pergunta4 == Afirmativo) {
  Respostas++;
} else {
};

if (Pergunta5 == Afirmativo) {
  Respostas++;
} else {
};

let Resultado = Respostas;

if (Resultado == 1) {
  console.log("Você ainda é um aprendiz de magia, continue treinando!");
} else if (Resultado == 2) {
  console.log("Está se tornando mais forte e evoluindo nessa jornada mas ainda não é o bastante.");
} else if (Resultado == 3) {
  console.log("Seu poder está maior porém o dragão pode ser muito perigoso.");
} else if (Resultado == 4) {
  console.log("Você está quase salvando o seu povo e trazendo honra para sua guilda.");
} else if (Resultado == 5) {
  console.log("Parabéns, você acaba de retornar da missão com sucesso e salvará seu povo!!!");
} else {
  console.log("Você é um verdadeiro fracasso!");
}

console.log();
