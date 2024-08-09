let userText = document.getElementById("user-text");
const outputProcess = [];
console.log("escritura del usuario = " + userText);

function encriptarTexto() {
  let text = userText.value;
  console.log("escritura del usaurio = " + text);
  let print = document.getElementById("output");
  print.innerHTML = text;

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
    
    console.log(outputProcess)
    i++;
  }
  print.innerHTML = outputProcess.join("");
  console.log(outputProcess.join(""));
}
