import React from "react";
import SavedShow from "../components/SavedShow";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[440px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/82215b4e-5428-4a9d-8c4b-383b872250d4/BD-en-20221206-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[440px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
        <SavedShow />
      </div>
    </>
  );
};

export default Account;
