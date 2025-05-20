import React from "react";
import { products } from "@/product";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const page = ({ params }) => {
  const product = products.find((p) => p.id === parseInt(params.id));

  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col gap-6  items-center justify-center mx-15 mt-20">
      <img src={product.image} alt="" />
      <div>
        <h1 className="font-bold text-4xl">{product.name}</h1>
        <p>${product.price}</p>
        <p className="max-w-150 ">{product.description}</p>,
        <div className="flex flex-row  items-center justify-between mt-4">
          <div className="flex flex-row items-center gap-30">
            <FiMinus />
            <p>1</p>
            <FiPlus />
          </div>
          <button className="bg-black text-white px-8 py-4 flex flex-col">
            Add to Cart
          </button>
        </div>
        <p className="text-left mt-5 flex flex-row items-center gap-2">
          <CiHeart /> Add to wishlist
        </p>
        <div className="flex flex-row gap-4 mt-5 items-center text-4xl">
          <FaInstagram />
          <FaFacebookSquare />
          <FaTwitterSquare />
        </div>
      </div>
    </div>
  );
};

export default page;
