import { Link } from "react-router-dom";
// import { ReactComponent as WhatsApp } from "../assets/svgs/WhatsappIcon.svg";
import whatsappIcon from "../assets/svgs/WhatsappIcon.svg";
import { clientDetails } from "../contant";
const WhatsAppIcon = () => {
  return (
    <Link
      className="fixed group bottom-[1.5rem] hover:-translate-y-1 z-30 border border-black bg-white rounded-full right-[1.5rem] transition-all duration-200"
      to={`https://wa.me/${clientDetails.whatsappbox}`}
      target="_blank"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp Icon"
        className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] fill-green-500 group-hover:fill-primary group-hover:scale-110 rounded-full shadow-transparent shadow-large group-hover:shadow-primary/50 transition-all duration-300"
      />{" "}
    </Link>
  );
};

export default WhatsAppIcon;