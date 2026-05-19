// Ejercicio 1, promedio de calificaciones
function calcularPromedio(calificaciones){
    if (calificaciones.length === 0) return 0;
    const suma = calificaciones.reduce((acomulador, nota) => acomulador + nota, 0);
    return suma / calificaciones.length;
}

//ejercicio 2, crear una función de aprobados y reprobados
function calcularPromedio(calificaciones) {
    const aprobados = calificaciones.filter(nota => nota >= 6);
    const reprobados = calificaciones.filter(nota => nota < 6);
    return { aprobados, reprobados};
}

//ejercicio 3, obtención de la mayor calificación
function calificacionesMasAlta (calificaciones) {
 if (calificaciones.length === 0) return 0;
 return Math.max(...calificaciones)
}

//Ejecución de los ejercicios
const notas = [9, 7, 8, 10, 5, 3]
console.log("---Pruebas de calificasciones---");
console.log("Promedio:". calcularPromedio(notas).toFixed(2));
console.log("Separados:", aprobarReprobar(notas));
console.log("Notas más alta:", calificacionesMasAlta(notas));

//ejercicio 4, agregar a estudiantes
function agregarEstudiante(estudiantes, nuevoEstudiante) {
    estudiantes.push(nuevoEstudiante);
    return estudiantes;
}

//ejercicio 5, función para buscar un estudiante por nombre
function buscarEstudiante(estudiantes, nombre) {
    return estudiantes.find(est => est.nombre,toLoweCase() === nombre.toLoweCase());
}

//ejercicio 6, función para eliminar estudiante por número de identificación
function eliminarEstudiante(estudiante, id){
    return estudiantes.filter(est => est.id !== id);
}

// ejercicio 7, función para contar estudiantes por género
function conntarPorGenero(estudiantes, genero){
    return estudiantes.filter(est => est.genero.toLoweCase()=== genero.toLowerCase()).length;
}
//ejercicio 8, función para calcular edad promedio
function calcularEdadPromedio(estudiantes) {
    if(estudiantes.length === 0) return 0;
    const sumaEdades = estudiantes.reduce((acomulador, est) => acomulador + est.edad, 0);
    return sumaEdades / estudiantes.length;
}

//ejercicio 9, función para ordenar estudiantes por calificación
function ordenarPorCalificacion(estudiantes){
 return [...estudiantes].sort((a,b)=> a.calificacion - b.calificaciones);
}

//ejercicio 10, función para verificar si los estudiantes aprobaron o reprobaron
function verificarAprobacion(estudiantes, id){
    const estudiante = estudiantes.find(est => est.id === id);
    if (!estudiante) return false;
    return estudiantes.calificaciones >= 6;

}
let listaEstudiantes = [
    {id: 11, nombre:"Paul", edad: 20, genero: "masculino", calificacion: 8},
    {id: 12, nombre: "Monica", edad: 19, genero: "Femenino", calificacion: 6},
    {id: 13, nombre: "Daniel", edad: 17, genero: "Masculino", calificacion: 9},
    {id: 14, nombre:"Efraín", edad: 24, genero: "Maculino", calificacion: 10},
];

console.log("--Pruebas de Estudiantes--");
agregarEstudiante(listaEstudiantes, {id: 15, nombre: "Walter", edad: 17, genero: "Masculino", calificacion: 8});

console.log("Buscar a 'Daniel':", buscarEstudiante(listaEstudiantes, "Daniel"));

console.log("Edad promedio:", calcularEdadPromedio(listaEstudiantes).toFixed(1));

console.log("Notas de mayor a menor:", ordenarPorCalificacion(listaEstudiantes));

console.log("¿Aprobó el estudiante 13:", verificarAprobacion(listaEstudiantes, 13));
console.log("¿Aprobó el estudiante 12:", verificarAprobacion(listaEstudiantes, 12));

listaEstudiantes = eliminarEstudiante (listaEstudiantes, 11);
console.log("Lista final tras eliminar al estudiante con el ID 11:", listaEstudiantes);