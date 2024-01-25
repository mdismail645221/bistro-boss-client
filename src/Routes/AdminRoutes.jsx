import { useLocation, Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({children}) => {
   const {user, loading} = useAuth(); 
   const [isAdmin, isAdminLoading] = useAdmin();
   const location = useLocation();

   if(loading || isAdminLoading){
    return <Loader type="ballTriangle"></Loader>
   }

   if(user && isAdmin){
    return children
   }

   return  <Navigate to='/login' state={{from: location}} replace></Navigate>



};

export default AdminRoutes;