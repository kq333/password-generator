export const shuffleArray = (array: string[]): void => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
export const keySymbols: string[] = '!@#$%^&*()_+|?'.split('');
export const numbersElem: string[] = '0123456789'.split('');
