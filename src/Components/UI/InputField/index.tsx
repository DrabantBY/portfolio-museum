import useFormState from '../../../hooks/useFormState';
import classnames from 'classnames';
import { FieldInputProps } from '../../../types';
import './styles.scss';

const InputField: React.FC<FieldInputProps> = ({
  children,
  className,
  type,
  name,
  placeholder,
}) => {
  const { state, setInputValue } = useFormState();
  const classLabel = classnames('field-form', className, {
    error: state[name as 'name' | 'phone' | 'email'].error,
  });

  return (
    <label className={classLabel}>
      {children}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={state[name as 'name' | 'phone' | 'email'].value}
        onChange={setInputValue}
      />
      {state[name as 'name' | 'phone' | 'email'].error && (
        <span>* invalid {name}</span>
      )}
    </label>
  );
};

export default InputField;
