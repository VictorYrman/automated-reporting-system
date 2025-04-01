const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

const shuffle = (array: string[]): string => {
  const shuffled = array;
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = getRandomInt(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.join("");
};

const generatePassword = (): string => {
  const lowerCaseSymbols: string = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseSymbols: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberSymbols: string = "0123456789";
  const specialSymbols: string = "!@#$%^&*";
  const allSymbols: string =
    lowerCaseSymbols + upperCaseSymbols + numberSymbols + specialSymbols;

  const guaranteedSymbols: string[] = [
    lowerCaseSymbols[getRandomInt(lowerCaseSymbols.length)],
    upperCaseSymbols[getRandomInt(upperCaseSymbols.length)],
    numberSymbols[getRandomInt(numberSymbols.length)],
    specialSymbols[getRandomInt(specialSymbols.length)],
  ];

  // Возможно лучше задавать фиксированное количество символов, например, 12, а не от 10 до 20
  const finalLength: number = 10 + getRandomInt(11);
  const additionalSymbols = Array.from(
    { length: finalLength - 4 },
    () => allSymbols[getRandomInt(allSymbols.length)]
  );

  // Использование современного алгоритма Фишера-Йетса (метод Дурштенфельда) для надёжного перемешивания
  const password: string = shuffle([
    ...guaranteedSymbols,
    ...additionalSymbols,
  ]);

  return password;
};

console.log(generatePassword());
