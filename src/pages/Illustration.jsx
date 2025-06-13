import { useState } from "react";
import style from "./Illustration.module.css";
import TitleBar from "../components/titleBar/TitleBar";
import { illustrationData } from "../data/projects.data";


const Illustration = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (illustration) => {
    setSelectedImage(illustration);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className={style.illutration_section}>
      <TitleBar /> 
      <div className={style.illustrations_grid}>
        {illustrationData.map((illustration) => (
          <div
            key={illustration.id}
            className={style.illustration_container}
            onClick={() => handleImageClick(illustration)}
          >
            <img src={illustration.url} alt={illustration.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={style.modal_overlay} onClick={handleCloseModal}>
          <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.alt} />
            <button className={style.close_button} onClick={handleCloseModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Illustration;