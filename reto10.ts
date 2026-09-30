function mayorLista(numeros: number[]): number | string {
    if (numeros.length === 0) {
        return "La lista está vacía";
    }

    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}
console.log(mayorLista([10, 25, 7, 42]));
console.log(mayorLista([-5, -2, -10]));
