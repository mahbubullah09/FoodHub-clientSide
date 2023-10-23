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
     const [noData, setNodata] = useState(true);
     if(myCart.length > 0 ){
        setNodata(false)
     }
     console.log(noData);


    useEffect(() => {

        const finData = DB.filter((data) => data.email === email)
        setMyCart(finData);

    },[DB,email])

  
    return (
        <div>
            {
                noData ? 
                <div>
                    <h3 className=" text-4xl text-black text-center  h-[30vh] my-[15vh]">No Data Found</h3>

                </div>
                :
                myCart?.map((details) => <SingleCart key={details._id} details={details}/>)
            }
            
        </div>
    );
};

export default MyCart;