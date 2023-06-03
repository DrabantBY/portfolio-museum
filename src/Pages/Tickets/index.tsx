import TicketsForm from '../../Components/TicketsForm';
import Section from '../Section';

import './styles.scss';

const Tickets = () => {
  return (
    <Section sectionId='tickets'>
      <h2 className='section-title section-tickets__title'>buy tickets</h2>
      <div className='section-tickets__body'>
        <figure className='section-tickets__figure'>
          <img src='Rectangle.jpg' alt='section figure' />
        </figure>
        <TicketsForm />
      </div>
    </Section>
  );
};

export default Tickets;
