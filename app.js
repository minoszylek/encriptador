let userText = document.getElementById("user-text");
let outputProcess = [];
/*
//Recibe el texto del usuario y lo encripta.
function encryptText() {
  outputProcess = [];
  let text = userText.value.toLowerCase();
  console.log("escritura del usaurio = " + text);
  let print = document.getElementById("output");
  // Evalua si el texto contiene las vocales y las reemplaza por su llave correspondiente.
  let i = 0;
  while (i < text.length) {
    switch (text[i]) {
      case "a":
        outputProcess.push("ai");
        break;
      case "e":
        outputProcess.push("enter");
        break;
      case "i":
        outputProcess.push("imes");
        break;
      case "o":
        outputProcess.push("ober");
        break;
      case "u":
        outputProcess.push("ufat");
        break;
      default:
        outputProcess.push(text[i]);
    }

    console.log(outputProcess);
    i++;
  }
  print.innerHTML = outputProcess.join("");
  console.log(outputProcess.join(""));
}
*/

function encryptText() {
  outputProcess = [];
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
  print.innerHTML = outputProcess.join("");
}

function decryptText() {
  let text = userText.value.toLowerCase();
  let print = document.getElementById("output");
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
  print.innerHTML = output;
}

function copyText() {
  let textCopy = document.getElementById("output")
  navigator.clipboard.writeText(textCopy.value)
}