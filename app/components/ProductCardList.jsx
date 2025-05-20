import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../product";

// const ProductCardList = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-y-4 space-x-7">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="flex flex-col items-center justify-center"
//         >
//           <ProductCard
//             // image={product.image}
//             // name={product.name}
//             // icon={product.icon}
//             // price={product.price}
//             //or
//             {...product} // Spread operator to pass all product properties as props makes the code cleaner instead of passing each prop separately (destructuring)
//             // This is a shorthand way to pass all properties of the product object as props to the ProductCard component
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCardList;

// import React from 'react'

const ProductCardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4 lg:gap-7">
      {products.map((product) => {
        const isSpecial = product.id === 2 || product.id === 10;

        const cardClasses = isSpecial
          ? "col-span-2 row-span-2"
          : "col-span-1 row-span-1 p-0 m-0";

        return (
          <div
            key={product.id}
            className={`flex flex-col justify-center ${cardClasses}`}
          >
            <ProductCard {...product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductCardList;
