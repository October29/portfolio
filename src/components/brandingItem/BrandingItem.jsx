import style from './BrandingItem.module.css';

const BrandingItem = () => {
  return (
    <div className={style.branding_item_container}>
      <div className={style.text_container}>
        <h2>Bunny Velvet</h2>
        <p>
          Si yo pudiera alzar el vuelo
Alzar el vuelo como hace el cóndor que vuela alto muy alto
Me fuera lejos, pero bien lejos
Adonde nadie nunca supiera del papa de Rafael Santos

Porque una pena tras otra pena estan acabando conmigo
Y yo por ser un hombre tan fuerte he podido resistir
Ay y no me quiero morir porque me duelen mis hijos

Porque una pena tras otra pena estan acabando conmigo
Y yo por ser un hombre tan fuerte he podido resistir
Ay y no me quiero morir porque me duelen mis hijos

Mejor me voy, mejor me voy
Como hace el cóndor herido
Ay! mejor me voy, mejor me voy
Como hace el cóndor herido.
        </p>
      </div>
      <div className={style.images_container}>
        <div className={style.image_wrapper}>
          <img
            src="https://picsum.photos/500/500?random=<%= new Date().getTime() %>"
            alt="Diseño y rediseño de identidad visual"
          />
        </div>
        <div className={style.image_wrapper}>
          <img
            src="https://picsum.photos/500/500?random=<%= new Date().getTime() %>"
            alt="Diseño y rediseño de identidad visual"
          />
        </div>
        <div className={style.image_wrapper}>
          <img
            src="https://picsum.photos/500/500?random=<%= new Date().getTime() %>"
            alt="Diseño y rediseño de identidad visual"
          />
        </div>
        <div className={style.image_wrapper}>
          <img
            src="https://picsum.photos/500/500?random=<%= new Date().getTime() %>"
            alt="Diseño y rediseño de identidad visual"
          />
        </div>
        <div className={style.image_wrapper}>
          <img
            src="https://picsum.photos/500/500?random=<%= new Date().getTime() %>"
            alt="Diseño y rediseño de identidad visual"
          />
        </div>
        <div className={style.image_wrapper}>
          <img
            src="https://picsum.photos/500/500?random=<%= new Date().getTime() %>"
            alt="Diseño y rediseño de identidad visual"
          />
        </div>
        <div className={style.image_wrapper}>
          <img
            src="https://picsum.photos/500/500?random=<%= new Date().getTime() %>"
            alt="Diseño y rediseño de identidad visual"
          />
        </div>
        
      </div>
    </div>
  );
}

export default BrandingItem;