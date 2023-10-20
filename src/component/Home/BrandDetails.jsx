import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
  const { name } = useParams();
  const data = useLoaderData();

  const [brand, setBrand] = useState();
  console.log(brand);

  useEffect(() => {
    const findData = data?.find((brand) => brand.name == name);
    setBrand(findData);
  }, [name, data]);

  console.log(data, name);
  return (
    <div>
      <div className="mx-auto px-6   lg:block max-w-6xl  relative ">
        <div className="carousel  ">
          <div
            id="slide1"
            className="carousel-item relative w-full  bg-gray-700 "
          >
            <img src={brand?.slider1} className="lg:block w-full h-[70vh] " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="text-white p-8  my-auto">
                ❮
              </a>

              <a href="#slide2" className=" text-white p-8 my-auto">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full  bg-gray-700  "
          >
            <img src={brand?.slider2} className="lg:block w-full h-[70vh] " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="text-white p-8 my-auto">
                ❮
              </a>
              <div></div>

              <a href="#slide3" className="text-white p-8 my-auto">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full  bg-gray-700"
          >
            <img src={brand?.slider3} className="lg:block w-full h-[70vh] " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="text-white p-8 my-auto">
                ❮
              </a>

              <a href="#slide1" className=" text-white p-8  my-auto">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
