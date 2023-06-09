import { ReactComponent as TimeIcon } from '../../assets/svg/booking/time.svg';
import { ReactComponent as NameIcon } from '../../assets/svg/booking/name.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/booking/email.svg';
import { ReactComponent as TelIcon } from '../../assets/svg/booking/tel.svg';
import { ReactComponent as ListIcon } from '../../assets/svg/booking/list.svg';
import { ReactComponent as DateIcon } from '../../assets/svg/booking/date.svg';
import { ReactComponent as ArrowIcon } from '../../assets/svg/booking/arrow.svg';

import { getToday } from '../../utils';

import InputField from '../UI/InputField';
import DateField from '../UI/DateField';
import SelectField from '../UI/SelectField';
import { TIME, TICKETS } from '../../constants';

import './styles.scss';

const BookingForm = () => {
  return (
    <form className='booking-form'>
      <DateField
        className='booking-form__field-form'
        type='date'
        name='date'
        placeholder='date'
        min={getToday()}
      >
        <DateIcon />
        <ArrowIcon />
      </DateField>

      <SelectField
        className='booking-form__field-form'
        name='time'
        options={TIME}
        defaultLabel='time'
      >
        <TimeIcon />
        <ArrowIcon />
      </SelectField>

      <InputField
        className='booking-form__field-form'
        type='text'
        name='name'
        placeholder='name'
      >
        <NameIcon />
      </InputField>

      <InputField
        className='booking-form__field-form'
        type='email'
        name='email'
        placeholder='email'
      >
        <EmailIcon />
      </InputField>

      <InputField
        className='booking-form__field-form'
        type='tel'
        name='phone'
        placeholder='phone'
      >
        <TelIcon />
      </InputField>

      <SelectField
        className='booking-form__field-form'
        name='price'
        options={TICKETS}
        defaultLabel='ticket type'
      >
        <ListIcon />
        <ArrowIcon />
      </SelectField>
    </form>
  );
};

export default BookingForm;
