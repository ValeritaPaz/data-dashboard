var alumnas = document.getElementById("alumnas");

var students20172 = data.SCL["2017-2"].students;
var name = "";
var photo = "";

for (var i = 0; i < students20172.length; i++) {
	name = students20172[i].name;
	photo = students20172[i].photo;
	//console.log(name);
	//console.log(photo);
}
var divAlumnas = document.createElement("div");
divAlumnas.setAttribute("class", "divAlumnas");
var fotoAlumna = document.createElement("img");
fotoAlumna.setAttribute("src", photo);
fotoAlumna.setAttribute("class", "fotoAlumna");
var nombreAlumna = document.createElement("p");
nombreAlumna.setAttribute("class", "nombreAlumna");
var textoNombreAlumna = document.createTextNode(name);
nombreAlumna.appendChild(textoNombreAlumna);
divAlumnas.appendChild(fotoAlumna);
divAlumnas.appendChild(nombreAlumna);


alumnas.appendChild(divAlumnas);

var divAdd = document.createElement("div");
divAdd.setAttribute("class", "divAlumnas");
var addAlumna = document.createElement("p");
addAlumna.setAttribute("class", "nombreAlumna");
var textoAddAlumna = document.createTextNode("Add Student");

addAlumna.appendChild(textoAddAlumna);
divAdd.appendChild(addAlumna);

alumnas.appendChild(divAdd);

var divRemove = document.createElement("div");
divRemove.setAttribute("class", "divAlumnas");
var removeAlumna = document.createElement("p");
removeAlumna.setAttribute("class", "nombreAlumna");
var textoRemoveAlumna = document.createTextNode("Remove Student");

removeAlumna.appendChild(textoRemoveAlumna);
divRemove.appendChild(removeAlumna);

alumnas.appendChild(divRemove);

var divAddSprint = document.createElement("div");
divAddSprint.setAttribute("class", "divAlumnas");
var addSprint = document.createElement("p");
addSprint.setAttribute("class", "nombreAlumna");
var textoAddSprint = document.createTextNode("Add Sprint");

addSprint.appendChild(textoAddSprint);
divAddSprint.appendChild(addSprint);

alumnas.appendChild(divAddSprint);