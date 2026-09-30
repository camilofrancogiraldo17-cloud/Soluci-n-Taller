function mayorDeDos(numero1: number, numero2: number): string {
    if (numero1 > numero2) {
        return "El mayor es " + numero1;
    }

    if (numero2 > numero1) {
        return "El mayor es " + numero2;
    }

    return "Los números son iguales";
}
console.log(mayorDeDos(10, 20));
console.log(mayorDeDos(15, 15));


