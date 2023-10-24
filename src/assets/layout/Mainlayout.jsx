import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Mainlayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <hr></hr>
            <Outlet/>
            <Footer/>
        <Toaster/>

            
        </div>
    );
};

export default Mainlayout;