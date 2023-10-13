import './InputUniversal.scss';

interface Props {
  id: string;
  htmlFor: string;
  text: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputUniversal: React.FC<Props> = ({
  id,
  htmlFor,
  text,
  name,
  checked,
  onChange,
}) => {
  return (
    <div className='input-checkbox'>
      <input
        className='input-checkbox__value'
        type='checkbox'
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className='input-checkbox__label' htmlFor={htmlFor}>
        {text}
      </label>
    </div>
  );
};
