function tablaMultiplicar(numero: number): string[] {
    const tabla: string[] = [];

    for (let i = 1; i <= 10; i++) {
        tabla.push(numero + " x " + i + " = " + (numero * i));
    }

    return tabla;
}
console.log(tablaMultiplicar(5));
console.log(tablaMultiplicar(8));
