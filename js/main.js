
   //INICIO SCROLL
jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
      event.preventDefault();
      $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 2000);
    });
  });
$(document).ready(function(){
 
        $('.scroll').hide();
        $(document).scroll(function(){
            if($(document).scrollTop()>220){
                $('.scroll').show();
            }else if ($(document).scrollTop()==0){
                $('.scroll').hide();
            }
        });
    //FIM SCROLL
    document.getElementById("enviar").disabled = true;
    document.getElementById("proximo0").disabled = true;
    document.getElementById("proximo1").disabled = true;
    document.getElementById("proximo2").disabled = true;
    document.getElementById("proximo3").disabled = true;
    document.getElementById("proximo4").disabled = true;
    document.getElementById("proximo5").disabled = true;
    document.getElementById("proximo6").disabled = true;
    document.getElementById("proximo7").disabled = true;
    document.getElementById("proximo8").disabled = true;
    $('#enviar').hide();
    $('.pessoaFisica').hide();
    $('.pessoaJuridica').hide();
    $('.tipoColeta').hide();
    $('.dia').hide();
    $('.horarioColeta').hide();
    $('.horarioColetaSabado').hide();
    $('.invalido').hide();
    $('.agradecimento').hide();
    $(".progressbar").hide();
    $('.cpfDiv').hide();
    $('.cnpjDiv').hide();
    $('.tel1Div').hide();
    $('.tel2Div').hide();
    $('.cep1Div').hide();
    $('.cep2Div').hide();
    $('#botaoSeguir').hide();
    $('#botaoSeguir2').hide();
    $('.enderecoDiv').hide();
//MASKS INPUT
    $("#cep").mask("00000-000");
    $("#cep2").mask("00000-000");
    $("#telefone").mask("(00) 00000-0000")
    $("#telefone2").mask("(00) 00000-0000")
    $('#cnpjInput').mask('00.0000.000/0000-00', {reverse: true});
    $('#cpf').mask('000.000.000-00', {reverse: true});
//FIM MAKS INPUT

//VALIDA TIPO PESSOA AJUSTAR
    $('.tipoPessoa').click(function(){
        if($('.tipoPessoa').val()!='nulo'){
            if($('.tipoPessoa').val()=='f'){
            $('#proximo1').show();
            $('.pessoaFisica').show();
            $('.pessoaJuridica').hide();
            $('.tipoColeta').hide();
            $('.dia').hide();
            $('.horarioColeta').hide();
            $('.horarioColetaSabado').hide();
            $('.invalido').hide();
            $('.final').hide();
            $('.agradecimento').hide();

        }else if($('.tipoPessoa').val()=='j'){
            $('#proximo2').show();
            $('.pessoaJuridica').show();
            $('.pessoaFisica').hide();
            $('.tipoColeta').hide();
            $('.dia').hide();
            $('.horarioColeta').hide();
            $('.horarioColetaSabado').hide();
            $('.invalido').hide();
            $('.final').hide();
            $('.agradecimento').hide();
        }
        }else{
            $('.pessoaJuridica').hide();
            $('.pessoaFisica').hide();
        }
    });
//FIM VALIDA TIPO PESSOA
//FUNÇÕES DE BOTÃO PARA SEQUÊNCIA DE FORMULÁRIO
        $('#proximo0').click(function(){
            $('.cpfDiv').show();
            $('#proximo0').hide();
        })
        $('#proximo1').click(function(){
            $('.tel1Div').show();
            $('#proximo1').hide();
        })
        $('#proximo2').click(function(){
            $('.cep1Div').show();
            $('#proximo2').hide();
        })
        $('#proximo3').click(function(){  
            $('#botaoSeguir').show();
            $('#proximo3').hide();
        })
        $('#proximo4').click(function(){
            $('.cnpjDiv').show();
            $('#proximo4').hide();
        })
        $('#proximo5').click(function(){
            $('.tel2Div').show();
            $('#proximo5').hide();
        })
        $('#proximo6').click(function(){
            $('.cep2Div').show();
            $('#proximo6').hide();
        })
        $('#proximo7').click(function(){  
            $('#botaoSeguir2').show();
            $('#proximo7').hide();
        })
        $('#botaoSeguir').click(function(){  
            $('#botaoSeguir').hide();
            $('.pessoaFisica').hide();
            $('.pessoaFeJ').hide();
            $('.cpfDiv').hide();
            $('.tel1Div').hide();
            $('.cep1Div').hide();
            $('.tipoColeta').show();
        })
        $('#botaoSeguir2').click(function(){  
            $('#botaoSeguir').hide();
            $('.pessoaJuridica').hide();
            $('.pessoaFeJ').hide();
            $('.cnpjDiv').hide();
            $('.tel2Div').hide();
            $('.cep2Div').hide();
            $('.tipoColeta').show();
        })
        
        $('#proximo8').click(function(){
            $('#proximo8').hide();
            $('.dia').show();
            $('#enviar').show();
        });
      
//FIM FUNÇÕES DE BOTÃO PARA SEQUÊNCIA DE FORMULÁRIO
//VALIDA NOME E RAZÃO SOCIAL
    $('#nome').keyup(function(){
        var nome = $(this).val();
        if(nome.length < 5){
            document.getElementById("proximo0").disabled = true;
            $(this).css({'border':'solid 1px red'});
            $('.invalido').show();
            $('.tipoColeta').hide();
        }else{
            $(this).css({'border':'solid 1px green'});
            document.getElementById("proximo0").disabled = false;
            $('.invalido').hide();
        }
    });
    $('#nome2').keyup(function(){
        var nome = $(this).val();
        if(nome.length < 5){
            document.getElementById("proximo4").disabled = true;
            $(this).css({'border':'solid 1px red'});
            $('.invalido').show();
            $('.tipoColeta').hide();
        }else{
            $(this).css({'border':'solid 1px green'});
            document.getElementById("proximo4").disabled = false;
            $('.invalido').hide();
        }
    });
    //FIM VALIDA NOME E RAZÃO SOCIAL


//VALIDA CNPJ
    $('#cnpjInput').keyup(function(){
        var cnpj = $('#cnpjInput').val();
        cnpj = cnpj.replace(/[^\d]+/g,'');
        if (cnpj == ''){
            $('.invalido').show();
            $('#cnpjInput').css({'border':'solid 1px red'});
            document.getElementById("proximo5").disabled = true;
            return false;  
        }
        else if(cnpj.length != 14){
            $('.invalido').show();
            $('#cnpjInput').css({'border':'solid 1px red'});
            document.getElementById("proximo5").disabled = true;
            return false;
        }// Elimina CNPJs invalidos conhecidos
        else if (cnpj == "00000000000000" || // Elimina CNPJs invalidos conhecidos
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999"){
            $('.invalido').show();
            $('#cnpjInput').css({'border':'solid 1px red'});
            document.getElementById("proximo5").disabled = true;
            return false;
        }
        tamanho = cnpj.length - 2;
        numeros = cnpj.substring(0,tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)){
            $('.invalido').show();
            $('#cnpjInput').css({'border':'solid 1px red'});
            document.getElementById("proximo5").disabled = true;
            return false;
        }
        console.log(resultado)
        console.log(digitos.charAt(0))
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2){
                pos = 9;
            }
          }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        console.log(resultado)
        console.log(digitos.charAt(1))
        if (resultado != digitos.charAt(1)){
            $('.invalido').show();
            $('#cnpjInput').css({'border':'solid 1px red'});
            document.getElementById("proximo5").disabled = true;
            return false;
        }
        $('.invalido').hide();
        $('#cnpjInput').css({'border':'solid 1px green'});
        document.getElementById("proximo5").disabled = false;
        return true;
    });
//FIM VALIDA CNPJ


//VALIDA CPF
    $('#cpf').keyup(function(){
        strCpf = $('#cpf').val();
        strCpf = strCpf.replace(/[^\d]+/g,'');
        var soma = 0;
        var resto;
        if (strCpf == "00000000000" || strCpf.length != 11) {
            $('.invalido').show();
            $('#cpf').css({'border':'solid 1px red'});
            document.getElementById("proximo1").disabled = true;
            return false;
        }
        for (i = 1; i <= 9; i++) {
            soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
        }
        resto = soma % 11;
        if (resto == 10 || resto == 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        if (resto != parseInt(strCpf.substring(9, 10))) {
            $('.invalido').show();
            $('#cpf').css({'border':'solid 1px red'});
            document.getElementById("proximo1").disabled = true;
            return false;
        }
        soma = 0;   
        for (i = 1; i <= 10; i++) {
            soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
        }
        resto = soma % 11;
        if (resto == 10 || resto == 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        if (resto != parseInt(strCpf.substring(10, 11))) {
            $('.invalido').show();
            $('#cpf').css({'border':'solid 1px red'});
            document.getElementById("proximo1").disabled = true;
            return false;
        }
        document.getElementById("proximo1").disabled = false;
        $('.invalido').hide();
        $('#cpf').css({'border':'solid 1px green'});
        return true;
    });
//FIM VALIDA CPF


//VALIDAÇÃO TELEFONE
$('#telefone').keyup(function(){
    var tel = $(this).val();
    tel = tel.replace(/[^\d]+/g,'');
    if (tel.length != 11){
        $('.invalido').show();
        $(this).css({'border':'solid 1px red'});
        document.getElementById("proximo2").disabled = true;
    }else{
        $('.invalido').hide();
        document.getElementById("proximo2").disabled = false;
        $(this).css({'border':'solid 1px green'});
    }
});
$('#telefone2').keyup(function(){
    var tel = $(this).val();
    tel = tel.replace(/[^\d]+/g,'');
    if (tel.length != 11){
        $('.invalido').show();
        $(this).css({'border':'solid 1px red'});
        document.getElementById("proximo6").disabled = true;
    }else{
        $('.invalido').hide();
        document.getElementById("proximo6").disabled = false;
        $(this).css({'border':'solid 1px green'});
    }
});
//FIM VALIDAÇÃO TELEFONE

//VALIDAÇÃO CEP
$('#cep').keyup(function(){
    var cep = $(this).val();
    cep = cep.replace(/[^\d]+/g,'');
    if(cep.length != 8){
        $('.invalido').show();
            $(this).css({'border':'solid 1px red'});
            document.getElementById("proximo3").disabled = true;
    }else{
        $('.invalido').hide();
        $(this).css({'border':'solid 1px green'});
        document.getElementById("proximo3").disabled = false;
        }
    });
    $('#cep2').keyup(function(){
        var cep = $(this).val();
        cep = cep.replace(/[^\d]+/g,'');
        if(cep.length != 8){
            $('.invalido').show();
                $(this).css({'border':'solid 1px red'});
                document.getElementById("proximo7").disabled = true;
        }else{
            $('.invalido').hide();
            $(this).css({'border':'solid 1px green'});
            document.getElementById("proximo7").disabled = false;
            }
        });
//FIM VALIDAÇÃO CEP

//VALIDAÇÃO DE COLETA
    $('.ondeColetar').click(function(){
        var coleta = $('.ondeColetar').val();
        if (coleta == 'cabine'){
            document.getElementById("proximo8").disabled = false;
        }else if(coleta == 'domicilio'){
            $('.enderecoDiv').show();
            document.getElementById("proximo8").disabled = true;
        }else{
            $('.enderecoDiv').hide();
            document.getElementById("proximo8").disabled = true;
        }
    });
    $('#endereco').keyup(function(){
    var endereco = $('#endereco').val();
        if(endereco.length<5){
            $('#endereco').css({'border': '1px solid red'});
        }else{
            document.getElementById("proximo8").disabled = false;
            $('#endereco').css({'border': '1px solid green'});
        }
    });
    $('.diaSemana').click(function(){
        var dia = $('.diaSemana').val();
        if (dia != 'selecionar'){
            if(dia == '0' || dia =='1' || dia =='2' || dia =='3' || dia =='4'){
            $('.horarioColeta').show();
            $('.horarioColetaSabado').hide();
            }else if(dia == '5'){
                $('.horarioColeta').hide('slow');
                $('.horarioColetaSabado').show('slow');   
            }
        }else{
            $('.horarioColeta').hide('slow');
            $('.horarioColetaSabado').hide('slow');
            document.getElementById("enviar").disabled = true;
        }
    });
//FIM VALIDAÇÃO COLETA

//VALIDAÇÃO FORM FINAL
    $('.horario').click(function(){
        var horario = $('.horario').val();
        if(horario == 'selecionar'){
            document.getElementById("enviar").disabled = true;
        }else{
            document.getElementById("enviar").disabled = false;
        }
    });
    $('.horario1').click(function(){
        var horario = $('.horario1').val();
        if(horario == 'selecionar1'){
            document.getElementById("enviar").disabled = true;
        }else{
            document.getElementById("enviar").disabled = false;
        }
    });
   
    $('#enviar').click(function(){
        $('.progressbar').show();
        setTimeout(function(){ 
            $('.progressbar').hide()
        }, 4000)
        setTimeout(function(){ 
            $('fieldset').hide()
        }, 4000)
        setTimeout(function(){ 
            $('.agradecimento').show()
        }, 4000)
        $('#enviar').hide();
    });

//FIM VALIDAÇÃO FORM FINAL
//VALIDAÇÃO BOTÕES

    $('#proximo9').click(function(){
        $('.dia').show();
    });

//FIM VALIDAÇÃO BOTOES
});
