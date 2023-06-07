import { Link } from 'react-router-dom';
import NumberField from '../UI/NumberField';
import RadioField from '../UI/RadioField';
import useFormState from '../../hooks/useFormState';
import './styles.scss';

const TicketsForm = () => {
  const { state, setPrice, setAmount } = useFormState();

  return (
    <form className='section-tickets__form'>
      <div className='form-types section-tickets__form-types'>
        <h3 className='form-title section-tickets__form-title form-title_type'>
          ticket&nbsp;type
        </h3>

        <RadioField
          className='form-radio-field section-tickets__form-radio-field'
          label='permanent exhibition'
          name='ticket-type'
          constValue='20'
          handleChange={setPrice}
          isChecked={20 === state.price}
        />

        <RadioField
          className='form-radio-field section-tickets__form-radio-field'
          label='temporary exhibition'
          name='ticket-type'
          constValue='30'
          handleChange={setPrice}
          isChecked={30 === state.price}
        />

        <RadioField
          className='form-radio-field section-tickets__form-radio-field'
          label='combined admission'
          name='ticket-type'
          constValue='40'
          handleChange={setPrice}
          isChecked={40 === state.price}
        />
      </div>

      <div className='form-amount section-tickets__form-amount '>
        <h3 className='form-title section-tickets__form-title form-title_amount'>
          amount
        </h3>

        <NumberField
          className='form-number-field section-tickets__form-number-field'
          label='basic 18+'
          name='basic'
          value={state.basic}
          handleClick={setAmount}
        />
        <NumberField
          className='form-number-field section-tickets__form-number-field'
          label='senior 65+'
          name='senior'
          value={state.senior}
          handleClick={setAmount}
        />

        <span className='form-total section-tickets__form-total'>
          Total: <span>{state.total}€</span>
        </span>

        <Link className='form-link section-tickets__form-link' to='/booking'>
          buy now
        </Link>
      </div>
    </form>
  );
};

export default TicketsForm;
