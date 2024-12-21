import BntLink from "../components/Btn_Redirect";
import Socials from "../components/Socials";
import imgJmb from "../../public/bg_jumbotron.jpg";
import { useState, useEffect } from "react";

export default function Home() {
  const [efect, setEfect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEfect(true);
    });
  }, []);

  return (
    <>
      <div className="content-general contentHome">
        <div className="container">
          <div className="cont-left">
            <h1 className={efect ? "desplaceLeft" : ""}>
              STYLES CREW BARBER SHOP
            </h1>
            <h3 className={efect ? "desplaceLeft" : ""}>
              Ven con nosotros y te sorprenderas con nuestros servicios de
              calidad y profesionalismo para tu cabello y barba de la mejor
              calidad
            </h3>
            <div className={`containerBtn ${efect ? "desplaceBtn" : ""}`}>
              <BntLink text="Servicios" url="/services" />
            </div>
            <div className={`containerSocial ${efect ? "desplaceBtn" : ""}`}>
              <Socials />
            </div>
          </div>
          <div className="cont-rigth">
            <img src={imgJmb} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
