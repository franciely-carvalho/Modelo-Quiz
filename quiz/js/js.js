const questao = document.getElementById('questao');
const alt1 = document.getElementById('a1');
const alt2 = document.getElementById('a2');
const alt3 = document.getElementById('a3');
const alt4 = document.getElementById('a4');
var pontos = 0;
respostaSelecionada = -1;
var cont = 0;


const perguntas = [
    {
        questao: "Durante um temporal, qual a melhor atitude?",
        alternativas: [{alternativa: "Ficar dentro de casa e longe de janelas.", correto: true}, {alternativa: "Abrigar-se debaixo de árvore.", correto: false}, {alternativa: "Sair para filmar a chuva.", correto: false}, {alternativa: "Aproveitar para tomar um banho de chuva.", correto: false}]

    },
    {   
        questao: "Questão 2",
        alternativas: [{alternativa: "Opção 1.2", correto: false}, {alternativa: "Opção 2.2", correto: false}, {alternativa: "Opção 3.2", correto: true}, {alternativa: "Opção 4.2", correto: false}]

    },
    {
        questao: "Questão 3",
        alternativas: [{alternativa: "Opção 1.3", correto: false}, {alternativa: "Opção 2.3", correto: false}, {alternativa: "Opção 3.3", correto: false}, {alternativa: "Opção 4.3", correto: true}]
    },
    {
        questao: "Questão 4",
        alternativas: [{alternativa: "Opção 1.4", correto: false}, {alternativa: "Opção 2.4", correto: true}, {alternativa: "Opção 3.4", correto: false}, {alternativa: "Opção 4.4", correto: false}]
    },
    {
        questao: "Questão 5",
        alternativas: [{alternativa: "Opção 1.5", correto: true}, {alternativa: "Opção 2.5", correto: false}, {alternativa: "Opção 3.5", correto: false}, {alternativa: "Opção 4.5", correto: false}]
    },
    {
        questao: "Questão 6",
        alternativas: [{alternativa: "Opção 1.6", correto: true}, {alternativa: "Opção 2.6", correto: false}, {alternativa: "Opção 3.6", correto: false}, {alternativa: "Opção 4.6", correto: false}]
    },
    {
        questao: "Questão 7",
        alternativas: [{alternativa: "Opção 1.7", correto: false}, {alternativa: "Opção 2.7", correto: false}, {alternativa: "Opção 3.7", correto: false}, {alternativa: "Opção 4.7", correto: true}]
    },
    {
        questao: "Questão 8",
        alternativas: [{alternativa: "Opção 1.8", correto: false}, {alternativa: "Opção 2.8", correto: true}, {alternativa: "Opção 3.8", correto: false}, {alternativa: "Opção 4.8", correto: false}]
    },
    {
        questao: "Questão 9",
        alternativas: [{alternativa: "Opção 1.9", correto: true}, {alternativa: "Opção 2.9", correto: false}, {alternativa: "Opção 3.9", correto: false}, {alternativa: "Opção 4.9", correto: false}]
    },
    {
        questao: "Questão 10",
        alternativas: [{alternativa: "Opção 1.10", correto: true}, {alternativa: "Opção 2.10", correto: false}, {alternativa: "Opção 3.10", correto: false}, {alternativa: "Opção 4.10", correto: false}]
    }


];

window.onload = function(){

    this.document.getElementById('recomecar').style.display = 'none'

    this.document.getElementById('amora1').style.display = 'none'

    this.document.getElementById('amora2').style.display = 'none'

    this.document.getElementById('amora3').style.display = 'none'

    document.getElementById("verificar").disabled = true;

    const enviar = document.getElementById('btn');

    enviar.style.display = 'none'

    questao.innerText = perguntas[cont].questao

    alt1.innerText = perguntas[cont].alternativas[0].alternativa;

    alt2.innerText = perguntas[cont].alternativas[1].alternativa;

    alt3.innerText = perguntas[cont].alternativas[2].alternativa;

    alt4.innerText = perguntas[cont].alternativas[3].alternativa;

    cont++;
}



function enviar(){
    var pos = 0;

    document.getElementById("verificar").disabled = true;

    const elementos = document.querySelectorAll('.botao');
    
    elementos.forEach(btn => btn.disabled = false);

    const botoes = document.querySelectorAll('.botao');
    
    botoes.forEach(btn => {btn.classList.remove("botaoCerto", "botaoErrado", "botaoSelecionado");  
    });

    if(cont >= perguntas.length){
        questao.style.fontSize = '2em'
        questao.style.marginTop = '15px'
        questao.style.fontWeight = 'bold'

        document.getElementById('alternat').style.display = 'none'

        document.getElementById('verificar').style.display = 'none'
        
        document.getElementById('btn').style.display = 'none'

        document.getElementById('recomecar').style.display = 'block'


        if(pontos >= 6){
            document.getElementById('amora1').style.display = 'block'

            questao.innerText = "Parabéns! Você acertou " + pontos + "/" + perguntas.length;

        } else if(pontos == 5){
            document.getElementById('amora2').style.display = 'block'

            questao.innerText = "Eba! Você acertou " + pontos + "/" + perguntas.length;
        } else {
            document.getElementById('amora3').style.display = 'block'

            questao.innerText = "Que pena! Você acertou " + pontos + "/" + perguntas.length;
        }

        return;

    }
    
    questao.innerText = perguntas[cont].questao;

    alt1.innerText = perguntas[cont].alternativas[pos].alternativa;
    pos++;

    alt2.innerText = perguntas[cont].alternativas[pos].alternativa;
    pos++;

    alt3.innerText = perguntas[cont].alternativas[pos].alternativa;
    pos++;

    alt4.innerText = perguntas[cont].alternativas[pos].alternativa;

    cont++;

    const enviar = document.getElementById('btn');

    enviar.style.display = 'none'


}

function selecionarOpcao(indice){
    document.getElementById("verificar").disabled = false;

    respostaSelecionada = indice;
    const todosBotoes = document.querySelectorAll('.botao');

    todosBotoes.forEach(btn => {btn.classList.remove("botaoSelecionado")});

    todosBotoes[indice].classList.add("botaoSelecionado");

    console.log("Você escolheu a opção de indice: " + indice);




}


function verificar(){
    const enviar = document.getElementById('btn');

    enviar.style.display = 'block'

    if(respostaSelecionada !== -1){       

        var perguntaAtual = perguntas[cont - 1]
        const botoes = document.querySelectorAll('.botao')

        if(perguntaAtual.alternativas[respostaSelecionada].correto === true){

            botoes[respostaSelecionada].classList.add("botaoCerto");
            pontos++;
            

        } else{
            botoes[respostaSelecionada].classList.add("botaoErrado");

            perguntaAtual.alternativas.forEach((alt, indice) => {
                if(alt.correto){
                    botoes[indice].classList.add("botaoCerto")
            }

            })

        }

        respostaSelecionada = -1;

    }

    document.getElementById("verificar").disabled = true;

    const elementos = document.querySelectorAll('.botao');

    elementos.forEach(btn => btn.disabled = true);


}