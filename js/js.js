var btnGerarQntJogo = document.getElementsByTagName("button")[0];
var btnGerarQntNumJogos = document.getElementsByTagName("button")[1];
var btnGerarNumeroTot = document.getElementsByTagName("button")[2];
var btnGerarJogo = document.getElementsByTagName("button")[3];
var qntJogos = document.getElementById("qntJogos");
var qntNmr = document.getElementById("qntNmr");
var qntTot = document.getElementById("qntTot");
/* Numeros variaveis */
var totJogos;
var nmr;
var totalNmr;
const arrQntJogos = [];
/* fim */
btnGerarQntJogo.addEventListener("click", geraQntJogos);
btnGerarQntNumJogos.addEventListener("click", geraQntNmr);
btnGerarNumeroTot.addEventListener("click", geraQntNmrTot);
btnGerarJogo.addEventListener("click", gera);



function gera() {
  document.getElementById("resultado").innerHTML = "";
  arrQntJogos.forEach(jogo);
  for(let i = arrQntJogos.length; i > 0; i--){
    arrQntJogos.pop()
  }
  document.getElementById("qntJogo").innerHTML = ""
  qntJogos.value = ""
  document.getElementById("qntNmrs").innerHTML = ""
  qntNmr.value = ""
  document.getElementById("qntTotal").innerHTML = ""
  qntTot.value = ""
}


function geraQntJogos() {
  if (
    qntJogos.value.length <= 0 ||
    isNaN(qntJogos.value) ||
    Number(qntJogos.value) <= 0 ||
    Number(qntJogos.value) > 1000
  ) {
    alert("Digite uma entrada entre 1 e 1000");
    qntJogos.value = "";
  } else {
    totJogos = qntJogos.value;
    let plural = totJogos.length > 1 ? "jogos" : "jogo";
    document.getElementById("qntJogo").innerHTML = totJogos + " " + plural;
    qntJogos.value = ""
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
    alert("Digite uma entrada válida");
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
    alert("Digite uma entrada válida");
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
  novo.join(" - ")
  document.getElementById("resultado").innerHTML += novo.join(" - ") + "<br>";
}
