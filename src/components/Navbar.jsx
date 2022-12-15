import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const hangleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-500 font-bold cursor-pointer text-4xl uppercase">
          JMedia+
        </h1>
      </Link>
      <div>
        {user?.email ? (
          <>
            <Link to="/account">
              <button className="text-white pr-4">Account</button>
            </Link>
            <button
              onClick={hangleLogOut}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">
              <button className="text-white pr-4">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
