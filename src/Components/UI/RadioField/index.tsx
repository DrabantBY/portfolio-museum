import { memo } from 'react';
import { FieldRadioProps } from '../../../types';
import './styles.scss';

const RadioField: React.FC<FieldRadioProps> = memo(
  ({ className, label, name, constValue, handleChange, isChecked }) => {
    return (
      <label className={className}>
        <input
          type='radio'
          name={name}
          onChange={handleChange}
          value={constValue}
          checked={isChecked}
        />
        {label}
      </label>
    );
  }
);

export default RadioField;
