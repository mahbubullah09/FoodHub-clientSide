import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const MeetOurTeam = () => {
  return (
    <div>
        <div className="">
            <h1 className="text-center pl-8 pr-8 text-3xl md:text-4xl font-bold">
              Meet Our <span className="text-[#28844b]">Super Team</span>
            </h1>
            <p className="text-center max-w-3xl mx-auto mt-4 px-8 text-base ">
              FoodHub is your culinary companion, offering diverse, convenient,
              and reliable dining experiences. With a user-friendly app,
              extensive menu options, and prompt deliveries, it simplifies how
              you connect with your favorite meals. Discover new flavors or
              savor beloved classics, all at your fingertips. FoodHub: Your
              gateway to exceptional dining. Meet our super teams
            </p>
          </div>
      <div className=" lg:max-w-4xl h-fit mx-auto bg-[url('https://i.ibb.co/0ynrJPR/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg')]  text-white ">
        <div className="bg-[#313030b3]  pt-8 pb-8 my-10  ">
          
          <div className="grid  md:grid-cols-2  lg:grid-cols-4">
            <div className="card  ">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/t3F1WHy/mahbub-2.png"
                  alt="Shoes"
                  className="rounded-xl w-28"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Mahbubullah</h2>
                <p>CEO</p>
                <div className="grid grid-flow-col gap-4">
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className="card  ">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/CHWTRr7/301417030-1986425748414662-4437542033985868981-n-fotor-2023102451048.png"
                  alt="Shoes"
                  className="rounded-xl w-28"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Emon</h2>
                <p>Managing Director</p>
                <div className="grid grid-flow-col gap-4">
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className="card   ">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/Hxkyhs7/379675081-624793729843878-7058128983212561433-n-fotor-2023102451220.png"
                  alt="Shoes"
                  className="rounded-xl w-28"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Abu Taief Siddik</h2>
                <p>Fruits Expert</p>
                <div className="grid grid-flow-col gap-4">
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>

            <div className="card  ">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/Mktd5Td/340258180-1524987371359455-2552699208933899964-n-fotor-202310245120.png"
                  alt="Shoes"
                  className="rounded-xl w-28"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shopon</h2>
                <p>Food Expert</p>
                <div className="grid grid-flow-col gap-4">
                  <FaFacebook />
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
