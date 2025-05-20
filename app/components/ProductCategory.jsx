import React from "react";
import categoryList from "../../productCategoryList";

const ProductCategory = () => {
  return (
    <div className="my-6 mx-15 flex gap-4 items-center justify-between flex-col sm:flex-row">
      {categoryList.map((category, index) => (
        <div
          key={index}
          className="flex gap-4 items-center justify-between flex-col sm:flex-row"
        >
          <button className="bg-amber-50 py-4 md:px-1 lg:px-5 text-xl text-black-300 hover:text-white hover:bg-black border border-transparent rounded-sm transition-colors flex items-center justify-center h-14 sm:h-12 px-4 sm:px-5 sm:w-auto">
            <a href=""> {category}</a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
