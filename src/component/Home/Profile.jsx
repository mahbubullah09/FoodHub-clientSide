import { useContext } from "react";
import { AuthContext } from "../../Provider/authProvider";


const Profile = () => {

    const {user} = useContext(AuthContext);
   
    return (
        <div className="mx-2">
           

           <div className=" py-10 relative flex w-full  md:w-[28rem]  flex-col rounded-xl  mx-auto h-full ] my-[10vh] bg-blue-gray-50 bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0  w-full md:w-2/5  mx-auto shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={user?.photoURL}
            alt="image"
            className="h-full w-full object-cover "
          />
        </div>
        <div className="p-6 text-sm md:text-base">
          <h2 className="card-title">{user.displayName}</h2>
          <p>Email: {user?.email}</p>
          <p>Create Account: {user?.metadata.creationTime}</p>
          <p>Last Log in: {user?.metadata.lastSignInTime}</p>
          <p className="flex">Verified: {user?.emailVerified? <h2>Yes</h2>
          : <h2>No</h2>
          }</p>
         
        </div>
            
        </div>

        </div>
    );
};

export default Profile;