import { Link } from "react-router-dom";
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
            <Link to="/">INICIO</Link>
          </div>
        </div>
      </div>
    </>
  );
}
