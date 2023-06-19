import { memo, useState, useCallback } from 'react';
import classnames from 'classnames';
import RadioField from '../RadioField';
import { FieldSelectPropsType } from '../../../types';
import { getLabel } from '../../../utils';
import './styles.scss';

const SelectField: React.FC<FieldSelectPropsType> = memo(
  ({ icons, className, name, value, handleChange, options, placeholder }) => {
    const [isFocus, setIsFocus] = useState(false);
    const classWrapper = classnames('form-select', className, {
      open: isFocus,
    });

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> =
      useCallback(
        (e) => {
          handleChange(e);
          setIsFocus(false);
        },
        [handleChange]
      );

    console.log(name, value);

    return (
      <div className={classWrapper}>
        {...icons}
        <div className='form-select-value' onClick={() => setIsFocus(!isFocus)}>
          {value ? getLabel(value.toString(), options) : placeholder}
        </div>

        {isFocus && (
          <div className='form-select-list'>
            {options.map((option) => (
              <RadioField
                key={option.value}
                className='form-select-option'
                label={option.label}
                name={name}
                value={option.value}
                handleChange={handleOnChange}
                isChecked={value === option.value}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default SelectField;
