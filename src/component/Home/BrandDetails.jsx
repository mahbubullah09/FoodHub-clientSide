import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import productsDetails from '../fakeData.json'
import Slider from "./Slider";
import ProductsCard from "./ProductsCard";

const BrandDetails = () => {
   
  const { name } = useParams();
  const data = useLoaderData();
  const [cardData, setCardData] = useState();
  console.log(cardData);

  const [brand, setBrand] = useState();
  console.log(brand);

  useEffect(() => {
    const findData = data?.find((brand) => brand.name == name);
    setBrand(findData);

    const CData= productsDetails?.filter((data)=> data.Brand_Name == name )
  
    setCardData(CData);
  }, [name, data]);

  console.log(cardData);

 
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        {
           <Slider brand={brand}></Slider>
        }
      </div>
      <div className=" my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {
            cardData?.map((data)=> <ProductsCard key={data.id} data={data}></ProductsCard>)
        }
      </div>



    </div>
  );
};

export default BrandDetails;
