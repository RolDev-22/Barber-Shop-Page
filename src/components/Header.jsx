import { Link } from "react-router-dom";
import { useState } from "react";
import User from "./User";
import imgLog from "../../public/log_page.png";
const Header = () => {
  const [active, setActive] = useState("");

  const handleActive = (index) => {
    setActive(index);
  };

  const items = [
    ["", "Inicio"],
    ["about", "Nosotros"],
    ["services", "Servicios"],
    ["contact", "Contacto"],
  ];

  return (
    <header>
      <div className="logo">
        <img src={imgLog} alt="logo" />
      </div>
      <nav>
        {items.map(([index, item]) => (
          <Link
            onClick={() => handleActive(index)}
            key={index}
            to={`/${index}`}
            className={active === index ? "activeClass" : ""}
          >
            {item}
          </Link>
        ))}
      </nav>
      <div className="menu">
        <User />
      </div>
    </header>
  );
};

export default Header;
