/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
//console.log(data['AQP'].length);
function linea() {
  var oV = document.getElementById("overview");
  if (oV.classList.contains("lineaAmarilla")){
    oV.classList.remove("lineaAmarilla");
    oV.classList.add("noLinea");
  }
  else {
    oV.classList.remove("noLinea");
    oV.classList.add("lineaAmarilla");
  }

}

function linea2() {
  var stds = document.getElementById("students");
  if (stds.classList.contains("lineaAmarilla")){
    stds.classList.remove("lineaAmarilla");
    stds.classList.add("noLinea");
  }
  else {
    stds.classList.remove("noLinea");
    stds.classList.add("lineaAmarilla");
  } 
}

function linea3() {
  var teachers = document.getElementById("teachers");
  if (teachers.classList.contains("lineaAmarilla")){
    teachers.classList.remove("lineaAmarilla");
    teachers.classList.add("noLinea");
  }
  else {
    teachers.classList.remove("noLinea");
    teachers.classList.add("lineaAmarilla");
  }  
}

//calculando las activas e inactivas de scl 2017-2
var students = data.SCL["2017-2"].students;
var total = 0;
var totalAct = 0;
var totalInac = 0;

	for (var i=0; i< students.length; i++) {
		if(students[i].active === true){
			//total += students[i].active;
			totalAct++;
		} else { 
			//sumaPorcentaje = students.length - total;
			totalInac++;
			//var calculoPorcentaje = Math.round(sumaPorcentaje*100/students.length);
			//var porcentaje = calculoPorcentaje + "%";
		}
		total++;
	}
	//console.log("TOTAL ACt"+totalAct+" TOTAL inactivos"+totalInac);
var porcInactivo = Math.round((totalInac/total)*100);

//asignando padres
var activos = document.getElementById("activos");
var textoActivos = document.createTextNode(totalAct);
activos.appendChild(textoActivos);

var inactivos = document.getElementById("inactivos");
var textoInactivos = document.createTextNode(porcInactivo+"%");
inactivos.appendChild(textoInactivos);
inactivos.style.color = "#fc3348";

//calculando logro cumplido y superado
var sprint1 = data.SCL["2017-2"].ratings[0].student.cumple + data.SCL["2017-2"].ratings[0].student.supera;
var sprint2 = data.SCL["2017-2"].ratings[1].student.cumple + data.SCL["2017-2"].ratings[1].student.supera;

var sprint1TotCumple = data.SCL["2017-2"].ratings[0].student.cumple;
var sprint2TotCumple = data.SCL["2017-2"].ratings[1].student.cumple;
var sprint1TotNoCumple = data.SCL["2017-2"].ratings[0].student['no-cumple'];
var sprint2TotNoCumple = data.SCL["2017-2"].ratings[1].student['no-cumple'];
var sprint1TotSupera = data.SCL["2017-2"].ratings[0].student.supera;
var sprint2TotSupera = data.SCL["2017-2"].ratings[1].student.supera;

var totalSprintCumple = sprint1TotCumple + sprint2TotCumple;
var totalSprintNoCumple = sprint1TotNoCumple + sprint2TotNoCumple;
var totalSprintSupera = sprint1TotCumple + sprint2TotCumple
var promedioSprints = Math.round((sprint1TotSupera + sprint2TotSupera)/2);

var totalSprint = totalSprintCumple+totalSprintNoCumple;

var porcentajeSprint = Math.round((totalSprintCumple/totalSprint)*100) + "%";




//asignando padres
var target = document.getElementById("target");
var textoTarget = document.createTextNode(totalSprintCumple);
target.appendChild(textoTarget);


var percentageTotal = document.getElementById("percentageTotal");
var textoPercentageTotal = document.createTextNode(porcentajeSprint);
percentageTotal.appendChild(textoPercentageTotal);
percentageTotal.style.color = "#39bd14";

var sprintTotal = document.getElementById("SprintTotal");
var textoSprintTotal = document.createTextNode(" ("+totalSprint+")");
sprintTotal.appendChild(textoSprintTotal);

//primer grafico enrollment
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = google.visualization.arrayToDataTable([
        ['ENROLLMENT', 'ENRROLLED', 'DROPOUT'],
        ['SCL - 2017-2', totalAct, totalInac]
       ]);

      var options = {
        title: 'ENROLLMENT - DROPOUT',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total '+total,
          minValue: 0
        },
        vAxis: {
          title: '# STUDENTS'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart1'));
      chart.draw(data, options);
    }

//calculanto Nps
/*
[Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
[Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
[Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100
*/
var promoterS1 = data.SCL["2017-2"].ratings[0].nps.promoters;
var promoterS2 = data.SCL["2017-2"].ratings[1].nps.promoters;
var totalPromoters = (promoterS1 + promoterS2) / 2;
var passiveS1 = data.SCL["2017-2"].ratings[0].nps.passive;
var passiveS2 = data.SCL["2017-2"].ratings[1].nps.passive;
var totalPassives = (passiveS1 + passiveS2) / 2; 
var detractorS1 = data.SCL["2017-2"].ratings[0].nps.detractors;
var detractorS2 = data.SCL["2017-2"].ratings[1].nps.detractors;
var totalDetractors = (detractorS1 + detractorS2) / 2;
var totalNpS = totalPromoters + totalPassives + totalDetractors;

var promoPercent = Math.round(totalPromoters / totalNpS * 100)
var promoters = document.getElementById("promoters");
var textoPromoters = document.createTextNode(promoPercent + "%" + " Promoters");
promoters.appendChild(textoPromoters);

var passPercent = Math.round(totalPassives / totalNpS * 100);
var passive = document.getElementById("passive");
var textoPassive = document.createTextNode(passPercent + "%" + " Passive");
passive.appendChild(textoPassive);

var detractPercent = Math.round(totalDetractors / totalNpS * 100);
var detractors = document.getElementById("detractors");
var textoDetractors = document.createTextNode(detractPercent + "%" + " Detractors");
detractors.appendChild(textoDetractors);

var nps = (promoPercent - detractPercent) + "%";
var currently = document.getElementById("currently");
var textoCurrently = document.createTextNode(nps);
currently.appendChild(textoCurrently);
currently.style.color = "#39bd14";

//[NPS] = [Promoters] - [Detractors]



