
let nomeDoaluno = ["Vitor", "Ana","Japa", "Cleiton", "Maria", "João", "Daniel", "Janderson", "Fabiano"]

for (let nome of nomeDoaluno) {
    console.log(`Esta pessoa se chama ${nome}`)
}



let numeroDealunos = 10;

let contador = 0;

while(contador <= numeroDealunos) {
    
    if(contador ==0){
        console.log("O número atual é zero")
    }else if(contador % 2 != 0){
        console.log(`O número ${contador} é impar`)     
    }else{
        console.log(`O número ${contador} é par`)
    }
    contador++;    

}

