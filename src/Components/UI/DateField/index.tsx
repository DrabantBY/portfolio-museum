import { useState, memo } from 'react';
import classnames from 'classnames';
import { FieldInputPropsType } from '../../../types';
import { getToday } from '../../../utils';
import './styles.scss';

const DateField: React.FC<FieldInputPropsType> = memo(
  ({ icons, className, type, name, placeholder, value, handleChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const classInput = classnames({ active: value });
    const classLabel = classnames('field-form-arrow', className, {
      open: isOpen,
    });

    console.log(name, value);

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      handleChange(e);
      setTimeout(() => e.target.blur(), 0);
    };

    return (
      <label className={classLabel}>
        {...icons}
        <input
          className={classInput}
          type={type}
          name={name}
          placeholder={placeholder}
          min={getToday()}
          onChange={handleOnChange}
          value={value}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
        />
      </label>
    );
  }
);

export default DateField;
