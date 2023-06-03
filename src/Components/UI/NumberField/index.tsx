import { FormFieldNumberProps } from '../../../types';
import './styles.scss';

const NumberField: React.FC<FormFieldNumberProps> = ({
  className,
  label,
  name,
  handleChange,
  value,
}) => {
  return (
    <label className={className}>
      {label}
      <span>
        <button type='button'>–</button>
        <input
          min={1}
          max={999}
          type='number'
          name={name}
          // value={value}
          defaultValue={value}
          onChange={handleChange}
        />
        <button type='button'>+</button>
      </span>
    </label>
  );
};

export default NumberField;
