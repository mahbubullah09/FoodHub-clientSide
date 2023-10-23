import {  useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import DetailsCard from "./DetailsCard";



const ProductDetails = () => {

    const  productsDetails = useLoaderData();


    const [product,SetProduct] = useState([]);

    const name = useParams();
    console.log(productsDetails);
    useEffect(() => {

        const findData = productsDetails.find((data) =>  data.product == name.product_name )
        SetProduct(findData);
    },[productsDetails,name.product_name])
  
    return (
        <div>
          {
           <DetailsCard item ={product}/>
          }
        </div>
    );
};

export default ProductDetails;