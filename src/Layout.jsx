import TopHeader from "./component/TopHeader";
import TopMenu from "./component/TopMenu";
import { Link ,Outlet} from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <TopHeader/>
        <TopMenu/>
        
        <hr />

        <Outlet/>
        
        </>
    )
}

export default Layout;