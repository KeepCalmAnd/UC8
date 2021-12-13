//Validação de idade.

let idade = 18;

if (idade >=18){
    console.log("Idade válida para cadastro de comparecimento do evento")
}else{
    console.log("Cadastro interrompido por incompatibilidade de idade")
}
//Lista de verificação dos paticipantes.

let nomeDosParticipantes = ["Ana Gabriela", "Paulo Yoshimatsu", "Guilherme Bozi", "Maria Fernandes"]

for (let participantes of nomeDosParticipantes) {
    console.log(`${participantes} está cadastrado/a como PARTICIPANTE`)
}
//Lista de palestrantes

let nomeDosPalestrantes = ["Vitor Ramos", "Barnabus Stinson", "Theodore Evelyn Mosby"]

for (let palestrante of nomeDosPalestrantes) {
    console.log(`${palestrante} está cadastrado/a como PALESTRANTE`)
}

//Verificação do prazo de inscrição

let prazoDeinscrição = 12/12/2021;

let dataatual = 11/12/2021


if(prazoDeinscrição<dataatual){
    console.log("Prazo de inscrição excedido")
}else{
    console.log("Inscrição válida")
}

// Verificação da quantidade de participantes

let quantidadeDeparticipantes = 99;

if(quantidadeDeparticipantes>100){
    console.log("Inscrição invalidada por já ter a quantidade de participantes excedida")
}else{
    console.log("Parabéns, seu cadastro de comparecimento foi concluído")
}




    