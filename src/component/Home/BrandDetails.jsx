
import { useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {

    const {name}  = useParams();
    const data= useLoaderData();

    console.log(data,name);
    return (
        <div>
            <h3>{name}</h3>
            
        </div>
    );
};

export default BrandDetails;