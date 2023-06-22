import useFormState from '../../hooks/useFormState';
import InputField from '../UI/InputField';
import DateField from '../UI/DateField';
import SelectField from '../UI/SelectField';
import NumberField from '../UI/NumberField';
import { useMemo } from 'react';
import { TIME, TICKETS } from '../../constants';
import { ReactComponent as TimeIcon } from '../../assets/svg/booking/time.svg';
import { ReactComponent as NameIcon } from '../../assets/svg/booking/name.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/booking/email.svg';
import { ReactComponent as TelIcon } from '../../assets/svg/booking/tel.svg';
import { ReactComponent as ListIcon } from '../../assets/svg/booking/list.svg';
import { ReactComponent as DateIcon } from '../../assets/svg/booking/date.svg';
import { ReactComponent as ArrowIcon } from '../../assets/svg/booking/arrow.svg';
import './styles.scss';

const BookingForm = () => {
  const { state, setAmount, setInputValue } = useFormState();

  const memoNameIcon = useMemo(() => [<NameIcon />], []);
  const memoTelIcon = useMemo(() => [<TelIcon />], []);
  const memoEmailIcon = useMemo(() => [<EmailIcon />], []);
  const memoDateIcons = useMemo(() => [<DateIcon />, <ArrowIcon />], []);
  const memoTimeIcons = useMemo(() => [<TimeIcon />, <ArrowIcon />], []);
  const memoListIcons = useMemo(() => [<ListIcon />, <ArrowIcon />], []);

  return (
    <form className='booking-form'>
      <DateField
        className='booking-form__field-form'
        type='date'
        name='date'
        placeholder='date'
        value={state.date}
        handleChange={setInputValue}
        icons={memoDateIcons}
      />

      <SelectField
        className='booking-form__field-form'
        name='time'
        options={TIME}
        placeholder='time'
        value={state.time}
        handleChange={setInputValue}
        icons={memoTimeIcons}
      />

      <InputField
        className='booking-form__field-form'
        type='text'
        name='name'
        placeholder='name'
        value={state.name.value}
        handleChange={setInputValue}
        isError={state.name.error}
        icons={memoNameIcon}
      />

      <InputField
        className='booking-form__field-form'
        type='email'
        name='email'
        placeholder='email'
        value={state.email.value}
        handleChange={setInputValue}
        isError={state.email.error}
        icons={memoEmailIcon}
      />

      <InputField
        className='booking-form__field-form'
        type='tel'
        name='phone'
        placeholder='phone'
        value={state.phone.value}
        handleChange={setInputValue}
        isError={state.phone.error}
        icons={memoTelIcon}
      />

      <SelectField
        className='booking-form__field-form'
        name='price'
        options={TICKETS}
        placeholder='ticket type'
        value={state.price}
        handleChange={setInputValue}
        icons={memoListIcons}
      />

      <div className='booking-form__section'>
        <NumberField
          className='booking-form__number-field '
          label={`basic 18+ (${state.price} €)`}
          name='basic'
          value={state.basic}
          handleClick={setAmount}
        />
        <NumberField
          className='booking-form__number-field '
          label={`senior 65+ (${Number(state.price) / 2} €)`}
          name='senior'
          value={state.senior}
          handleClick={setAmount}
        />
      </div>
    </form>
  );
};

export default BookingForm;
