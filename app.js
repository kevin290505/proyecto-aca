const funciones = require("./funciones");
const estudiantes = require("./constantes");

funciones.ejercicio1(estudiantes);
console.log(funciones.ejercicio2(estudiantes, 1));
console.log(funciones.ejercicio3(estudiantes, "Ingeniería de Sistemas"));
console.log(funciones.ejercicio4(estudiantes));
console.log(funciones.ejercicio5(estudiantes));
console.log(funciones.ejercicio6(estudiantes));
console.log(funciones.ejercicio7(estudiantes));
console.log(funciones.ejercicio8(estudiantes));
console.log(funciones.ejercicio9(estudiantes));
console.log(funciones.ejercicio10(estudiantes, 1));
console.log(funciones.ejercicio11(estudiantes, 22));
funciones.generarReporte(estudiantes);
funciones.generarRanking(estudiantes);