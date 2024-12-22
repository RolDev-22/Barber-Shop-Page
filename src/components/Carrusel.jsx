import img1 from "../../public/aux_1.jpg";
import img2 from "../../public/aux_2.jpg";
import img3 from "../../public/aux_3.jpg";
import img4 from "../../public/aux_4.jpg";
import { useEffect, useState } from "react";

const Carrusel = () => {
  const [imageCarrusel, setImageCarrusel] = useState(0);
  const img = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageCarrusel((prev) => (prev + 1) % img.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="carrusel">
        {img.map((image, index) => (
          <img
            key={index}
            className={`imgCarrusel ${index === imageCarrusel ? "active" : ""}`}
            src={image}
            alt={`Imagen ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default Carrusel;
