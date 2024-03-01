import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useCart } from "../context/cartContext";
import { useApi } from "../context/context";
import Loading from "./Loading";
import { BsFillCartXFill } from "react-icons/bs";
function CartItem() {
  const { cart, removeCart } = useCart();
  const { loading } = useApi();
  const navigate = useNavigate();

  const handleRemoveToCart = (productId) => {
    removeCart(productId);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-36 py-12 min-h-[65vh]">
          <div className="bg-black text-white font-bold w-fit h-fit  px-6 py-1 rounded-md">
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
          {cart.length > 0 ? (
            <div className=" gap-y-8 flex flex-col items-center">
              {cart.map((product) => {
                return (
                  <div key={product.id}>
                    <div className="flex flex-wrap py-12 items-center gap-y-6  h-fit justify-center gap-x-16">
                      <img className="w-44" src={product.thumbnail} />
                      <div className="md:w-1/4 space-y-2">
                        <h1 className="text-xl font-bold">{product.title}</h1>
                        <p>{product.description}</p>
                        <div className="flex justify-between items-center">
                          <h1 className="text-orange-500 text-2xl font-bold">
                            ${product.price}{" "}
                            <del className="text-xl ml-2 text-gray-400">
                              {product.discountPercentage}%
                            </del>
                          </h1>
                          <RiDeleteBin5Fill
                            onClick={() => handleRemoveToCart(product.id)}
                            className="text-orange-500 text-2xl cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-[0.5px] w-full bg-gray-500 rounded-md"></div>
                  </div>
                );
              })}
              <div className="flex items-center gap-x-16 gap-y-5 flex-wrap">
                <div className="font-bold space-y-1">
                  <h1 className="text-xl">Your Cart</h1>
                  <h1 className="text-4xl">Summary</h1>
                  <h1 className="pt-4">
                    Total items :{" "}
                    <span className="text-orange-500">{cart.length}</span>
                  </h1>
                </div>
                <div className="space-y-3">
                  <p className="text-2xl font-bold">
                    Total Amount :{" "}
                    <span className="text-orange-500">
                      ${cart.reduce((a, b) => a + b.price, 0)}
                    </span>
                  </p>
                  <button className="bg-black hover:bg-orange-500 text-white rounded-full py-2 px-12 font-bold">
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-y-6 flex-col  text-xl font-bold items-center justify-center min-h-[60vh]">
              <BsFillCartXFill className="text-7xl text-orange-500" />
              <p>No items in Cart</p>
              <Link to="/">
                <button className="bg-orange-500 text-white px-4 py-1 rounded-full">
                  Shop Now
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default CartItem;
