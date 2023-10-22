const DetailsCard = ({ product }) => {
  console.log(product);

  const {
    id,
    image,
    Name,
    Brand_Name,
    Type,
    Price,
    Short_description,
    Rating,
  } = product;
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
                <button className="w-full bg-[#28844b] text-white hover:text-black hover:bg-[#9dd51f] py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {Name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Brand: {Brand_Name}
              </p>
              
                <div className="mr-4 mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                   Category:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {Type}
                  </span>
                </div>
                <div className="mr-4 mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                   Rating:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {Rating}
                  </span>
                </div>
                
                <div className="mr-4 mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {Price}
                  </span>
                </div>
           

          
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {Short_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default DetailsCard;
