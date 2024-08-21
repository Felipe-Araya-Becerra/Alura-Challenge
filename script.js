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
  toggleButton()
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
  toggleButton()
}

function copiarTexto() {
  let outputText = document.getElementById("outputText");
  outputText.select();
  outputText.setSelectionRange(0, 99999); 
  document.execCommand("copy");
  alert("Texto copiado!!");
  outputText.value = ""
}

function handlePlaceholderChange(e) {
  const input = document.getElementById('outputText');
  if (e.matches) {
      input.placeholder = "Ningun mensaje fue encontrado";
  }else{
    input.placeholder = ''
  }
}

// Define la media query (por ejemplo, para pantallas de menos de 768px de ancho)
const mediaQuery = window.matchMedia("(max-width: 768px) and (max-height: 1174px)");

// Adjunta la función manejadora al evento de cambio de la media query
mediaQuery.addEventListener('change', handlePlaceholderChange);

// Ejecuta la función al cargar la página para establecer el placeholder correcto
handlePlaceholderChange(mediaQuery);


 // Selecciona el textarea y el botón
 const textarea = document.getElementById('outputText');
 const button = document.getElementById('btnCopiar');

 function toggleButton() {
  if (textarea.value.trim() !== "") {
      button.style.display = 'block'; // Muestra el botón
  } else {
      button.style.display = 'none'; // Oculta el botón
  }
}

 console.log(textarea.value)