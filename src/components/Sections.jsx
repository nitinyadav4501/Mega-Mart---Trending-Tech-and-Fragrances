import React from "react";
import Card from "./Card";

function Sections({ products, heading, icon }) {
 
  return (
    <div className="text-white py-10">
      <div className="flex w-fit mx-auto items-center gap-x-3 py-2">
        <h1 className="text-3xl font-bold text-orange-500">{heading}</h1>
        <i className="text-3xl text-orange-500">{icon}</i>
      </div>
      <div className="flex justify-center flex-wrap gap-6 py-4">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sections;
