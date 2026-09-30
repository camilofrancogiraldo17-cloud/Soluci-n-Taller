function fizzBuzz(): string[] {
    const resultado: string[] = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado.push("FizzBuzz");
        } else if (i % 3 === 0) {
            resultado.push("Fizz");
        } else if (i % 5 === 0) {
            resultado.push("Buzz");
        } else {
            resultado.push(String(i));
        }
    }

    return resultado;
}
console.log(fizzBuzz()[55]);
console.log(fizzBuzz()[63]);

