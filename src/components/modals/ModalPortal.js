import ReactDOM from 'react-dom';

import './Modal.css';

const Modal = ({ children, isOpen, handleClose }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && 'is-open'}`} onClick={handleClose}>
      <div className='modal-container' onClick={handleModalContainerClick}>
        {/* le agrego el stop propagation porque sino seria como si al hacer click al modal-container tambien le haría click al div principal con la clase modal y cerraria todo */}
        <button className='modal-close' onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById('modal')
  );
};

export default Modal;
