import { Helmet } from "react-helmet";
import useCart from "../../hooks/useCart";
import SectionTitle from "../../components/SectionTitle";
import "./style/MyCart.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // let lastPathName = location.pathname.split("/");
  // console.log(lastPathName[1]);
  // console.log({myCartFrom : cart})
  const total = cart.reduce(
    (previusValuePrice, currentValuePrice) =>
      currentValuePrice.price + previusValuePrice,
    0
  );
  // console.log({totalPrice: total})

  const handleDeleteCart = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${item?._id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount > 0){
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
      }
    });
  };

  return (
    <section>
      <Helmet>
        <title>Dashboard | My Cart</title>
      </Helmet>

      <div className="MycartDashboard-wrapper w-[80%] mx-auto py-[70px]">
        <SectionTitle
          color="#000"
          subHeading={"Hurry Up!"}
          mainHeading={"MANAGE ALL ITEMS"}
        />
        <div className="mycart_body_wrapper">
          {/* cart length count title */}
          <div className="total-mycart-length flex justify-evenly items-center">
            <div>
              <h3 className="total-mycart-title uppercase">
                Total items:{" "}
                {cart.length < 10 ? <>0{cart.length}</> : <>{cart.length}</>}
              </h3>
            </div>
            <div>
              <h3 className="total-mycart-title uppercase">
                Total Price: {total}
              </h3>
            </div>
            <div>
              <button className="btn btn-primary btn-md">BUY NOW</button>
            </div>
          </div>

          {/* cart table info body */}

          <div className="mycart_table_info_body_wrapper">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>#</label>
                    </th>
                    <th>ITEM IMAGE</th>
                    <th>ITEM NAME</th>
                    <th>PRICE</th>
                    <th>EDIT</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr>
                      <th>
                        <span className="cart_index">{index + 1}</span>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item?.image} alt={item?.name} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="mycart_food_name">{item?.name}</span>
                      </td>
                      <td>
                        <span className="mycart_price text-end">
                          {item?.price}
                        </span>
                      </td>
                      <td>
                        <button className="mycart_edit_btn">
                          <FaEdit />
                        </button>
                      </td>
                      <td>
                        <button onClick={()=> handleDeleteCart(item)} className="mycart_FaTrashAlt_btn bg-error hover:bg-gray-dark p-3 text-[18px] text-[#fff]">
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
