import "./NavBar.css"
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {

  // const navBarSections = ["home", "about", "productos/polemoniaceae", "productos/rosaceae", "contactos"];

  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <a href="#" className="brand">
          <img className="brand-img" src="../img/logo.png" alt="" /></a>
        <nav className="nav">
          <button className="nav__toggle" aria-expanded="false" type="button">
            menu
          </button>
          <ul className="nav__wrapper">



            <li className="nav__item">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="nav__item" >
              <Link to={`/about`}>about</Link>
            </li>
            <li className="nav__item" >
              <Link to={`/productos/Polemoniaceae`}>Polemoniaceae</Link>
            </li>
            <li className="nav__item" >
              <Link to={`/productos/Rosaceae`}>Rosaceae</Link>
            </li>
            <li className="nav__item" >
              <Link to={`/contacto`}>Contacto</Link>
            </li>



          </ul>

        </nav>
        <CartWidget />
      </div>
    </header >
  )
}