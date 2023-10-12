import './FormComponent.scss';

import { useState } from 'react';

import { PasswordDisplay } from '../passwordDisplay';
import { InputRange } from '../inputRange/InputRange';
import { InputUniversal } from '../inputUniversal';
import { PasswordStrength } from '../passwordStrangth';

import arrowIcon from '../../assets/arrow-right.svg'

export const FormComponent = () => {
  const [passwordInputLength, setPasswordInputLength] = useState('');

  const passwordLength = (passwordRangeValue: string) => {
    setPasswordInputLength(passwordRangeValue);
  };

  return (
    <form className='form'>
        <h2 className="form__header">Password Generator</h2>
      <div>
        <PasswordDisplay passwordGenerated={'344444'} />
        <div className='form__wrapper'>
        <div >
          <InputRange passwordLength={passwordLength} />
        </div>

        <div className='form__checkbox-wrapper'>

        <div  className='form__checkbox-component'>
          <InputUniversal
            text={'Include Uppercase Letter'}
            id={'Uppercase'}
            htmlFor={'Uppercase'}
            name={'Uppercase'}
            value={'Uppercase'}
          />
        </div>

        <div className='form__checkbox-component'>
          <InputUniversal
            text={'Include Lowercase Letter'}
            id={'Lowercase'}
            htmlFor={'Lowercase'}
            name={'Lowercase'}
            value={'Lowercase'}
          />
        </div>

        <div className='form__checkbox-component'>
          <InputUniversal
            text={'Include Numbers'}
            id={'Numbers'}
            htmlFor={'Numbers'}
            name={'Numbers'}
            value={'Numbers'}
          />
        </div>

        <div className='form__checkbox-component'>
          <InputUniversal
            text={'Include Symbols'}
            id={'Symbols'}
            htmlFor={'Symbols'}
            name={'Symbols'}
            value={'Symbols'}
          />
        </div>

        <div>
            <PasswordStrength passwordInputLength={passwordInputLength}/>

        </div>

        <div className='form__submit-elem'>
          <input className='form__submit-input' type="submit" value='generate' />
          <img className='form__submit-input-icon' src={arrowIcon} alt="" />
        </div>


        </div>





      </div>
      </div>
    </form>
  );
};
