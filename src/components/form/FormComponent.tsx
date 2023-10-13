import './FormComponent.scss';

import { useEffect, useState } from 'react';

import { PasswordDisplay } from '../passwordDisplay';
import { InputRange } from '../inputRange/InputRange';
import { InputUniversal } from '../inputUniversal';
import { PasswordStrength } from '../passwordStrangth';
import { shuffleArray, alphabet, keySymbols, numbersElem } from './helper';

import arrowIcon from '../../assets/arrow-right.svg';

export const FormComponent = () => {
  const [passwordInputLength, setPasswordInputLength] = useState('');
  const [uppercaseLetter, setUppercaseLetter] = useState(false);
  const [lowercaseLetter, setLowercaseLetter] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [prevPassword, setPrevPassword] = useState<string[]>([]);
  const [finalPassword, setFinalPassword] = useState('');
  const [selectedInputs, setSelectedInputs] = useState(0);

  const passwordLength = (passwordRangeValue: string) => {
    setPasswordInputLength(passwordRangeValue);
  };

  const handleUppercase = (): void => {
    if (!uppercaseLetter && +passwordInputLength === selectedInputs) {
      return;
    }

    if (uppercaseLetter && +passwordInputLength >= selectedInputs) {
      setSelectedInputs((prevElem) => prevElem - 1);
      setUppercaseLetter(!uppercaseLetter);
    }
    if (!uppercaseLetter && +passwordInputLength > selectedInputs) {
      setSelectedInputs((prevElem) => prevElem + 1);
      setUppercaseLetter(!uppercaseLetter);
    }
  };

  const handleLowercase = (): void => {
    if (!lowercaseLetter && +passwordInputLength === selectedInputs) {
      return;
    }

    if (lowercaseLetter && +passwordInputLength >= selectedInputs) {
      setSelectedInputs((prevElem) => prevElem - 1);
      setLowercaseLetter(!lowercaseLetter);
    }
    if (!lowercaseLetter && +passwordInputLength > selectedInputs) {
      setSelectedInputs((prevElem) => prevElem + 1);
      setLowercaseLetter(!lowercaseLetter);
    }
  };

  const handleNumber = (): void => {
    if (!number && +passwordInputLength === selectedInputs) {
      return;
    }

    if (number && +passwordInputLength >= selectedInputs) {
      setSelectedInputs((prevElem) => prevElem - 1);
      setNumber(!number);
    }
    if (!number && +passwordInputLength > selectedInputs) {
      setSelectedInputs((prevElem) => prevElem + 1);
      setNumber(!number);
    }
  };

  const handleSymbols = (): void => {
    if (!symbols && +passwordInputLength === selectedInputs) {
      return;
    }

    if (symbols && +passwordInputLength >= selectedInputs) {
      setSelectedInputs((prevElem) => prevElem - 1);
      setSymbols(!symbols);
    }
    if (!symbols && +passwordInputLength > selectedInputs) {
      setSelectedInputs((prevElem) => prevElem + 1);
      setSymbols(!symbols);
    }
  };

  useEffect(() => {
    const addItemsToState = (prevFinalPassword: string[]) => {
      let updatedFinalPassword = [...prevFinalPassword];

      if (uppercaseLetter) {
        const a = shuffleArray([...alphabet]);
        updatedFinalPassword = updatedFinalPassword.concat(
          a.map((e) => e.toUpperCase()),
        );
      }

      if (lowercaseLetter) {
        const a = shuffleArray([...alphabet]);
        updatedFinalPassword = updatedFinalPassword.concat(
          a.map((e) => e.toLowerCase()),
        );
      }

      if (number) {
        const a = shuffleArray([...numbersElem]);
        updatedFinalPassword = updatedFinalPassword.concat(a);
      }

      if (symbols) {
        const a = shuffleArray([...keySymbols]);
        updatedFinalPassword = updatedFinalPassword.concat(a);
      }

      return updatedFinalPassword;
    };

    const updatedFinalPassword = addItemsToState(prevPassword);
    setPrevPassword(updatedFinalPassword);

    if (+passwordInputLength === 0) {
      setUppercaseLetter(false);
      setLowercaseLetter(false);
      setNumber(false);
      setSymbols(false);
      setSelectedInputs(0);
    }

    if (+passwordInputLength < selectedInputs) {
      setUppercaseLetter(false);
      setLowercaseLetter(false);
      setNumber(false);
      setSymbols(false);
      setSelectedInputs(0);
    }
  }, [
    uppercaseLetter,
    lowercaseLetter,
    number,
    symbols,
    passwordInputLength,
    selectedInputs,
  ]);

  const generatePassword = (e: React.FormEvent) => {
    e.preventDefault();

    let selectedData: string[] = [];

    if (uppercaseLetter) {
      selectedData = selectedData.concat(
        alphabet.map((letter) => letter.toUpperCase()),
      );
    }

    if (lowercaseLetter) {
      selectedData = selectedData.concat(alphabet);
    }

    if (number) {
      selectedData = selectedData.concat(numbersElem);
    }

    if (symbols) {
      selectedData = selectedData.concat(keySymbols);
    }

    if (selectedData.length === 0) {
      setFinalPassword('Select at least one option');
    } else {
      let password = '';
      const requiredLength = passwordInputLength;

      if (uppercaseLetter) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        password += alphabet[randomIndex].toUpperCase();
      }
      if (lowercaseLetter) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        password += alphabet[randomIndex].toLowerCase();
      }
      if (number) {
        const randomIndex = Math.floor(Math.random() * numbersElem.length);
        password += numbersElem[randomIndex];
      }
      if (symbols) {
        const randomIndex = Math.floor(Math.random() * keySymbols.length);
        password += keySymbols[randomIndex];
      }

      while (password.length < +requiredLength) {
        const randomIndex = Math.floor(Math.random() * selectedData.length);
        password += selectedData.splice(randomIndex, 1);
      }

      setFinalPassword(password);
    }
  };

  const isState =
    (uppercaseLetter || lowercaseLetter || number || symbols) &&
    +passwordInputLength > 0;

  const classSubmitElem = !isState
    ? 'form__submit-elem'
    : 'form__submit-elem--isActive';

  return (
    <div className='form-app'>
      <form className='form' onSubmit={generatePassword}>
        <h2 className='form__header'>Password Generator</h2>
        <div>
          <PasswordDisplay passwordGenerated={finalPassword} />
          <div className='form__wrapper'>
            <div>
              <InputRange passwordLength={passwordLength} />
            </div>

            <div className='form__checkbox-wrapper'>
              <div className='form__checkbox-component'>
                <InputUniversal
                  text={'Include Uppercase Letter'}
                  id={'Uppercase'}
                  htmlFor={'Uppercase'}
                  name={'Uppercase'}
                  checked={uppercaseLetter}
                  onChange={handleUppercase}
                />
              </div>

              <div className='form__checkbox-component'>
                <InputUniversal
                  text={'Include Lowercase Letter'}
                  id={'Lowercase'}
                  htmlFor={'Lowercase'}
                  name={'Lowercase'}
                  checked={lowercaseLetter}
                  onChange={handleLowercase}
                />
              </div>

              <div className='form__checkbox-component'>
                <InputUniversal
                  text={'Include Numbers'}
                  id={'Numbers'}
                  htmlFor={'Numbers'}
                  name={'Numbers'}
                  checked={number}
                  onChange={handleNumber}
                />
              </div>

              <div className='form__checkbox-component'>
                <InputUniversal
                  text={'Include Symbols'}
                  id={'Symbols'}
                  htmlFor={'Symbols'}
                  name={'Symbols'}
                  checked={symbols}
                  onChange={handleSymbols}
                />
              </div>

              <PasswordStrength passwordInputLength={passwordInputLength} />

              <div className={classSubmitElem}>
                <input
                  className='form__submit-input'
                  type='submit'
                  value='generate'
                />
                <img
                  className='form__submit-input-icon'
                  src={arrowIcon}
                  alt='arrow icon'
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
