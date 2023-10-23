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

    fetch("http://localhost:5000/myCart", {
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
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
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
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Brand: {brand_name}
              </p>

              <div className="mr-4 mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Category:
                </span>
                <span className="text-gray-600 dark:text-gray-300">{category}</span>
              </div>
              <div className="mr-4 mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Rating:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {rating}
                </span>
              </div>

              <div className="mr-4 mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {price}
                </span>
              </div>

              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
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
