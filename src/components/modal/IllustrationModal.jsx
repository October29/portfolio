import style from './IllustrationModal.module.css';
import returnButton from '../../assets/images/return-icon.webp';
import forwardIcon from '../../assets/images/forward-icon.webp';
import closeIcon from '../../assets/images/close-icon.webp';

const IllustrationModal = ({ image, onClose, onNext, onPrevious }) => {
  return (
    <div className={style.modal_overlay} onClick={onClose}>
      <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
        <img src={image.url} alt={image.alt} />
        
        <div className={style.navigation_buttons}>
          <button 
            className={`${style.nav_button} ${style.prev_button}`} 
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
          >
            <img src={returnButton} alt="Imagen anterior" />
          </button>
          
          <button className={`${style.close_button} ${style.nav_button}`} onClick={onClose}>
            <img src={closeIcon} alt="Cerrar" />
          </button>
          
          <button 
            className={`${style.nav_button} ${style.next_button}`} 
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <img src={forwardIcon} alt="Siguiente imagen" />
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default IllustrationModal;