function contarVocales(frase: string): number {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        const caracter = frase[i].toLowerCase();

        if (
            caracter === "a" ||
            caracter === "e" ||
            caracter === "i" ||
            caracter === "o" ||
            caracter === "u"
        ) {
            contador++;
        }
    }

    return contador;
}
console.log(contarVocales("Hola mundo"));
console.log(contarVocales("Programacion"));

