import useModal from '../../hooks/useModal';
import Modal from './Modal';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);

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
      <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} handleClose={closeModalContact}>
        formulario...
      </Modal>
    </div>
  );
};

export default Modals;
