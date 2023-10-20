import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";


const Home = () => {
    const brand = useLoaderData();
    console.log(brand);
    return (
        <div className=" max-w-6xl mx-auto">
            <h3 className="text-slate-600">home</h3>
            <Banner brand={brand}/>

        </div>
    );
};

export default Home;