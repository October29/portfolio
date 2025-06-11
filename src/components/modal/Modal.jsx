import style from "./Modal.module.css";
import closeButton from "../../assets/images/close-icon.webp";
import forwardIcon from "../../assets/images/forward-icon.webp";
import returnIcon from "../../assets/images/return-icon.webp";

/* REQUIERE ESTILOS */
const Modal = ({ isOpen, onClose, children, color, brandName, onPrev, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={style.tag} >{brandName}</h2>
        {children}
        <button
          className={`${style.navButton} ${style.prevButton}`}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          style={{ borderColor: color }}
        >
          <img src={returnIcon} alt="retroceder" />
        </button>
        <button className={`${style.navButton} ${style.closeButton}`} onClick={onClose}>
          <img src={closeButton} alt="Cerrar" />
        </button>

        <button
          className={`${style.navButton} ${style.nextButton}`}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          style={{ borderColor: color }}
        >
          <img src={forwardIcon} alt="Avanzar" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
