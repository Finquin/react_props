import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <header class="site-header">
      <div class="wrapper site-header__wrapper">
        <a href="#" class="brand">BooksStore</a>
        <nav class="nav">
          <button class="nav__toggle" aria-expanded="false" type="button">
            menu
          </button>
          <ul class="nav__wrapper">
            <li class="nav__item"><a href="#">Home</a></li>
            <li class="nav__item"><a href="#">About</a></li>
            <li class="nav__item"><a href="#">Productos</a></li>
            <li class="nav__item"><a href="#">Contact</a></li>
          </ul>

        </nav>
        <CartWidget />
      </div>
    </header>
  )
}