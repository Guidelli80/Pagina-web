const texto = document.getElementById("texto");
const botao = document.getElementById("botao");
const botao2 = document.getElementById("botao2");
const saida = document.getElementById("saida");


botao.addEventListener("click", primeiroBotao);
botao2.addEventListener("click", segundoBotao); 

let nomes = ["Julio", "Carla", "Daniel", "Elaine", "Rogerio"]


function primeiroBotao(){
    let aleat = 4*Math.random();
    aleat = Math.round(aleat);

    let aleat2 = 4*Math.random();
    aleat2 = Math.round(aleat2);

    saida.textContent = nomes[aleat];
    texto.value = nomes[aleat2];

}

function segundoBotao(){
   

}


