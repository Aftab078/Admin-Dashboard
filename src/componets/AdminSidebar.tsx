 import {Link, Location, useLocation, useNavigate } from "react-router-dom";
 import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
 import {AiFillFileText} from 'react-icons/ai';
 import {IoIosPeople} from "react-icons/io";
 const AdminSidebar = () => {
    const location = useLocation()
   return ( 
    <aside> 
  <h2>Logo.</h2>  
  <div>
    <h5>Dashboard</h5>
    <ul>
      <li style={
        {
        backgroundColor:location.pathname.includes("/admin/dashboard")
         ?"rgba(0,115,225,0.1)"
         :"white",
      }
      }>
        <Link to={"/admin/dashboard"} style={ {
          color:location.pathname.includes("/admin/dashboard") ? 
          "rgb(0,115,255)":"black",
        }
        }>
        <RiDashboardFill />
       Dashboard
        </Link> 
        </li>
        <li>
        <Link to={"/admin/product"}>
        <RiShoppingBag3Fill />
         Product
        </Link> 
        </li>
        <li>
        <Link to={"/admin/customer"}>
        <IoIosPeople />
         customer 
        </Link> 
        </li>
        <li>
        <Link to={"/admin/trascation"}>
        <li />
        transcation
        </Link> 
        </li>
    </ul>
  </div>
   </aside>
   );
 };
 interface LiProps{
  url: string;
  text: string;
  location: Location,
  Icon:IconType

 }
 const Li = () =>(
  <li style={
    {
    backgroundColor:location.pathname.includes("/admin/dashboard")
     ?"rgba(0,115,225,0.1)"
     :"white",
  }
  }>
    <Link to={"/admin/dashboard"} style={ {
      color:location.pathname.includes("/admin/dashboard") ? 
      "rgb(0,115,255)":"black",
    }}

    >
 )
 
 export default AdminSidebar;