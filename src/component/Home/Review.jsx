const Review = () => {
  return (
    <div>
      <div className="review max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-bold  text-center mb-10">
          Clients <span className="text-[#28844b]">Review</span>
        </h2>

        <div className="review-card-cont   grid grid-cols-1 gap-6 lg:grid-cols-3 ">
          <div className="review-card text-center p-6 bg-[#e1f3b7] rounded  ">
            <img
              className="w-40 mx-auto mb-10 "
              src="https://i.ibb.co/R2FDZwj/322970802-1361659227921199-5989935501524500304-n-fotor-2023102452736.png"
              alt=""
            />
            <p className="w-52 text-black mx-auto mb-4 text-base">
              FoodHub has transformed my dining experience. The user-friendly
              interface and prompt deliveries make ordering my favorite dishes a
              breeze. It's become my go-to platform for convenient, delicious
              meals.
            </p>

            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-[#23A6F0] font-bold my-2">Mahdi</p>
            <p className="font-bold text-black">Developer</p>
          </div>
          <div className="review-card text-center p-6 bg-[#e1f3b7] rounded  ">
            <img
              className="w-40 mx-auto mb-10 "
              src="https://i.ibb.co/t800sJ2/363419763-3271725966459343-2517708948391301223-n-fotor-2023102452714.png"
              alt=""
            />
            <p className="w-52 text-black mx-auto mb-4 text-base">
              I love how FoodHub offers such a diverse menu selection. Whether
              I'm craving local cuisine or international flavors, I can find it
              all in one place. It's made exploring new dishes an exciting part
              of my routine.
            </p>

            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-[#23A6F0] font-bold my-2">KH Sohel</p>
            <p className="font-bold text-black">Engineer</p>
          </div>
          <div className="review-card text-center p-6 bg-[#e1f3b7] rounded   ">
            <img
              className="w-40 mx-auto mb-10 "
              src="https://i.ibb.co/HpdcW8v/336211037-1593651604490050-1878870614925267789-n-fotor-2023102452658.png"
              alt=""
            />
            <p className="w-52 text-black mx-auto mb-4 text-base">
              FoodHub has transformed my dining experience. The user-friendly
              interface and prompt deliveries make ordering my favorite dishes a
              breeze. It's become my go-to platform for convenient, delicious
              meals
            </p>

            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-[#23A6F0] font-bold my-2">Ibrahim</p>
            <p className="font-bold text-black">Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
