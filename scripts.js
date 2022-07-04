

//objetos
let pessoa = {}
pessoa,
pessoa,


pessoa.nome = " Ankys";
pessoa.sobrenome = "Serrano"
pessoa.idade = "40";

pessoa.nome = " Ruvi";
pessoa.sobrenome = "Piter";
pessoa.idade = "07";

console. table(pessoa);



let myObject = {
pessoa:'1',
pessoa:'2',

}
console.table(myObject);


let myNewObject = { 
color: 'blanco',
cabelho: 'longo',
}

console.log(myNewObject);

myNewObject = 'color:blanco, cabelho:longo';


console.log(myNewObject);



let idade1 = prompt('Escreva a idade do usuario 1');
    let idade2 = prompt('Escreva a idade do usuario 2');
if(idade1 > idade2){
alert(`Olá Ankys a sua ideade é ${idade1}`);
}else{
alert('Olá Ruvi a sua idade é = idade2');
} if ('idade1 > idade2'){
alert("A idade1 é mais velho que a idade2")
}else


//Funcoes




function nomeCompleto(nome,sobrenome){;
    let nomeCompleto = `${nome} ${sobrenome}`;
    return nomeCompleto;
}

console.log( nomeCompleto ('Ankys',"Serrano"));

function nomeCompleto(nome,sobrenome){;
    let nomeCompleto = `${nome} ${sobrenome}`;
    return nomeCompleto;
}

console.log( nomeCompleto ('Ruvi',"Piter"));


//Arrays

let listaItems = [
    'blusa',
    'calça',
    'saia',
    'sapatos',
    
]
console.log(listaItems.length);
console.log(listaItems[4]);

listaItems.push(prompt("Adicione um novo items"));

for (let a = 0; a < listaItems.length; a++){
    console.log(listaItems[a]);
}

console.log("items")
listaItems.pop();
for (let produto of listaItems){
    console.log('Items');
}























