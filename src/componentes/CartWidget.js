import 'bootstrap/dist/css/bootstrap.min.css';
import cartIcon from 'bootstrap-icons/icons/handbag-fill.svg'
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

const CartWidget = () => {
    const { quantityCart} = useCart()

    return (
    /* Fragment */
        <>
        <Link to='/cart'>
        <img className='imagenCarrito' src={cartIcon} alt="imagen carrito"></img>
        </Link> 
        <span  className= "numberCarrito translate-middle badge rounded-pill bg-danger">
            {quantityCart()}
            <span className="visually-hidden">unread messages</span>
        </span>
        
        </>
  /*Cierro Fragment */
    );
}

export default CartWidget;


/**<Link to='/cart'>
        <img className='imagenCarrito' src={cartIcon} alt="imagen carrito"></img>
        </Link> */