import { Link } from "react-router-dom";


const ProductsCard = ({data}) => {

    const {id,image,Name,Brand_Name,Type,Price,Short_description,Rating} = data;
    return (
        <div>
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
       
            <img src={image}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
              <div className="flex justify-between items-center">
              <span className="text-gray-400 mr-3 uppercase text-xs">{Brand_Name}</span>
              <span className="text-gray-400 mr-3 uppercase text-xs">#{Type}</span>

              </div>
                <p className="text-lg font-bold text-black truncate block capitalize">{Name}</p>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">{Price}</p>
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rating: {Rating}</p>
                   
                   
                   
                </div>
                <div className="flex justify-between items-center">
                  <Link to={`/${Brand_Name}/${Name}`}>                  <button className="bg-[#28844b] text-white  hover:text-black hover:bg-[#9dd51f] rounded-full py-2 px-4">Details</button>
                  </Link>
                    <button className="bg-[#28844b] text-white  hover:text-black hover:bg-[#9dd51f] rounded-full py-2 px-4">Update</button>
                </div>
            </div>
      
    </div>
            
        </div>
    );
};

export default ProductsCard;