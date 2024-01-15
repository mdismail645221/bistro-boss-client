import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const {isLoading, data: cart = [], refetch} = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`);
        const data = res.json();
        return data
    },
  });

  return [cart, refetch, isLoading ]
};

export default useCart;
