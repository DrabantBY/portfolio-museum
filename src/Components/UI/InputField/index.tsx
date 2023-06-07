import useFormState from '../../../hooks/useFormState';
import classnames from 'classnames';
import { InputFieldProps, FormInitStateType } from '../../../types';
import './styles.scss';

const InputField: React.FC<InputFieldProps> = ({
  children,
  className,
  type,
  name,
  placeholder,
}) => {
  const { state, setInputValue } = useFormState();
  const classLabel = classnames('field-form', className);

  return (
    <label className={classLabel}>
      {children}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={state[name as keyof FormInitStateType]}
        onChange={setInputValue}
      />
    </label>
  );
};

export default InputField;
