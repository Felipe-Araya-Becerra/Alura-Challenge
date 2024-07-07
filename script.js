function encriptarTexto() {
    const llaves = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    let inputText = document.getElementById("inputText").value;
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        let letra = inputText[i];
        outputText += llaves[letra] ? llaves[letra] : letra;
    }

    document.getElementById("outputText").value = outputText;
}

function desencriptarTexto() {
    const llaves = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    let inputText = document.getElementById("inputText").value;
    let outputText = inputText;

    for (let key in llaves) {
        let regex = new RegExp(key, "g");
        outputText = outputText.replace(regex, llaves[key]);
    }

    document.getElementById("outputText").value = outputText;
}
