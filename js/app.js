/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

//calculando las activas e inactivas de scl 2017-2
var students = data.SCL["2017-2"].students;
var total = 0;
	for (var i=0; i< students.length; i++) {
		if(students[i].active === true){
			total += students[i].active
		}
		else { 
			sumaPorcentaje = students.length - total;
			var calculoPorcentaje = Math.round(sumaPorcentaje*100/students.length);
			var porcentaje = calculoPorcentaje + "%";
		}
	}
//asignando padres
var activos = document.getElementById("activos");
var textoActivos = document.createTextNode(total);
activos.appendChild(textoActivos);

var inactivos = document.getElementById("inactivos");
var textoInactivos = document.createTextNode(porcentaje);
inactivos.appendChild(textoInactivos);

//calculando logro cumplido y superado
var sprint1 = data.SCL["2017-2"].ratings[0].student.cumple + data.SCL["2017-2"].ratings[0].student.supera;
var sprint2 = data.SCL["2017-2"].ratings[1].student.cumple + data.SCL["2017-2"].ratings[1].student.supera;
var promedioSprints = Math.round((sprint1 + sprint2)/2);
var calculoPorcentajeTotal = Math.round(promedioSprints*100/(students.length*2));
var porcentajeTotal = calculoPorcentajeTotal + "%";

