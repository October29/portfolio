import style from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={e => e.stopPropagation()}>
        {children}
        <button className={style.closeButton} onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Modal;