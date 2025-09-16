import { Link, Outlet } from "react-router-dom";


const AdminDashBoard=()=>{
    return(
        <>
          
           <div id="adminheader">
              <h1> Welcome To Admin DashBoard </h1>
           </div>
           <div id="adminwrapper">
              <div id="leftmenu"> 
                   
               <Link to="addproduct" className="adminmenu">  Upload Product </Link>
               <br /><br /> 
                <Link to="orderproduct" className="adminmenu1">  Order Details </Link>   

              </div>
              <div id="admindata">
                 <Outlet/>

              </div>

           </div>
        
        </>
    )
}

export default AdminDashBoard;