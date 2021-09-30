import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">
                <img className="logo" src="AKREP.png" alt=""/>
            </Link>
            <Link to="/cart">
                <img className="cart" src="shopping-cart.svg" alt=""/>
            </Link>
        </div>
    );

}

export default Navbar;