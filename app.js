let userText = document.getElementById("user-text");
const outputProcess = [];
let textarea = document.querySelector("#output");
let span = document.querySelector(".text-output span");
let image = document.querySelector(".text-output img");
let button = document.querySelector(".text-output button");
let divoutput = document.querySelector(".text-output");


//Función para encriptar.
function encryptText() {
  outputProcess.length = 0;
  let text = userText.value.toLowerCase();
  let print = document.getElementById("output");
  //Diccionario de cifrado.
  const diccionary = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  //Recorre todo el String letra por letra y asigna a las vocales el encriptado definido en el diccionario.
  let output = text
    .split("")
    .map((letter) => {
      return diccionary[letter] || letter;
    })
    .join("");
  outputProcess.push(output);
  if(text !== ""){
    clearElements();
    print.innerHTML = outputProcess.join("");
    automaticallyAdjustHeight();
  } else {
    loadElements()
  }
}
//Función para desencriptar.
function decryptText() {
  let text = userText.value.toLowerCase();
  let output = text;
    //Diccionario para descifrar.
    const diccionary = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u",
    };
    //Usa las claves del diccinario para reemplazar dentro del String los datos cifrados por las vocales correspondientes.
    Object.keys(diccionary).forEach((clave) => {
      const valor = diccionary[clave];
      const filter = RegExp(clave, "g"); //Expresión regular para reemplazar de forma global.
      output = output.replace(filter, valor);
    }); 
    if(text !== ""){
      clearElements();
      textarea.innerHTML = output;
      automaticallyAdjustHeight();
    } else {
      loadElements();
    }
  }
//Función para copiar el texto en la salida.
function copyText() {
  let textCopy = document.getElementById("output");
  navigator.clipboard.writeText(textCopy.value);
}
//Función para ajustar los elementos que no deben verse.
function clearElements() {
  divoutput.style.justifyContent = "space-between"; 
  textarea.style.display = "flex";
  image.style.display = "none";
  span.style.display = "none";
  button.style.display = "inline-block"
}
// Función para cargar los elementos cuando no hay texto.
function loadElements() {
  divoutput.style.justifyContent = "center";
  textarea.style.display = "none";
  image.style.display = "block";
  span.style.display = "block";
  button.style.display = "none";
}
function automaticallyAdjustHeight() {
  textarea.style.height = 'auto';
  // Ajustar la altura al contenido
  textarea.style.height = `${textarea.scrollHeight}px`;
}