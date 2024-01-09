const { LENGTH_ERROR, DIGIT_ERROR, FINAL_RESULT, KEPREKARS_CONSTANT } = require("./labelConstants");

export const generateRandomInput = () => {
    const result = Math.floor(1000 + Math.random() * 9000);
    console.log("Initial Number:", result);
    return result;
}

export const isValidNumber = (number) => {
    if (number.toString().length !== 4) {
        throw new Error(LENGTH_ERROR);
    }

    const uniqueDigits = new Set(number.toString());
    if (uniqueDigits.size < 2) {
        throw new Error(DIGIT_ERROR);
    }

    return true;
}

export const arrangeNumbers = (number) => {
    const ascending = parseInt(addLeadingZeroes(number).split('').sort().join(''), 10);
    const descending = parseInt(addLeadingZeroes(number).split('').sort((a, b) => b - a).join(''), 10);

    return { ascending, descending };
}

export const subtractNumbers = (a, b) => {
    return b - a;
}

export const keprekarsRoutine = (number) => {
    let iterations = 0;
    while (number !== KEPREKARS_CONSTANT && iterations < 7) {
        const { ascending, descending } = arrangeNumbers(number);
        number = subtractNumbers(ascending, descending);
        iterations++;
    }
    return number;
}

export const addLeadingZeroes = (number)=> {
    return number.toString().padStart(4, '0');
}

export const keprekarsConstant = () => {
    const number = generateRandomInput();

    try {
        isValidNumber(number);
        const result = keprekarsRoutine(number);
        console.log(FINAL_RESULT, result);
    } catch (error) {
        console.error(error.message);
    }
}

keprekarsConstant();
