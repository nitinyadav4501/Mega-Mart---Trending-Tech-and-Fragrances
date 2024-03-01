import React from "react";
import { useApi } from "../context/context";
import Card from "./Card";
import Loading from "./Loading";

function AllProducts() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const { data, loading } = useApi();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className=" pb-12 min-h-screen">
            <h1 className="text-center text-orange-500 text-3xl font-bold py-12">
              All Products
            </h1>
            <div className="flex flex-wrap mx-auto justify-center gap-x-8 gap-y-8 px-12">
              {data.map((product) => {
                return (
                  <div key={product.id}>
                    <Card product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AllProducts;
