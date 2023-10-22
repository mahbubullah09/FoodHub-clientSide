import {  useParams } from "react-router-dom";
import productsDetails from '../fakeData.json'
import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import DetailsCard from "./DetailsCard";



const ProductDetails = () => {


    const [product,SetProduct] = useState([]);

    const name = useParams();
    console.log(productsDetails);
    useEffect(() => {

        const findData = productsDetails.find((data) =>  data.Name == name.product_name )
        SetProduct(findData);
    },[name])
  
    return (
        <div>
          {
           <DetailsCard product ={product}/>
          }
        </div>
    );
};

export default ProductDetails;