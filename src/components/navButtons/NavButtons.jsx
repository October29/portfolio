import style from './NavButtons.module.css';
import returnIcon from "@assets/images/return-icon.webp";
import forwardIcon from "@assets/images/forward-icon.webp";
import homeIcon from "@assets/images/home-icon.webp";

const NavButtons = () => {
  return (
          <div className={style.bar_button_container}>
        <button
          className={style.nav_button}
          onClick={() => window.history.back()}
        >
          <img src={returnIcon} alt="Volver" />
        </button>
        <button
          className={style.nav_button}
          onClick={() => window.location.href = "/"} >
          <img src={homeIcon} alt="Inicio" />
        </button>
        <button
          className={style.nav_button}
          onClick={() => window.history.forward()}
        >
          <img src={forwardIcon} alt="Avanzar" />
        </button>
      </div>
  )
}

export default NavButtons;