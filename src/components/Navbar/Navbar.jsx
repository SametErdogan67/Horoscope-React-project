import "./Navbar.scss";
import logo from "../../helper/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" width="100px" />
      </div>

      <div className="links">
        <a href="#horoscope">Horoscope</a>
        <a href="#daily">Daily</a>
        <a href="#tarot">Tarot</a>
        <a href="#article">Article</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
