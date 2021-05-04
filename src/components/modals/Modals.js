import useModal from '../../hooks/useModal';

import Loader from '../loader/Loader';
import Modal from './Modal';
import ModalPortal from './ModalPortal';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  // const [isOpenContact, openModalContact, closeModalContact] = useModal(false);

  const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} handleClose={closeModal1}>
        <h3>Modal 1</h3>
        <p>Este es el contenido de mi modal 1</p>
        <img src='https://placeimg.com/400/400/animals' alt='Animals' />
      </Modal>
      <h2>Modales</h2>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} handleClose={closeModal2}>
        <h3>Modal 2</h3>
        <p>Este es el contenido de mi modal 2</p>
        <img src='https://placeimg.com/400/400/animals' alt='Animals' />
      </Modal>
      <h2>Modal Formulario</h2>
      <button onClick={openModalPortal}>Modal en Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} handleClose={closeModalPortal}>
        <Loader />
        <h3>Modal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM
          diferente a donde carga nuestra app de React, gracias a un React
          Portal
        </p>
        <img src='https://placeimg.com/400/400/nature' alt='Tech' />
      </ModalPortal>
    </div>
  );
};

export default Modals;
