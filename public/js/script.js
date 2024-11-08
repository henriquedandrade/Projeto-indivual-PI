var validacao_senhaa = false;
function validacao_senha() {
  var div = document.getElementById("validacoes");

  div.innerHTML = `<div class="texto_cadastro" id="box_cadastro">
               <span>Senha deve conter:</span>
               <div class="check">
                 <div class="icone-validação" id="valid_MaiMinus"></div><span>Letra maiúscula e minúscula</span>
               </div>
               <div class="check">
                 <div class="icone-validação" id="valid_caractere"></div><span>Caractere especial como: @, #, %, & ou
                   $</span>
               </div>
               <div class="check">
                 <div class="icone-validação" id="valid_numero"></div><span>Número</span>
               </div>
               <div class="check">
                 <div class="icone-validação" id="valid_qtd"></div><span>De 8 a 16 caracteres</span>
               </div>
             </div>`;

  var senha = ipt_password.value;
  var tamanho = senha.length;
  var validos = "!@#$%&?";
  var esp = false;
  var num = false;
  var min = false;
  var max = false;
  var tam = false;

  // Valida tamanho
  var icone_qtd = document.getElementById("valid_qtd");
  if (tamanho < 8 || tamanho > 16) {
    icone_qtd.style.backgroundColor = 'black';
  } else {
    icone_qtd.style.backgroundColor = '#35bd40';
    tam = true;
  }

  // Valida caracteres especiais, numeros, Maiuscula e minuscula
  for (var i = 0; i < tamanho; i++) {
    for (var j = 0; j < validos.length; j++) {
      if (senha[i] == validos[j]) {
        esp = true;
      }
      if (!isNaN(senha[i])) {
        num = true;
      }
    }
    if (senha[i].toUpperCase() != senha[i]) {
      min = true;
    }
    if (senha[i].toLowerCase() != senha[i]) {
      max = true;
    }
  }

  // Valida se tem número
  var icone_numero = document.getElementById("valid_numero");
  if (!num) {
    icone_numero.style.backgroundColor = 'black';
  } else {
    icone_numero.style.backgroundColor = '#35bd40';
  }

  // Valida se tem caractere especial
  var icone_caractere = document.getElementById("valid_caractere");
  if (!esp) {
    icone_caractere.style.backgroundColor = 'black';
  } else {
    icone_caractere.style.backgroundColor = '#35bd40';
  }

  //valida se tem Minuscula e Maiuscula
  var icone_MaiMinus = document.getElementById("valid_MaiMinus");
  if (min && max) {
    icone_MaiMinus.style.backgroundColor = '#35bd40';
  } else {
    icone_MaiMinus.style.backgroundColor = 'black';
  }

  if (min && max && esp && num && min && max && tam && esp) {
    console.log('Passei aq')
    validacao_senhaa = true;
  }
}

var validacao_emaill = false
function validacao_email() {
  var div = document.getElementById("validacoes");

    div.innerHTML = `<div class="texto_cadastro" id="box_cadastro">
               <span>O email deve cumprir com os requisitos:</span>
               <div class="check">
                 <div class="icone-validação" id="valid_arroba"></div><span>Caractere: @</span>
               </div>
               <div class="check">
                 <div class="icone-validação" id="valid_dot"></div><span>Caractere: .</span>
               </div>               
             </div>`;

  var email = ipt_email.value
  var arroba = email.includes("@");
  var dot = email.includes(".");

  console.log(arroba);
  console.log(dot);

  var icone_arroba = document.getElementById("valid_arroba");
  if (arroba) {
    icone_arroba.style.backgroundColor = '#35bd40';
  } else {
    icone_arroba.style.backgroundColor = 'black';
  }
  var icone_dot = document.getElementById("valid_dot");
  if (dot) {
    icone_dot.style.backgroundColor = '#35bd40';
  } else {
    icone_dot.style.backgroundColor = 'black';
  }


  if (arroba && dot) {
    validacao_emaill = true;
  } else{
    validacao_emaill = false;
  }
  console.log(`validacao: ${validacao_emaill}`)
}


function erros(erro) {
  var div = document.getElementById("validacoes");

  if (erro == "Algum não preenchido") {
    div.innerHTML = `<span>Preencha todos os campos</span>`

  }
  if (erro == "Senhas Diferentes") {
    div.innerHTML = `<span>As senhas devem ser iguais</span>`
  }

  if (erro == "Cumprir requisitos") {
    div.innerHTML = `<span>A senha deve cumprir com os requisitos</span>`
  }

  if (erro == "Cumprir requisitos email") {
    div.innerHTML = `<span>O email deve cumprir com os requisitos</span>`
    
  }
}

function etapas(texto) {
  var div = document.getElementById("validacoes");

  if (texto == "Cadastrado") {
    div.innerHTML = `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
                       <span>Cadastrado com sucesso!</span>
                     </div>`
  }
}
