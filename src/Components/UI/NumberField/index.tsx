import { memo } from 'react';
import { FieldNumberPropsType } from '../../../types';
import './styles.scss';

const NumberField: React.FC<FieldNumberPropsType> = memo(
  ({ className, label, name, value, handleClick }) => {
    console.log(name, value);
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
            disabled={value === 10}
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
