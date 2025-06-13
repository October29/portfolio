import { useState } from 'react';
import style from './BrandingItem.module.css';
import { brandingData } from '../../data/projects.data';
import Modal from '../modal/Modal';

const BrandingItem = ({ brandName, description, color }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const currentProject = brandingData.find(project => project.brandName === brandName);
  
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else {
      // Ir a la última imagen si estamos en la primera
      setSelectedImageIndex(currentProject.images.length - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex < currentProject.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else {
      // Volver a la primera imagen si estamos en la última
      setSelectedImageIndex(0);
    }
  };

  return (
    <div className={style.branding_item_container}>
      {/* Title and description content */}
      <div className={style.text_container} style={{ backgroundColor: color }}>
        <h2>{brandName}</h2>
        <p>{description}</p>
      </div>

      {/* Images gallery */}
      <div className={style.images_container}>
        {currentProject && currentProject.images.map((image, index) => (
          <div 
            key={image.id} 
            className={style.image_wrapper}
            style={{ borderColor: color }}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      <Modal 
        isOpen={selectedImageIndex !== null} 
        onClose={handleCloseModal} 
        color={color}
        brandName={brandName}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      >
        {selectedImageIndex !== null && currentProject && (
          <img
            src={currentProject.images[selectedImageIndex].url}
            alt={currentProject.images[selectedImageIndex].alt}
          />
        )}
      </Modal>
    </div>
  );
}

export default BrandingItem;