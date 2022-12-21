import shoppingCart from "../../assets/img/shoppingCart.png"
import "./CartWidget.css"
export const CartWidget = () => {

    return (
        <div className="ctn-shoppingCart">
            <a href=""><img className="shoppingCart-img" src={shoppingCart} alt="shoppingCart" /></a>
            <div className="cartCount">1</div>
        </div>
    )
}
