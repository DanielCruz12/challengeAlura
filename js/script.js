var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".img-munieco");
var h3 = document.querySelector(".contenedor-alerta");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;

function encriptar() {
  ocultarAdelante();
  var area = recuperarTexto();
  resultado.textContent = encriptarTexto(area);
}

function recuperarTexto() {
  var area = document.querySelector(".area");
  return area.value;
}

function ocultarAdelante() {
  munieco.classList.add("ocultar");
  h3.classList.add("ocultar");
  parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    }
    else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    }
    else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    }
    else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    }
    else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}
