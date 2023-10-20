import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";


const Home = () => {
    const brand = useLoaderData();
    console.log(brand);
    return (
        <div>
            <h3 className="text-slate-600">home</h3>
            <Banner brand={brand}/>

        </div>
    );
};

export default Home;