function ejercicio1(array) {

    for(let i = 0; i < array.length; i++){
        console.log('--->', array[i]);
        console.log('--->', array[i].nombre);

    }
};

function ejercicio2(array, id) {

    for(let i = 0; i < array.length; i++){

        if(array[i].id === id)
            return array[i]

    }
    console.log('Estudiante no encontrado');
};

function ejercicio3(array, carrera) {
    let resultados = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i].carrera === carrera)
            resultados.push(array[i]);
    }
    return resultados;
};

function ejercicio4(array) {
    let aprobados = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i].promedio >= 3.0)
            aprobados.push(array[i]);
    }
    return aprobados;
};

function ejercicio5 (array) {
    let reprobados = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].promedio < 3.0)
            reprobados.push(array[i]);
    }
    return(reprobados);
};

function ejercicio6 (array) {
    let suma = 0;
    let promedioGeneral = 0;

    for(let i = 0; i < array.length; i++) {
        suma += array[i].promedio
    }
    promedioGeneral = suma / array.length;
        return (promedioGeneral);
};

function ejercicio7 (array) {
    let mejorEstudiante = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i].promedio > mejorEstudiante.promedio)
            mejorEstudiante = (array[i]);
    }
    return(mejorEstudiante);
};

function ejercicio8 (array) {
    let menorPromedio = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i].promedio < menorPromedio.promedio)
            menorPromedio = array[i];
    }
    return(menorPromedio);
};

function ejercicio9 (array) {
    let carreras = {};

    for(let i = 0; i < array.length; i++) {
        let carrera = array[i].carrera;
        if(carreras[carrera]) {
            carreras[carrera] += 1;
        }
        else {
            carreras[carrera] = 1;
        }
    }
    return carreras;
};

function ejercicio10 (array, semestre) {
    let resultados = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].semestre === semestre)
            resultados.push(array[i])
    }
    return(resultados);
};

function ejercicio11 (array, edad) {
    let resultados = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].edad > edad) {
            resultados.push(array[i]);
        }
    }
    
    return(resultados);
};

function generarReporte (array) {
    let aprobados = ejercicio4(array);
    let reprobados = ejercicio5(array);
    let promedioGeneral = ejercicio6(array);
    let mejorEstudiante = ejercicio7(array);
    let menorPromedio = ejercicio8(array);

    console.log("========== REPORTE ACADÉMICO ==========");
    console.log("Total de estudiantes:", array.length);
    console.log("Estudiantes aprobados:", aprobados.length);
    console.log("Estudiantes reprobados:", reprobados.length);
    console.log("Promedio general:", promedioGeneral.toFixed(2));
    console.log("Mejor estudiante:", mejorEstudiante.nombre);
    console.log("Estudiante con menor promedio:", menorPromedio.nombre);

    console.log("========================================");
};

function generarRanking(array) {

    let estudiantes = [...array];

    console.log("===== RANKING =====");

    for(let posicion = 1; posicion <= array.length; posicion++) {

        let mejor = estudiantes[0];
        let indice = 0;

        for(let i = 1; i < estudiantes.length; i++) {

            if(estudiantes[i].promedio > mejor.promedio) {
                mejor = estudiantes[i];
                indice = i;
            }
        }

        console.log(posicion + ". " + mejor.nombre + " - " + mejor.promedio);

        estudiantes.splice(indice, 1);
    }

    console.log("==================");
};

module.exports = {
    ejercicio1,
    ejercicio2,
    ejercicio3,
    ejercicio4,
    ejercicio5,
    ejercicio6,
    ejercicio7,
    ejercicio8,
    ejercicio9,
    ejercicio10,
    ejercicio11,
    generarReporte,
    generarRanking,
};