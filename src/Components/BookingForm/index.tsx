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

      <DateField
        className='booking-form__field-form'
        type='time'
        name='time'
        placeholder='time'
      >
        <TimeIcon />
        <ArrowIcon />
      </DateField>

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

      <div className='booking-form__field-form'>
        <ListIcon />
        <select name=''>
          <option value='0'>ticket type</option>
          <option value='20'>permanent exhibition</option>
          <option value='30'>temporary exhibition</option>
          <option value='40'>combined admission</option>
        </select>
      </div>
    </form>
  );
};

export default BookingForm;
