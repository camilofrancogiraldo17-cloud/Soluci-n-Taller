function convertirTemperatura(celsius: number): {
    fahrenheit: number;
    kelvin: number;
} {
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    return {
        fahrenheit,
        kelvin
    };
}
console.log(convertirTemperatura(25));
console.log(convertirTemperatura(0));
