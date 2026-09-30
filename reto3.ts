function puedeEntrar(edad: number): string {
    if (edad < 0) {
        return "Edad inválida";
    }

    if (edad >= 18) {
        return "Puede entrar a la actividad";
    }

    return "No puede entrar a la actividad";
}
console.log(puedeEntrar(20));
console.log(puedeEntrar(15)); 
