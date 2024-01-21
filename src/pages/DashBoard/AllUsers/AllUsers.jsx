import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt, FaUserAltSlash } from "react-icons/fa";
import Loader from "../../../components/Loader";
import Swal from "sweetalert2";

const AllUsers = () => {

    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/users");
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        }
      });


      const handleMakeAdmin = (user) => {
        console.log(user?._id)
          fetch(`http://localhost:5000/users/admin/${user?._id}`, {
            method: 'PATCH'
          })
          .then(res => res.json())
          .then(data => {
            if(data.modifiedCount){
              refetch()
              Swal.fire({
                title: `${user?.email} made an Admin Now! 😍🤞`,
                icon: 'success'
              })
            }
          })
      }


      const handleDeleteCart = (user) => {
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
            fetch(`http://localhost:5000/users/${user?._id}`, {
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
      }
    
      if (isLoading) {
        return <Loader type="ballTriangle"></Loader>;
      }

    return (
        <section>
        <Helmet>
          <title>Dashboard || All Users</title>
        </Helmet>
  
        <div className="MycartDashboard-wrapper w-[80%] mx-auto py-[70px]">
          <SectionTitle
            color="#000"
            subHeading={"Hurry Up!"}
            mainHeading={"MANAGE ALL ITEMS"}
          />
          <div className="allUser_body_wrapper">
            {/* cart length count title */}
            <div className="total-mycart-length flex justify-evenly items-center">
              <div>
                <h3 className="total-mycart-title uppercase">
                  Total items:{" "}
                  {allUsers.length < 10 ? <>0{allUsers.length}</> : <>{allUsers.length}</>}
                </h3>
              </div>
              <div>
                <h3 className="total-mycart-title uppercase">
                  {/* Total Price: {total} */}
                </h3>
              </div>
              <div>
                <button className="btn btn-primary btn-md">BUY NOW</button>
              </div>
            </div>
  
            {/* cart table info body */}
  
            <div className="allUser_table_info_body_wrapper">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                        <label>#</label>
                      </th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>Role</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers.map((user, index) => (
                      <tr>
                        <th>
                          <span className="cart_index">{index + 1}</span>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <span className="allUser_name">
                                {user?.name}
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="allUser_food_name">{user?.email}</span>
                        </td>
    
                        <td>
                          <button onClick={()=> handleMakeAdmin(user)} className="allUser_edit_btn">
                            {user?.role === 'admin' ? 'admin' : <FaUserAltSlash></FaUserAltSlash>}
                          </button>
                        </td>
                        <td>
                          <button onClick={()=> handleDeleteCart(user)} className="allUser_FaTrashAlt_btn bg-error hover:bg-gray-dark p-3 text-[18px] text-[#fff]">
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

export default AllUsers;