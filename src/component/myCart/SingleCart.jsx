import React, { useState } from "react";
import Swal from "sweetalert2";

const SingleCart = ({ details }) => {


   
  const {
    _id,
    image,
    product,
    brand_name,
    category,
    rating,
    price,
    description,
  } = details;

  const handleDelete = () => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myCart/${_id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              window.location.reload();
            }
          });
      }
    });
  };

  return (
    <div>
      <section className="container mx-auto p-4 md:p-10 antialiased  ">
        <article className=" shadow-[#28844b]  flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
          <img
            className="w-full max-h-[400px] object-cover md:w-52"
            src={image}
            alt=""
          />
          <div className="">
            <div className="p-5 pb-10">
              <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                {product}
              </h1>
              <p className="mt-2 text-gray-600 text-sm">#{category}</p>
              <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                {description}
              </p>
            </div>
            <div className="bg-blue-50 p-5">
              <div className="sm:flex sm:justify-between">
                <div>
                  <div className="text-lg text-gray-700">Price: {price}</div>
                  <div className="flex items-center ">
                    <div className="flex items-center gap-1">
                      <div className="text-gray-600  text-sm md:text-base mt-1">
                        Rating: {rating}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleDelete}
                  className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-[#28844b] text-white  hover:text-black hover:bg-[#9dd51f] rounded-lg py-2 px-4 font-bold  md:text-lg  shadow-md"
                >
                  Delete
                </button>
              </div>
              <div className="mt-3 text-gray-600 text-sm md:text-sm">
                A product of {brand_name}
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default SingleCart;
