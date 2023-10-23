import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/authProvider";
import { useLoaderData } from "react-router-dom";
import SingleCart from "./SingleCart";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  const email = user?.email;

  const DB = useLoaderData();
  console.log(DB);

  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    const finData = DB.filter((data) => data.email === email);
    setMyCart(finData);
  }, [DB, email]);

  return (
    <div>
      {myCart.length > 0 ? (
        myCart?.map((details) => (
          <SingleCart key={details._id} details={details} />
        ))
      ) : (
        <div>
          <h3 className=" text-4xl font-bold text-black text-center  h-[30vh] my-[15vh]">
            No Data Found
          </h3>
        </div>
      )}
    </div>
  );
};

export default MyCart;
