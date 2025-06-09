import style from './BrandingItem.module.css';
import bradingImages from '../../data/projectsImages.data'

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
Ay y no me quiero morir porque me duelen mis hijos.
        </p>
      </div>
      <div className={style.images_container}>
        {bradingImages.map((image) => {
          return (
            <div key={image.id} className={style.image_wrapper}>
              <img
                src={image.url}
                alt={image.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrandingItem;