import { useContext } from "react";
import { AuthContext } from "../../Provider/authProvider";
import Swal from "sweetalert2";

const DetailsCard = ({ item }) => {
  console.log(item);

  const { user } = useContext(AuthContext);
  console.log(user.email);
  const email = user.email;

  const {
    _id,
    image,
    product,
    brand_name,
    category,
    price,
    description,
    rating,
  } = item;

  const handleCart = () => {
    const newCart = {
      email,
      image,
      product,
      brand_name,
     category,
      rating,
      price,
      description,
    };
    console.log(newCart);

    fetch("https://food-hub-server-red.vercel.app/myCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCart),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Congaratulations",
            text: "Product added succesfully!",
          });
        }
      })
    );


  };
  console.log(_id);
  return (
    <div>
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="rounded-lg   mb-4">
                <img className=" w-full h-full" src={image} alt="" />
              </div>

              <div className="w-1/2 px-2 mx-auto">
                <button
                  onClick={handleCart}
                  className="w-full bg-[#28844b] text-white hover:text-black hover:bg-[#9dd51f] py-2 px-4 rounded-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold mb-2">
                {product}
              </h2>
              <p className="0 text-sm mb-4">
                Brand: {brand_name}
              </p>

              <div className="mr-4 mb-4">
                <span className="font-bold ">
                  Category:
                </span>
                <span className="">{category}</span>
              </div>
              <div className="mr-4 mb-4">
                <span className="font-bold ">
                  Rating:
                </span>
                <span className="">
                  {rating}
                </span>
              </div>

              <div className="mr-4 mb-4">
                <span className="font-bold ">
                  Price:
                </span>
                <span className="">
                  {price}
                </span>
              </div>

              <span className="font-bold">
                Product Description:
              </span>
              <p className=" text-sm mt-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
