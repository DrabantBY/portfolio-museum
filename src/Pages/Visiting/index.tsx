import { TITLES } from '../../constants';
import Section from '../Section';
import Card from '../../Components/UI/Card';
import './styles.scss';

const Visiting = () => {
  return (
    <Section sectionId='visiting'>
      <h2 className='title section-visiting__title'>virtual tour</h2>
      <ul className='cards section-visiting__cards'>
        {TITLES.map((title, index) => (
          <Card key={title} title={title} index={index} />
        ))}
      </ul>
    </Section>
  );
};

export default Visiting;
