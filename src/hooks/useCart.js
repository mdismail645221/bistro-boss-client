import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();


  const {isLoading, data: cart = [], refetch} = useQuery({
    queryKey: ["cart", user?.email],
    // queryFn: async () => {
    //     const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`, {
    //       headers: {
    //         // 'content-type': 'application/json',
    //         'authorization': `beare ${localStorage.getItem('access-token')}`
    //       }
    //     });
    //     const data = res.json();
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user?.email}`)
      console.log('axios date', res)
        return res.data
    },
  });

  return [cart, refetch, isLoading ]
};

export default useCart;
