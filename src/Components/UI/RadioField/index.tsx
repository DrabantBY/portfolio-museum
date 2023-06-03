import { memo } from 'react';
import { FormFieldRadioProps } from '../../../types';
import './styles.scss';

const RadioField: React.FC<FormFieldRadioProps> = memo(
  ({ className, label, name, initValue, handleChange, isChecked }) => {
    return (
      <label className={className}>
        <input
          type='radio'
          name={name}
          onChange={handleChange}
          value={initValue}
          checked={isChecked}
        />
        {label}
      </label>
    );
  }
);

export default RadioField;
