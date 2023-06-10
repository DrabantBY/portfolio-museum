import useFormState from '../../hooks/useFormState';
import { ReactComponent as TimeIcon } from '../../assets/svg/booking/time.svg';
import { ReactComponent as NameIcon } from '../../assets/svg/booking/name.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/booking/email.svg';
import { ReactComponent as TelIcon } from '../../assets/svg/booking/tel.svg';
import { ReactComponent as ListIcon } from '../../assets/svg/booking/list.svg';
import { ReactComponent as DateIcon } from '../../assets/svg/booking/date.svg';
import { ReactComponent as ArrowIcon } from '../../assets/svg/booking/arrow.svg';

import InputField from '../UI/InputField';
import DateField from '../UI/DateField';
import SelectField from '../UI/SelectField';
import { TIME, TICKETS } from '../../constants';

import './styles.scss';

const BookingForm = () => {
  const { state, setAmount, setInputValue } = useFormState();

  return (
    <form className='booking-form'>
      <DateField
        className='booking-form__field-form'
        type='date'
        name='date'
        placeholder='date'
        value={state.date}
        handleChange={setInputValue}
      >
        <DateIcon />
        <ArrowIcon />
      </DateField>

      <SelectField
        className='booking-form__field-form'
        name='time'
        options={TIME}
        placeholder='time'
        value={state.time}
        handleChange={setInputValue}
      >
        <TimeIcon />
        <ArrowIcon />
      </SelectField>

      <InputField
        className='booking-form__field-form'
        type='text'
        name='name'
        placeholder='name'
        value={state.name.value}
        handleChange={setInputValue}
        isError={state.name.error}
      >
        <NameIcon />
      </InputField>

      <InputField
        className='booking-form__field-form'
        type='email'
        name='email'
        placeholder='email'
        value={state.email.value}
        handleChange={setInputValue}
        isError={state.email.error}
      >
        <EmailIcon />
      </InputField>

      <InputField
        className='booking-form__field-form'
        type='tel'
        name='phone'
        placeholder='phone'
        value={state.phone.value}
        handleChange={setInputValue}
        isError={state.phone.error}
      >
        <TelIcon />
      </InputField>

      <SelectField
        className='booking-form__field-form'
        name='price'
        options={TICKETS}
        placeholder='ticket type'
        value={state.price}
        handleChange={setInputValue}
      >
        <ListIcon />
        <ArrowIcon />
      </SelectField>
    </form>
  );
};

export default BookingForm;
