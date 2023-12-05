
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
   
   
 
    const item= useLoaderData();
   
    const {_id, image, product, brand_name, category, rating, price, description } =item;
    




   
    const  handleUpdate = (event) => {
        event.preventDefault();
		const image = (event.target.image_url.value);
        event.target.image_url.value ='';
		const product = (event.target.name.value);
        event.target.name.value='';
		const brand_name = (event.target.brand_name.value);
        event.target.brand_name.value='';
		const category = (event.target.category.value);
        event.target.category.value='';
		const price = (event.target.price.value);
        event.target.price.value='';
		const rating = (event.target.rating.value);
        event.target.rating.value='';
		const description = (event.target.description.value);
        event.target.description.value='';

        const updatedProduct = {image,product,brand_name,category,rating,price,description}
     

        //update data
        fetch(`https://food-hub-server-red.vercel.app/products/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);

            if(data.modifiedCount >0 ){
                Swal.fire({
                    icon: 'success',
                    title: 'Congaratulations',
                    text: 'Product Updatedsuccesfully!',
                    
                  })
            }
        })


        
	};
  return (
    <div>
      <div className="min-h-screen bg-[#F6FBEC] py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0  bg-[#28844b]   shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-[#71ba2d]   shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl text-black">Update Product: </h1>
            </div>

            <form onSubmit={handleUpdate}>
                <div>
              <input
                className="shadow mb-4 appearance-none border rounded-full w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Image URL"
                name="image_url"
                required
                defaultValue={image}
              />

              <input
                className="shadow mb-4 appearance-none border rounded-full w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
                required
                defaultValue={product}
              />

              <input
                className="shadow mb-4 appearance-none border rounded-full w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Brand Name"
                name="brand_name"
                required
                defaultValue={brand_name}
              />

              <input
                className="shadow mb-4 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Category"
                name="category"
                required
                defaultValue={category}
              />

              <input
                className="shadow mb-4 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Price"
                name="price"
                required
                defaultValue={price}
              />

              <input
                className="shadow mb-4 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Rating"
                name="rating"
                required
                defaultValue={rating}
              />

              <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded-xl h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Short description"
                name="description"
                required
                defaultValue={description}
              ></textarea>
              </div>

              <div className="flex justify-between">
                <button type="submit" className="  bg-[#28844b] text-white hover:text-black hover:bg-[#9dd51f]   rounded-full py-2 px-4 font-semibold  ">
                  Update ➤
                </button>
                <input
                  className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer"
                  type="reset"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateProduct;