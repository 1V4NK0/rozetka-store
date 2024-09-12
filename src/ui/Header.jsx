import { Link } from "react-router-dom";
import logo from "../../public/assets/rozetkalogo.png";
import smallLogo from "../../public/assets/rozetkaSmall.png";
import SearchBar from "./SearchBar";
import userIcon from "../../public/assets/user.png";
import cartIcon from "../../public/assets/cart.png";

function Header() {
  //logo searchBar profile cart
  return (
    <header className="fixed w-screen flex bg-green-600 px-6 gap-2 z-10 mb-8 justify-between items-center p-2">
      <Link>
        <img
          src={logo}
          alt="Large Logo"
          className="hidden md:block w-[300px] p-1"
        />
        <img
          src={smallLogo}
          alt="Small Logo"
          className="sm:block md:hidden h-[60px] hidden"
        />
      </Link>
      <SearchBar />
      <Link to="/cart">
        <img src={cartIcon} alt="" className="h-[50px] sm:block hidden hover:bg-green-500 p-2 rounded-xl transition-colors duration-200 " />
      </Link>
      <Link to="/user">
        <img src={userIcon} alt="" className="h-[50px] hover:bg-green-500 rounded-xl p-2 transition-colors duration-200 " />
      </Link>
    </header>
  );
}

export default Header;
