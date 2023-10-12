import React, { useState, useEffect } from 'react';
import './PasswordStrength.scss';

interface Props {
  passwordInputLength: string;
}

export const PasswordStrength: React.FC<Props> = ({ passwordInputLength }) => {
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordLevel, setpasswordLevel] = useState(0);

  useEffect(() => {
    const levelStrength =
      passwordInputLength <= 5
        ? 'weak'
        : passwordInputLength >= 6 && passwordInputLength <= 8
        ? 'medium'
        : passwordInputLength >= 9
        ? 'strong'
        : '';

    setPasswordStrength(levelStrength);

    if (levelStrength === 'weak') {
      setpasswordLevel(1);
    } else if (levelStrength === 'medium') {
      setpasswordLevel(2);
    } else if (levelStrength === 'strong') {
      setpasswordLevel(3);
    } else {
      setpasswordLevel(0);
    }
  }, [passwordInputLength, passwordLevel, passwordStrength]);

  const getClassElem = (index: number) => {
    if (+passwordInputLength === 0) {
      return 'strength-elem__strength-level-elem';
      setpasswordLevel(0);
    }

    if (passwordLevel === 1) {
      return index === 0
        ? 'strength-elem__strength-level-elem--isActive'
        : 'strength-elem__strength-level-elem';
    } else if (passwordLevel === 2) {
      return index < 3
        ? 'strength-elem__strength-level-elem--isActive'
        : 'strength-elem__strength-level-elem';
    } else if (passwordLevel === 3) {
      return 'strength-elem__strength-level-elem--isActive';
    }
    return 'strength-elem__strength-level-elem';
  };

  return (
    <div className='strength-elem'>
      <div className='strength-elem__wrapper'>
        <div className='strength-elem__name'>Strength</div>

        <div className='strength-elem__strength-level'>
          <div className='strength-elem__strength-level-name'>
            {passwordInputLength > 0 ? passwordStrength : ''}
          </div>

          <div className='strength-elem__strength-level-list'>
            {[0, 1, 2, 3].map((elem: number, index: number) => (
              <div key={index} className={getClassElem(index)}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
