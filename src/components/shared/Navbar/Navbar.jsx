import React from "react";
import cartIcon from '../../../assets/images/cart.png'

const Navbar = () => {


  const items = <>
    <ul className="menu menu-horizontal px-1 items-center">
      <li><a href="/">Home</a></li>
      <li><a href="/contact">CONTACT US</a></li>
      <li><a href="/deshboard">DASHBOARD</a></li>
      <li><a href="/ourMenu">Our Menu</a></li>
      <li><a href="/ourShop">Our Shop</a></li>
      <li><a href="/"><img src={cartIcon} alt={cartIcon} /></a></li>
    </ul>
  </>


  return (
    <header>
      <nav>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">
              BRISSTRO BOSS <br/>
              RESTURANT 
            </a>
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
