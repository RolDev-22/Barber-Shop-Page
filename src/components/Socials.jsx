import icFb from "../../public/ic_fb.svg";
import icIg from "../../public/ic_itg.svg";
import icTw from "../../public/ic_x.svg";

const Socials = () => {
  return (
    <>
      <a className="refSocial" href="/" target="_blank">
        <img src={icFb} alt="" />
      </a>

      <a className="refSocial" href="/" target="_blank">
        <img src={icTw} alt="" />
      </a>

      <a className="refSocial" href="/" target="_blank">
        <img src={icIg} alt="" />
      </a>
    </>
  );
};

export default Socials;
