"use strict";
const getRandomInt = (max) => Math.floor(Math.random() * max);
const shuffle = (array) => {
    const shuffled = array;
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.join("");
};
const generatePassword = () => {
    const lowerCaseSymbols = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberSymbols = "0123456789";
    const specialSymbols = "!@#$%^&*";
    const allSymbols = lowerCaseSymbols + upperCaseSymbols + numberSymbols + specialSymbols;
    const guaranteedSymbols = [
        lowerCaseSymbols[getRandomInt(lowerCaseSymbols.length)],
        upperCaseSymbols[getRandomInt(upperCaseSymbols.length)],
        numberSymbols[getRandomInt(numberSymbols.length)],
        specialSymbols[getRandomInt(specialSymbols.length)],
    ];
    // Возможно лучше задавать фиксированное количество символов, например, 12, а не от 10 до 20
    const finalLength = 10 + getRandomInt(11);
    const additionalSymbols = Array.from({ length: finalLength - 4 }, () => allSymbols[getRandomInt(allSymbols.length)]);
    // Использование современного алгоритма Фишера-Йетса (метод Дурштенфельда) для надёжного перемешивания
    const password = shuffle([
        ...guaranteedSymbols,
        ...additionalSymbols,
    ]);
    return password;
};
console.log(generatePassword());
