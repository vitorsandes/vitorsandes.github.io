// Mudar imagem ao clicar nela
var minhaImagem = document.querySelectorAll('img');

minhaImagem[0].onclick = function() {
	
	var meuLocal = minhaImagem[0].getAttribute('src')

	if(meuLocal === 'imagens/carroOnix.jpg') {
		minhaImagem[0].setAttribute('src', 'imagens/hb20.jfif');
	} else {
		minhaImagem[0].setAttribute('src', 'imagens/carroOnix.jpg');
	}
}



minhaImagem[1].onclick = function() {
	
	var meuLocal = minhaImagem[1].getAttribute('src')

	if(meuLocal === 'imagens/fordka.jfif') {
		minhaImagem[1].setAttribute('src', 'imagens/gol.jfif');
	} else {
		minhaImagem[1].setAttribute('src', 'imagens/fordka.jfif');
	}
}


// Registrar nome de usuário na página 

var meuBotao = document.querySelector('button');
var meuTitulo = document.querySelector('h1');

function registraUsuario() {
  var usuario = prompt('Por favor, informe o usuário.');
  meuTitulo.textContent = 'Bem-Vindo a minha página web, ' + usuario;
  localStorage.setItem('ultimoUsuario', usuario);

}

if(!localStorage.getItem('ultimoUsuario')) {
	registraUsuario();


} else {

	var meuUltimoUsuario = localStorage.getItem('ultimoUsuario');
	meuTitulo.textContent = 'Bem-Vindo a minha página web, ' + meuUltimoUsuario;
}

meuBotao.onclick = function(){

	registraUsuario();
}