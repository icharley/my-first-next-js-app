import React from "react";
import { products } from "../../product";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProductCard = ({ image, name, price, id }) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="flex flex-col justify-between ">
        <img src={image} alt="Product Image" className="" />
        <div className="mb-1 flex flex-row items-center justify-between mx-2">
          <h2 className="text-lg ">{name}</h2>
          <h2>{id}</h2>
          <HeartIcon className="h-6 w-6  text-black-500" />
        </div>
        <p className="text-gray-500 mx-2">${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
