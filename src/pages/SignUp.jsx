import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email, password)
    .then(res => {
        form.reset();
        navigate('/')
    })
    .catch(err => {
        console.error(err);
    })

  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/82215b4e-5428-4a9d-8c4b-383b872250d4/BD-en-20221206-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-20 z-50">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/80 text-white rounded">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  name="email"
                  placeholder="email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  name="password"
                  placeholder="password"
                  autoComplete="current-password"
                />
                <button
                  type="submit"
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                >
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600 mr-3">
                    Already subscribed to J-Media+
                  </span>
                  <Link to="/signin">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
