function removerImagem () {
	document.getElementById("saida").style.backgroundImage = "none";
}

function criptografar () {
	var input = document.getElementById("palavra").value;
	var lista = input.split("");

	for (var x = 0; x < lista.length; x++) {
		if (lista[x]=="a") lista[x]="ai"
		else if (lista[x]=="e") lista[x]="enter"
		else if (lista[x]=="i") lista[x]="imes"
		else if (lista[x]=="o") lista[x]="obes"
		else if (lista[x]=="u") lista[x]="ufat"
	}
	
	var output = lista.join("");
	removerImagem();
	document.getElementById("saida").innerHTML= output;
}

function descriptografar () {
	var input = document.getElementById("palavra").value;
	var output = input

	output = output.replaceAll ("obes", "o");
	output = output.replaceAll ("ufat", "u");
	output = output.replaceAll ("ai", "a");
	output = output.replaceAll ("imes", "i");
	output = output.replaceAll ("enter","e");
	
	removerImagem();
	document.getElementById("saida").innerHTML= output;
	
}

function copiarTexto () {
	var texto = document.getElementById("saida");
	//texto.select();
	navigator.clipboard.writeText(texto.innerHTML);

}
