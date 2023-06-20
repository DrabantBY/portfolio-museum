import { useEffect, useRef, memo } from 'react';
import classnames from 'classnames';
import { FieldInputPropsType } from '../../../types';
import { getToday } from '../../../utils';
import './styles.scss';

const DateField: React.FC<FieldInputPropsType> = memo(
  ({ icons, className, type, name, placeholder, value, handleChange }) => {
    const classInput = classnames({ active: value });
    const classLabel = classnames('field-form-arrow', className);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }, [value]);

    console.log(name, value);

    return (
      <label className={classLabel}>
        {...icons}
        <input
          className={classInput}
          type={type}
          name={name}
          placeholder={placeholder}
          min={getToday()}
          onChange={handleChange}
          value={value}
          ref={inputRef}
        />
      </label>
    );
  }
);

export default DateField;
