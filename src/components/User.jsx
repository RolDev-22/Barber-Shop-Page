import { useState } from "react";
import imgOp from "../../public/ic_menu.svg";
import imgOpCl from "../../public/ic_menu_cl.svg";
import { Link } from "react-router-dom";
const User = () => {
  const [dropdown, setDropdown] = useState(false);
  const items = [
    ["Login", "Login"],
    ["", "Inicio"],
    ["about", "Nosotros"],
    ["services", "Servicios"],
    ["contact", "Contacto"],
  ];
  return (
    <>
      <div className="containerUs">
        <img
          onClick={() => setDropdown(!dropdown)}
          src={dropdown ? imgOpCl : imgOp}
          alt=""
        />
      </div>

      <div className={`dropdawn-menu ${dropdown ? "active" : ""}`}>
        <div className="content">
          {items.map(([index, item]) => (
            <Link key={index} to={`/${index}`}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
