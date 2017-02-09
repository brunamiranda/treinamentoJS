$('#cep').blur(function(){
	
	var requisicaoCep = $.ajax({
		url: "http://api.postmon.com.br/v1/cep/" + $(this).val(),
		method: "GET"
	});
	requisicaoCep.done(function(dados){
		console.log(dados);
		$('#endereco').attr('disabled', 'true').val(dados.logradouro);
		$('#bairro').attr('disabled', 'true').val(dados.bairro);
		$('#cidade').attr('disabled', 'true').val(dados.cidade);
		$('#estado').attr('disabled', 'true').val(dados.estado);
	});
	requisicaoCep.fail(function(dados){

	})	
})
function validateForm() {
	var email = document.forms["myForm"]["email"].value;
    var name = document.forms["myForm"]["name"].value;
    var senha = document.forms["myForm"]["password"].value;
    var csenha = document.forms["myForm"]["cpassword"].value;
    var genero = document.forms["myForm"]["genero"].value;
    var cpf = document.forms["myForm"]["cpf"].value;
    var data = document.forms["myForm"]["data"].value;
    var tel = document.forms["myForm"]["tel"].value;
    var numero = document.forms["myForm"]["numero"].value;

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (email.length = 0 || atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Email inválido");
    }
    if (name == "") {
        alert("O campo nome deve ser preenchido");        
    }
    if (senha == "") {
        alert("O campo senha deve ser preenchido");
    }
    if (csenha == "") {
        alert("Confirme sua senha");
    }
    if (csenha != 0 && csenha != senha){
    	 alert("Senha errada!");
    }
    if (genero == "") {
        alert("Escolha seu gênero");
    }
    if (cpf == "") {
        alert("Insira seu cpf");        
    }
    if (cpf.length != 11 && cpf.length != 0) {
    	alert("CPF errado");
    }
    if (data == "") {
    	alert("Insira sua data de nascimento");
    }
    if (tel.length != 10) {
    	alert("Insira um telefone correto! DDD+telefone");
    	
    }
    if (numero == "") {
        alert("O campo número deve ser preenchido");
        return false;
    }
};

