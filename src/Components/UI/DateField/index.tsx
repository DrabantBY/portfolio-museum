import { useState } from 'react';
import classnames from 'classnames';
import useFormState from '../../../hooks/useFormState';
import { FieldInputProps } from '../../../types';
import './styles.scss';

const DateField: React.FC<FieldInputProps> = ({
  children,
  className,
  type,
  name,
  placeholder,
  min,
  max,
}) => {
  const { state, setInputValue } = useFormState();
  const [isOpen, setIsOpen] = useState(false);

  const classInput = classnames({ active: state[name] });
  const classLabel = classnames('field-form-arrow', className, {
    open: isOpen,
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e);
    setTimeout(() => e.target.blur(), 0);
  };

  return (
    <label className={classLabel}>
      {children}
      <input
        className={classInput}
        type={type}
        name={name}
        placeholder={placeholder}
        min={min}
        max={max}
        onChange={handleChange}
        value={state[name as 'date' | 'time']}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
    </label>
  );
};

export default DateField;
