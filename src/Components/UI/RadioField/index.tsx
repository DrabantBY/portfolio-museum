import { memo } from 'react';
import { FieldRadioPropsType } from '../../../types';
import './styles.scss';

const RadioField: React.FC<FieldRadioPropsType> = memo(
  ({ className, label, name, value, handleChange, isChecked }) => {
    console.log(name, 'radio', value);
    return (
      <label className={className}>
        <input
          type='radio'
          name={name}
          onChange={handleChange}
          value={value}
          checked={isChecked}
        />
        {label}
      </label>
    );
  }
);

export default RadioField;
