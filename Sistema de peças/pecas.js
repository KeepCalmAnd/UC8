let listadepecas = ["Filtro de óleo", "Bomba de gasolina", "Carburador"]

if(listadepecas.length < 10){
    console.log("É possível cadastrar mais peças")
}else{
    console.log("Não é possível cadastrar mais peças por falta de espaço")
} 

let peso = 50;

if (peso<100){
    console.log("A peça deve pesar no mínimo 100g")
}else{
    console.log("A peça possui um peso adequado")
}

let nomeDapeca = "Disco de freio"

if(nomeDapeca.length>3){
    console.log("Nome da peça esta adequado para cadastro")
}else if(nomeDapeca.length ==0){
    console.log("O nome da peça não pode estar vazio")
}else{
    console.log("O nome deve ter mais que 3 caracteres, dogite um nome adequado")
}
 

    


