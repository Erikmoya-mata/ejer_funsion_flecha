// - Crear un mini-sistema que nos permita registrar los alumnos que estan presentes (P) y asusentes (A) en clases.
// - Pasados los 30 días mostrar la situacion final de todos los alumnos (N° total de presentes y ausentes).
// - Se puede tener maximo de 10% de ausencias por semestre, si se tienen más, avisarle que esta reprobado.


let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];


for(i = 0; i < cantidad; i++){                               // El 0 se esta escribiendo, porque es la cantidad de asistencias que tiene.
    alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)),0]; // Un array dentro de otro arrya.
};




const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][0][1]++; // Checar en esta parte siento que aqui esta el error.
    }


};
for (i = 0; i < 30; i++){ // Tengo duda tambien que el error pueda ser en este bucle, este mal la definicion.
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
};


for(alumno in alumnosTotales){  // Aqui estoy obteniendo el nombre.
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ___________Asistensias: ${alumnosTotales[alumno][1]}<br> 
    ___________Ausensias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
    if(30 - alumnosTotales[alumno][1] > 18 ){ // Aqui estoy haciendo la validacion del 10%, en esta caso un semestre tiene 180 días y estoy sacando el 10% de las asistensias
        resultado+= "<br style='color:red'> REPROBADO POR FALTAR MAS DE 18 VECES AL SEMESTRE</br><br><br>"; // Escribi este parte para que se pusiera en rojo, pero no me lo marco.
    } else{
        resultado+= "<br><br>"
    }
    document.write(resultado);
};