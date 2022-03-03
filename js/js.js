var btnGerarJogo = document.getElementById("geraJogos");
var qntJogos = document.getElementById("qntJogos");
var qntNmr = document.getElementById("qntNmr");
var qntTot = document.getElementById("qntTot");
/* Numeros variaveis */
var totJogos;
var nmr;
var totalNmr;
const arrQntJogos = [];
/* fim */
btnGerarJogo.addEventListener("click", gera);

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("qntJogo").innerHTML = "";
  document.getElementById("qntNmrs").innerHTML = "";
  document.getElementById("qntTotal").innerHTML = "";
  document.getElementById("resultado").innerHTML = "Resultado";
  for (let i = arrQntJogos.length; i > 0; i--) {
    arrQntJogos.pop();
  }
});

function gera() {
  if (
    qntJogos.value.length === 0 ||
    qntNmr.value.length === 0 ||
    qntTot.value.length === 0
  ) {
    alert("Digite os valores");
  } else if (Number(qntNmr.value) > Number(qntTot.value)) {
    alert("Em total de numeros digite um numero maior que a quantidade de numeros por jogo");
  } else {
    document.getElementById("resultado").innerHTML = "";
    geraQntJogos();
    geraQntNmr();
    geraQntNmrTot();
    qntJogos.value = "";
    qntNmr.value = "";
    qntTot.value = "";
    arrQntJogos.forEach(jogo);
    for (let i = arrQntJogos.length; i > 0; i--) {
      arrQntJogos.pop();
    }
  }
}

function geraQntJogos() {
  if (
    qntJogos.value.length <= 0 ||
    isNaN(qntJogos.value) ||
    Number(qntJogos.value) <= 0 ||
    Number(qntJogos.value) > 1000
  ) {
    alert("Digite uma entrada entre 1 e 1000 para quantidade de Jogos");
    qntJogos.value = "";
  } else {
    totJogos = qntJogos.value;
    let plural = totJogos.length > 1 ? "jogos" : "jogo";
    document.getElementById("qntJogo").innerHTML = totJogos + " " + plural;
    //totJogos.forEach(jogo)
  }
  for (let i = 0; i < totJogos; i++) {
    arrQntJogos.push(i);
  }
}

function geraQntNmr() {
  if (
    qntNmr.value.length <= 0 ||
    isNaN(qntNmr.value) ||
    Number(qntNmr.value) === 0
  ) {
    alert("Digite um numero maior que 0 para quantidade de numeros por jogo");
  } else {
    nmr = qntNmr.value;
    let plural = Number(nmr) > 1 ? "numeros" : "numero";
    document.getElementById("qntNmrs").innerHTML = nmr + " " + plural;
    //totJogos.forEach(jogo)
  }
}

function geraQntNmrTot() {
  if (
    qntTot.value.length <= 0 ||
    isNaN(qntTot.value) ||
    Number(qntTot.value) === 0
  ) {
    alert(
      "Digite um numero maior que 0 \ne maior que a quantidade de numeros por jogo"
    );
  } else {
    totalNmr = qntTot.value;
    let plural = Number(totalNmr) > 1 ? "numeros" : "numero";
    document.getElementById("qntTotal").innerHTML = totalNmr + " " + plural;
    //totJogos.forEach(jogo)
  }
}

function jogo() {
  const novo = [];
  const arr = [];
  for (let i = 0; i < totalNmr; i++) {
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
