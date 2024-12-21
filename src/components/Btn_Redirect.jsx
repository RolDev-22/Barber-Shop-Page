import { Link } from "react-router-dom";

const BtnRedirect = ({ text, url }) => {
  return (
    <Link className="styleBtn" to={url}>
      {text}
    </Link>
  );
};

export default BtnRedirect;
