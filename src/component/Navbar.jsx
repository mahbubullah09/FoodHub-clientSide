import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  console.log(navigate);

  const navLink = (
    <div className=" gap-4 flex flex-col lg:flex-row ">
      <ul className="py-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " text-black bg-white rounded-full py-2 px-4 shadow-orange-600  "
              : "bg-[#28844b] text-white rounded-full py-2 px-4 "
          }
        >
          {" "}
          Home
        </NavLink>
      </ul>

      <ul className="py-1">
        <NavLink
          to="/addproduct"
          className={({ isActive }) =>
            isActive
              ? " text-black bg-white rounded-full py-2 px-4  "
              : "bg-[#28844b] text-white rounded-full py-2 px-4 "
          }
        >
          {" "}
          Add Product
        </NavLink>
      </ul>

      <ul className="py-1">
        <NavLink
          to="/mycart"
          className={({ isActive }) =>
            isActive
              ? " text-black bg-white rounded-full py-2 px-4  "
              : "bg-[#28844b] text-white rounded-full py-2 px-4 "
          }
        >
          {" "}
          My Cart
        </NavLink>
      </ul>

      {user ? (
        <ul className="py-1">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? " text-black bg-white rounded-full py-2 px-4  "
                : "bg-[#28844b] text-white rounded-full py-2 px-4 "
            }
          >
            Profile
          </NavLink>
        </ul>
      ) : (
        ""
      )}
    </div>
  );

  return (
    <div>
      <div className="navbar Montserrat font-semibold  max-w-6xl mx-auto  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navLink}
            </ul>
          </div>
          <img
            className="w-1/3"
            src="https://i.ibb.co/bBvd24r/Black-and-White-Monogram-Business-Logo-1-c-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex bg-[#9dd51f]  rounded-full">
          <ul className="menu menu-horizontal px-4 ">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="cursor-pointer mr-2">
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="">
                  <div className="w-10 rounded-full">
                    {user ? (
                      <img
                        className="rounded-full cursor-pointer"
                        src={user?.photoURL}
                        alt=""
                      />
                    ) : (
                      <div className=" text-4xl">
                        {" "}
                        <BsPersonCircle></BsPersonCircle>
                      </div>
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      to="/profile"
                      className={({ isActive }) =>
                        isActive
                          ? " text-black bg-white rounded-full py-2 px-4  "
                          : " "
                      }
                    >
                      Profile
                    </NavLink>
                  </li>

                  {user ? (
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    {" "}
                    <button onClick={logOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className=" text-base font-semibold hover:bg-[#9dd51f] hover:text-black bg-[#28844b] text-white  py-2 px-4 rounded-md hover:bg-blue-gray-800 ">
              <Link to={"login"}>Log In</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
