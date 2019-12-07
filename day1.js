const getInput = require('./utils/getInput');

function getFuelForMass(mass) {
    return Math.floor(mass / 3) - 2;
}

function getSolutionForPart1(input) {
    let fuel = 0;

    input.forEach(moduleMass => {
        if (moduleMass === '') {
            return;
        }

        fuel += getFuelForMass(moduleMass);
    });

    return fuel;
}

function getSolutionForPart2(input) {
    let fuel = 0;

    input.forEach(moduleMass => {
        if (moduleMass === '') {
            return;
        }

        let fuelForModule = getFuelForMass(moduleMass);

        fuel += fuelForModule;

        while (fuelForModule > 0) {
            fuelForModule = getFuelForMass(fuelForModule);

            if (fuelForModule > 0) {
                fuel += fuelForModule;
            }
        }
    });

    return fuel;
}

getInput(input => {
    console.log(input);
    console.group('Solution');
    console.log('Part 1', getSolutionForPart1(input));
    console.log('Part 2', getSolutionForPart2(input));
    console.groupEnd();
});

