function promedioAprobacion(notas: number[]): string {
    if (notas.length === 0) {
        return "No hay notas para calcular el promedio";
    }

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    const promedio = suma / notas.length;

    if (promedio >= 3) {
        return "Promedio: " + promedio.toFixed(2) + ". Aprobado";
    }

    return "Promedio: " + promedio.toFixed(2) + ". No aprobado";
}
console.log(promedioAprobacion([4, 3, 5]));
console.log(promedioAprobacion([2, 2.5, 3]));
