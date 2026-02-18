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
        questao: "Q 1",
        alternativas: [{alternativa: "alt 1", correto: true}, {alternativa: "alt 2", correto: false}, {alternativa: "alt 3", correto: false}, {alternativa: "alt 4", correto: false}]

    },
    {   
        questao: "Q 2",
        alternativas: [{alternativa: "alt 1", correto: false}, {alternativa: "alt 2", correto: false}, {alternativa: "alt 3", correto: true}, {alternativa: "alt 4", correto: false}]

    },
    {
        questao: "Q 3",
        alternativas: [{alternativa: "alt 1", correto: false}, {alternativa: "alt 2", correto: false}, {alternativa: "alt 3", correto: false}, {alternativa: "alt 4", correto: true}]
    },
    {
        questao: "Q 4",
        alternativas: [{alternativa: "alt 1", correto: false}, {alternativa: "alt 2", correto: true}, {alternativa: "alt 3", correto: false}, {alternativa: "alt 4", correto: false}]
    },
    {
        questao: "Q 5",
        alternativas: [{alternativa: "alt 1", correto: true}, {alternativa: "alt 2", correto: false}, {alternativa: "alt 3", correto: false}, {alternativa: "alt 4", correto: false}]
    },
    {
        questao: "Q 6",
        alternativas: [{alternativa: "alt 1", correto: true}, {alternativa: "alt 2", correto: false}, {alternativa: "alt 3", correto: false}, {alternativa: "alt 4", correto: false}]
    },
    {
        questao: "Q 7",
        alternativas: [{alternativa: "alt 1", correto: false}, {alternativa: "alt 2", correto: false}, {alternativa: "alt 3", correto: false}, {alternativa: "alt 4", correto: true}]
    },
    {
        questao: "Q 8",
        alternativas: [{alternativa: "alt 1", correto: false}, {alternativa: "alt 2", correto: true}, {alternativa: "alt 3", correto: false}, {alternativa: "alt 4", correto: false}]
    },
    {
        questao: "Q 9",
        alternativas: [{alternativa: "alt 1", correto: true}, {alternativa: "alt 2", correto: false}, {alternativa: "alt 3", correto: false}, {alternativa: "alt 4", correto: false}]
    },
    {
        questao: "Q 10",
        alternativas: [{alternativa: "alt 1", correto: true}, {alternativa: "alt 2", correto: false}, {alternativa: "alt 3", correto: false}, {alternativa: "alt 4", correto: false}]
    }


];

window.onload = function(){

    this.document.getElementById('recomecar').style.display = 'none'

    this.document.getElementById('mascote1').style.display = 'none'

    this.document.getElementById('mascote2').style.display = 'none'

    this.document.getElementById('mascote3').style.display = 'none'

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
            document.getElementById('mascote1').style.display = 'block'

            questao.innerText = "Parabéns! Você acertou " + pontos + "/" + perguntas.length;

        } else if(pontos == 5){
            document.getElementById('mascote2').style.display = 'block'

            questao.innerText = "Eba! Você acertou " + pontos + "/" + perguntas.length;
        } else {
            document.getElementById('mascote3').style.display = 'block'

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