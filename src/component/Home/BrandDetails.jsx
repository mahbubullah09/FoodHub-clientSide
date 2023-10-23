import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import Slider from "./Slider";
import ProductsCard from "./ProductsCard";

const BrandDetails = () => {
   
  const { name } = useParams();
  const data = useLoaderData();
  const [cardData, setCardData] = useState([]);
  console.log(cardData);

  const [products,setProducts] = useState([]);
console.log(products);

  const [brand, setBrand] = useState();
  console.log(brand);

  useEffect(() => {
fetch('http://localhost:5000/products')
.then(res => res.json())
.then(data => setProducts(data))

    const findData = data?.find((brand) => brand.name == name);
    setBrand(findData);

    const CData= products?.filter((data)=> data.brand_name == name )
    console.log(CData);
  
    setCardData(CData);
  }, [name, data,products]);

  console.log(cardData);

 
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        {
           <Slider brand={brand}></Slider>
        }
      </div>
      { cardData.length>0?
      
      <div className=" my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
       
       {
         cardData?.map((data)=> <ProductsCard key={data.id} data={data}></ProductsCard>)
        
       }
      
       
       
      </div>
      :
      <div>
          <h3 className=" text-4xl text-black text-center  font-bold my-[15vh]">
            'No Data Found for {name}'
          </h3>
        </div>
      }



    </div>
  );
};

export default BrandDetails;
