import React from "react";
import { useApi } from "../context/context";
import Card from "./Card";
import Loading from "./Loading";
import { useSearch } from "../context/searchContext";
import { SiDatadog } from "react-icons/si";

function AllProducts() {
  const { data, loading } = useApi();
  const { searchItem } = useSearch();
  const filteredData = data.filter(
    (product) =>
      product.title.toLowerCase().includes(searchItem) ||
      product.category.toLowerCase().includes(searchItem) ||
      product.description.toLowerCase().includes(searchItem) ||
      product.brand.toLowerCase().includes(searchItem)
  );
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {filteredData.length > 0 ? (
            <div className=" py-2 pb-12 min-h-screen">
              <h1 className="text-center text-orange-500 text-3xl font-bold py-12">
                <span className="text-black">Result : </span> "{searchItem}"
              </h1>
              <div className="flex flex-wrap mx-auto justify-center gap-x-8 gap-y-8 px-12">
                {filteredData.map((product) => {
                  return (
                    <div key={product.id}>
                      <Card product={product} />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="pb-12 min-h-[70vh] gap-y-3 flex flex-col justify-center items-center">
              <SiDatadog className="text-7xl text-orange-500" />
              <p className="text-2xl font-bold ">Sorry ! No Products Found</p>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default AllProducts;
