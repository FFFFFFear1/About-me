import Logo from "../images/Logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar__links">
        <a href="#">ГЛАВНАЯ</a>
        <a href="#">ОБ АВТОРЕ</a>
        <a href="#">РАБОТЫ</a>
        <a href="#">ПРОЦЕСС</a>
        <a href="#">КОНТАКТЫ</a>
      </div>
    </div>
  );
}
