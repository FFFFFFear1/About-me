import Logo from "../images/Logo.png";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar__links">
        <Link
          style={{ cursor: "pointer" }}
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          ГЛАВНАЯ
        </Link>
        <Link
          style={{ cursor: "pointer" }}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
        >
          ОБ АВТОРЕ
        </Link>
        <Link
          style={{ cursor: "pointer" }}
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          РАБОТЫ
        </Link>
        <Link
          style={{ cursor: "pointer" }}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          КОНТАКТЫ
        </Link>
      </div>
    </div>
  );
}
