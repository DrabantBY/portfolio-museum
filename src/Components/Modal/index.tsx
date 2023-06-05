import { useState } from 'react';
import ModalForm from '../ModalForm';
import './styles.scss';

const Modal = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <button
        className='form-btn section-tickets__form-btn'
        type='button'
        onClick={() => setIsModal(!isModal)}
      >
        buy now
      </button>
      {isModal && <ModalForm handleClick={setIsModal} />}
    </>
  );
};

export default Modal;
