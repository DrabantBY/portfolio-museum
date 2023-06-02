import { Form } from 'react-router-dom';
import './styles.scss';

const TicketsForm = () => {
  return (
    <Form className='section-tickets__form'>
      <fieldset className='form-types section-tickets__form-types'>
        <legend className='form-title section-tickets__form-title form-title_type'>
          ticket type
        </legend>

        <label>
          <input type='radio' name='ticket-type' />
          permanent exhibition
        </label>

        <label>
          <input type='radio' name='ticket-type' />
          temporary exhibition
        </label>

        <label>
          <input type='radio' name='ticket-type' />
          combined admission
        </label>
      </fieldset>

      <fieldset className='form-amount section-tickets__form-amount '>
        <legend className='form-title section-tickets__form-title form-title_amount'>
          amount
        </legend>

        <label>
          Basic 18+
          <input type='number' />
        </label>

        <label>
          Senior 65+
          <input type='number' />
        </label>
      </fieldset>
    </Form>
  );
};

export default TicketsForm;
