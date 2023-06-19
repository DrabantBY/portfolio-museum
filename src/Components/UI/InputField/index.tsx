import { memo } from 'react';
import classnames from 'classnames';
import { FieldInputPropsType } from '../../../types';
import './styles.scss';

const InputField: React.FC<FieldInputPropsType> = memo(
  ({
    icons,
    className,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isError,
  }) => {
    const classLabel = classnames('field-form', className, {
      error: isError,
    });
    console.log(name, value);
    return (
      <label className={classLabel}>
        {...icons}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {isError && <span>* invalid {name}</span>}
      </label>
    );
  }
);

export default InputField;
