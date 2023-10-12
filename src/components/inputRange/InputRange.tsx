import { useState } from 'react';

import './InputRange.scss';

interface Props {
  passwordLength: (value: string) => void;
}

export const InputRange: React.FC<Props> = ({ passwordLength }) => {
  const [inputRange, setInputRange] = useState(0);

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputRange(newValue);
    passwordLength(newValue);
  };

  return (
    <div className='iput-range'>
      <div className='iput-range__wrapper'>
        <div className='iput-range__range-details'>
          <p>Character Length</p>
          <p className='iput-range__input-value'>{inputRange}</p>
        </div>

        <div className='iput-range__input-range'>
          <input
            type='range'
            min={0}
            max={10}
            value={inputRange}
            onChange={handlerInput}
            step={1}
          />
        </div>
      </div>
    </div>
  );
};
