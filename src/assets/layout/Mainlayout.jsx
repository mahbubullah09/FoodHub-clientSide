import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";


const Mainlayout = () => {
    return (
        <div className=" max-w-6xl mx-auto">
            <Navbar></Navbar>
            <hr></hr>
            <Outlet/>

            
        </div>
    );
};

export default Mainlayout;