import { ReactComponent as DateIcon } from '../../assets/svg/booking/date.svg';
import { ReactComponent as TimeIcon } from '../../assets/svg/booking/time.svg';
import './styles.scss';

const BookingForm = () => {
  return (
    <form className='booking-form'>
      <label className='booking-form__field'>
        <DateIcon />
        <input list='days' type='date' min='09-06-2023' />
        <datalist id='days'></datalist>
      </label>
      <div className='booking-form__field'>
        <TimeIcon />
        <input type='time' />
      </div>
      <div className='booking-form__field'>
        <input type='text' />
      </div>
      <div className='booking-form__field'>
        <input type='email' />
      </div>
      <div className='booking-form__field'>
        <input type='tel' />
      </div>
      <div className='booking-form__field'>
        <select name='' id=''></select>
      </div>
    </form>
  );
};

export default BookingForm;
