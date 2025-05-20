import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const NewsLetter = () => {
  return (
    <>
      <div className="flex flex-row gap-y-3 items-center justify-center my-20">
        <h1 className="text-xl font-bold max-w-100 text-center">
          Subscribe and get 20% off your first purchase.
        </h1>
        <PaperAirplaneIcon className="h-20 w-20   text-black-100" />
      </div>

      <div className="my-4  max-w-4xl mx-auto ">
        <div className="w-2/3 border-b-1 flex flex-row items-center justify-between mx-auto">
          <input
            placeholder="Enter your email address"
            className="my-4   border-none outline-none"
            type="text"
          />
          <p>Submit</p>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
