import { Link } from 'react-router-dom';
import BookingForm from '../../Components/BookingForm';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import './styles.scss';

const Booking = () => {
  return (
    <div className='booking'>
      <Link className='btn-close booking__btn-close' to='/'>
        <span></span>
        <span></span>
      </Link>
      <div className='booking__body'>
        <h3 className='booking-title'>
          <LogoIcon />
          booking tickets
        </h3>
        <h4 className='booking-subtitle'>Tour to Louvre</h4>
        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;
