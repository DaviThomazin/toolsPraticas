function dataAtual() {
  let hoje = new Date();
  let dd = String(hoje.getUTCDate()).padStart(2, "0");
  let mm = String(hoje.getUTCMonth() + 1).padStart(2, "0");
  let aa = hoje.getUTCFullYear();

  hoje = dd + "/" + mm + "/" + aa;

  const dataAgora = document.getElementById("data");
  dataAgora.innerHTML = hoje;
}
dataAtual();

function relogio() {
  let data = new Date();
  let hr = String(data.getHours()).padStart(2, "0");
  let min = String(data.getMinutes()).padStart(2, "0");
  let s = String(data.getSeconds()).padStart(2, "0");

  const totalTempo = hr + ":" + min + ":" + s;
  const tempo = window.document.getElementById("relogio");
  tempo.innerHTML = totalTempo;
}
setInterval(relogio);
relogio();

function percentage_1() {
  var percent = document.getElementById("percent").value;

  var num = document.getElementById("num").value;
  document.getElementById("value1").value = (num / 100) * percent;
}

function percentage_2() {
  var num1 = document.getElementById("num1").value;

  var num2 = document.getElementById("num2").value;
  document.getElementById("value2").value = (num1 * 100) / num2 + "%";
}

const calcular = document.querySelector("#calcular");

function imc() {
  const altura = document.querySelector("#altura").value;
  const peso = document.querySelector("#peso").value;
  const resultado = document.querySelector("#resultado");

  if (altura !== "" && peso !== "") {
    const valorImc = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";

    if (valorImc < 18.5) {
      classificacao = "/ abaixo do peso";
    } else if (valorImc < 25) {
      classificacao = "/ peso ideal";
    } else if (valorImc < 30) {
      classificacao = "/ levemente acima do peso";
    } else if (valorImc < 35) {
      classificacao = "/ obesidade grau I";
    } else if (valorImc < 40) {
      classificacao = "/ obesidade grau II";
    } else {
      classificacao = "/ obesidade grau III";
    }
    resultado.textContent = `${valorImc} ${classificacao}`;
  }
}
imc();

calcular.addEventListener("click", imc);

function convertTemp(direction) {
  var fObj = document.convert.ftemp,
    cObj = document.convert.ctemp,
    kObj = document.convert.ktemp;

  if (direction == "ftoc") {
    cObj.value = Math.round((fObj.value - 32) * (5 / 9));
    kObj.value = Math.round((parseInt(cObj.value) + 459.67) * (5 / 9));
  } else if (direction == "ktof") {
    fObj.value = Math.round(parseInt(cObj.value) * (9 / 5) - 459.67);
    cObj.value = Math.round((fObj.value - 32) * (5 / 9));
  } else {
    fObj.value = Math.round(parseInt(cObj.value) * (9 / 5) + 32);
    kObj.value = Math.round(parseInt(cObj.value) + 273);
  }
}

function clearAll() {
  document.convert.ftemp.value = "";
  document.convert.ctemp.value = "";
  document.convert.ktemp.value = "";
}

var hh = 0;
var mm = 0;
var ss = 0;

var tempoCronometro = 1000;
var cron;

function start() {
  cron = setInterval(() => {
    timer();
  }, tempoCronometro);
}

function pause() {
  clearInterval(cron);
}

function stop() {
  clearInterval(cron);

  hh = 0;
  mm = 0;
  ss = 0;

  document.getElementById("counter").innerText = "00:00:00";
}

function timer() {
  ss++;
  if (ss == 60) {
    ss = 0;
    mm++;
    if (mm == 60) {
      mm = 0;
      hh++;
    }
  }

  var format =
    (hh < 10 ? "0" + hh : hh) +
    ":" +
    (mm < 10 ? "0" + mm : mm) +
    ":" +
    (ss < 10 ? "0" + ss : ss);
  document.getElementById("counter").innerText = format;
}

const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

if (botaoAbrir && botaoFechar && containerModal) {
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  botaoAbrir.addEventListener("click", toggleModal);
  botaoFechar.addEventListener("click", toggleModal);
  containerModal.addEventListener("click", cliqueForaModal);
}
