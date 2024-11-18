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

  if (arroba && dot ) {
    validacao_emaill = true;
  } else{
    validacao_emaill = false;
  }
  console.log(`validacao: ${validacao_emaill}`)
}

function verificar_qtd(validar){
  if( validar == 1){
    var assunto = ipt_assunto_noticia.value;
    var div_qtd = document.getElementById('verificar_qtd_assunto');
    var quantidade = assunto.length;

    if( quantidade <= 75){
      div_qtd.innerHTML = `${quantidade}/75`;
    }
  } else{
    var assunto = ipt_texto_noticia .value;
    var div_qtd = document.getElementById('verificar_qtd_texto');
    var quantidade = assunto.length;

    if( quantidade <= 500){
      div_qtd.innerHTML = `${quantidade}/500`;
    }
  }  
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

  if (erro == "Email Pequeno"){
    div.innerHTML = `<span>Email inválido</span>`
  }

  if( erro == "User Grande"){
    div.innerHTML = `<span>O nome e sobrenome não pode<br>ser maior que 45 caracteres</span>`

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

function ObterDateTime(){
  const data = new Date();

  const ano = data.getFullYear();
  const mes = (data.getMonth() + 1).toString().padStart(2, '0'); 
  const dia = data.getDate().toString().padStart(2, '0'); 

  // Formando a data no formato YYYY-MM-DD
  const dataFormatada = `${ano}-${mes}-${dia}`;

  // Extraindo a hora, minuto e segundo
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  const segundo = data.getSeconds().toString().padStart(2, '0');

  const horaFormatada = `${hora}:${minuto}:${segundo}`;

  const Datetime_sql = `${dataFormatada} ${horaFormatada}`;

  console.log(Datetime_sql);

  return Datetime_sql
}

function verificarBandeira(id , x){
    var nacionalidade = id.value;
    var bandeira = document.getElementById('ipt_bandeira');  
  
    bandeira.style.backgroundImage = `url('../assets/flags/${nacionalidade}.png')`;
    bandeira.style.backgroundSize = "cover";
    bandeira.style.width = "20%";
  
}

function calcularIdade(dataNascimento) {
  var nascimento = new Date(dataNascimento);
  var hoje = new Date();

  // Calcular a diferença de anos
  var idade = hoje.getFullYear() - nascimento.getFullYear();

  // Ajustar a idade se a data de nascimento ainda não ocorreu neste ano
  var mesNascimento = nascimento.getMonth();
  var mesAtual = hoje.getMonth();

  var diaNascimento = nascimento.getDate();
  var diaAtual = hoje.getDate();

  if (mesAtual < mesNascimento || (mesAtual == mesNascimento && diaAtual < diaNascimento)) {
      idade--;
  }

  return idade;
}


function ValidarSessao(){
  var id = sessionStorage.ID_USUARIO;
  var btnLogin = document.getElementById('button_login')
  var btnSair = document.getElementById('button_sair')
  var btnSistema = document.getElementById('button_sistema')

  if(id == undefined){
    console.log("Não logado")
   btnLogin.style.display='flex';
   btnSair.style.display='none';
   btnSistema.style.display='none';
  }else{
    console.log("Logado")
    btnLogin.style.display='none';
    btnSair.style.display=  'flex';
    btnSistema.style.display = 'flex';
  }
}

function limparSessao() {
  var btnSair = document.getElementById('button_sair');
  btnSair.innerHTML = `Saindo`;

  sessionStorage.clear();
  
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}