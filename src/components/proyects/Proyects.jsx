import { Link } from "react-router-dom";
import style from "./Proyects.module.css";
import { forwardRef } from "react";

const Proyects = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="proyects" className={style.proyects_container}>
      <h2>Proyectos</h2>
      <div className={style.categories_proyects}>
        {/* Branding category */}
        <div className={style.category}>
          <Link to="/branding">Branding</Link>
          <img
            src="https://picsum.photos/300/500"
            alt="Diseño y rediseño de identidad visual"
            srcset=""
          />
        </div>

        {/* Social media */}
        <div className={style.category}>
          <Link to="/redes-sociales">Redes Sociales</Link>
          <img
            src="https://picsum.photos/300/500"
            alt="Diseño para redes sociales"
            srcset=""
          />
        </div>
        {/* Ilustracion */}
        <div className={style.category}>
          <Link to="/ilustracion">Ilustración</Link>
          <img
            src="https://picsum.photos/300/500"
            alt="Ilustraciones personalizadas"
            srcset=""
          />
      </div>
      </div>
    </section>
  );
});

export default Proyects;
