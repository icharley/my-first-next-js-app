import React from "react";
import Nav from "./components/Nav";
import ProductCategory from "./components/ProductCategory";
import ProductCardList from "./components/ProductCardList";
import ShowAll from "./components/ShowAll";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div className="mx-15">
      <Nav />
      <ProductCategory />
      <ProductCardList />
      <ShowAll />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default page;
