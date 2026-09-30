function parOImpar(numero: number): string {
    if (numero % 2 === 0) {
        return "El número es par";
    }

    return "El número es impar";
}
console.log(parOImpar(8));
console.log(parOImpar(7));

