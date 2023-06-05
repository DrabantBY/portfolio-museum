import { memo } from 'react';
import { FormFieldNumberProps } from '../../../types';
import './styles.scss';

const NumberField: React.FC<FormFieldNumberProps> = memo(
  ({ className, label, name, value, handleClick }) => {
    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <span>
          <button
            type='button'
            disabled={value === 0}
            onClick={() => handleClick(name, value, -1)}
          >
            –
          </button>
          <input
            id={name}
            disabled
            type='number'
            name={name}
            value={value}
            onChange={(e) => e.preventDefault()}
          />
          <button
            type='button'
            disabled={value === 999}
            onClick={() => handleClick(name, value, 1)}
          >
            +
          </button>
        </span>
      </div>
    );
  }
);

export default NumberField;
