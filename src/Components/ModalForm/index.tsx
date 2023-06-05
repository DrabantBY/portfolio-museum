import { createPortal } from 'react-dom';
import './styles.scss';

const ModalForm: React.FC<{ handleClick: (arg: boolean) => void }> = ({
  handleClick,
}) => {
  return createPortal(
    <div className='modal-form' onClick={() => handleClick(false)}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam
      maiores aperiam nulla aliquam dolore temporibus dolorum adipisci, ducimus
      ut est. Distinctio tempora minima nobis nulla molestiae, placeat itaque
      ducimus.
    </div>,
    document.body
  );
};

export default ModalForm;
