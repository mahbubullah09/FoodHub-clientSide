import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/authProvider";
import { useLoaderData } from "react-router-dom";
import SingleCart from "./SingleCart";


const MyCart = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email);
    const email = user?.email;

    const DB = useLoaderData();
    console.log(DB);

    const [myCart, setMyCart] = useState([]);
    console.log(myCart);


    useEffect(() => {

        const finData = DB.filter((data) => data.email === email)
        setMyCart(finData);

    },[DB,email])

  
    return (
        <div>
            {
                myCart?.map((details) => <SingleCart key={details._id} details={details}/>)
            }
            
        </div>
    );
};

export default MyCart;