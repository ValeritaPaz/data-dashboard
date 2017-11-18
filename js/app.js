/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
//console.log(data['AQP'].length);

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



google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');
      data.addColumn('number', 'Energy Level');

      data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 1, .25],
        [{v: [9, 0, 0], f: '9 am'}, 2, .5],
        [{v: [10, 0, 0], f:'10 am'}, 3, 1],
        [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
        [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
        [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
        [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
        [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
        [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
        [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
      ]);

      var options = {
        title: 'Motivation and Energy Level Throughout the Day',
        focusTarget: 'category',
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          },
          textStyle: {
            fontSize: 14,
            color: '#053061',
            bold: true,
            italic: false
          },
          titleTextStyle: {
            fontSize: 18,
            color: '#053061',
            bold: true,
            italic: false
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)',
          textStyle: {
            fontSize: 18,
            color: '#67001f',
            bold: false,
            italic: false
          },
          titleTextStyle: {
            fontSize: 18,
            color: '#67001f',
            bold: true,
            italic: false
          }
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
      chart.draw(data, options);
    }