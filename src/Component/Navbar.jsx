import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const Navbar = () => {
  return (
    <nav className="primary-nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/productListingPage" className="nav-link">
        Products
      </Link>
      <Link to="/productDetailsPage" className="nav-link">
        shop Mens
      </Link>
      {/* <Link to="/categories" className="nav-link">
        Categories
      </Link> */}
      <Link to="/profile" className="nav-link">
        Profile
      </Link>
      <Link to="/contact" className="log-in">
        <PersonOutlineIcon />
      </Link>
      <Link to="/cart" className="cart-Icon">
        <ShoppingBagIcon />
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/protected" className="nav-link">
        
      </Link>

    </nav>
  );
};

export default Navbar;
