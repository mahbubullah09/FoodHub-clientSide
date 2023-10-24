import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
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
      <div className="navbar Montserrat font-semibold  max-w-6xl mx-auto ">
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
          <div className="mr-4">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleTheme} />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user?.email ? (
            <div className="cursor-pointer mr-2 flex gap-2">
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

                  <li>
                    <a>{user?.displayName}</a>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  className=" text-base font-semibold hover:bg-[#9dd51f] hover:text-black bg-[#28844b] text-white  py-2 px-4 rounded-md hover:bg-blue-gray-800"
                  onClick={logOut}
                >
                  Logout
                </button>
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
