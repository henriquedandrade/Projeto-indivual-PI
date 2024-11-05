function validacao_senha(){
    var senha = ipt_password.value;
    var tamanho = senha.length;
    var validos = "!@#$%&?";
    var esp = false;
    var num = false;
    var min = false;
    var max = false;

    // Valida tamanho
    var icone_qtd = document.getElementById("valid_qtd");
    if (tamanho < 8 || tamanho > 16) {
        icone_qtd.style.backgroundColor = 'black';
    } else {
        icone_qtd.style.backgroundColor = '#35bd40';
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
    if (!esp){
        icone_caractere.style.backgroundColor = 'black';
    } else {
        icone_caractere.style.backgroundColor = '#35bd40';
    }

    //valida se tem Minuscula e Maiuscula
    var icone_MaiMinus = document.getElementById("valid_MaiMinus");
    if (min && max)  {
        icone_MaiMinus.style.backgroundColor = '#35bd40';
    } else {
        icone_MaiMinus.style.backgroundColor = 'black';
    }
}