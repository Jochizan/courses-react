import './Modal.css';

const Modal = ({ children, isOpen, handleClose }) => {
  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className='modal-container'>
        <button className='modal-close' onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
