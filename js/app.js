/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
//console.log(data['AQP'].length);

var count = Object.keys(data['SCL']).length;
console.log(count);
var aStudents[];
for(var i in data.SCL) {
    console.log(" -- ESTAMOS RECORRIENDO EL PERIODO "+i);
var act=0;
var inac=0;
var periodo='2016-2';
    for(var j in data.SCL[i].students){
    	if(data.SCL[i].students[j].active){
    		act++;
    	}else{
    		inac++;
    	}
    	//console.log("EL ALUMNO DEL PERIODO "+i+" ES: "+data.SCL[i].students[j].name);
    }  // (o el campo que necesites)
    aStudents[i]['activos']=act;
    aStudents[i]['inactivos']=inac;
    console.log("PERIODO "+i+" Tenemos "+act+" estudiantes activos y "+inac+" estudiantes inactivos");
}
//$('activos').html(aStudents[periodo]['activos']);
//$('inactivos').html(aStudents[periodo]['inactivos']);
//alert(document.getElementById('activos').html());