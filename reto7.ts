function sumaAcumulada(numeros: number[]): number {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    return suma;
}
console.log(sumaAcumulada([10, 20, 30]));
console.log(sumaAcumulada([5, 8, 2]));

