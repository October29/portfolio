import { useState } from "react";
import style from "./Illustration.module.css";
import TitleBar from "../components/titleBar/TitleBar";
import IllustrationModal from "../components/modal/IllustrationModal";
import { illustrationData } from "../data/projects.data";


const Illustration = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (illustration) => {
    const index = illustrationData.findIndex(img => img.id === illustration.id);
    setSelectedIndex(index);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => 
      prevIndex === illustrationData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setSelectedIndex((prevIndex) => 
      prevIndex === 0 ? illustrationData.length - 1 : prevIndex - 1
    );
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

      {selectedIndex !== null && (
        <IllustrationModal 
          image={illustrationData[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </main>
  );
}

export default Illustration;