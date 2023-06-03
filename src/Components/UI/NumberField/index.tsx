import { memo } from 'react';
import { FormFieldNumberProps } from '../../../types';
import './styles.scss';

const NumberField: React.FC<FormFieldNumberProps> = memo(
  ({ className, label, name, value, handleClick }) => {
    return (
      <label className={className}>
        {label}
        <span>
          <button
            type='button'
            disabled={value === 0}
            onClick={() => handleClick(name, value, -1)}
          >
            –
          </button>
          <input
            type='number'
            name={name}
            value={value}
            onChange={(e) => e.preventDefault()}
          />
          <button type='button' onClick={() => handleClick(name, value, 1)}>
            +
          </button>
        </span>
      </label>
    );
  }
);

export default NumberField;
