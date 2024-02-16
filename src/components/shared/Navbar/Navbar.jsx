import cartIcon from "../../../assets/images/cart.png";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import { FaCartArrowDown } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";


const Navbar = () => {

  const { user, loading, LogOutUser } = useAuth()
  const [cart, refetch, isLoading] = useCart()

  refetch()

  const handleSignOut = () => {
    LogOutUser()
      .then(() => {
        swal({
          title:  "Logout Successfully done",
          icon: 'success'
        });
      })
      .catch((error) => {
        // An error happened.
        swal({
          title: `${error?.message}`,
          icon: 'warning'
        });
      });
  };

  const items = (
    <>
      <ul className="menu menu-horizontal px-1 items-center">
        <li>
          <Link className="text-[#000] uppercase active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-[#000] uppercase " to="/contact">
            CONTACT US
          </Link>
        </li>
        <li>
          <Link className="text-[#000] uppercase " to="/deshboard">
            DASHBOARD
          </Link>
        </li>
        <li>
          <Link className="text-[#000] uppercase " to="/menu">
            Our Menu
          </Link>
        </li>
        <li>
          <Link className="text-[#000] uppercase " to="/ourShop/popular">
            Our Shop
          </Link>
        </li>

        {user ? (
          <li>
            <button onClick={handleSignOut}>LogOut</button>
          </li>
        ) : (
          <>
            <li>
              <Link className="text-[#000] uppercase " to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="text-[#000] uppercase " to="/register">
                Register
              </Link>
            </li>
          </>
        )}

        <li>
          <Link to='/deshboard/myCart'>
            <button className="flex items-center gap-3">
              <FaCartArrowDown width="150px" />
              <div className="badge badge-secondary">+{cart?.length}</div>
            </button>
          </Link>
        </li>

        <li>
          <a className="text-[#000] uppercase " to="/">
            <img src={cartIcon} alt={cartIcon} />
          </a>
        </li>
      </ul>
    </>
  );


  return (
    <header className="navbar bg-base-100 items-center justify-between z-50">
      <div className="">
        <a to="/">
          <img src={logo} className="w-[70px] h-[70px]" alt="logo" />
        </a>
      </div>
      <div className="flex-none">{items}</div>
    </header>
  );
};

export default Navbar;
