import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import MeetOurTeam from "./MeetOurTeam";
import Review from "./Review";
import FAQ from "./FAQ";


const Home = () => {
    const brand = useLoaderData();
    console.log(brand);
    return (
        <div className=" max-w-6xl mx-auto" >
            
            <Banner brand={brand}/>
            <MeetOurTeam/>
            <Review/>
            <FAQ/>



        </div>
    );
};

export default Home;