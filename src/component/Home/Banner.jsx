import BrandCard from "./BrandCard";


const Banner = ({brand}) => {

    console.log(brand);
  return (
    <div className=" mb-[70rem] md:mb-[32rem] lg:mb-52 ">
      <div className=" relative bg-[url('https://i.ibb.co/QPtVpQq/food-and-drink-pizza-pizzas-tomato.jpg')] h-[70vh] bg-cover text-center ">
        <div className="hero-overlay bg-opacity-60 ">
          <div className="top-1/2  text-center absolute transform -translate-y-1/2  right-5 left-5">
            <h4 className="text-white text-4xl   ">
              People who love to eat are always<br></br> the best people
            </h4>
            <button className="mt-4 bg-[#28844b] py-2 px-4 rounded-full Montserrat font-semibold text-white">
              Your Cart
            </button>
          </div>
        </div>
      <div className="  my-8 static lg:my-0 lg:absolute -bottom-52 lg:-bottom-32 inset-x-14  align-middle max-w-5xl mx-auto">
          
      <div className="bg-[#9dd51f]   rounded-full align-middle pb-8   ">
        <h4 className=" text-2xl  mb-4  text-black rounded-full w-44 px-4 py-2 border-black border-solid border-b-8   grid align-middle text-center mx-auto font-bold">Our Brand</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4  lg:grid-cols-6 mx-4">
            {
                brand.map((brand) =>(
                    <BrandCard key={brand.name} brand={brand}></BrandCard>
                ))
            }

        </div>

      </div>
      </div>
      </div>

     
    </div>
  );
};

export default Banner;
