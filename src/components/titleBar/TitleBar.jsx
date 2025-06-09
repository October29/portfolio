import NavButtons from "../navButtons/NavButtons";
import style from "./TitleBar.module.css";
import logoWhiteHorizontal from "../../assets/logos/logo-white-horizontal.svg";

const TitleBar = () => {

  const title = () => {
    const namePage = window.location.pathname.split("/").pop();
    if (namePage === "") {
      return "octoberDesigner";
    } else if (namePage === "branding") {
      return "/Branding";
    }
  }
  
  return (
    <div className={style.title_container}>
      {title() == "octoberDesigner" ? <img
        className={style.logo}
        src={logoWhiteHorizontal}
        alt="October Designer logo"
      /> : <h1 className={style.page_title}>{title()}</h1>}
      <NavButtons />
    </div>
  );
};

export default TitleBar;
