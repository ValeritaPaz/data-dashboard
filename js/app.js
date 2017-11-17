/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

function select() {
	//creando el div contenedor de las sedes que se desplegará al hacer click
	var contenedor = document.createElement("div");
	contenedor.setAttribute("class", "contSedes");


	//creando lista de arequipa
	var listaAqp = document.createElement("ul");
	listaAqp.setAttribute("class", "listaSedes");
	var textoListaAqp = document.createTextNode("Arequipa");
	var hrAqp = document.createElement("hr");
	hrAqp.setAttribute("class", "estiloHr");
	var liAqp1 = document.createElement("li");
	var textoLiAqp1 = document.createTextNode("2016-II");
	var liAqp2 = document.createElement("li");
	var textoLiAqp2 = document.createTextNode("2017-I");
	
	//asignando padres a nodos de texto y li
	liAqp1.appendChild(textoLiAqp1);
	liAqp2.appendChild(textoLiAqp2);
	listaAqp.appendChild(textoListaAqp);
	listaAqp.appendChild(hrAqp);
	listaAqp.appendChild(liAqp1);
	listaAqp.appendChild(liAqp2);
	

	//creando lista de ciudad de mexico
	var listaCdM = document.createElement("ul");
	listaCdM.setAttribute("class", "listaSedes");
	var textoListaCdM = document.createTextNode("Ciudad de México");
	var hrCdM = document.createElement("hr");
	hrCdM.setAttribute("class", "estiloHr");
	var liCdM1 = document.createElement("li");
	var textoLiCdM1 = document.createTextNode("2017-I");
	var liCdM2 = document.createElement("li");
	var textoLiCdM2 = document.createTextNode("2017-II");	

	//asignando padres a nodos de texto y li
	liCdM1.appendChild(textoLiCdM1);
	liCdM2.appendChild(textoLiCdM2);
	listaCdM.appendChild(textoListaCdM);
	listaCdM.appendChild(hrCdM);
	listaCdM.appendChild(liCdM1);
	listaCdM.appendChild(liCdM2);
	
	//creando lista de lima
	var listaLima = document.createElement("ul");
	listaLima.setAttribute("class", "listaSedes");
	var textoListaLima = document.createTextNode("Lima");
	var hrLima = document.createElement("hr");
	hrLima.setAttribute("class", "estiloHr");
	var liLima1 = document.createElement("li");
	var textoLiLima1 = document.createTextNode("2016-II");
	var liLima2 = document.createElement("li");
	var textoLiLima2 = document.createTextNode("2017-I");
	var liLima3 = document.createElement("li");
	var textoLiLima3 = document.createTextNode("2017-II");
	
	//asignando padres a nodos de texto y li
	liLima1.appendChild(textoLiLima1);
	liLima2.appendChild(textoLiLima2);
	liLima3.appendChild(textoLiLima3);
	listaLima.appendChild(textoListaLima);
	listaLima.appendChild(hrLima);
	listaLima.appendChild(liLima1);
	listaLima.appendChild(liLima2);
	listaLima.appendChild(liLima3);
	

	//creando lista de chile
	var listaScl = document.createElement("ul");
	listaScl.setAttribute("class", "listaSedes");
	var textoListaScl = document.createTextNode("Santiago de Chile");
	var hrScl = document.createElement("hr");
	hrScl.setAttribute("class", "estiloHr");
	var liScl1 = document.createElement("li");
	var textoLiScl1 = document.createTextNode("2016-II");
	var liScl2 = document.createElement("li");
	var textoLiScl2 = document.createTextNode("2017-I");
	var liScl3 = document.createElement("li");
	var textoLiScl3 = document.createTextNode("2017-II");
	
	//asignando padres a nodos de texto y li
	liScl1.appendChild(textoLiScl1);
	liScl2.appendChild(textoLiScl2);
	liScl3.appendChild(textoLiScl3);
	listaScl.appendChild(textoListaScl);
	listaScl.appendChild(hrScl);
	listaScl.appendChild(liScl1);
	listaScl.appendChild(liScl2);
	listaScl.appendChild(liScl3);
	
	contenedor.appendChild(listaAqp);
	contenedor.appendChild(listaCdM);
	contenedor.appendChild(listaLima);
	contenedor.appendChild(listaScl);
	var h1 = document.getElementById("sede");
	h1.appendChild(contenedor);
}

