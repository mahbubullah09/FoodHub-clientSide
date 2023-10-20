import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";


const Mainlayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <hr></hr>
            <Outlet/>
            <Footer/>

            
        </div>
    );
};

export default Mainlayout;