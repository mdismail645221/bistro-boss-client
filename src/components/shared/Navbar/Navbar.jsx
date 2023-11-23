import React, { useContext } from "react";
import cartIcon from '../../../assets/images/cart.png';
import logo from '../../../assets/images/logo.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {

  const {user, loading, LogOutUser} = useContext(AuthContext);

  function handleLogOut () {
    console.log("click")
    LogOutUser()
    .then(()=> {
      console.log("successfully logOut")
    })
    .catch((error)=> {
      console.log(error.message)
    })
  }

  const items = <>
    <ul className="menu menu-horizontal px-1 items-center">
      <li><a className="text-[#000] uppercase active" href="/">Home</a></li>
      <li><a className="text-[#000] uppercase " href="/contact">CONTACT US</a></li>
      <li><a className="text-[#000] uppercase " href="/deshboard">DASHBOARD</a></li>
      <li><a className="text-[#000] uppercase " href="/menu">Our Menu</a></li>
      <li><a className="text-[#000] uppercase " href="/ourShop/popular">Our Shop</a></li>
      <li><a className="text-[#000] uppercase " href="/login">Login</a></li>
      <li><a className="text-[#000] uppercase " href="/register">Register</a></li>
      <li><button onClick={()=> handleLogOut()}>LogOut</button></li>
      <li><a className="text-[#000] uppercase " href="/"><img src={cartIcon} alt={cartIcon} /></a></li>
    </ul>
  </>


  return (
<div className="navbar bg-base-100 items-center justify-between">
  <div className="">
    <a href="/">
      <img src={logo} className="w-[70px] h-[70px]" alt="logo" />
    </a>
  </div>
  <div className="flex-none">
    {items}
  </div>
</div>
  );
};

export default Navbar;
