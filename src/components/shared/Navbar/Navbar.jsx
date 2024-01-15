import React, { useContext } from "react";
import cartIcon from "../../../assets/images/cart.png";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import swal from "sweetalert";

import { FaCartArrowDown } from "react-icons/fa6";


const Navbar = () => {
  const { user, loading, LogOutUser } = useContext(AuthContext);

  console.log({ currentUser: user });

  const handleSignOut = () => {
    LogOutUser()
      .then(() => {
        swal("successfully logout done");
      })
      .catch((error) => {
        // An error happened.

        swal("logout in internal error");
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
          <a href="/#">
            <button className="flex items-center gap-3">
              <FaCartArrowDown width="150px" />
              <div className="badge badge-secondary">+99</div>
            </button>
          </a>
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
    <div className="navbar bg-base-100 items-center justify-between">
      <div className="">
        <a to="/">
          <img src={logo} className="w-[70px] h-[70px]" alt="logo" />
        </a>
      </div>
      <div className="flex-none">{items}</div>
    </div>
  );
};

export default Navbar;
