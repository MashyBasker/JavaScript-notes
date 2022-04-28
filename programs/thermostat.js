class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }
    get temperature() {
        return this.fahrenheit;
    }
    set temperature(newTemp) {
        this.newTemp = (5 / 9) * (this.fahrenheit - 32);
    }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

/* int he question it is nowhere mentioned
that we need to convert the Celsius temperature to Fahrenheit
inside the `set` method
*/