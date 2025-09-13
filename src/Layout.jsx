import TopHeader from "./component/TopHeader";
import TopMenu from "./component/TopMenu";
import { Link ,Outlet} from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <div id="Nevbar">
        <TopHeader/>
        <TopMenu/>
        </div>
        
        <hr />

        <Outlet/>
        
        </>
    )
}

export default Layout;