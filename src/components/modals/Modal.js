import './Modal.css';

const Modal = ({ children }) => {
  return (
    <div className='modal is-open'>
      <div className='modal-container'>
        <button className='modal-close'>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
