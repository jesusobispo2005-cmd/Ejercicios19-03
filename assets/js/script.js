const nombre = document.getElementById("nombre");
let MostrarTexto = document.getElementById("Mostrartexto");

nombre.addEventListener("input", () => {
    MostrarTexto.textContent = "Hola " + nombre.value + " bienvenido al código";
});


const edad = document.getElementById("edad");
let MostraredadCanina= document.getElementById("MostraredadCanina");

edad.addEventListener("input", ()=>{
    MostraredadCanina.textContent = "Tu edad en años perrunos es: " + [edad.value * 7];
})

const nombre2 = document.getElementById("nombre2");
const apellido = document.getElementById("apellido");
let MostrarNombre = document.getElementById("MostrarNombre");
const btnEnviar = document.getElementById("BtnEnviar");

btnEnviar.addEventListener("click", () => {
    let nombre = nombre2.value.toUpperCase();
    let ape = apellido.value.toUpperCase();

    MostrarNombre.textContent = nombre + " " + ape;
});

const btnSumar = document.getElementById("btnSumar");
const num = document.getElementById("num");

btnSumar.addEventListener("click", () => {
    let valorActual = Number(num.innerText); 
    valorActual++;                          
    num.innerText = valorActual;           
});

const btnIva= document.getElementById("btnIva");
const iva=document.getElementById("iva");
const total=document.getElementById("total");

btnIva.addEventListener("click", () => {
  const v = +p.value;
  iva.textContent = v * 0.21;
  total.textContent = v + v * 0.21;
});

const tipoDeCambio = 0.92;

function convertir() {
  let usd = document.getElementById("dolares").value;
  let resultado = usd * tipoDeCambio;
  document.getElementById("resultado").innerText = resultado + " €";
}

function cambiar() {
  let texto = document.getElementById("estado");

  if (texto.innerText === "ENCENDIDO") {
    texto.innerText = "APAGADO";
  } else {
    texto.innerText = "ENCENDIDO";
  }
}

function validar() {
  let input = document.getElementById("campo");

  if (input.value === "") {
    input.style.backgroundColor = "red";
  } else {
    input.style.backgroundColor = "green";
  }
}

let tamaño = 20;

function agrandar() {
  tamaño = tamaño + 5;
  document.getElementById("texto").style.fontSize = tamaño + "px";
}

function mezclar() {
  let r = document.getElementById("r").value;
  let g = document.getElementById("g").value;
  let b = document.getElementById("b").value;

  let color = "rgb(" + r + "," + g + "," + b + ")";
  
  document.getElementById("caja").style.backgroundColor = color;
}

