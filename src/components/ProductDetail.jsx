import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./Card";
import { useApi } from "../context/context";
import { useCart } from "../context/cartContext";
import Loading from "./Loading";

function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const { data, loading } = useApi();
  const [relatedProduct, setRelatedProduct] = useState([]);
  useEffect(() => {
    setRelatedProduct(
      data.filter((e) => e.category === state.product.category)
    );
  }, [data]);
  const { addToCart, removeCart, cart } = useCart();

  const IsProductAvailable = cart.some((item) => item.id === state.product.id);

  const handleAddToCart = () => {
    if (IsProductAvailable) {
      removeCart(state.product.id);
    } else {
      addToCart(state.product);
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-36 mainDiv py-12  min-h-screen">
          <div className="bg-black text-white font-bold w-fit  px-6 py-1 rounded-md">
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
          <div className="px-32 mainDiv gap-y-10 py-12 responsive items-center flex gap-x-10 justify-between">
            <div className="w-1/2">
              <img
                className="w-80 h-full"
                src={state.product.thumbnail}
                alt=""
              />
            </div>
            <div className="space-y-4 w-1/2">
              <h1 className="text-xl font-bold">{state.product.title}</h1>
              <p>{state.product.description}</p>
              <h1 className="text-2xl font-bold text-orange-500">
                ${state.product.price}
                <del className="text-xs mx-2 text-gray-500">
                  {state.product.discountPercentage}%
                </del>
              </h1>
              <p className="font-bold text-xl">
                {state.product.discountPercentage}% off
              </p>
              <div className="flex gap-x-5">
                <div className="bg-black text-white  border-2 border-black font-bold hover:border-orange-500 hover:bg-orange-500 px-6 py-2 rounded-full">
                  <button>Buy Now</button>
                </div>
                <div className="border-2 border-black font-bold px-6 py-2 hover:bg-gray-400 hover:text-black rounded-full">
                  <button onClick={handleAddToCart}>
                    {IsProductAvailable ? "Remove" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center text-orange-500 text-3xl font-bold py-12">
              Related Products
            </h1>
            <div className="flex flex-wrap mx-auto justify-center gap-x-8 gap-y-8 px-12">
              {relatedProduct.map((product) => {
                return (
                  <div key={product.id}>
                    <Card product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
