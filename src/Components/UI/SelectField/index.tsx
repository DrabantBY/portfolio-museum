import { useState } from 'react';
import classnames from 'classnames';
import RadioField from '../RadioField';
import useFormState from '../../../hooks/useFormState';
import { FieldSelectProps } from '../../../types';
import { getLabel } from '../../../utils';
import './styles.scss';

const SelectField: React.FC<FieldSelectProps> = ({
  children,
  className,
  name,
  options,
  defaultLabel,
}) => {
  const { state, setInputValue } = useFormState();
  const [isFocus, setIsFocus] = useState(false);
  const classWrapper = classnames('form-select', className, { open: isFocus });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e);
    setIsFocus(false);
  };

  return (
    <div className={classWrapper}>
      {children}
      <div className='form-select-value' onClick={() => setIsFocus(!isFocus)}>
        {state[name] ? getLabel(state[name], options) : defaultLabel}
      </div>

      {isFocus && (
        <div className='form-select-list'>
          {options.map(({ value, label }) => (
            <RadioField
              key={value}
              className='form-select-option'
              label={label}
              name={name}
              constValue={value}
              handleChange={handleChange}
              isChecked={value === state[name]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectField;
