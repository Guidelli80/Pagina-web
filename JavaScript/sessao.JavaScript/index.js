const nome = "Julio" ;
const sobrenome = "Guidelli"; 
const idade = 25;
const peso = 68;
const alturaEmCm = 1.72;
let anoDeNascimento = 2023 - idade;
//IMC
let imc = peso / (alturaEmCm * alturaEmCm)
console.log(` ${nome} ${sobrenome} tem ${idade} anos pesa ${peso} KG tem ${alturaEmCm} De altura e seu imc é de ${imc}  `);
console.log(`${nome} ${sobrenome} Nasceu no ano de ${anoDeNascimento}`);

// " ${} " Serve para adicionar a variavel a uma frase de outra forma...