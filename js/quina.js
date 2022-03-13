document.querySelector(".bg-loto > h2").style.borderColor = "rgb(62 61 137)" //Cor da borda cartão

var btnGerarJogo = document.getElementById("geraJogos");
var btnReset = document.getElementById("reset");
var qntJogos = document.getElementById("qntJogos");
var qntNmrPorJogo = document.getElementById("qntNmr");
var totJogos;
var nmr;
const arrQntJogos = [];
var qntNmrCartela = 80;


//Botao Gerar jogos
btnGerarJogo.addEventListener("click", gera);
function gera() {
  if (
    qntJogos.value.length === 0 ||
    qntNmrPorJogo.value.length === 0
  ) {
    alert("Digite os valores");
  } else if (Number(qntNmrPorJogo.value) > Number(qntNmrCartela.value)) {
    alert("Em total de numeros digite um numero maior que a quantidade de numeros por jogo");
  } else {
    document.getElementById("resultado").innerHTML = "";
    geraQntJogos();
    geraqntNmrPorJogo();
    qntJogos.value = "";
    qntNmrPorJogo.value = "";
    arrQntJogos.forEach(jogo);
    for (let i = arrQntJogos.length; i > 0; i--) {
      arrQntJogos.pop();
    }
  }
}

//Botao resetar
btnReset.addEventListener("click", reset);
function reset() {
  document.getElementById("qntJogo").innerHTML = "";
  document.getElementById("qntNmrs").innerHTML = "";
  document.getElementById("resultado").innerHTML = "Resultado";
  for (let i = arrQntJogos.length; i > 0; i--) {
    arrQntJogos.pop();
  }
};

function geraQntJogos() {
  if (
    qntJogos.value.length <= 0 ||
    isNaN(qntJogos.value) ||
    Number(qntJogos.value) <= 0 ||
    Number(qntJogos.value) > 1000
  ) {
    alert("Digite uma entrada entre 1 e 1000 para quantidade de Jogos");
    qntJogos.value = "";
    reset()
  } else {
    totJogos = qntJogos.value;
    let plural = Number(totJogos) > 1 ? "jogos" : "jogo";
    document.getElementById("qntJogo").innerHTML = totJogos + " " + plural;
    //totJogos.forEach(jogo)
  }
  for (let i = 0; i < totJogos; i++) {
    arrQntJogos.push(i);
  }
}

function geraqntNmrPorJogo() {
  if (
    qntNmrPorJogo.value.length <= 0 ||
    isNaN(qntNmrPorJogo.value) ||
    Number(qntNmrPorJogo.value) < 5 ||
    Number(qntNmrPorJogo.value) > 15 
  ) {
    alert("Digite um numero entre 5 e 15 para quantidade de numeros por jogo");
    reset()
  } else {
    nmr = qntNmrPorJogo.value;
    let plural = Number(nmr) > 1 ? "numeros" : "numero";
    document.getElementById("qntNmrs").innerHTML = nmr + " " + plural;
    //totJogos.forEach(jogo)
  }
}



function jogo() {
  const novo = [];
  const arr = [];
  for (let i = 0; i < qntNmrCartela; i++) {
    arr[i] = i + 1;
  }

  var p, n, tmp;
  for (p = arr.length; p; ) {
    n = (Math.random() * p--) | 0;
    tmp = arr[n];
    arr[n] = arr[p];
    arr[p] = tmp;
  }

  for (var i = 0; i < nmr; i++) {
    novo.push(arr[i]);
  }
  novo.sort(function(a, b){return a - b});
  document.getElementById("resultado").innerHTML += novo.join(" - ") + "&#10;";
}
