import './PasswordDisplay.scss';
import copyIcon from '../../assets/copy.svg';
import { useState, useEffect } from 'react';

interface Props {
  passwordGenerated: string;
}

export const PasswordDisplay: React.FC<Props> = ({ passwordGenerated }) => {
  const [isCoped, setIsCoped] = useState(false);

  const addClassToIcon = isCoped && passwordGenerated.length > 0
    ? 'password__icon--isActive'
    : 'password__icon';

  useEffect(() => {
    setTimeout(() => {
      if (isCoped) {
        setIsCoped(false);
      }
    }, 2000);
  }, [isCoped]);

  const handlerCopyPassword = () => {
    const tempInput = document.createElement('input');
    tempInput.value = passwordGenerated;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand('copy');

    setIsCoped(!isCoped);
    document.body.removeChild(tempInput);
  };

  return (
    <div className='password'>
      <div className='password__wrapper'>
        <div className='password__content'>{passwordGenerated}</div>
        <img
          className={addClassToIcon}
          src={copyIcon}
          alt='copy icon'
          onClick={handlerCopyPassword}
        />
      </div>
    </div>
  );
};
