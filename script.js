function encriptarTexto() {
  const llaves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  let inputText = document.getElementById("inputText").value.toLowerCase();
  let outputText = "";

  for (let i = 0; i < inputText.length; i++) {
    let letra = inputText[i];
    outputText += llaves[letra] ? llaves[letra] : letra;
  }

  document.getElementById("outputText").value = outputText;
}

function desencriptarTexto() {
  const llaves = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  let inputText = document.getElementById("inputText").value.toLowerCase();
  let outputText = inputText;

  for (let key in llaves) {
    let regex = new RegExp(key, "g");
    outputText = outputText.replace(regex, llaves[key]);
  }

  document.getElementById("outputText").value = outputText;
}

function copiarTexto() {
  let outputText = document.getElementById("outputText");
  outputText.select();
  outputText.setSelectionRange(0, 9999);
  document.execCommand("copy");
  alert("Texto copiado: " + outputText.value);
}
