import React from "react";
import cartIcon from '../../../assets/images/cart.png';
import logo from '../../../assets/images/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {


  const items = <>
    <ul className="menu menu-horizontal px-1 items-center">
      <li><a className="text-[#fff] uppercase active" href="/">Home</a></li>
      <li><a className="text-[#fff] uppercase " href="/contact">CONTACT US</a></li>
      <li><a className="text-[#fff] uppercase " href="/deshboard">DASHBOARD</a></li>
      <li><a className="text-[#fff] uppercase " href="/ourMenu">Our Menu</a></li>
      <li><a className="text-[#fff] uppercase " href="/ourShop">Our Shop</a></li>
      <li><a className="text-[#fff] uppercase " href="/"><img src={cartIcon} alt={cartIcon} /></a></li>
    </ul>
  </>


  return (
    <header>
      <nav>
        <div className="navbar bg-[#000]">
          <div className="flex-1">
            
             <Link to="/"> <img style={{width: "120px", height: "100px"}} src={logo} alt="logo" /></Link>
            
          </div>
          <div className="flex-none">
            {/* <ul className="menu menu-horizontal px-1">
              <li>
                <a>Link</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul> */}
            {items}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
