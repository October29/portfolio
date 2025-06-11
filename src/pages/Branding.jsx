import BrandingItem from '../components/brandingItem/BrandingItem';
import TitleBar from '../components/titleBar/TitleBar';
import style from './Branding.module.css';
import brandingData from '../data/projects.data';


const Branding = () => {
  
  return (
    <main className={style.branding_container}>
      <TitleBar />
      {brandingData.map((item, index) => {
        return (
          <BrandingItem
            key={index}
            brandName={item.brandName}
            description={item.description}
            color={item.color}
            />
        )
      }
      )}
    </main>
  )
}

export default Branding;