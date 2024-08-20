
function encrypt() {
  let text = document.getElementById("text").value;
  const clear = document.getElementById("text").value = "";
  const response = document.getElementById("response");
  const caracter = /a|e|i|o|u/g;
  const used = /[a-z]/
  if (used.test(text)) {
    const cryptography = (match) => {
      switch (match) {
        case 'a':
          return 'ai';
        case 'e':
          return 'enter';
        case 'i':
          return 'imes';
        case 'o':
          return 'ober';
        case 'u':
          return 'ufat';
        default:
          return match;
      }
    };



    result = text.replace(caracter, cryptography);
    response.innerHTML = result;
    
      createElement();
   
    clear

  } else {
    clear
    alert("Apenas letras minúsculas e sem acento.");
  }

}

function decrypt() {
  let text = document.getElementById("text").value;
  const clear = document.getElementById("text").value = "";
  const response = document.getElementById("response");
  const caracter = /ai|enter|imes|ober|ufat/g;
  const used = /[a-z]/
  if (used.test(text)) {
    const decryptography = (match) => {
      switch (match) {
        case 'ai':
          return 'a';
        case 'enter':
          return 'e';
        case 'imes':
          return 'i';
        case 'ober':
          return 'o';
        case 'ufat':
          return 'u';
        default:
          return match;
      }
    };

    result = text.replace(caracter, decryptography);
    response.innerHTML = result;
   
      createElement();

    clear

  } else {
    clear
    alert("Apenas letras minúsculas e sem acento.");

  }

}

function createElement() {

  const newElemet = document.createElement('input');
  newElemet.classList.add('btn');
  newElemet.value = 'Copiar';
  newElemet.id = 'copiar';
  newElemet.onclick = copiarTexto();
  if (!document.getElementById("copiar")) {
  document.getElementById("area-response").appendChild(newElemet);
  }
}

function copiarTexto() {
  const elemento = document.getElementById('area-response');

  const input = document.createElement('input');

  input.value = elemento.textContent;

  document.body.appendChild(input);

  input.select();

  document.execCommand('copy');

  document.body.removeChild(input);

}