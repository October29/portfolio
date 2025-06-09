import style from "./AdressBar.module.css";


const AdressBar = () => {
  return (
    <div className={style.adress_bar_container}>
      <div className={style.adress_bar_outline}>
        <div className={style.adress_bar_text}>
          <span>{window.location.href}</span>
        </div>
      </div>

    </div>
  );
};

export default AdressBar;
