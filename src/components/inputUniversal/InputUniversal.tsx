import { useState } from 'react';

import './InputUniversal.scss';

interface Props {
  id: string;
  htmlFor: string;
  text: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputUniversal: React.FC<Props> = ({
  id,
  htmlFor,
  text,
  name,
  value,
}) => {
  return (
    <div className='input-checkbox'>
      <input
        className='input-checkbox__value'
        type='checkbox'
        id={id}
        name={name}
        value={value}
      />
      <label className='input-checkbox__label' htmlFor={htmlFor}>
        {text}
      </label>
    </div>
  );
};
