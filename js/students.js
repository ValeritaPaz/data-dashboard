var students20172 = data.SCL["2017-2"].students;
var name = "";
var photo = "";

for (var i = 0; i < students20172.length; i++) {
	name = students20172[i].name;
	photo = students20172[i].photo;
	//console.log(name);
	console.log(photo);
}

var contStudent = document.getElementById("student_lab");
var foto = document.createElement("img");
foto.setAttribute("src", photo);
foto.setAttribute("class", "photoStudent");
var studentName = document.createElement("h3");
studentName.setAttribute("class", "uppercase");
var textoStudent = document.createTextNode(name);
var mention = document.createElement("p");
mention.setAttribute("class", "mention");
var textoMention = document.createTextNode("Frontend Developer");
mention.appendChild(textoMention);
var especialidades = document.createElement("h6");
especialidades.setAttribute("class", "specialties");
var textoEsp1 = document.createTextNode("JAVASCRIPT");
var especialidades2 = document.createElement("h6");
especialidades2.setAttribute("class", "specialties");
var textoEsp2 = document.createTextNode("APIs");
var especialidades3 = document.createElement("h6");
especialidades3.setAttribute("class", "specialties");
var textoEsp3 = document.createTextNode("JQUERY");
var skills = document.createElement("img");
skills.setAttribute("src", "assets/images/skills");
skills.setAttribute("class", "skills")
especialidades.appendChild(textoEsp1);
especialidades2.appendChild(textoEsp2);
especialidades3.appendChild(textoEsp3);
studentName.appendChild(textoStudent);
studentName.appendChild(mention);
studentName.appendChild(especialidades);
studentName.appendChild(especialidades2);
studentName.appendChild(especialidades3);
contStudent.appendChild(foto);
contStudent.appendChild(studentName);
contStudent.appendChild(skills);


console.log(data);
