import BrandingItem from '../components/brandingItem/BrandingItem';
import TitleBar from '../components/titleBar/TitleBar';
import style from './Branding.module.css';

/* construir modal para imagenes */

const Branding = () => {
  return (
    <main className={style.branding_container}>
      <TitleBar />
      <BrandingItem />
    </main>
  )
}

export default Branding;