import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <hr></hr>
            <Outlet/>

            
        </div>
    );
};

export default Mainlayout;