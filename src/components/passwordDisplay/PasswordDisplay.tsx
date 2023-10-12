import './PasswordDisplay.scss';
import copyIcon from '../../assets/copy.svg';

interface Props {
  passwordGenerated: string;
}

export const PasswordDisplay: React.FC<Props> = ({ passwordGenerated }) => {
  const handlerCopyPassword = () => {
    const tempInput = document.createElement('input');
    tempInput.value = passwordGenerated;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(tempInput);
  };

  return (
    <div className='password'>
      <div className='password__wrapper'>
        <div className='password__content'>{passwordGenerated}</div>
        <img
          className='password__icon'
          src={copyIcon}
          alt='copy icon'
          onClick={handlerCopyPassword}
        />
      </div>
    </div>
  );
};
