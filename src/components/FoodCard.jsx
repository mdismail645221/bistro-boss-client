import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { useContext } from "react";
import useCart from "../hooks/useCart";

const FoodCard = ({ product }) => {
  const { image, name, price, recipe, _id } = product;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = useCart()


  const handleAddToCart = (item) => {
    if (user && user?.email) {
      const menuItems = {
        menuItemId: _id,
        name,
        price,
        recipe,
        email: user?.email,
        image
      };
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          'athorization': menuItems.email,
        },
        body: JSON.stringify(menuItems),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "দয়া করে লগ ইন করুন । তারপর কার্টে যোগ করুন",
        text: "দয়া করে লগ ইন করুন । তারপর কার্টে যোগ করুন",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OKAY",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <Link to="#" className="card  bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="block text-ellipsis whitespace-nowrap overflow-hidden">
          {name}
        </h2>
        <p>
          Price :<span className="text-lg">{price}</span>
        </p>
        <p className="hidden md:block">
          {recipe.length > 5 ? `${product.recipe.slice(0, 30)}...` : recipe}
        </p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(product)}
            className="btn bg-yellow"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
