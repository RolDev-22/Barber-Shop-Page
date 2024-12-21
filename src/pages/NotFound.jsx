import BntLink from "../components/Btn_Redirect";
import img1 from "../../public/img_aux_1.png";
import img2 from "../../public/img_aux_2.png";

export default function NotFound() {
  return (
    <>
      <div className="content-general contentNotFound">
        <div className="container">
          <h1>404</h1>
          <img src={img1} alt="" />
          <h2>NOT FOUND</h2>
          <h3>PÁGINA NO ENCONTRADA</h3>
          <div className="logs">
            <img src={img2} alt="" />
            <div className="containerBtn">
              <BntLink text="Inicio" url="/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
