import React from "react";
import { products } from "../../product";
import Logo from "./Logo";

const Nav = () => {
  return (
    <div className="my-7 ">
      <p className="my-6 text-center text-md border-b-1 border-black-100 pb-2 max-w">
        Free Delivery on orders over $120. Don't miss discount
      </p>
      <div className="mx-15 flex gap-4 items-center justify-between flex-col sm:flex-row">
        <div className="flex gap-4 justify-between items-center flex-col sm:flex-row text-xl">
          <h6>Home</h6>
          <h6>Shop</h6>
          <h6>About</h6>
        </div>
        <Logo />
        <div className="flex gap-4 items-center flex-col sm:flex-row text-xl">
          <img src={products.icon} alt="icon" />
          <h6>Favourites</h6>
          <h6>Cart</h6>
        </div>
      </div>
    </div>
  );
};

export default Nav;
