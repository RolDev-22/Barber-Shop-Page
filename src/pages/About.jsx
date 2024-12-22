import imgAbAux from "../../public/aux_abt.jpg";
import BntLink from "../components/Btn_Redirect";
import CNews from "../components/News";
import { useState, useEffect } from "react";

export default function About() {
  const [efect, setEfect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEfect(true);
    });
  }, []);

  return (
    <>
      <div className="content-general contentAbout">
        <div className="container">
          <div className="cont-left">
            <img
              src={imgAbAux}
              alt=""
              className={efect ? "desplaceLeft" : ""}
            />
          </div>
          <div className="cont-rigth">
            <h2 className={efect ? "desplaceRigth" : ""}>
              STYLES CREW BARBER SHOP
            </h2>
            <h3 className={efect ? "desplaceRigth" : ""}>
              Especialistas en atención de la mejor calidad y precio
            </h3>
            <h4 className={efect ? "desplaceRigth" : ""}>
              Contamos con profesionales altamente capacitados y con experiencia
              en el rubro de la barberia y el cabello reserva tu cita y te
              sorprenderas para más información preciona el botón ↙️
            </h4>
            <div className={`containerBtn ${efect ? "desplaceRigth" : ""}`}>
              <BntLink text="Contactanos" url="/contact" />
            </div>
          </div>
          <div className={`cont-buttom ${efect ? "desplaceBtn" : ""}`}>
            <CNews />
          </div>
        </div>
      </div>
    </>
  );
}
